This version of Unity is unsupported.

Get started with packages

How Unity works with packages

# Introduction to packages

This section explains many of the concepts surrounding the Unity Package Manager functionality:

- [Introduction to packages](#introduction-to-packages)

- [Versions](#versions)

- [Manifests](#manifests)There are two types of manifest files: **project manifest****s** and **package manifest****s**.
See in [Glossary](Glossary.html#Manifest)

- [Registry](#registry)

- [Package management](#package-management)

- [Package sources](#package-sources)

- [Additional resources](#additional-resources)

## Versions

Multiple versions of each package are available, marking changes to that package along its lifecycle. Every time a developer updates the package, they [give it a new version number](upm-semver.html). A change in package version tells you whether it contains a breaking change (major), new backward-compatible functionality (minor), or bug fixes only (patch). These indicators follow [Semantic Versioning](http://semver.org/) rules.

To view the list of versions available for a specific package, refer to [Find a specific version of a package](upm-ui-find-ver.html).

## Manifests

There are two types of manifest files:

- [Project manifests](upm-manifestPrj.html)Each Unity project has a *project manifest*, which acts as an entry point for the Package Manager. This file must be available in the `<project>/Packages` directory. The Package Manager uses it to configure many things, including a list of dependencies for that project, as well as any package repository to query for packages. [More info](upm-manifestPrj.html)
See in [Glossary](Glossary.html#Projectmanifest) (`manifest.json`) store information that the Package Manager needs to locate and load the right packages, including a list of packages and versions declared as dependencies.

- [Package manifests](upm-manifestPkg.html)Each package has a *manifest*, which provides information about the package to the Package Manager. The manifest contains information such as the name of the package, its version, a description for users, dependencies on other packages (if any), and other details. [More info](upm-manifestPkg.html)
See in [Glossary](Glossary.html#Packagemanifest) (`package.json`) store information about a specific package, and a list of packages and versions that the package requires.

Both files use [JSON](https://json.org) (JavaScript Object Notation) syntax.

## Registry

In the domain of Unity’s Package Manager, a package registry is a server that stores package contents and information (metadata) on each package version. Unity maintains a central registry of official packages that are available for distribution. By default, all projects use the official Unity package registry. But you can [add additional registries](upm-scoped.html) to store and distribute private packages or stage custom packages while you are developing them.

## Package management

The Unity Package Manager is a tool that manages the entire package system. Its primary tasks include the following:

- It [communicates with the Unity package registry server](upm-dependencies.html) and any [additional registries](upm-scoped.html) you specify.

- It reads your [project manifest](upm-manifestPrj.html) and fetches package contents and metadata.

- It [installs](upm-ui-install.html), [updates](upm-ui-update.html), and [removes](upm-ui-remove.html) **UPM packages**A **Package** managed by the **Unity Package Manager**. Refer to **Packages**.
See in [Glossary](Glossary.html#UPMpackage), whether they’re dependencies of the project or one of the installed packages.

- It [downloads and imports asset packages](upm-ui-import.html) that you previously acquired from the **Asset Store**A growing library of free and commercial assets created by Unity and members of the community. Offers a wide variety of assets, from textures, models and animations to whole project examples, tutorials and Editor extensions. [More info](AssetStore.html)
See in [Glossary](Glossary.html#AssetStore).

- It [enables and disables](upm-ui-disable.html) Unity’s built-in packages.

- It [displays information](upm-ui-details.html) about every version of every package.

- It [resolves conflicts](upm-conflicts.html) when the project and its packages require more than one package version.

The Unity Package Manager installs samples, tools, and assets on a per-project basis, rather than installing them across all projects for a specific machine or device. It uses a [global cache](upm-cache.html) to store downloaded package metadata and contents. Once installed in a project, Unity treats [package assets](upm-assets.html) similarly to other assets in the project. The only difference is that these assets are stored [inside the package folder](upm-assets.html) and are **immutable**You cannot change the contents of an immutable (read-only) package. This is the opposite of **mutable**. Most packages are immutable, including packages downloaded from the package registry or by Git URL.
See in [Glossary](Glossary.html#Immutable). You can permanently change content only from [Local](#Local) and [Embedded](#Embedded) package sources.

## Package sources

Sources describe where the package came from:

| Source | Description |
| --- | --- |
| Registry | The Unity Package Manager downloads most packages from a package registry server into a global cache on your computer as you request them. These packages are immutable, so you can use them in your project, but you can’t modify them or change their package manifests. |
| Built-in | These packages allow you to enable or disable Unity features (for example, Terrain Physics, Animation, etc.). Built-in packages are immutable. For more information, refer to Built-in packagesBuilt-in packages allow users to toggle Unity features on or off through the Package Manager. Enabling or disabling a package reduces the run-time build size. For example, most projects don’t use the legacy Particle System. By removing the abstracted package of this feature, the related code and resources are not part of the final built product. Typically, these packages contain only the package manifest and are bundled with Unity (rather than available on the package registry).See in Glossary. |
| Embedded | An embedded packageAn embedded package is a mutable package that you store under the Packages directory at the root of a Unity project. This differs from most packages which you download from a package server and are immutable. More infoSee in Glossary is any package stored inside your project folder. This source corresponds with the Custom state because you typically put all the scripts, libraries, samples, and other assets your new package needs in a folder under your project folder when you begin development on a custom package. |
| Local | You can install a package from any folder on your computer (for example, if you have cloned a development repository locally). |
| Tarball (local) | You can install a package from a tarball file on your computer. The Package Manager extracts the package from the tarball and stores it in the cache. However, these packages are immutable, unlike installations from a local folder. |
| Git | The Package Manager installs Git-based packages directly from a Git repository instead of from the package registry server. |

To edit the package manifest for a package, refer to [Inspecting packages](upm-inspect.html).

The Package Manager window displays a label that corresponds to some of these sources. For more information, refer to [Labels](upm-ui-details.html#Tags).

**Note**: The Package Manager stores packages that you download from the Asset Store in different caches, depending on the package type.

## Additional resources

- [Package types](upm-package-types.html)

- [Package states and lifecycle](upm-lifecycle.html)

- [Package dependency and resolution](upm-dependencies.html)

- [Global cache](upm-cache.html)

- [Asset Store packages](AssetStorePackages.html)

Get started with packages

How Unity works with packages
