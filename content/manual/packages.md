This version of Unity is unsupported.

Packages and package management

Introduction to packages

# Get started with packages

A *package* is a container that stores various types of features or assets, such as:

- Editor tools and libraries, such as a text editor, an animation viewer, or test frameworks.

- Runtime tools and libraries, such as the Physics API or a Graphics pipeline.

- Asset collections, such as Textures or animations.

- Project templates to share common project types with others.

Packages deliver a wide range of enhancements to Unity through the Package Manager. To help find and use these packages, the Package Manager window provides collections of packages that you can use together, called *feature sets*.

In the Editor, you can access the [Package Manager window](upm-ui.html) through this menu: **Window** > **Package Management** > **Package Manager**.

The Package Manager also supports management of packages you download or import from the Unity **Asset Store**A growing library of free and commercial assets created by Unity and members of the community. Offers a wide variety of assets, from textures, models and animations to whole project examples, tutorials and Editor extensions. [More info](AssetStore.html)
See in [Glossary](Glossary.html#AssetStore).

Unity provides three Package Manager interfaces: Package Manager window, scripting API, and manifest files. The following table contains introductions to each interface, and more.

| Topic | Description |
| --- | --- |
| Introduction to packages | Learn the principles and features of the Package Manager, including concepts like versions, manifests, registries, states, sources, the package lifecycle, and dependency and resolution. |
| How Unity works with packages | Get an overview of Unity’s Package Manager. |
| Differences between package types | Learn about the differences between the two package formats that Unity supports. |
| Package states and lifecycle | Learn about the states a package passes through during its lifecycle. |

## Additional resources

- [Asset Store packages](AssetStorePackages.html)

- [Embedded packages](upm-concepts.html#Embedded)An *embedded* package is a mutable package that you store under the `Packages` directory at the root of a Unity project. This differs from most packages which you download from a package server and are immutable. [More info](upm-concepts.html#Embedded)
See in [Glossary](Glossary.html#Embeddedpackage)

- [Local packages](upm-concepts.html#Local)A *local* package already exists on the file system, usually outside the project folder. To install the package, notify the Package Manager of its location through the **Packages** window. [More info](upm-ui-local.html)
See in [Glossary](Glossary.html#Localpackage)

- [Package manifest](upm-manifestPkg.html)Each package has a *manifest*, which provides information about the package to the Package Manager. The manifest contains information such as the name of the package, its version, a description for users, dependencies on other packages (if any), and other details. [More info](upm-manifestPkg.html)
See in [Glossary](Glossary.html#Packagemanifest)

Packages and package management

Introduction to packages
