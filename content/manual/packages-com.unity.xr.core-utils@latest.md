# About XR Core Utilities

The XR Core Utilities package contains a variety of classes and extension methods which are commonly used and shared between multiple XR packages. Some particularly useful utilities include:

- [Geometry Utilities](../api/Unity.XR.CoreUtils.GeometryUtils.html)

- Point of closest approach

- Closest edge of a polygon

- Check if point inside of polygon

- Compute 2D convex hull

- [Collection pool](../api/Unity.XR.CoreUtils.CollectionPool-2.html)

- [Object pool](../api/Unity.XR.CoreUtils.ObjectPool-1.html)

- [Math Utilities](../api/Unity.XR.CoreUtils.MathUtility.html)

- Optimized approximately equal functions

- Clamp

- Axis aligned check

- Shortest angle distance

- [Bounds extensions](../api/Unity.XR.CoreUtils.BoundsExtensions.html)

- Contains completely

- [Quaternion extensions](../api/Unity.XR.CoreUtils.QuaternionExtensions.html)

- Constrain yaw

- [Editor GUI](../api/Unity.XR.CoreUtils.Editor.EditorUtils.html)

- Flags Property Drawer

- [Scriptable Settings (serialized project settings)](../api/Unity.XR.CoreUtils.Editor.ScriptableSettingsProvider-1.html)

- [XROrigin](xr-origin.html)

- [Project validation](project-validation.html)

- [Building blocks](building-blocks.html)

- [Capability Profile](capability-profile.html)

Refer to the [Script Reference](../api/index.html) for a complete list of utility classes.

## Install XR Core Utilities

The XR Core Utilities package is automatically installed when you add other packages to your project that depend on it, such as [AR Foundation](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@latest) or the [XR Interaction Toolkit](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@latest).

To install this package separately:

1. Open the project that you plan to use.

2. Click the following link: [com.unity.xr.core-utils](com.unity3d.kharma:upmpackage/com.unity.xr.core-utils).

The Unity Package Manager window opens with the package name entered in the **Add package by name** dialog.

[Image: image]

3. (Optional) Enter the version number to install. If left blank, Unity chooses the "best" version -- typically the latest, release version for the current Unity Editor.

4. Click **Add**.

##### Note

Computer configuration issues can prevent package links from opening directly in the Unity Editor. If this happens, follow the instructions in [Adding a registry package by name](https://docs.unity3d.com/6000.0/Documentation/Manual/upm-ui-quick.html), using the package name: `com.unity.xr.core-utils`.

For an overview of installing and managing packages in Unity, see [The Package Manager](https://learn.unity.com/tutorial/the-package-manager#?ampDeviceId=6d7aef6b-aa4a-4844-ba5a-2f3cf5238729&ampSessionId=1774862548162&ampTimestamp=1774949031869) tutorial.

For a detailed description of how to use the Package Manager, see the [Package Manager](https://docs.unity3d.com/Packages/com.unity.package-manager-ui@latest/index.html) in the Unity Manual.

## Use XR Core Utilities

This contains entirely C# code. Refer to the [API documentation](../api/index.html) for details.

## Technical details

### Requirements

This version of the XR Core Utilities package is compatible with the following versions of the Unity Editor:

- 2021.3 or newer
