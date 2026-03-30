This version of Unity is unsupported.

Install a feature set from the Unity registry

Install a UPM package from the Asset Store

# Install a UPM package from a registry

**Note**: When you install a **UPM package**A **Package** managed by the **Unity Package Manager**. Refer to **Packages**.
See in [Glossary](Glossary.html#UPMpackage) using Package Manager, the Package Manager evaluates other packages and their dependencies to determine if there are version conflicts with the version you selected. If it detects any conflicts or restrictions, it installs the version that resolves these issues. For more information, refer to [Package dependency and resolution](upm-dependencies.html).

Use the same process for installing a package from either the Unity registry or any [scoped registry](upm-scoped.html) defined in your project.

1. Open the **Package Manager** window and select **Unity Registry** from the [navigation panel](upm-ui-nav.html). If you set up a [scoped registry](upm-scoped.html) and you want to install a package from a scoped registry, choose **My Registries** instead.

**Note**: If you haven’t defined any scoped registries for this project, **My Registries** doesn’t appear in the navigation panel.

[Image: Select Unity Registry or My Registries]
Select **Unity Registry** or **My Registries**

2. Select the package you want to install from the [list of packages](upm-ui-list.html). The package information appears in the [details panel](upm-ui-details.html).

**Note:** If the Package Manager doesn’t list the package you want to install in the list of packages, it might be an undiscoverable package, such as an [experimental](pack-exp.html) or [pre-release](pack-preview.html) package. The Package Manager doesn’t display experimental packages unless they’re already installed, but pre-release packages appear in the Package Manager when you enable the [Show Pre-release Package Versions](class-PackageManager.html#advanced_preview) project setting.

3. Optional: If multiple versions are available, select the version to install. For more information on available versions, refer to [Find a specific version of a package](upm-ui-find-ver.html).

4. Click **Install**.

[Image: Install button in the corner of the details panel]

When the progress bar finishes, the new package is ready to use.

**Note**: You can install multiple packages with one click by using the multiple select feature. For more information, refer to [Perform an action on multiple packages or feature sets](upm-ui-multi.html).

## Additional resources

- [Package types](upm-package-types.html)

- [Install a UPM package from Asset Store](upm-ui-install2.html)

- [Download and import an asset package](upm-ui-import.html)

Install a feature set from the Unity registry

Install a UPM package from the Asset Store
