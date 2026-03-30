[Image: image]

# Activating Your Education Grant License (EGL)

Tutorial

foundational

+0XP

10 mins

21

(275)

Unity Technologies

[Image: Activating Your Education Grant License (EGL)]Summary

In this tutorial, you will learn how to activate your Education Grant License.

The Unity Education Grant License gives institutions multi-seat access to Unity's real-time 3D development tool, compatible with institutional computers and servers. The license empowers students to start creating immersive experiences for any industry.

Resources

- [config.zip](https://unity-connect-prd.storage.googleapis.com/20240229/044de364-1fee-4036-865c-9f4d2c26d184/config.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950466716)
- [Packages and Templates for EGL Deployments](https://docs.google.com/spreadsheets/d/1iXdKr1g9LT94FumnpXQGIgaplTqKHZxx1uz8b4Q17NY/copy)

Languages available:

EnglishEnglishEnglish

## 1. Apply for an Education Grant License

Q&A (0)

1. Apply for an Education Grant License [here](https://unity.com/products/unity-education-grant-license).
2. Once your application is successfully processed, a serial license key will be sent to the email used associated with your Unity account. Use this license key to activate your Unity license from either the Unity Hub or from the Command Line (Terminal).

Mark step as complete

## 2. License Activation for Mac

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

#### **Activating EGL from the Unity Hub**

1. Launch the Unity Hub
2. Log into your Unity account; for sign-in less workflow, refer to Step 5 of this tutorial
3. Click on Preferences (gear icon)
4. Go to Licenses > Add License > Activate with serial number
5. Enter the serial number you’ve received via email and click on Activate License
6. Your license is now activated. You should see the Activation and Expiration dates.

***Note***: While in Preferences, click on **Installs** to see the location of where Unity is installed on your machine and which version(s) are installed.

> *`For demo purposes, return your license from the HUB to proceed with installing your license from the Command Line (Terminal). This step is not needed if the license key has not been activated by another method. To return your license, go to Preferences > Licenses > Return License. Close the Hub and this step is complete.`*

#### **Activating EGL from the Mac Command Line (Terminal)**

1. Launch the Terminal on the Mac
2. Use one of the two commands below, depending on where your Unity has been installed. Replace the following **values** with your Unity license and account information. You will use your Unity account email, password and license key you have received from Unity.

**/Applications/Unity/Hub/Editor/[unity_version]/Unity.app/Contents/MacOS/Unity -quit -batchmode -serial [unity_license_key] -username '[unity_email]' -password '[unity_password]'

If you do not use the Hub, use the following command:

/Applications/Unity/Unity.app/Contents/MacOS/Unity -quit -batchmode -serial [unity_license_key] -username '[unity_email]' -password '[unity_password]’'**
3. Press enter, there is no feedback expected in the Command line
4. To check if your license was installed successfully, open the Unity Hub
5. Click on Preferences (gear icon) > Licenses to see if your Unity license is installed.

**Note: This process will need to be repeated for all machines in the learning setting.**

Mark step as complete

## 3. License Activation for Windows

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

#### **Activating EGL from the Windows Command Line (Terminal)**

1. Launch the  Command Prompt on Windows
Click on the Start menu and type in cmd. Use the command cd .. to go to your root directory.
2. In the root directory, navigate to your Installation Directory while using the command below. *We wrap the path in quotes or else Windows thinks the path stops at Program since there is a space between Program and Files.*
3. Use the command prompt:
**a.** Use the command below to navigate to the path:
**cd "Program Files\Unity\Hub\Editor\[unity_version]\Editor"**
4. Once you are in the Installation Directory type or use the command below, updating the values with your Unity license and account information                                                                                                                  **Unity.exe -batchmode -username [unity_email] -password [unity_password] -serial [unity_license_key] -quit**
5. Your command prompt will now look like:
**C:\Program Files\Unity\Hub\Editor\[unity_version]\Editor\ Unity.exe -batchmode -username [unity_email] -password [unity_password] -serial [unity_license_key] -quit**
6. Press enter, there is no feedback expected in the Command line
7. To check if your license was installed successfully, open the Unity Hub
8. Click on Preferences (gear icon) > Licenses to see if your Unity license is installed.

**To check if the license is installed successfully from the Command Prompt**

1. Launch the Command Prompt
2. Use the command cd .. to go back to your root directory
3. Enter the command prompt:
**C:\Program Files\Unity\Hub\Editor\[unity_version]\Editor\Data\Resources\Licensing\Client>Unity.Licensing.Client --showEntitlements**
**a.**Navigate to
**cd "Program Files\Unity\Hub\Editor\[unity_version]\Editor\Data\Resources\Licensing\Client"**
4. Go to: Unity.Licensing.Client --showEntitlements
5. Press enter and Windows should display your license installed under EntitlementGroupId

**Note: This process will need to be repeated for all machines in the learning setting.**

Mark step as complete

## 4. Renewing your Education Grant License

Q&A (0)

1. You can renew your license [here.](https://learn.unity.com/education-grant-license/?page=licenseInformation)
2. Ensure you are signed into the account that owns the Unity Education License.
3. Click **Renew License.**

Mark step as complete

## 5. License Activation Without Student Sign In

Q&A (0)

**Note:**With the latest version of the Unity Hub (3.6.0), Unity now requires sign in to access the Unity Hub. If you are a school that is affected by this update, please follow the instructions below:

Please update the following file to bypass the Unity Hub sign in process to enable access, create a new file if one does not already exist.

**Filename:** **services-config.json**. Please refer to the section below for the file location.

If you have never set-up a services-config.json file before, you will need to create both the config directory (folder) and the services-config.json file.

**Reminder:** If this file already exists, you can update it with the below data entries.

**File location:**

MacOS: /Library/Application Support/Unity/config

Windows: C:\ProgramData\Unity\config

Linux: /usr/share/unity3d/config

Please set this flag in the file -

```csharp
{
  "hubDisableSignInRequired": true
}
```

After setup is complete, please close and relaunch the Unity Hub for changes to be made. Upon relaunch, the Hub will read the values in services-config. Also, keep in mind, you can only activate the license key when you're signed in. So you will still need to sign in, activate the license, and sign out.

If you continue to encounter issues, try setting this additional flag in your config file -

```csharp
{
  "hubDisableWelcomeScreen": true,
}
```

Your services-config.json file should now look like this -

```csharp
{
  "hubDisableWelcomeScreen": true,
  "hubDisableSignInRequired": true
}
```

We've provided the config folder and the services-config.json file in a zip folder you can download at the top of this page in the **Overview** section, under **Materials**labeled ***config.zip***. You'll need to open/decompress the zip file and place the config folder in one of the file locations provided above. Reminder to close and reopen the Unity Hub if you make any additional changes to your config file.

If you have enabled the **"hubDisableSignin": true** flag in the past, you will need to remove this flag and replace it with the flags we've given you above. You can choose to keep **"hubDisableSignin": true**flag, however, this will remove the sign in feature all together. So only do this **after** you have activated the license in the Unity Hub. If you want to activate a license without signing into the Unity Hub, you will need to use the command line instructions in steps 2 & 3.

With all three flags enabled, your services-config.json file would look like this:

```csharp
{
    "hubDisableWelcomeScreen": true,
    "hubDisableSignin": true,
    "hubDisableSignInRequired": true
}
```

Mark step as complete

## 6. Manage License Activations - Reimaging Your Computers

Q&A (0)

Reasons you would like to remove activations:

- Your school has reimaged their computers
- You have new computers and need to remove the old machines that activated your license

If you would like to remove activations, please follow the instructions below.

1. Go to [https://id.unity.com/en/serials](https://id.unity.com/en/serials)
2. At the bottom of the page, you can select '**Remove all my activations'** to remove all machines that have activated your license. Or you can choose '**Activations'** at the right of your screen to select and remove specific machines.

[Image: image]Mark step as complete

## 7. Unity Installer Without Admin Privileges

Q&A (0)

If you would like to install Unity without requiring administrator privileges, please refer to the detailed instructions provided in the [official documentation](https://docs.unity3d.com/6000.2/Documentation/Manual/ent-unpriv-install.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950466716). It includes step-by-step guidance to help you complete the installation process smoothly.

Make sure to carefully follow the outlined steps to ensure a successful installation. If you encounter any challenges or require additional assistance, the documentation also contains troubleshooting tips and resources.

Mark step as complete

## 8. Packages and Templates for Education Grant License (EGL) Deployments

Q&A (0)

This [spreadsheet](https://docs.google.com/spreadsheets/d/1iXdKr1g9LT94FumnpXQGIgaplTqKHZxx1uz8b4Q17NY/copy) is designed to be an easy and accessible reference point for instructors preparing to bring Unity into the classroom. Once you’ve determined your course outlines, refer to the [spreadsheet](https://docs.google.com/spreadsheets/d/1iXdKr1g9LT94FumnpXQGIgaplTqKHZxx1uz8b4Q17NY/copy) to identify the Unity packages and templates that align with your course needs. Once you’ve made your selections, pass this spreadsheet to your IT department, who can ensure the packages/templates are downloaded alongside the core Unity software.

For information on how to download packages, please refer to the instructions below.

To download templates, open the Unity Hub, and select **New Project** to access the template list.

[Image: image]

Any template that shows this icon must be downloaded.

[Image: image]

Select the requested template and choose the download template button on the right side.

[Image: image]

Once all templates have been downloaded, select the cancel button to exit the project creation process.

[Image: image]

The templates are now downloaded and available for use.

Mark step as complete

## 9. Unity Support

Q&A (0)

If you encounter any issues with your Education Grant License (EGL), please [submit a ticket](http://support.unity.com/) with our support team.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
