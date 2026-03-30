# Apple ARKit XR Plug-in

Use the Apple ARKit XR Plug-in package to enable ARKit support in your [AR Foundation](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@latest) project. This package implements the following AR Foundation features:

| Feature | Description |
| --- | --- |
| Session | Enable, disable, and configure AR on the target platform. |
| Device tracking | Track the device's position and rotation in physical space. |
| Camera | Render images from device cameras and perform light estimation. |
| Plane detection | Detect and track flat surfaces. |
| Bounding box detection | Detect and track bounding boxes of 3D objects. |
| Image tracking | Detect and track 2D images. |
| Object tracking | Detect and track 3D objects. |
| Face tracking | Detect and track human faces. |
| Body tracking | Detect and track a human body. |
| Point clouds | Detect and track feature points. |
| Ray casts | Cast rays against tracked items. |
| Anchors | Track arbitrary points in space. |
| Meshing | Generate meshes of the environment. |
| Environment probes | Generate cubemaps of the environment. |
| Occlusion | Occlude AR content with physical objects and perform human segmentation. |
| Participants | Track other devices in a shared AR session. |

##### Important

Apple's App Store rejects any app that contains certain face tracking-related symbols in its binary if the app developer doesn't intend to use face tracking. To avoid ambiguity, face tracking support is available only when face tracking is enabled. Refer to [Enable the Face tracking subsystem](project-configuration-arkit.html#enable-face-tracking) for instructions for changing this setting.

# Install the Apple ARKit XR Plug-in

When you enable the Apple ARKit XR Plug-in in **Project Settings** > **XR Plug-in Management** settings, Unity automatically installs this package (if necessary). See [Enable the ARKit plug-in](project-configuration-arkit.html#enable-the-apple-arkit-plug-in) for instructions.

You can also install and uninstall this package using the [Package Manager](https://learn.unity.com/tutorial/the-package-manager?ampDeviceId=6d7aef6b-aa4a-4844-ba5a-2f3cf5238729&ampSessionId=1774862548162&ampTimestamp=1774949031060). Installing through the Package Manager does not automatically enable the plug-in. You must still enable it in **Project Settings** > **XR Plug-in Management**.

# Project configuration

See [Project configuration](project-configuration-arkit.html) for information about the project settings that affect ARKit apps.

# Usage

The Apple ARKit XR Plug-in implements the native iOS endpoints required for building Handheld AR apps using Unity's multi-platform XR API. However, this package doesn't expose any public scripting interface of its own. In most cases, you should use the scripts, Prefabs, and assets provided by AR Foundation as the basis for your Handheld AR apps.

Including the Apple ARKit XR Plug-in also includes source files, static libraries, shader files, and plug-in metadata.

ARKit requires iOS 11.0. Some specific features require later versions (see below).

## Require AR

You can define ARKit as either required or optional in iOS apps. By default, ARKit is required, which means your app can only be installed on AR-supported devices and operating systems (iOS 11.0 and above). If you specify that AR is optional, your app can also be installed on iOS devices that don't support ARKit.

See [Set the ARKit support Requirement](project-configuration-arkit.html#arkit-required) for instructions on how to change this setting.

## Project Validation

Apple ARKit XR Plug-in package supports project validation. Project validation is a set of rules that the Unity Editor checks to detect possible problems with your project's configuration. See [Project Validation](project-configuration-arkit.html#project-validation) section for more information about the rules checked for Apple ARKit XR Plug-in.

# Technical details

## Requirements

This version of Apple ARKit XR Plug-in is compatible with the following versions of the Unity Editor:

- Unity 6 (6000.0) or newer.

##### Important

You must use Xcode 26.0 or newer when compiling an iOS app that includes this package.

## Known limitations

- Color correction is not available as an RGB Value (only as color temperature).

## Package contents

This version of Apple ARKit XR Plug-in includes:

- A static library which provides implementation of the XR Subsystems listed above

- An Objective-C source file

- A shader used for rendering the camera image

- A plug-in metadata file

## Samples

You can access pre-configured sample scenes that demonstrate AR Foundation features from the [AR Foundation Samples](https://github.com/Unity-Technologies/arfoundation-samples) GitHub repository. This project also contains [ARKit samples](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@6.5/manual/samples/arkit.html) that demonstrate ARKit-specific functionality. To understand how to use these samples, and learn more about each scene, refer to [AR Foundation samples](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@6.5/manual/samples.html).

---

*Apple and ARKit are trademarks of Apple Inc., registered in the U.S. and other countries and regions.*
