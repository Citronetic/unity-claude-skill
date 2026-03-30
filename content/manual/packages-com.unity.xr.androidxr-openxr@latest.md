# Unity OpenXR: Android XR

The Unity OpenXR: Android XR package enables [Android XR device](https://developer.android.com/develop/devices/xr/unity) support for your AR Foundation projects. This package depends on [AR Foundation](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@6.4/manual/index.html), the [OpenXR Plug-in](https://docs.unity3d.com/Packages/com.unity.xr.openxr@1.16/manual/index.html), and the [XR Hands](https://docs.unity3d.com/Packages/com.unity.xr.hands@1.7/manual/index.html) package. Refer to [Architecture](architecture.html) for a full list of OpenXR extensions this package uses.

Refer to the Google's [Android XR developer documentation](https://developer.android.com/develop/devices/xr) for more information about the Android XR platform.

## Get started

To understand how to install the Android OpenXR package, refer to [Install Android OpenXR](installation.html).

Visit the [Get started](get-started/get-started.html) section to understand how to set up your project.

## Features

This package implements the following AR features:

| Feature | Description |
| --- | --- |
| Session | Enable, disable, and configure AR on the target platform. |
| Camera | Render images from device cameras. |
| Plane detection | Detect and track flat surfaces. |
| Face tracking | Detect and track human faces. |
| Ray casts | Cast rays against tracked items. |
| Anchors | Track arbitrary points in space. |
| Occlusion | Allow 3D objects to appear in front of or behind objects in physical space. |
| Meshing | Generate meshes of the environment. |
| Bounding Boxes | Detect and track objects as bounding boxes. |

When used with certain OpenXR features from other XR packages, Google's Android XR runtime exhibits unique behaviors, as explained in the following table:

| Feature | Description | Unique behavior |
| --- | --- | --- |
| Hand tracking (XR Hands) | Detect and track human hands. | Hand Tracking (Android XR) |
| Hand mesh data | Use hand data for occlusion | Hand mesh data |
| Foveated rendering (OpenXR) | Optimize rendering on XR devices. | Eye tracking and foveated rendering (Android XR) |
| Multiview Render Regions (OpenXR) | Optimize rendering to prevent processing on areas of the screen not visible. | Multiview Render Regions (Android XR) |
| Display Utilities | Get the supported display refresh rates for the device and request a display refresh rate. | Display Utilities (Android XR) |
| Application SpaceWarp (OpenXR) | Use SpaceWarp to help maintain high frame rates. | Application SpaceWarp (Android XR) |
| Automatic viewport dynamic resolution (OpenXR) | Maintain a stable frame rate and improve graphical performance. | No unique behavior |
