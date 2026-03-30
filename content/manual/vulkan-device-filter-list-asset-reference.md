This version of Unity is unsupported.

Import legacy Allow and Deny Filter List values

Testing and debugging

# Vulkan Device Filtering Asset reference

The Vulkan Device Filtering Asset includes filter lists each consisting of the following set of parameters. Specify values for these parameters to define Vulkan API usage and preferred graphics jobs modes for a device or set of devices.

| Property | Description |
| --- | --- |
| Preferred Graphics Jobs Mode | The graphics jobs mode the specified device or set of devices should use at runtime for your application. The available modes are Off, Native, Legacy, and Split. For information on these graphics jobs modes, refer to Graphics Jobs Mode documentation. Notes: • You can restrict devices from using graphics jobs with Preferred Graphics Jobs Mode set to Off.• This parameter is only available for the Preferred Graphics Jobs Filter List. |
| Vendor | Vendor name of the GPU hardware used in the Android device. For example, Qualcomm, ARM. |
| Device Name | The name of the GPU model used in the Android device. For example, Adreno (TM) 740. |
| Brand | The manufacturer name of the Android device. For example, google, samsung. |
| Product Name | The product codename for the Android device. For example, barbet, mermaid. |
| Android OS version | The Android operating system version the device runs on. For example, 13. |
| Vulkan API version | The maximum required Vulkan API version available on the Android device. Enter the version number in either of the following formats: • MajorVersion.MinorVersion.PatchVersion where MinorVersion and PatchVersion are optional. For example, 1.1.128. • Hexadecimal format starting with 0x with maximum 8 digits. For example, 0x00401080 Note: Regular expressions aren’t allowed for this parameter. |
| Driver version | The maximum required Vulkan device driver version. Enter the version number in either of the following formats: • MajorVersion.MinorVersion.PatchVersion where MinorVersion and PatchVersion are optional. For example, 0.676.0. •Hexadecimal format starting with 0x with maximum 8 digits. For example, 0x002a4000 Note: Regular expressions aren’t allowed for this parameter. |

## Additional resources

- [Introduction to Vulkan Device Filtering Asset](introduction-vulkan-device-filtering-asset.html)

- [Create a Vulkan Device Filtering Asset](create-vulkan-device-filtering-asset.html)

- [Configure Vulkan API usage](allow-deny-vulkan-usage.html)

- [Configure graphics jobs mode](configure-graphics-jobs-mode.html)

- [Regular expressions](https://learn.microsoft.com/en-us/dotnet/standard/base-types/regular-expressions)

Import legacy Allow and Deny Filter List values

Testing and debugging
