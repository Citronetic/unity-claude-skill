This version of Unity is unsupported.

Access package assets using scripts

Project manifest file

# Package management with the project manifest file

The **project manifest**Each Unity project has a *project manifest*, which acts as an entry point for the Package Manager. This file must be available in the `<project>/Packages` directory. The Package Manager uses it to configure many things, including a list of dependencies for that project, as well as any package repository to query for packages. [More info](upm-manifestPrj.html)
See in [Glossary](Glossary.html#Projectmanifest) file stores information that the Package Manager needs to locate and load the right packages, including a list of packages and versions declared as dependencies.

| Topic | Description |
| --- | --- |
| Project manifest file | Learn the properties of the file that the Package Manager reads to compute a list of packages to retrieve and load for a project. |

## Additional resources

- [Package management with the Package Manager window](managing-packages-window.html)

- [Package management with the scripting API](managing-packages-api.html)

Access package assets using scripts

Project manifest file
