This version of Unity is unsupported.

How Unity works with packages

Package states and lifecycle

# Differences between package types

Unity’s Package Manager supports two package types:

- **UPM packages**A **Package** managed by the **Unity Package Manager**. Refer to **Packages**.
See in [Glossary](Glossary.html#UPMpackage) (Unity Package Manager built-in format).

- **Asset packages**A collection of files and data from Unity projects, or elements of projects, which are compressed and stored in one file, similar to Zip files, with the `.unitypackage` extension. Asset packages are a handy way of sharing and re-using Unity projects and collections of assets. [More info](AssetPackages.html)
See in [Glossary](Glossary.html#Assetpackage) (`.unitypackage` format).

The following table compares the differentiating characteristics of these package types:

| Characteristic | UPM packages | Asset packages |
| --- | --- | --- |
| Format | Collection of files and folders, which might be compressed, depending on the distribution method. | A compressed file with a .unitypackage extension. |
| Primary source for the package | Unity registry, scoped registry, or Asset StoreA growing library of free and commercial assets created by Unity and members of the community. Offers a wide variety of assets, from textures, models and animations to whole project examples, tutorials and Editor extensions. More infoSee in Glossary. | Asset Store |
| Typical contents | ScriptsA piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. More infoSee in Glossary, tools, utilities, and SDKs. | Art and media assets (such as models, textures, animations, audio.) |
| Supports package dependencies | Yes | No |
| Supports version switching in the Editor | Yes | No |
| Uses a package manifestEach package has a manifest, which provides information about the package to the Package Manager. The manifest contains information such as the name of the package, its version, a description for users, dependencies on other packages (if any), and other details. More infoSee in Glossary file | Yes | No |
| UI action for adding the package to a project | Install | Download and import |
| Folder structure | Standardized | Free-form |
| Project folder the package is added to | Packages | Assets |
| Cache the package is added to | Global cache | Asset package cache. Refer to Location of downloaded asset package files. |
| You can manually remove the package from the cache | No | Yes |
| Sets of tabs that appear in the Details panel | Description, Version History, Dependencies, Samples (if provided), Images (if provided) | Overview, Releases, Imported Assets, Images |

## Guidelines for package creators

If you’re creating a package, follow these guidelines to help you determine which format to choose:

- Use UPM when you need **version control**A system for managing file changes. You can use Unity in conjunction with most common version control tools, including Perforce, Git, Mercurial and PlasticSCM. [More info](VersionControl.html)
See in [Glossary](Glossary.html#VersionControl), dependency management, or plan to share or maintain the package across multiple projects. The UPM format is more suited for code and reusable elements.

- Use Asset package (`.unitypackage`) for one-time imports of art assets such as (but not limited to) models, textures, animations, and audio. This format is also appropriate for informal package sharing, rather than distributing in a registry (scoped or otherwise).

## Additional resources

- [Add and remove UPM packages or feature sets](upm-ui-actions.html)

- [Add and remove asset packages](upm-ui-actions-ap.html)

- [Create UPM packages](CustomPackages.html)

- [Create asset packages](AssetPackagesCreate.html)

How Unity works with packages

Package states and lifecycle
