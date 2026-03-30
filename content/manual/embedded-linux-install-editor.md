This version of Unity is unsupported.

Get started with Embedded Linux

Set up your environment for Embedded Linux

# Install the platform package for Embedded Linux

Install the platform package for Embedded Linux on Windows, Linux, and macOS.

**Note:** The Unity Editor for Embedded Linux is available under separate terms. For licensing and download information, contact your Account Manager or the [Unity Sales](https://create.unity.com/unity-for-industries?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774936027336) team.

## Requirements and compatibility

Your system must meet the [System requirements for the Unity Editor](system-requirements.html#editor).

## Installation

To install the platform package for Embedded Linux on your system, follow these steps:

1. On the [Unity Embedded Linux releases page](https://share.unity.com/secure/workspace/?packageId=X5V5-X4ZA&tok=ABSEtmXcHP3PiI45MoMqixlXO0HdCWQkLA:1730214520137&enableStreamSaver=true#directory/49a52700-1b0f-4714-99cc-4e4748249a10&ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774936027336), go to **EmbeddedLinux builds** > **Unity 6**.

**Note:** If you’re unable to access the Embedded Linux releases page, contact your Account Manager or the [Unity Sales](https://create.unity.com/unity-for-industries?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774936027336) team.

2. Select a Unity version and download the setup installer for your operating system.

| Operating system | Installer file extension |
| --- | --- |
| Windows | .exe |
| Linux | .xz |
| macOS | .pkg |

3. Run the installer to install to a folder of your choice.

4. On the [Unity download archive](https://unity.com/releases/editor/archive?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774936027336), install the corresponding Unity 6 Editor version in the same folder through the [Unity Hub](https://docs.unity3d.com/hub/manual/index.html).

**Note:** The Editor version must match the setup installer version for the Editor to work correctly.

The Editor for Embedded Linux is now installed for your Windows or Linux systems. Next, set up your environment for [Embedded Linux](embedded-linux-environment-setup.html). However, if you’re using macOS, follow the steps in [Additional instructions for macOS installation](#macOS).

### Additional instructions for macOS installation

On macOS, the Unity Editor and platform package for Embedded Linux require additional steps because the default path where Unity installs the package might not work.

To make sure the Editor and platform package work as expected, follow these steps:

1. Move the installed Editor application from `/Applications/Unity/Hub/Editor/<version>/Unity` to `/Applications/Unity/Unity-<version>/Unity`.

2. Open the downloaded setup installer package. A dialog with the following message appears: `"UnitySetup<platform><version>.pkg can’t be opened because Apple cannot check it for malicious software."`

3. On your computer, go to **System Settings** > **Privacy & Security** > **Security**. A dialog with the following message appears: `"UnitySetup<platform><version>.pkg was blocked from use because it is not from an identified developer."`

4. Click **Open Anyway**.

5. Enter your password and click **Open**.

6. Install the package and re-enter your password.

7. Go to the **Unity Hub** window and find the chosen version under **Installs**.

8. Click the gear icon for the chosen version and select **Uninstall**.

9. Click **Locate** in the Unity Hub to select the installed Editor application from the `/Applications/Unity/Unity-<version>/Unity` path.

The Unity Editor and platform package for Embedded Linux now works correctly on macOS. Next, [set up your environment for Embedded Linux](embedded-linux-environment-setup.html).

## Additional resources

- [Build for Embedded Linux from the command line](embedded-linux-build-command-line.html)

Get started with Embedded Linux

Set up your environment for Embedded Linux
