This version of Unity is unsupported.

Name your package

Add tests to a package

# Package layout

This is the package layout recommended for custom packages:

```plain
<package-root>
  ├── package.json
  ├── README.md
  ├── CHANGELOG.md
  ├── LICENSE.md
  ├── Third Party Notices.md
  ├── Editor
  │   ├── <company-name>.<package-name>.Editor.asmdef
  │   └── EditorExample.cs
  ├── Runtime
  │   ├── <company-name>.<package-name>.asmdef
  │   └── RuntimeExample.cs
  ├── Tests
  │   ├── Editor
  │   │   ├── <company-name>.<package-name>.Editor.Tests.asmdef
  │   │   └── EditorExampleTest.cs
  │   └── Runtime
  │        ├── <company-name>.<package-name>.Tests.asmdef
  │        └── RuntimeExampleTest.cs
  ├── Samples~
  │        ├── SampleFolder1
  │        ├── SampleFolder2
  │        └── ...
  └── Documentation~
       └── <package-name>.md
```

Many official Unity packages also implement this structure.

| Location | Description |
| --- | --- |
| package.json | The package manifestEach package has a manifest, which provides information about the package to the Package Manager. The manifest contains information such as the name of the package, its version, a description for users, dependencies on other packages (if any), and other details. More infoSee in Glossary, which defines the package dependencies and other metadata. |
| README.md | Developer package documentation. This is generally documentation to help developers who want to change the package or push a new change on the package’s main branch. |
| CHANGELOG.md | Description of package changes in reverse chronological order. It’s good practice to use a standard format, like Keep a Changelog. |
| LICENSE.md | Contains the package license text. Usually the Package Manager copies the text from the selected SPDX list website. |
| Third Party Notices.md | Contains information that’s required to meet legal requirements. |
| Editor/ | Editor platform-specific Assets folder. Unlike Editor folders under Assets, this is only a convention and doesn’t affect the Asset import pipeline. Refer to Assembly definition and packages to properly configure Editor-specific assemblies in this folder. |
| Runtime/ | Runtime platform-specific Assets folder. This is only a convention and doesn’t affect the Asset import pipeline. Refer to Assembly definition and packages to properly configure runtime assemblies in this folder. |
| Tests/ | Folder to store any tests included in the package. |
| Tests/Editor/ | Editor platform specific tests folder. Refer to Assembly definition and packages to properly configure Editor-specific test assemblies in this folder. |
| Tests/Runtime/ | Runtime platform specific tests. Refer to Assembly definition and packages to properly configure runtime test assemblies in this folder. |
| Samples~/ | Folder to store any samples included in the package. |
| Documentation~ | Folder to store any documentation included in the package. |

Unity ignores the contents of any folder name that ends with the `~` character, and doesn’t track them with `.meta` files. However, you need to include `.meta` files for the `Editor`, `Runtime`, and `Tests` folders and their contents in order for them to work properly. For more information on `.meta` files and how Unity uses them for tracking, refer to [Asset workflow](AssetWorkflow.html).

Name your package

Add tests to a package
