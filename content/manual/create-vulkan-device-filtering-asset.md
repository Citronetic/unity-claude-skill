This version of Unity is unsupported.

Introduction to Vulkan Device Filtering Asset

Configure Vulkan API usage

# Create a Vulkan Device Filtering Asset

To create a Vulkan Device Filtering asset:

1. In your Unity project, navigate to the main menu.

2. Select **Assets** > **Create** > **Vulkan Settings** > **Device Filter**.

Unity creates the Vulkan Device Filtering Asset in the **Assets** folder with the file extension `.vulkandevicefilter`.

Each asset displays three filter lists in the ****Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector)** window: **Allow Filter List**, **Deny Filter List**, and **Preferred Graphics Jobs Filter List**. The **Deny Filter List** includes Android device specifications that Unity restricts by default from using the Vulkan API. If your application performs better with these device specifications, you can override those by removing from the list.

## Additional resources

- [Introduction to Vulkan Device Filtering Asset](introduction-vulkan-device-filtering-asset.html)

- [Configure Vulkan API usage](allow-deny-vulkan-usage.html)

- [Configure graphics jobs mode](configure-graphics-jobs-mode.html)

Introduction to Vulkan Device Filtering Asset

Configure Vulkan API usage
