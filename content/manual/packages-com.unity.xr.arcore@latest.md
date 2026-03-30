# Google ARCore XR Plug-in

Use the Google ARCore XR Plug-in package to enable ARCore support in your [AR Foundation](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@latest) project. This package implements the following AR features using ARCore 1.48:

| Feature | Description |
| --- | --- |
| Session | Enable, disable, and configure AR on the target platform. |
| Device tracking | Track the device's position and rotation in physical space. |
| Camera | Render images from device cameras and perform light estimation. |
| Plane detection | Detect and track flat surfaces. |
| Image tracking | Detect and track 2D images. |
| Face tracking | Detect and track human faces. |
| Point clouds | Detect and track feature points. |
| Ray casts | Cast rays against tracked items. |
| Anchors | Track arbitrary points in space. |
| Environment probes | Generate cubemaps of the environment. |
| Occlusion | Occlude AR content with physical objects and perform human segmentation. |

## Unsupported features

This package does not implement the following AR features, as they are not supported by ARCore 1.48:

| Feature | Description |
| --- | --- |
| Bounding Box detection | Detect and track bounding boxes of 3D objects. |
| Object tracking | Detect and track 3D objects. |
| Body tracking | Detect and track a human body. |
| Meshing | Generate meshes of the environment. |
| Participants | Track other devices in a shared AR session. |

## Install the Google ARCore XR Plug-in

When you enable the Google ARCore XR Plug-in in **Project Settings** > **XR Plug-in Management**, Unity automatically installs this package if necessary. Refer to [Enable the ARCore plug-in](project-configuration-arcore.html#enable-arcore) for instructions.

You can also install and uninstall this package using the [Package Manager](https://learn.unity.com/tutorial/the-package-manager?ampDeviceId=6d7aef6b-aa4a-4844-ba5a-2f3cf5238729&ampSessionId=1774862548162&ampTimestamp=1774948978929). Installing through the Package Manager does not automatically enable the plug-in. In this case you must enable it in **Project Settings** > **XR Plug-in Management**.

## Requirements

This version of the Google ARCore XR Plug-in is compatible with the following versions of the Unity Editor:

- Unity 6 (6000.0) or newer.

## Samples

You can access pre-configured sample scenes that demonstrate AR Foundation features from the [AR Foundation Samples](https://github.com/Unity-Technologies/arfoundation-samples) GitHub repository. This project also contains [ARCore samples](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@6.4/manual/samples/arcore.html) that demonstrate ARCore-specific functionality. To understand how to use these samples, and learn more about each scene, refer to [AR Foundation samples](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@6.4/manual/samples.html).
