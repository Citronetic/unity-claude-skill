This version of Unity is unsupported.

Navigation panel reference

Sort the package list

# List panel reference

The Package Manager window displays the list of feature sets, packages, or **Asset Store**A growing library of free and commercial assets created by Unity and members of the community. Offers a wide variety of assets, from textures, models and animations to whole project examples, tutorials and Editor extensions. [More info](AssetStore.html)
See in [Glossary](Glossary.html#AssetStore) packages that meet your criteria.

You set the criteria by selecting a context in the [navigation panel](upm-ui-nav.html), and by optionally setting additional filter and search criteria.

For important information about the way search works, refer to [Search box](upm-ui-search.html).

[Image: The image on the left displays features sets and packages installed in your project, and the image on the right displays packages from My Assets]
The image on the left displays features sets and packages installed in your project, and the image on the right displays packages from **My Assets**

**(A)** [Feature sets](FeatureSets.html)A feature set is a collection of related packages that you can use to achieve specific results in the Unity Editor. You can manage feature sets directly in Unity’s Package Manager. [More info](FeatureSets.html)
See in [Glossary](Glossary.html#Featureset) appear at the top of the list panel when you select the **Unity Registry** or **In Project** contexts. Feature sets are indicated with the feature set icon ([Image: Icon showing layers of items]). Toggle the expander icon ([Image: Right-pointing triangle]) to expand or collapse ([Image: Down-pointing triangle]) the list of feature sets. When you select a feature set from the list, [details about it appear on the right](fs-details.html). These details include a brief description, a list of included packages, and a link to the **QuickStart** guide for that feature set.

**(B)** Asset Store packages appear in the **In Project** list for all packages you added to your project from the **My Assets** list.

**(C)** Registry groups organize the list of packages installed in your project or available for installation. The list has separate groups for packages that come from Unity’s registry and other scoped registries you installed in your project. Select the expander on the left to expand ([Image: Right-pointing triangle]) or collapse ([Image: Down-pointing triangle]) the list of packages for each registry.

**(D)** The installed or imported version of the package. If the package isn’t installed or imported yet, the listed version varies by package format:

- For **UPM packages**A **Package** managed by the **Unity Package Manager**. Refer to **Packages**.
See in [Glossary](Glossary.html#UPMpackage), the list view displays the recommended version. If a recommended version doesn’t exist, the list view displays the latest version.

- For **asset packages**A collection of files and data from Unity projects, or elements of projects, which are compressed and stored in one file, similar to Zip files, with the `.unitypackage` extension. Asset packages are a handy way of sharing and re-using Unity projects and collections of assets. [More info](AssetPackages.html)
See in [Glossary](Glossary.html#Assetpackage) (`.unitypackage` format), the list view displays the latest of version of the package, unless you downloaded the package but didn’t import it, in which case the downloaded version displays.

The following icons appear beside the version number for packages whose [state](upm-lifecycle.html) isn’t [Released](pack-safe.html):

- [Image: Pre-release icon] [Pre-release](pack-preview.html)

- [Image: Experimental icon] [Experimental](pack-exp.html)

- [Image: Custom icon] [Custom](upm-concepts.html#Embedded) (embedded)

For packages from the Asset Store, the version that appears is either the version you already downloaded or the version that’s available for download from the Asset Store.

**(E)** These icons display the status of the package:

| Icon | Description |
| --- | --- |
|  | A check mark indicates that the package or feature set is already installed, enabled, or imported. |
|  | The update icon indicates that the package has an available update. To update your package, follow the appropriate instructions based on the package type:- For Unity Package Manager (UPM) packages, refer to Switch to another version of a UPM package. - For asset packages, refer to Update an asset package.- You can’t update feature set versions because they’re fixed to the Editor version. |
|  | The lock icon indicates a package that’s installed as part of a feature set. |
|  | The link icon indicates a package that’s installed as a dependency. |
|  | The import icon indicates that there’s an asset package available to import. |
|  | The download icon indicates that there’s an asset package available to download. |
|  | A warning icon indicates an issue with the package, such as lifecycle deprecation. |
|  | An error icon indicates package version deprecation or an issue that occurred during installation or loading. For information about resolving errors, refer to Package Manager troubleshooting. |

**(F)** The **My Assets** context displays a counter showing the number of packages from the Asset Store that are available but not shown in the list. To load more packages from the Asset Store , click the **Load** link.

**Note**: If you select the **My Assets** context but the Package Manager window doesn’t list any packages, refer to [Error messages in the Package Manager window](upm-errors.html#Errors) for an explanation and solution.

**(G)** The [status bar](upm-ui.html#StatusBar) displays messages about the package load status and network warnings.

**(H)** Click the **reload** [Image: Reload button] button to force the Package Manager to reload your packages and feature sets.

By default, the Package Manager window displays the list of all packages and feature sets available in the selected context, but you can [filter](upm-ui-find.html) the list to display packages and feature sets that meet your criteria.

You can also [include pre-release packages](class-PackageManager.html#advanced_preview) in the list and [search](upm-ui-search.html) for a specific package or feature set by [name (ID)](upm-manifestPkg.html#name) or [display name](upm-manifestPkg.html#displayName).

## Additional resources

- [Package types](upm-package-types.html)

Navigation panel reference

Sort the package list
