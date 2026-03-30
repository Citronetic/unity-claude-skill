This version of Unity is unsupported.

Get started with QNX

Set up your environment for QNX

# Install the platform package for QNX

Install the platform package for QNX on Linux, macOS, and Windows.

**Note:** The Unity Editor for QNX is available under separate terms. For licensing and download information, contact your Account Manager or the [Unity Sales](https://create.unity.com/unity-for-industries?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774937424045) team.

## Requirements and compatibility

- Your system must meet the [System requirements for the Unity Editor](system-requirements.html#editor).

- You must have the [QNX Software Center](http://www.qnx.com/download/index.html) installed.

- Before starting the Unity Editor, make sure the QNX SDP Environment is set up correctly for the Editor to register it.

## Installation

To install the Unity Editor for QNX on your system, follow these steps:

1. On the [Unity QNX releases page](https://share.unity.com/receive/?packageCode=FHoasdODzNpPVzoBTWM5aAZpR4MsAcBqznym08KAb5Q#keycode=GmL8ozleFR3hAp30lEoPFV1_QraWh3wYk-OqYfFgP8g&ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774937424045), open **QNX builds**.
**Note:** If you’re unable to access the QNX releases page, contact your Account Manager or the [Unity Sales](https://create.unity.com/unity-for-industries?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774937424045) team.

2. Select the folder for the specific Unity version you want to work with.

3. Download the setup installer for your operating system.

| Operating system | Installer file extension |
| --- | --- |
| Windows | .exe |
| Linux | .xz |
| macOS | .pkg |

4. Run the installer to install to a folder of your choice.

5. On the [Unity download archive](https://unity.com/releases/editor/archive?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774937424045), install the corresponding Unity 6 Editor version in the same folder through the [Unity Hub](https://docs.unity3d.com/hub/manual/index.html).

**Note:** The Editor version must match the setup installer version for the Editor to work correctly.

The Editor for QNX is now installed for your Windows or Linux systems. Next, [set up your environment for QNX](qnx-environment-setup.html). However, if you’re using macOS, follow the steps in [Additional instructions for macOS installation](#macOS).

### Additional instructions for macOS installation

On macOS, the Unity Editor and platform package for QNX require additional steps because the default path where Unity installs the package might not work.

1. Move the `/Applications/Unity/Hub/Editor/<version>/` folder to `/Applications/Unity/Unity-<version>/`. For example, if using Unity Editor version 6000.0.58f2, move the contents of `/Applications/Unity/Hub/Editor/6000.0.58f2/` to `/Applications/Unity/Unity-6000.0.58f2/`.

2. Open the `UnitySetup-QNX-Support-for-Editor-<version>` setup installer `.pkg` file and follow the installation prompts.

3. In Unity Hub, go to the **Installs** tab.

4. Select the **Manage** option for the corresponding Unity version and choose **Remove from Hub**.

5. From the **Installs** tab, select **Locate** and navigate to the new location in the `/Applications/Unity/` folder.

The Unity Editor and platform package for QNX now works correctly on macOS. Next, set up your [environment for QNX](qnx-environment-setup.html).

## Additional resources

- [QNX product documentation](http://www.qnx.com/developers/docs/index.html)

- [Build for QNX from the command line](qnx-build-command-line.html)

Get started with QNX

Set up your environment for QNX
