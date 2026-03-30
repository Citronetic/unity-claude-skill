This version of Unity is unsupported.

Install a UPM package by name

Remove a UPM package from a project

# Switch to another version of a UPM package

Use the information on this page to update **UPM packages**A **Package** managed by the **Unity Package Manager**. Refer to **Packages**.
See in [Glossary](Glossary.html#UPMpackage) that you installed from the [Unity Registry](upm-ui-install.html) or a [scoped registry](upm-scoped.html), or from a [local source](upm-ui-local.html). The information on this page also applies to packages you [installed from the Asset Store](upm-ui-install2.html), if they’re in the UPM format.

You can also use the information on this page to switch to a registry version of a package, if your project currently uses a nonregistry version of the same package. Nonregistry versions include packages installed from disk (local) or from Git or as a tarball.

If you want to install a specific version of a package, refer to [install the package by name](upm-ui-quick.html) and follow its optional step to specify a version.

If you want to update packages that you installed from a Git URL, you can use any of the following methods:

- Locate the package in the **Package Manager** window, select it, then click the **Update** button.

- [Reinstall the package as a Git dependency](upm-ui-giturl.html) using a new revision. For more information about how to specify revisions with **Git dependencies**The Package Manager retrieves Git dependencies from a Git repository directly rather than from a package registry. Git dependencies use a Git URL reference instead of a version, and there’s no guarantee about the package quality, stability, validity, or even whether the version stated in its `package.json` file respects Semantic Versioning rules with regards to officially published releases of this package. [More info](upm-concepts.html#Git)
See in [Glossary](Glossary.html#Gitdependency), refer to [Targeting a specific revision](upm-git.html#revision).

- Reinstall the package from the Unity Registry.

To change to a different version of a UPM package:

1. Open the **Package Manager** window and select **In Project**, **Unity Registry**, or **My Registries** from the [navigation panel](upm-ui-nav.html). You can also select the **Updates** entry, which lists all packages in your project that have updates available. An arrow icon appears next to packages that have updates available.

2. Select the installed package you want to update from the [list of packages](upm-ui-list.html). The package information appears in the [details panel](upm-ui-details.html).

3. If the package is part of a **feature set**A feature set is a collection of related packages that you can use to achieve specific results in the Unity Editor. You can manage feature sets directly in Unity’s Package Manager. [More info](FeatureSets.html)
See in [Glossary](Glossary.html#Featureset) (indicated by the lock icon near the package name) you must unlock the package before you switch versions. To unlock the package and select another version, select **Unlock**. Starting with Unity 6.3, **Unlock** is in the **Manage** dropdown.

**Note**: The package is temporarily unlocked. If you select a different context in the [navigation panel](upm-ui-nav.html), or close either the **Package Manager** window or the Unity Editor, the package reverts to a locked state. However, if you change versions when the package is unlocked (for example, with the [Install a package from a registry by name](upm-ui-quick.html) method), the package stays unlocked.

4. Select a package in the [list of packages](upm-ui-list.html).

5. In the [details panel](upm-ui-details.html), select the **Version History** tab. If multiple versions are available, expand the entries to view information specific to each version.

6. Click the **Update to #.#** button, or click the **Update** button beside the version listed in the **Version History** tab.

When the progress bar finishes, any new functionality is immediately available.

**Notes:**

- If you switch from a nonregistry version of a package to a registry version, the Package Manager removes the nonregistry version from its version history, but the **local package**A *local* package already exists on the file system, usually outside the project folder. To install the package, notify the Package Manager of its location through the **Packages** window. [More info](upm-ui-local.html)
See in [Glossary](Glossary.html#Localpackage) still exists on disk, with any customization intact.

- If you switch to an older version of a package, you might have to run the [API Updater](APIUpdater.html) on the package contents.

- You can switch versions for multiple packages with one click by using the multiple select feature. For more information, refer to [Perform an action on multiple packages or feature sets](upm-ui-multi.html).

## Additional resources

- [Package types](upm-package-types.html)

- [Add and remove UPM packages or feature sets](upm-ui-actions.html)

Install a UPM package by name

Remove a UPM package from a project
