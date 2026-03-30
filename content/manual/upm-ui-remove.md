This version of Unity is unsupported.

Switch to another version of a UPM package

Add and remove asset packages

# Remove a UPM package from a project

When you “remove” a **UPM package**A **Package** managed by the **Unity Package Manager**. Refer to **Packages**.
See in [Glossary](Glossary.html#UPMpackage) from your project, the Package Manager is actually removing the project’s **direct dependency**A **direct** dependency occurs when your project “requests” a specific package version. To create a direct dependency, you add that package and version to the **dependencies** property in your project manifest (expressed in the form `package_name@package_version`). [More info](upm-dependencies.html)
See in [Glossary](Glossary.html#Directdependency) from your [project manifest](upm-manifestPrj.html)Each Unity project has a *project manifest*, which acts as an entry point for the Package Manager. This file must be available in the `<project>/Packages` directory. The Package Manager uses it to configure many things, including a list of dependencies for that project, as well as any package repository to query for packages. [More info](upm-manifestPrj.html)
See in [Glossary](Glossary.html#Projectmanifest). The result of removing the direct dependency varies, based on the dependencies for the package you are removing:

- If there are no other packages or **feature sets**A feature set is a collection of related packages that you can use to achieve specific results in the Unity Editor. You can manage feature sets directly in Unity’s Package Manager. [More info](FeatureSets.html)
See in [Glossary](Glossary.html#Featureset) that have a dependency on this package, any Editor or runtime functionality that it implemented is no longer available in your project. For more information about direct and **indirect dependencies**An **indirect**, or transitive dependency occurs when your project requests a package which itself “depends on” another package. For example, if your project depends on the `alembic@1.0.7` package which in turn depends on the `timeline@1.0.0` package, then your project has an direct dependency on Alembic and an indirect dependency on Timeline. [More info](upm-dependencies.html)
See in [Glossary](Glossary.html#Indirectdependency), refer to [Package dependency and resolution](upm-dependencies.html).

- If another installed package or an installed feature set depends on the package you are trying to remove, this procedure removes only the dependency from your project manifest. The package itself and all its functionality is still installed in your project, and appears in the [list panel](upm-ui-list.html) with the dependency icon [Image: Dependency icon].

## Before you begin

Make sure you understand these important notes before you begin:

- Use this procedure to remove a package only if you added it to the current project by *installing* it, such as (but not limited to) [Install a feature set](fs-install.html), [Install a UPM package from a registry](upm-ui-install.html), [Install a UPM package from Asset Store](upm-ui-install2.html), and installing custom packages. Don’t use this procedure to try to:

- Remove **asset packages**A collection of files and data from Unity projects, or elements of projects, which are compressed and stored in one file, similar to Zip files, with the `.unitypackage` extension. Asset packages are a handy way of sharing and re-using Unity projects and collections of assets. [More info](AssetPackages.html)
See in [Glossary](Glossary.html#Assetpackage) that you *downloaded* *and* *imported* to your project. For information about removing asset packages that you downloaded and imported, refer to [Remove imported assets from a project](upm-ui-remove-asset.html).

- Remove local asset packages that you *imported* to your project. For information about removing local asset packages that you imported, refer to [Removing local asset packages](upm-ui-remove-local.html).

- If you use this procedure to remove a UPM package that you [installed from a registry](upm-ui-install.html) or [installed from the Asset Store](upm-ui-install2.html), the operation removes the package from the current project. It doesn’t remove the same package that might exist in other projects. It also doesn’t remove the package from the global cache; this action isn’t supported by the Package Manager, and manually manipulating the global cache is discouraged.

- If you use this procedure to remove a package that you [embedded in your project](upm-concepts.html#Embedded), the Package Manager deletes the entire package folder from your computer. However, removing packages installed from any other source (including [local](upm-concepts.html#Local) packages) removes only the reference to the package in the manifest but leaves the package itself and its contents intact.

## Procedure

To remove an installed package:

1. Open the **Package Manager** window and select **In Project** from the [navigation panel](upm-ui-nav.html).

2. Select the package you want to remove from the [list of packages](upm-ui-list.html). The [details panel](upm-ui-details.html) now displays that package’s information.

3. Click **Remove**.

If this button isn’t displayed, you might be viewing the **My Assets** list. Refer to [Before you begin](#prereqs).

If this button is disabled, you can’t remove this package. Hover over the button to find out why you can’t remove the package. For more information, refer to [Locked and non-removable packages](#noremovals).

When the progress bar finishes, the package disappears from the list.

4. If you want to restore a removed UPM package, follow the instructions to [install a UPM package from a registry](upm-ui-install.html) or [install a UPM package from the Asset Store](upm-ui-install2.html).

**Note**: You can remove multiple packages with one click by using the multiple select feature. For more information, refer to [Perform an action on multiple packages or feature sets](upm-ui-multi.html).

## Locked and non-removable packages

You can remove packages only if they’re not required by another package or a feature set. The Package Manager enforces this by disabling the **Remove** button for all required packages.

| Required by | Description |
| --- | --- |
| A feature set | If a feature set requires the package, it displays a lock icon in both the list panel and in the details panel. The details panel also displays the name of the feature set that requires the package below the lock icon in the details panel. However, even if you click the Unlock button, you still can’t remove the package from your project until you remove all feature sets that require it. Unlocking the package lets you request a different version for your project, but it still doesn’t let you remove it. |
| Another package | If one or more packages require the selected package, the Remove button is disabled. You can find the name of the package that has the dependency from the Dependencies tab in the details panel. If you don’t need the other packages, you can remove them and the Package Manager automatically removes this package too. |

**Note**: You can unlock multiple packages with one click by using the multiple select feature. For more information, refer to [Perform an action on multiple packages or feature sets](upm-ui-multi.html).

## Additional resources

- [Package types](upm-package-types.html)

- [Add and remove UPM packages or feature sets](upm-ui-actions.html)

- [Add and remove asset packages](upm-ui-actions-ap.html)

Switch to another version of a UPM package

Add and remove asset packages
