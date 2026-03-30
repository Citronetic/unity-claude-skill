This version of Unity is unsupported.

Package layout

Create samples for packages

# Add tests to a package

As with any kind of development, it’s good practice to add tests to your package. There are three things you must do to set up tests on your package:

1. Create the C# test files and [put them under the Tests folder](#location).

2. Create [asmdef files for your tests](#files).

3. [Enable tests](#tests) for your package.

## Location of test files

You can add your test files to the Tests folder of your package in the `Editor` and `Runtime` subfolders. For example, a simple package with tests might look something like this:

```plain
<package-root>
  ├── package.json
  ├── Editor
  │     ├── <company-name>.<package-name>.Editor.asmdef
  │     └── EditorExample.cs
  ├── Runtime
  │     ├── <company-name>.<package-name>.asmdef
  │     └── RuntimeExample.cs
  └── Tests
        ├── Editor
        │    ├── <company-name>.<package-name>.Editor.Tests.asmdef
        │    └── EditorExampleTest.cs
        └── Runtime
             ├── <company-name>.<package-name>.Tests.asmdef
             └── RuntimeExampleTest.cs
```

Each of those subfolders must contain an `.asmdef` file, which provides references to the Editor and Runtime assemblies. The assembly definition files also provide a reference to the test assembly files. For more information, refer to [Assembly definition files for tests](#files).

## Assembly definition files for tests

Use the [Test Framework](https://docs.unity3d.com/Packages/com.unity.test-framework@latest/)The Test Framework package (formerly called the Test Runner) is a Unity tool that tests your code in both Edit mode and Play mode, and also on target platforms such as Standalone, Android, or iOS. [More info](https://docs.unity3d.com/Packages/com.unity.test-framework@latest)
See in [Glossary](Glossary.html#TestFramework) package to create or edit your assembly definition files. For more information, refer to [Creating test assemblies](https://docs.unity3d.com/Packages/com.unity.test-framework@latest/index.html?subfolder=/manual/workflow-create-test-assembly.html).

Although you can choose to edit assembly definition files directly, you need to make sure to add the following references:

| Attribute | Type | Description |
| --- | --- | --- |
| name | String | The name of the assembly without the file extension. |
| references | Array of Strings | References to the Editor and Runtime assemblies. Assembly definition files require different references, depending on the test type: - For Editor tests, add a reference to the package’s Editor and Runtime assemblies. - For Runtime tests, add a reference to the package’s Runtime assembly only. |
| optionalUnityReferences | Array of Strings | This list of Unity references must include "TestAssemblies" to mark the assembly as a test assembly. This adds references to the nunit.framework.dll and UnityEngine.TestRunner.dll libraries to the Assembly Definition. |
| includePlatforms | Array of Strings | For the Editor test, this list of platforms must include the "Editor" platform. |

**Tip**: You can also edit the assembly definition files in the **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector). Refer to [Assembly Definitions](assembly-definition-files.html) for more information.

### Editor file example

The editor test `.asmdef` file looks like this:

```json
{
  "name": "MyCompany.MyPackage.Editor.Tests",
  "references": [
    "MyPackage.Editor",
    "MyPackage"
  ],
  "optionalUnityReferences": [
    "TestAssemblies"
  ],
  "includePlatforms": [
    "Editor"
  ],
  "excludePlatforms": []
}
```

### Runtime file example

The runtime test `.asmdef` file looks like this:

```json
{
  "name": "MyCompany.MyPackage.Tests",
  "references": [
    "MyPackage"
  ],
  "optionalUnityReferences": [
    "TestAssemblies"
  ],
  "includePlatforms": [],
  "excludePlatforms": []
}
```

## Enabling tests for a package

For **embedded packages**An *embedded* package is a mutable package that you store under the `Packages` directory at the root of a Unity project. This differs from most packages which you download from a package server and are immutable. [More info](upm-concepts.html#Embedded)
See in [Glossary](Glossary.html#Embeddedpackage), you don’t need to explicitly enable tests because embedded packages are in development.

However, for other types of dependencies, you need to add the [testables](upm-manifestPrj.html#testables) attribute to the **Project manifest**Each Unity project has a *project manifest*, which acts as an entry point for the Package Manager. This file must be available in the `<project>/Packages` directory. The Package Manager uses it to configure many things, including a list of dependencies for that project, as well as any package repository to query for packages. [More info](upm-manifestPrj.html)
See in [Glossary](Glossary.html#Projectmanifest) and add the names of packages that have tests you want to run. That includes direct and **indirect dependencies**An **indirect**, or transitive dependency occurs when your project requests a package which itself “depends on” another package. For example, if your project depends on the `alembic@1.0.7` package which in turn depends on the `timeline@1.0.0` package, then your project has an direct dependency on Alembic and an indirect dependency on Timeline. [More info](upm-dependencies.html)
See in [Glossary](Glossary.html#Indirectdependency) of the Project. For example:

```json
{
  "dependencies": {
    "com.unity.some-package": "1.0.0",
    "com.unity.other-package": "2.0.0",
    "com.unity.yet-another-package": "3.0.0"
  },
  "testables": ["com.unity.some-package", "com.unity.other-package"]
}
```

This example adds tests for the **com.unity.*some-package*** and **com.unity.*other-package*** packages in Unity’s [Test Framework](https://docs.unity3d.com/Packages/com.unity.test-framework@latest) package.

**Note**: You might need to import the package again, because the test framework doesn’t always immediately pick up changes to the `testables` attribute.

Package layout

Create samples for packages
