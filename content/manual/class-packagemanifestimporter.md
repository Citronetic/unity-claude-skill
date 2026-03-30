This version of Unity is unsupported.

Package inspection

Inspect packages

# Package Manifest window reference

The **Package Manifest**Each package has a *manifest*, which provides information about the package to the Package Manager. The manifest contains information such as the name of the package, its version, a description for users, dependencies on other packages (if any), and other details. [More info](upm-manifestPkg.html)
See in [Glossary](Glossary.html#Packagemanifest) window opens when you select the package manifest file (`package.json`) in a `Packages` subfolder in the **Project** window.

[Image: The Package Manifest window for the Cinemachine package. From top to bottom, the window displays the package name and controls (A), package information (B), a brief description (C), and a list of dependencies (D). ]
The Package Manifest window for the Cinemachine package. From top to bottom, the window displays the package name and controls (A), package information (B), a brief description (C), and a list of dependencies (D).

**(A)** Select **Open** to load this package manifest in your default code editor, such as Visual Studio. Select **View in Package Manager** to open the Package Manager window and load this package in its [details panel](upm-ui-details.html). If you want to choose a different importer, select the **Importer** drop-down menu and select the package importer you want to use.

**(B)** The [Information](#Info) section has details about this specific package version.

**(C)** Use the **Brief Description** text box to specify the text that you want to appear in the [details panel](upm-ui-details.html) of the Package Manager window. For more information, refer to the documentation for the [description](upm-manifestPkg.html#description) property.

**(D)** Use the [Dependencies](#Depend) section to manage the list of packages that this package depends on.

**(E)** Select **Revert** to discard any changes you’ve made to the manifest. Select **Apply** to save any changes you’ve made to the manifest.

## Information section

| Property | Description |
| --- | --- |
| Name | The official name for this package. For Unity packages, this is the short name (the official name without the com.unity. string at the beginning.) |
| Organization name | The identifier of the Unity Organization that created this package. |
| Display name | The user-facing name on display in the Project windowA window that shows the contents of your Assets folder (Project tab) More infoSee in Glossary and the Package Manager window. For more information, refer to the documentation for the displayName property. |
| Version | The package version number. For more information, refer to the documentation for the version property. |
| Minimal Unity version | Enable this option to specify the lowest Unity version this package is compatible with. When you enable this option, the Major, Minor, and Release properties appear. If this package is compatible with all Unity versions, clear this checkbox and remove the Major, Minor, and Release properties. For more information, refer to the documentation for the unity property. |
| Major | Specify the MAJOR portion of the minimal Unity version. For more information, refer to the documentation for the unity property. |
| Minor | Specify the MINOR portion of the minimal Unity version. For more information, refer to the documentation for the unity property. |
| Release | Specify the UPDATE and RELEASE portion of the minimal Unity version. For more information, refer to the documentation for the unityRelease property. |

## Dependencies section

Lists the other packages that are dependencies for this package. Each entry consists of the official package name (for example, `com.unity.probuilder`) and its version number.

To add a new dependency:

1. Select the **Add** (**+**) button. A new row appears in the list.

2. Enter the package name on the left and the version on the right. For more information, refer to the documentation for the [dependencies](upm-manifestPkg.html#dependencies) property.

To remove a dependency:

1. Click the selector [Image: Selector] to the left of the package you want to remove.

2. Select the **Remove** (**−**) button. The row disappears from the list.

Package inspection

Inspect packages
