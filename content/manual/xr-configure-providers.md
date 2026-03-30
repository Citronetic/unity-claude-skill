This version of Unity is unsupported.

XR project set up

Create an XR project

# Choose and configure XR provider plug-ins

Use the **XR**An umbrella term encompassing Virtual Reality (VR), Augmented Reality (AR) and Mixed Reality (MR) applications. Devices supporting these forms of interactive applications can be referred to as XR devices. [More info](XR.html)
See in [Glossary](Glossary.html#XR) **Plug-in**A set of code created outside of Unity that creates functionality in Unity. There are two kinds of plug-ins you can use in Unity: Managed plug-ins (managed .NET assemblies created with tools like Visual Studio) and Native plug-ins (platform-specific native code libraries). [More info](./plug-ins.html)
See in [Glossary](Glossary.html#Plug-in) Management settings to choose and configure XR provider plug-ins.

Provider plug-ins are packages created to support XR devices and platforms. Use the **XR Plug-in Management** settings to manage which XR devices and platforms your project supports. You can also configure important settings for these XR provider plug-ins in this section.

To learn about the provider plug-ins Unity provides, refer to [Provider plug-ins](xr-support-packages.html#plug-ins) and [XR provider plug-in framework](XRPluginArchitecture.html#xr-provider-plug-ins).

The following sections outline how to [Enable XR provider plug-ins](#enable), [Configure provider plug-in settings](#configure-settings), and [Validate your project](#project-validation). For more information about the settings you can configure, refer to [XR Plug-in Management settings](xr-plugin-management.html).

## Prerequisites

Before you can enable XR plug-ins, you must install the [XR Plug-in Management](https://docs.unity3d.com/Packages/com.unity.xr.management@4.5) package. You can install the package directly from the ****Project Settings**A broad collection of settings which allow you to configure how Physics, Audio, Networking, Graphics, Input and many other areas of your project behave. [More info](comp-ManagerGroup.html)
See in [Glossary](Glossary.html#ProjectSettings)** window, as follows:

1. Open the **Project Settings** window (menu: **Edit > Project Settings**).

2. Select **XR Plug-in Management** from the list of settings areas along the left side of the settings window.

[Image: Before installing the XR Plug-in Management package]
Before installing the XR Plug-in Management package

3. If necessary, click **Install XR Plug-in Management**.

### Install platform modules

Depending on the platforms your project targets, you might need to install additional platform modules (for example, Android or iOS) from the Unity Hub. Refer to [Add modules](https://docs.unity3d.com/hub/manual/AddModules.html) in the Unity Hub documentation for instructions.

## Enable provider plug-ins

You must enable each provider plug-in your project targets using XR Plug-in Management.

To enable provider plug-ins:

1. Open the **Project Settings** window (menu: **Edit > Project Settings**).

2. Select **XR Plug-in Management** from the sections on the left side of the **Project Settings** window.

3. Select the tab for your target build platform. For example, to enable a plug-in for an Android device, click the tab with the Android icon .

4. Use the corresponding checkbox to enable your desired provider plug-in(s) from the list of **Plug-in Providers**.

When you enable a plug-in, XR Plug-in Management installs the associated package.

**Notes:**

- Disabling a provider doesn’t remove the package. To remove a provider plug-in, remove the associated package with the [Package Manager](upm-ui-remove.html).

- If a provider isn’t in the list, you might need to install the associated package with the [Package Manager](upm-ui-install.html). Some device makers distribute their provider plug-in packages directly, rather than via Unity.

## Configure provider plug-in settings

For each enabled plug-in provider, you can configure provider-specific settings as follows:

1. In the [XR Plug-in Management menu](xr-plugin-management.html#menu), select the name of the provider plug-in.

2. If present, select the tab for the platform build target. For example, to configure settings for Android devices, click the tab with the Android icon . (The tabs are only shown when a plug-in supports more than one build target.)

3. Configure the settings as required.

To learn about settings for a specific provider, refer to the documentation of the individual plug-in. You can access provider documentation from [XR packages](xr-support-packages.html) or with the **Documentation** link in the Package Manger, as shown in the following image:

[Image: Use the Documentation link to access plug-in documentation.]

## Validate your project

Some provider plug-ins and other packages implement project validation checks to help ensure that you’ve set up your project correctly. You can view the status of these checks in the **Project Validation** section under **XR Plug-in Management** in the **Project Settings** window.

If a validation check has a **Fix** button next to it, you can click the button to automatically fix the issue. Otherwise, you must fix the issue manually. Clicking **Edit** opens the settings UI to the appropriate section so that you can make any needed changes.

The way you resolve project validation issues depends on the severity of the issue:

- You must correct validation checks marked with a red stop icon.

- You can ignore or defer checks marked with a yellow warning icon, but fixing them results in better performance or compatibility.

To learn more about the validation system rules and status icons, refer to [Project validation reference](xr-plugin-management.html#project-validation).

## Additional resources

- [XR packages](xr-support-packages.html)

- [XR Plug-in Management settings](xr-plugin-management.html)

- [Advanced plug-in management](https://docs.unity3d.com/Packages/com.unity.xr.management@4.5/manual/EndUser.html) (XR Plug-in Management package documentation)

XR project set up

Create an XR project
