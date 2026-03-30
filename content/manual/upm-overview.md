This version of Unity is unsupported.

Introduction to packages

Differences between package types

# How Unity works with packages

When Unity opens a Project, the Unity Package Manager reads the [Project manifest](upm-manifestPrj.html)Each Unity project has a *project manifest*, which acts as an entry point for the Package Manager. This file must be available in the `<project>/Packages` directory. The Package Manager uses it to configure many things, including a list of dependencies for that project, as well as any package repository to query for packages. [More info](upm-manifestPrj.html)
See in [Glossary](Glossary.html#Projectmanifest) (**1**) to figure out what packages to load in the Project. Then it sends a request (**2**) to the [package registry server](upm-concepts.html#Registry) (**3**) for each package that appears as a dependency in the manifest. The package registry then sends the requested information and data back to the Package Manager (**4**), which then installs those packages (**5**) in the Project. Each Project has its own manifest which lists the packages to load as “dependencies” of the Project.

[Image: How the Unity Package Manager installs packages]
How the Unity Package Manager installs packages

Adding a package to a project requires an update to the project manifest, to ensure the Package Manager includes the package in the list of dependencies. Although you can modify the project manifest directly, it’s safer and easier to work with the [Package Manager window](upm-ui.html), which manages the project manifest modifications for you.

## Additional resources

- [Get started with packages](Packages.html)

- [Introduction to packages](upm-concepts.html)

Introduction to packages

Differences between package types
