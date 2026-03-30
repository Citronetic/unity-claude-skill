This version of Unity is unsupported.

Introduction to build profiles

Manage scenes in a build

# Create and manage build profiles

Create and manage **build profiles**A set of customizable configuration settings to use when creating a build for your target platform. [More info](build-profiles.html)
See in [Glossary](Glossary.html#Buildprofile) to configure your application for multiple platforms.

## Create a build profile

To create a build profile, use the following steps:

1. Navigate to **File** > **Build Profiles**.

2. In the **Build Profiles** window, select **Add Build Profile** to open the **Platform Browser** window. The **Platform Browser** window presents a list of supported platforms that include desktop, mobile, web, and **closed platforms**Includes platforms that require confidentiality and legal agreements with the platform provider for using their developer tools and hardware. These platforms aren’t open to development unless you have an established relationship with the provider. For example PlayStation®, Game Core for Xbox®, and Nintendo®.
See in [Glossary](Glossary.html#Closedplatform).

3. In the **Platform Browser** window, select the target platform. If the selected platform isn’t currently installed on your machine, use **Install with Unity Hub** and follow the installation instructions. Before installing any platform modules, refer to the [System requirements](system-requirements.html) page.

4. Enter a unique name for the build profile in the **Name** field. The name identifies the build profile in the **Build Profiles** window.

5. Select any recommended packages to install from the **Packages** section. Required packages are automatically selected for installation when creating a build profile from the **Platform Browser**.

6. Select **Add Build Profile**.

7. Select the required [platform settings](build-profiles-reference.html).

8. Select **Switch Profile** to set the new build profile as the active profile. This will attach an **Active** badge to the build profile name.

**Note**: If you plan to deploy your application on a closed platform, check the license requirements. For further information, refer to [Platform Module Installation](https://unity.com/platform-installation?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774936855057).

## Create a build profile from a platform profile

You can duplicate an existing platform profile and create a new build profile from it. To do that, right click the selected platform and select **Copy to new profile**.

## Manage build profiles

To manage build profiles, right-click on any build profile name. These options allow you to do the following:

- Copy to a new build profile.

- Rename a build profile.

- Delete a build profile.

**Note**: There are no limits to how many build profiles you can have in a project.

## Additional resources

- [Build Profiles window reference](build-profiles-reference.html)

- [Build Profiles scripting API reference](../ScriptReference/Build.Profile.BuildProfile.html)

- [System requirements](system-requirements.html)

Introduction to build profiles

Manage scenes in a build
