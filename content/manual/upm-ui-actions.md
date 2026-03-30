This version of Unity is unsupported.

Package management with the Package Manager window

Install a feature set from the Unity registry

# Add and remove UPM packages or feature sets

You can perform a variety of package management tasks by using the Package Manager window.

Follow these tasks to manage **UPM packages**A **Package** managed by the **Unity Package Manager**. Refer to **Packages**.
See in [Glossary](Glossary.html#UPMpackage) or **feature sets**A feature set is a collection of related packages that you can use to achieve specific results in the Unity Editor. You can manage feature sets directly in Unity’s Package Manager. [More info](FeatureSets.html)
See in [Glossary](Glossary.html#Featureset). For information about managing **asset packages**A collection of files and data from Unity projects, or elements of projects, which are compressed and stored in one file, similar to Zip files, with the `.unitypackage` extension. Asset packages are a handy way of sharing and re-using Unity projects and collections of assets. [More info](AssetPackages.html)
See in [Glossary](Glossary.html#Assetpackage), refer to [Add and remove asset packages](upm-ui-actions-ap.html).

- [Install a feature set from the Unity registry](fs-install.html)

- [Install a UPM package from a registry](upm-ui-install.html)

- [Install a UPM package from Asset Store](upm-ui-install2.html)

- [Install a UPM package from a local folder](upm-ui-local.html)

- [Install a UPM package from a local tarball file](upm-ui-tarball.html)

- [Install a UPM package from a Git URL](upm-ui-giturl.html)

- [Install a UPM package from a registry by name](upm-ui-quick.html)

- [Remove a UPM package from a project](upm-ui-remove.html)

- [Switch to another version of a UPM package](upm-ui-update.html)

The procedures described in these sections obscure a lot of the details of what the Package Manager is actually doing behind the scenes. The Package Manager window provides a visual interface to install and uninstall packages. The Package Manager installs and uninstalls packages by adding and removing packages as project dependencies in your [project’s manifest](upm-manifestPrj.html). When it adds a package, it selects the correct version to install. The version that Package Manager selects doesn’t always match the version you indicated. For more information, refer to [Package dependency and resolution](upm-dependencies.html).

## Additional resources

- [Package types](upm-package-types.html)

- [Add and remove asset packages](upm-ui-actions-ap.html)

- [Disable a built-in package](upm-ui-disable.html)

- [Perform an action on multiple packages or feature sets](upm-ui-multi.html)

Package management with the Package Manager window

Install a feature set from the Unity registry
