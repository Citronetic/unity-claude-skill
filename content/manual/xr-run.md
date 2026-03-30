This version of Unity is unsupported.

Packages and templates for Meta Quest development

XR graphics

# Run an XR application

Running an **XR**An umbrella term encompassing Virtual Reality (VR), Augmented Reality (AR) and Mixed Reality (MR) applications. Devices supporting these forms of interactive applications can be referred to as XR devices. [More info](XR.html)
See in [Glossary](Glossary.html#XR) app developed in Unity works the same as running any type of app on a device. In most cases, you can use the Unity **Build and Run** function to both build and run an app on a connected device.

**Note:** The method you use to install an already built app on a device varies by platform, and you should refer to the platform’s documentation for detailed information.

## Build and Run

To build your game or application and run it on a device:

1. Connect the target device to your build computer.

2. Open the **Build Profiles** window (menu: **File > Build Profiles**).

3. If necessary, choose the target platform and click **Switch platform**.

4. Choose the connected XR device from the **Run device** options in the build settings. (Not required on all platforms.)

5. Ensure the other build settings are correct for your chosen platform. Refer to [Build profiles](BuildSettings.html)A set of customizable configuration settings to use when creating a build for your target platform. [More info](build-profiles.html)
See in [Glossary](Glossary.html#Buildprofile) for more information.

6. Click **Build And Run**.

**Tip:** After you have configured your build settings, you can build and run your project directly with the **File > Build And Run** menu command.

Refer to [Publishing profiles](BuildSettings.html) for more information about building Unity projects.

## Play mode

On the Windows platform, some XR provider **plug-ins**A set of code created outside of Unity that creates functionality in Unity. There are two kinds of plug-ins you can use in Unity: Managed plug-ins (managed .NET assemblies created with tools like Visual Studio) and Native plug-ins (platform-specific native code libraries). [More info](./plug-ins.html)
See in [Glossary](Glossary.html#Plug-in) support a “hybrid” play mode in which the project runs on a connected XR device when you enter Play mode. The Unity **Game view** mirrors the headset display. You have the choice of the following options for the Game view:

- **Left Eye**: shows the left eye only

- **Right Eye**: shows the right eye only

- **Both Eyes**: shows both eyes, side by side

- **Occlusion **mesh**The main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. [More info](mesh.html)
See in [Glossary](Glossary.html#Mesh)**: shows the both eyes, side by side, mapped onto a mesh similar to that used by headsets to compensate for lens distortion.

**Tip:** When developing for the Quest 2 or Pro, you can switch to the Windows platform and use the Quest Link to take advantage of the faster iteration turn around provided by Play mode compared to building and uploading your project to the device.

### Mock HMD

The Mock HMD package provides a simulated HMD in the Unity **Game view** in Play mode. The Mock HMD is a provider plug-in that simulates the presence of a head-mounted device. Enable the Mock HMD in the [XR Plug-in Management](xr-plugin-management.html) settings section. Input and tracking are not simulated.

Refer to the [Mock HMD](https://docs.unity3d.com/Packages/com.unity.xr.mock-hmd@1.3/manual/index.html) documentation for more information.

**Tip:** The XR Interaction Toolkit package provides an [XR Device Simulator](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@3.0/manual/xr-device-simulator.html) that translates keyboard and mouse input into movement and interaction.

### XR Simulation

The **AR**Augmented Reality [More info](AROverview.html)
See in [Glossary](Glossary.html#AR) Foundation package provides an XR Simulation feature that you can use to test AR apps in the Editor. XR Simulation provides pre-built test environments that you can use in Play Mode to simulate how your app would behave in different physical settings. The simulation reports detected planes and other AR features as if you were navigating within a real environment. You can modify the provided environments and create your own.

See [XR Simulation](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@5.0/manual/xr-simulation/simulation.html) for more information.

## Additional resources

Most XR devices use one of the existing OS platforms. For additional information about running projects on these platforms, see:

- [Android](android.html)

- [iOS](iphone.html)

- [visionOS](visionOS.html)

- [Windows](Windows.html)

Packages and templates for Meta Quest development

XR graphics
