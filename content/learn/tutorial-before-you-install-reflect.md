[Image: image]

# Before you Install Reflect

Tutorial

Beginner

+10XP

15 mins

1

(110)

Unity Technologies

[Image: Before you Install Reflect]Summary

This tutorial covers the basic requirements needed to install and run Unity Reflect.

Languages available:

EnglishEnglish日本語English

## 1. Introduction

Q&A (0)

Unity Reflect has a few requirements to run the various parts of the application, specifically:

- Software version requirements
- Unity Editor version
- Hardware required to run the plugin with Revit
- Network requirements
- A Unity account

Mark step as complete

## 2. Supported Software Versions

Q&A (0)

**Autodesk Revit**

- 2018*, 2019, 2020, 2021

**Revit 2018 is still supported but is not maintained due to Autodesk’s policy of supporting only the most recent three versions.*

**Autodesk Navisworks**

- 2019, 2020, 2021

**Rhino**

- 6

**Sketchup**

- 2019, 2020

**Unity Editor**

- Unity 2019.2, 2019.3, 2019.4, 2020

Mark step as complete

## 3. System Specifications

Q&A (0)

#### **Windows**

- **OS:** Windows 10
- **CPU:** Intel Core i5 7th Gen or equivalent
- **RAM:** 16GB
- **GPU:** Nvidia GeForce GTX 1050ti

#### **MacOS**

Unity Reflect does not currently run native on MacOS. Running the application on a Mac will require either Boot Camp, or a Virtual Machine, with Windows installed. Boot Camp is the suggested option, as it will free up more resources for the system.

- **OS:** Mojave
- **CPU:** Intel Core i5 7th Gen or equivalent
- **RAM:** 16GB
- **GPU:** Radeon Pro 555X

Mark step as complete

## 4. Network Configuration

Q&A (0)

#### **Ports Configuration**

By default, the Reflect service uses a random available port every time it’s started. In some cases, you may want to force Reflect to use a specific port when running.

To host the Reflect service on a static port:

1. Open the file *%ProgramData%\Unity\Reflect\syncServiceConfig.json file.* If this file doesn’t exist, you can create it.
2. Set the ExternalPort property to the desired value.

```csharp
{
 "ExternalPort": 59876
}
```

The change will take effect the when the service is restarted.

#### **Configuring your firewall**

The Reflect installation will automatically create an inbound rule in your Windows firewall. This rule allows other devices to download Reflect models hosted on your PC. If the creation of the rule fails for any reason, or if you want to make it more stringent and allow connections on the port configured in the *syncServiceConfig.json* file, run the following command in an elevated command prompt. (Port 59876 is used as an example in the localport argument.)

```csharp
netsh advfirewall firewall add rule name="Unity Reflect Service" protocol=TCP dir=in action=allow program="%programfiles%\Unity\Reflect\SyncService.exe" localport=59876
```

You may then delete the default rule (also named Unity Reflect Service) using the Windows firewall interface.

**Note:** These configurations do not take effect if traffic is blocked at the router level. A network administrator may need to unblock a port in the network-level firewall.

#### **URLs to whitelist**

Reflect needs access to the following URLs. If your network limits access to unauthorized websites, be sure to whitelist the following:

- [https://docs.unity3d.com/reflect/manual](https://docs.unity3d.com/reflect/manual?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774951550404)
- [https://web.p.reflect.unity3d.com](https://web.p.reflect.unity3d.com/?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774951550404)
- [https://id.unity.com](https://id.unity.com/)
- [https://api.unity.com](https://api.unity.com/)
- [https://ipv4.icanhazip.com](https://ipv4.icanhazip.com/)
- [https://fonts.googleapis.com](https://fonts.googleapis.com/?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774951550404)

Mark step as complete

## 5. Creating a Unity ID

Q&A (0)

Unity Reflect needs a Unity account to run. Clients who need access to a Unity Reflect project on Unity Reflect Viewer also need a Unity account.

**1.**Go to the [Unity Account](https://id.unity.com/) sign-up page (**Figure 01**).

[Image: image]

**2.** Enter your details and select **Create a Unity ID**button to sign up for a free Unity account (**Figure 02**). Keep in mind that the email you use here will be the one that is used to share a Unity Reflect project.

[Image: image]Mark step as complete

## 6. Next Steps

Q&A (0)

This tutorial covered the prerequisites for Unity Reflect. You should now be ready to proceed with your first project. Ensuring that all the requirements are met before you proceed will guarantee a smooth and optimal experience when you start using Unity Reflect in your project workflow.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
