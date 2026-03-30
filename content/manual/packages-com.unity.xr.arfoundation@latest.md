# AR Foundation

AR Foundation enables you to create multiplatform augmented reality (AR) apps with Unity. In an AR Foundation project, you choose which AR features to enable by adding the corresponding manager components to your scene. When you build and run your app on an AR device, AR Foundation enables these features using the platform's native AR SDK, so you can create once and deploy to the world's leading AR platforms.

[[Image: A screenshot from a mobile device shows an interior office environment. Yellow polygons indicate that planes have been detected on the floor, seats, and other surfaces. The user has placed a magenta cube on one of the planes via raycasting.]](images/sample-simple-ar.png)
*The [Simple AR sample](https://github.com/Unity-Technologies/arfoundation-samples#simple-ar) scene shows you how to get started with plane detection and raycasting*

##### Tip

AR Foundation is an important tool for building an AR app with Unity, but your app may require other tools as well. For more information about Unity's AR tools and support, refer to the [Augmented reality](https://unity.com/solutions/xr/ar?ampDeviceId=6d7aef6b-aa4a-4844-ba5a-2f3cf5238729&ampSessionId=1774862548162&ampTimestamp=1774948977751) homepage.

## Required packages

The AR Foundation package contains interfaces for AR features, but doesn't implement any features itself. To use AR Foundation on a target platform, you also need a separate provider plug-in package for that platform.

Unity officially supports the following provider plug-ins:

| Platform | Plug-in |
| --- | --- |
| Android | Google ARCore XR Plug-in |
| iOS | Apple ARKit XR Plug-in |
| visionOS | Apple visionOS XR Plug-in |
| Hololens 2 | OpenXR Plug-in |
| Meta Quest | Unity OpenXR: Meta |
| Android XR | Unity OpenXR: Android XR |

##### Important

AR Foundation will not work on a target platform unless you also install the provider plug-in package for that platform. Refer to [Install AR Foundation](project-setup/install-arfoundation.html) for detailed setup instructions.

## Features

AR Foundation supports the following features:

| Feature | Description |
| --- | --- |
| Session | Enable, disable, and configure AR on the target platform. |
| Device tracking | Track the device's position and rotation in physical space. |
| Camera | Render images from device cameras and perform light estimation. |
| Plane detection | Detect and track flat surfaces. |
| Bounding Box detection | Detect and track bounding boxes of 3D objects. |
| Image tracking | Detect and track 2D images. |
| Markers | Track AR markers and read their encoded data. |
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

## Platform support

AR Foundation provider plug-ins rely on platform implementations of AR features, such as Google's ARCore on Android and Apple's ARKit on iOS. Not all features are available on all platforms.

Some AR Foundation features are available in [XR Simulation](xr-simulation/simulation-overview.html) to test your AR app in the Unity Editor.

The following table lists the available features in each Unity-supported provider plug-in:

| Feature | Android | iOS | visionOS | HoloLens | Meta Quest | Android XR | XR Simulation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Session | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Device tracking | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Camera | Yes | Yes |  |  | Yes | Yes | Yes |
| Plane detection | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Bounding Box detection |  | Yes |  |  | Yes |  | Yes |
| Image tracking | Yes | Yes | Yes |  |  |  | Yes |
| Object tracking |  | Yes | Yes |  |  |  |  |
| Face tracking | Yes | Yes |  |  |  | Yes |  |
| Body tracking |  | Yes |  |  |  |  |  |
| Point clouds | Yes | Yes |  |  |  |  | Yes |
| Ray casts | Yes | Yes |  | Yes | Yes | Yes | Yes |
| Anchors | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Meshing |  | Yes | Yes | Yes | Yes | Yes | Yes |
| Environment probes | Yes | Yes | Yes |  |  |  | Yes |
| Occlusion | Yes | Yes |  |  | Yes | Yes | Yes |
| Participants |  | Yes |  |  |  |  |  |

##### Tip

When developing an AR app, refer to both the AR Foundation documentation as well as the [required packages](index.html#required-packages) for each platform you support.

## Samples

AR Foundation provides pre-configured sample scenes that demonstrate how to use each feature, in the [AR Foundation Samples](https://github.com/Unity-Technologies/arfoundation-samples) GitHub repository. To understand how to use these samples, and learn more about each scene, refer to [AR Foundation samples](samples.html).

---

*Apple and ARKit are trademarks of Apple Inc., registered in the U.S. and other countries and regions.*
