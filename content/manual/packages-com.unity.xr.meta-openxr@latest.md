# Unity OpenXR: Meta

Unity OpenXR: Meta enables Meta Quest device support for your AR Foundation projects and provides a C# interface for Meta's OpenXR runtime. This package depends on both [AR Foundation](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@6.0) and the [OpenXR Plug-in](https://docs.unity3d.com/Packages/com.unity.xr.openxr@1.10).

Unity's [OpenXR Plug-in](https://docs.unity3d.com/Packages/com.unity.xr.openxr@1.10) integrates core OpenXR features for all XR platforms. This package integrates Meta-specific vendor extensions to provide additional features for Meta Quest devices. Refer to [Architecture](architecture.html) for a full list of OpenXR extensions that this package uses.

## Get started

To understand how to install the OpenXR Meta package, refer to [Install Unity OpenXR: Meta](install.html).

Visit the [Get started](get-started.html) section to understand how to set up your project to use this package.

## Features

This package defines the following OpenXR Features:

| Feature | Description |
| --- | --- |
| Display utilities | Get the supported display refresh rates for the device and request a display refresh rate. |
| Boundary visibility | Suppress the visibility of the boundary. |

AR Features implement [AR Foundation](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@6.4/manual/index.html) interfaces. This package implements the following AR features:

| AR Feature | Description |
| --- | --- |
| Session | Enable, disable, and configure AR on the target platform. |
| Camera | Render images from device cameras and perform light estimation. |
| Colocation discovery | Discover physically colocated devices running the same app. |
| Planes | Use Scene Model data to track flat surfaces. |
| Bounding boxes | Use Scene Model data to track bounding boxes of 3D objects. |
| Anchors | Track arbitrary points in space. |
| Ray casts | Cast rays against tracked items. |
| Meshing | Generate meshes of the environment. |
| Occlusion | Occlude virtual content with physical objects. |
