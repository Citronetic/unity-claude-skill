This version of Unity is unsupported.

Vulkan API and graphics jobs mode configuration

Create a Vulkan Device Filtering Asset

# Introduction to Vulkan Device Filtering Asset

Vulkan Device Filtering Asset allows you to fine-tune which Android devices should use the Vulkan API and define your preferred graphics jobs modes. This asset uses the following filter lists:

- **Allow Filter List**: Defines which Android devices should use the Vulkan API when running Unity application.

- **Deny Filter List**: Defines which Android devices shouldn’t use the Vulkan API when running Unity application.

- **Preferred Graphics Jobs Filter List**: Defines specific graphics jobs mode for Android devices.

[Image: Vulkan Device Filtering Asset]
Vulkan Device Filtering Asset

## Filter list parameters

Each filter list contains a set of parameters to enter device specifications. You can add multiple entries to each filter list. Unity then allows or restricts the devices that match the specifications entered in the filter lists from using the Vulkan API and assigns any specific graphics jobs modes.

You can specify values for the following parameters to identify a device or set of devices:

- Preferred Graphics Jobs Mode

- Vendor

- Device Name

- Brand

- Product Name

- Android OS version

- Vulkan API version

- Driver version

The Preferred Graphics Jobs Mode parameter is available in the **Preferred Graphics Jobs Filter List** only.

The device properties must match all the parameter values (logical AND) to determine whether it’s allowed or denied to run your application with Vulkan API and use the preferred graphics jobs mode. You can use C# regular expressions for all the parameters, except the Vulkan API version and Driver version. For example, `\[A|a\]dreno .\*6\[0-9\]\[0-9\], Qual\*, \[S|s\]amsung`. The Unity Editor displays an error for an invalid regular expression. If the parameter values are set with invalid regular expressions, the application build fails.

The **Allow Filter List** identifies all the devices with Vulkan API and driver versions equal to or greater than the specified parameter values. For example, if you specify the GPU vendor as Qualcomm, the GPU model name as Adreno, and Vulkan API version as 1.1.128, the Allow Filter List will allow all the devices with Qualcomm Adreno GPU that have Vulkan API version greater than or equal to 1.1.128.

The **Deny Filter List** identifies all the devices with Vulkan API and driver versions less than or equal to the specified parameter values. For example, if you specify the GPU vendor as ARM, the GPU model name as Mali, and Vulkan driver version as 0.676.0, the Deny Filter List will restrict all the devices with ARM Mali GPU that have Vulkan driver version less than or equal to 0.676.0.

The **Preferred Graphics Jobs Filter List** identifies all the devices with Vulkan API and driver versions equal to or greater than the specified parameter values to use the specified graphics jobs mode. For example, if you set the graphics jobs mode as Split, GPU model name as Adreno, and Vulkan API version as 1.1.128, the Preferred Graphics Jobs Filter List will enable Split graphics jobs mode on all the devices with Adreno GPU that have Vulkan API version greater than or equal to 1.1.128.

## Additional resources

- [Create a Vulkan Device Filtering Asset](create-vulkan-device-filtering-asset.html)

- [Configure Vulkan API usage](allow-deny-vulkan-usage.html)

- [Configure graphics jobs mode](configure-graphics-jobs-mode.html)

- [Vulkan Device Filtering Asset reference](vulkan-device-filter-list-asset-reference.html)

Vulkan API and graphics jobs mode configuration

Create a Vulkan Device Filtering Asset
