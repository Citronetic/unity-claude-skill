# VR Multiplayer Template Quick Start Guide

Unity’s **VR Multiplayer Project Template** serves as a starting point for virtual reality development leveraging Unity Cloud Gaming Services to provide online connectivity and multiplayer features.

The template configures project settings, pre-installs the necessary packages, and includes various Samples that demonstrate how to set up a project that is ready for a variety of **Multiplayer VR** use cases. Refer to the[XR Project Setup](https://docs.unity3d.com/2022.3/Documentation/Manual/xr-create-projects.html) and [VR Project Development in Unity](https://docs.unity3d.com/2022.3/Documentation/Manual/VROverview.html) documentation for additional information.

This template supports the following Unity editor versions:

- Unity 6 and Later

Unity directly supports the following VR platforms:

- [Meta Quest (2, 3, and Pro)](https://developer.oculus.com/documentation/unity/unity-gs-overview/)

- OpenXR compliant devices

The **VR Multiplayer Project Template** uses the following Unity packages:

- [XR Hands](https://docs.unity3d.com/Packages/com.unity.xr.hands@1.4/manual/index.html) - Defines an API that allows you to access hand tracking data from devices that support hand tracking.

- [XR Interaction Toolkit](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@3.0/manual/index.html) - A high-level, component-based, interaction system for creating XR experiences. It provides a framework that makes 3D and UI interactions available from Unity input events.

- [XR Plugin Management](https://docs.unity3d.com/Packages/com.unity.xr.management@4.4/manual/index.html) - Used to streamline XR plug-in lifecycle management and, optionally, provides a build time UI through the Unity Unified Settings system.

- [Netcode for GameObjects](https://docs.unity3d.com/Packages/com.unity.netcode.gameobjects@1.8/manual/index.html) - Provides networking capabilities to GameObject and MonoBehaviour workflows.

- [OpenXR](https://docs.unity3d.com/Packages/com.unity.xr.openxr@1.10/manual/index.html) - An open, royalty-free standard developed by Khronos that aims to simplify AR/VR development by allowing developers to seamlessly target a wide range of AR/VR devices.

- [Multiplayer Services](https://docs.unity.com/ugs/en-us/manual/mps-sdk/manual?ampDeviceId=6d7aef6b-aa4a-4844-ba5a-2f3cf5238729&ampSessionId=1774862359528&ampTimestamp=1774948910224)

- [Authentication](https://docs.unity.com/ugs/manual/authentication/manual/overview?ampDeviceId=6d7aef6b-aa4a-4844-ba5a-2f3cf5238729&ampSessionId=1774862359528&ampTimestamp=1774948910224) - Provides anonymous and platform-specific authentication solutions for supported platforms.

- [Distributed Authority](https://unity.com/products/distributed-authority?ampDeviceId=6d7aef6b-aa4a-4844-ba5a-2f3cf5238729&ampSessionId=1774862359528&ampTimestamp=1774948910224) -
Allows the responsibility for managing object interactions and state updates to be shared across multiple clients or servers, rather than being controlled solely by a central server. This enables a flexible and scalable multiplayer experience, reducing overall network traffic and allowing easy implementation of host migration.

- [Vivox](https://docs.unity.com/vivox/Article.html?ampDeviceId=6d7aef6b-aa4a-4844-ba5a-2f3cf5238729&ampSessionId=1774862359528&ampTimestamp=1774948910224) - Voice and Text Chat (Vivox) service for multiplayer enables better cooperative and competitive multiplayer experiences by letting your players talk through in-game voice or text chat.

##### Important

Known Issue: If your project is using OpenXR version `1.16.0-pre.1`, `1.16.0-pre.2` or `1.16.0` with Meta Quest devices, the controllers will appear upside-down. To work around this issue, it is recommended to roll back to version `1.15.1` of the OpenXR package in Package Manager.

## Create a project from this template

To create a project using the VR multiplayer template:

1. Open the Unity Hub.

2. Select **New Project**.

3. Under **Editor Version**, select **Unity 6000.0** or newer.

4. From the list of templates, select **VR Multiplayer**.

5. In **Project name**, name a new cloud project or **Connect to existing Unity Cloud project**. You must connect your project to Unity Cloud to automate gaming services set up.

6. Complete the other **Project Settings** and select **Create Project**.

When your project opens in the Unity Editor, Unity will prompt you to follow a tutorial to configure your project.

## **Use the Sample Scene**

The **VR Multiplayer Project Template** contains a scene named **SampleScene** located in `Assets\Scenes`. This scene’s **Hierarchy** is pre-configured with GameObjects that allow your application to manage controller, hands, and head tracking, locomotion, and interactions with networked spatial UI and virtual objects.

You can use this scene as a reference, or you can remove the example assets from it and use it as a starting point for your own project.

### **Sample Scene Hierarchy Overview**

The following image shows the **Hierarchy** window of the **SampleScene**, expanded to display the GameObjects the scene is pre-configured with.

[Image: The VR Multiplayer template Sample Scene in the Hierarchy window. The XR Interaction Setup (MP Variant) is expanded to show the pre-configured game objects.]

The VR Multiplayer template Sample Scene in the **Hierarchy** window.

### **XR Interaction Setup**

In the **Sample Scene, XR Interaction Setup (MP Variant)** is the main GameObject for configuring the Camera and origin point of the XR experience in Unity.

The **XR Interaction Setup (MP Variant)** includes the following additional configurations nested within the **Camera Offset** gameObject:

- Input and visualization systems for **Controllers**, **Hands**, and **Offline Player Avatar**.

- Support for **Poke**, **Near-Far**, and **Teleport** interactors.

The **Locomotion** GameObject contains providers for **Turn**, **Move**, **Teleportation**, and **Climb** locomotion.

#### **XRI Spatial Keyboard**

The **XR Interaction Setup (MP Variant)** contains an **XRI Global Keyboard Manager** prefab, which provides a customizable, movable and scalable instance of the referenced **Keyboard Prefab** to enable text input in the project.

[Image: The XRI Global Keyboard Manager prefab in the Inspector window. The Global Non Native Keyboard (Script) component is attached, which displays the default configuration of settings as they appear in the Inspector window.]

The XRI Global Keyboard Manager prefab in the **Inspector** window.

[Image: The XRI Spatial Keyboard in the Hierarchy window. The Hierarchy is expanded to reveal the associated GameObjects. The UI Root GameObject is expanded to reveal the Spatial Panel object. Under Spatial Panel, the Background, PanelOutline, and Header Interactable objects are shown. The Content object is expanded to display the Input Row and KeyboardLayout GameObjects.]

The XRI Spatial Keyboard shown in the **Hierarchy** window.

[[Image: The Keyboard prefab shown in the Game view.]](images/vr-multiplayer-keyboard-game-view.png)

The Keyboard prefab in the Game view.

### **Network Manager**

The [NetworkManager](https://docs-multiplayer.unity3d.com/netcode/current/components/networkmanager/) is a **required Netcode for GameObjects (Netcode)** component that has all of your project's netcode related settings. Think of it as the "central netcode hub" for your netcode enabled project.

[Image: The Network Manager component in the Inspector window.]

The Network Manager component in the **Inspector** window.

### **Networking**

#### **XRI Network Game Manager**

The **XRI Network Game Manager** prefab is responsible for tying together the connection functionality between [Netcode for GameObjects](https://docs-multiplayer.unity3d.com/netcode/current/tutorials/get-started-ngo/) (NGO), [Unity Multiplayer Services](https://docs.unity.com/ugs/en-us/manual/mps-sdk/manual?ampDeviceId=6d7aef6b-aa4a-4844-ba5a-2f3cf5238729&ampSessionId=1774862359528&ampTimestamp=1774948910224) (MPS), [Vivox](https://docs.unity.com/ugs/manual/vivox-unity/manual/Unity/Unity?ampDeviceId=6d7aef6b-aa4a-4844-ba5a-2f3cf5238729&ampSessionId=1774862359528&ampTimestamp=1774948910224), and [XR Interaction Toolkit](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@3.1/manual/index.html) (XRI).

[Image: The XRI Network Game Manager prefab in the Inspector window.]

The XRI Network Game Manager prefab.

### **Player Avatars**

**Player Avatars** are virtual representations of participants (players) whose position and movement are replicated in real time to facilitate interactions as well as verbal and/or non-verbal communication with others sharing a virtual space.

[Image: Decorative image of player avatars interacting with interactables in a scene.]

The VR Multiplayer Template project includes an **XRI Network Player Avatar** prefab to get you started. It provides a stylized model with mouth articulation and support for both tracked controllers and/or hands, via the XRI and XR Hands Packages respectively. In addition, avatars utilize the **Player Name Tag** prefab to display individuals’ names, as well as microphone status indicators.

#### **XRI Networked Player Avatar Example**

The following image shows an example **Networked Player Avatar**.

[Image: An example Networked Player Avatar in the Inspector window. The XRI Network Player Avatar (Script) and XR Avatar IK (Script) components are attached to the XRI Networked Player Avatar.]

Example Networked Player Avatar in the **Inspector**.

### **Networked Interactables**

There are various objects within the scene that the user is able to interact with. In a multiplayer context, these are called **Network Interactables**, which require an additional set of components to facilitate multiplayer interactivity and feedback.

#### **Networked Interactable Example**

The following image shows an example **Networked Physics Interactable**. This high level component is built to be extensible and offers a number of flags for synchronizing the [XR Grab Interactable](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@3.0/api/UnityEngine.XR.Interaction.Toolkit.Interactables.XRGrabInteractable.html) over the network.

[Image: The Inspector window displays an example Networked Interactable. The Network Grab Interactable (script) component) is expanded.]

An example Networked Physics Interactable.

### **Teleportation Setup**

Teleportation allows users to move within the sample scene without experiencing the discomfort common while walking in VR. There are teleportation areas and anchors already set up in the scene **Hierarchy**, located in **Environment **>** Teleport Area Setup**.

#### **Teleportation Areas**

[Teleportation Areas](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@3.0/api/UnityEngine.XR.Interaction.Toolkit.Locomotion.Teleportation.TeleportationArea.html) designate specific surfaces for the user to move upon. The SampleScene’s **Teleportation Areas** are configured using the Teleportation Area component, which references the GameObject’s Mesh Collider component to define areas to teleport to.

#### **Teleportation Area Example**

The **Floor** GameObject in the **Hierarchy** provides an example for a Teleportation Area, it is located under **Environment** > **Level** > **Geometry** > **MainHallArea** > **MP_Level** > **Floor**.

[Image: The Floor GameObject in the Inspector window is opened to display the Teleportation Area script. The Teleportation Configuration section is expanded to display teleportation settings.]

Floor GameObject in the **Inspector** window.

#### **Teleportation Anchors**

[Teleportation Anchors](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@3.0/api/UnityEngine.XR.Interaction.Toolkit.Locomotion.Teleportation.TeleportationAnchor.html), on the other hand, constrain the user’s view in terms of position and rotation while teleporting. You can find multiple of these in the sample scene, which are already set up for you.

[Image: A teleportation anchor from the sample scene viewed in the Scene view.]

A teleportation anchor in the Scene view.

[Image: An example teleportation anchor from the sample scene viewed in the Inspector window.]

A teleportation anchor in the **Inspector** window.

## **UI**

The sample scene contains various world space UI examples which allow for both near and far interactions with UI elements such as sliders, dropdown menus, toggles, and buttons.

There are multiple UI prefabs in the **Hierarchy**, located under **UI** > **World Space Canvas**, which demonstrate how you can combine UI elements for different use cases such as message boards, media players, object spawners, informational panels, notifications, and leader boards

[Image: The Hierarchy window with the UI GameObjects expanded to show the UI prefabs provided in the Sample Scene. Under UI, World Space Canvas is expanded to show the sample prefabs: Static Persistent UI Objects, Tutorial_Player, Object Dispenser UI, Music Player UI, Message Board UI, Room Info UI, Offline Menu UI, Player Name Tags.]

UI prefabs from the Sample Scene in the **Hierarchy** window.

### **Spatial UI**

Users have the ability to move the canvas in space with the **Spatial Panel UI** prefab by leveraging the [XR Grab Interactable](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@3.0/api/UnityEngine.XR.Interaction.Toolkit.Interactables.XRGrabInteractable.html) component, which provides the ability to grab the canvas by either the header or handle at the bottom of the canvas via the direct or ray interactor.

Additionally, the UI will reorient itself to face the user (billboard) with the **Turn To Face** component, which is on the prefab by default. The **Network Billboard** and **Client Network Transform** components allow for other participants to have a shared view of the Spatial UI transforms as it is being manipulated by someone else.

#### **Spatial Panel UI Example**

The following image shows the **Spatial Panel UI** prefab in the **Inspector** window.

[Image: The Spatial Panel UI prefab in the Inspector window.]

Spatial Panel UI prefab.

### **Mini Games**

The VR Multiplayer Template project contains multiple Mini Game examples, leveraging a collection of assets that demonstrate how to best utilize the VR Multiplayer Template’s features.

[Image: The Hierarchy displays the three Mini Game examples provided in the VR Multiplayer template. Climber, Slingshot, and Whack A Pig.]

The VR Multiplayer Template Mini Games shown in the **Hierarchy** window.

## **Multiplayer Testing and XR Simulation Tools**

### **Multiplayer Play Mode Setup**

[Multiplayer Play Mode](https://docs-multiplayer.unity3d.com/mppm/current/about/) is a Unity Package that allows users to test multiplayer gameplay without building the project. It creates virtual players all within the same editor instance.

#### **Recommended Installation**

1. Backup your project folder or use a version control system such as [Git](https://git-scm.com/) or [SVN](https://subversion.apache.org/).

2. Navigate to **Window** > **Package Manager** > **Unity Registry** > **Multiplayer Play Mode**. Then select **Install**

3. **Multiplayer Play Mode** should now be installed.

Refer to the [Multiplayer Play Mode Documentation](https://docs-multiplayer.unity3d.com/mppm/current/about/) for in depth details.

### **XR Device Simulator**

The **XR Device Simulator** converts mouse and keyboard input and uses it to drive simulated XR controllers and head mounted display (HMD).

#### **Installation**

To install the XR Device Simulator:

1. Go to the Package Manager (**Window** > **Package Manager**).

2. Select the **XR Interaction Toolkit** package.

3. Open the **Samples **tab.

4. Click on the **Import** button next to **XR Device Simulator**.

Upon clicking the **Import** (Or **Reimport** to have the latest version) button, you will see a `Samples\XR Device Simulator` folder added to the **Project** window. The `XR Device Simulator` prefab in this folder is the asset that you will add to the scenes where you want to simulate XR input.

Refer to  [XR Device Simulator](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@3.0/manual/xr-device-simulator-overview.html) for more information.

## **XR Project Configuration**

Various presets are used to accommodate graphics & rendering requirements for different platforms. By selecting the target platform from Build Settings (**File** > **Build Settings**), i.e. Windows, Mac, Linux or Android, different **URP Config Setting**s are automatically updated.

In addition, by selecting the target platform in Build Settings, OpenXR feature groups and interaction profiles are preconfigured. By default, the Android build target updates the settings for Meta Quest support.

[[Image: The Project Settings Window shows settings configured for Meta Quest. The OpenXR XR-plugin management settings are open on the Android tab. The Single Pass Instanced\Multi-view Render Mode is highlighted. The Enabled Interaction profiles section is highlighted to show that the Oculus Touch Controller Profile is added to the configuration. Under OpenXR Feature Groups, the following settings are highlighted to show that they should be enabled: Hand Tracking Subsystem, Meta Hand Tracking Aim, Meta Quest Support.]](images/vr-multiplayer-project-config-meta-quest.png)

Project Settings configured for Meta Quest.

For standalone PC VR, numerous interaction profiles are already configured. If you don't see your platform listed, add your interaction profile manually by clicking the **+** button.

[[Image: The Project Settings window shows settings configured for PC VR. The OpenXR XR-plugin management settings are open on the PC tab. The Single Pass Render Mode is highlighted. The Enabled Interaction profiles section is highlighted to show that Valve Index Controller Profile, HTC Vive Controller Profile, and Oculus Touch Controller Profile, are added to the configuration.]](images/vr-multiplayer-project-config-pcvr.png)

Project Settings configured for PC VR.

### **Remove example assets from the scene**

To remove example assets from your project:

1. In the **Project** window, open the `Assets` folder.

2. Right click the `VRMPAssets` folder.

3. Click **Delete.**

4. In the pop-up that appears, click **Delete.**

### **Standalone builds**

When running the build multiple times on the same PC simultaneously, players will need to launch the executable while passing in the command line argument `-playerArg:<UNIQUE_ID>` where `<UNIQUE_ID>` is any unique string.

## **Local Only (Offline & LAN) Support**

The `Session Manager` component located on the `XRI Network Game Manager` prefab allows changing the `SessionType` between `Distributed Authority` (default) and `Local Only`. Local Only allows for a direct connection and can be used for both offline or LAN environments. Local Only bypasses the Unity Cloud connection and therefore will not take advantage of host migration or `Vivox Voice Chat`.

[Image: The Session Manager component shows the Session Type field being selected. The Local Only value is selected and highlighted to show that the Local Only session type will be used.]

Session Manager Session Type configured for Local Only.

Upon launching the application, if set to `Local Only` or no internet is available, the users will be greeted with a new window for `Local Connection`. Press `Host Local Room` to create a new room based on your IP. press `Join Local Room` to join a room based on the entered IP address `127.0.0.1` is the default for easy testing on same device setups.

[Image: Local Connection window shows the UI that users will go interact with to connect to each other locally. There is a button for hosting a local room, as well as joining a specific room based on IP.]

Local Connection UI window.

## **Known Issues**

Known issues:

- Multiplayer Play Mode and ParrelSync cannot be used together. If you encounter errors with MPPM, exit the editor and delete the library folder.

- Versions of Multiplayer Play Mode before 1.4.x can result in errors being thrown on startup.

- Resetting objects after throwing them over the edge will cause them to occasionally get stuck in a kinematic state.

- On certain PCVR setups users may encounter `xrLocateSpace: XR_ERROR_TIME_INVALID` resulting in poor performance and frame stuttering.

- There is a known issue with Multiplayer Services version `1.1.4` and `1.1.5` that can prevent users from rejoining when using Distributed Authority.
