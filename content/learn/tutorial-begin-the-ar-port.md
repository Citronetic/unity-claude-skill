[Image: image]

# Begin the AR port

Tutorial

Beginner

+10XP

60 mins

1

(20)

Unity Technologies

[Image: Begin the AR port]SummarySkills

You now have an understanding of the core concept of the game and have begun to generate ideas for the AR port. Now it’s time for you to begin the process of bringing the game to mobile.

In this tutorial you'll do the following:

- Create a new AR Project for your port
- Import the existing game assets into the new project
- Complete an initial test build on your mobile device

Languages available:

EnglishEnglishEspañol日本語한국어English

## 1. Overview

Q&A (0)

At this point, you’ve already done some initial design brainstorming for what the AR version of this game could look like. You have also thoroughly explored the desktop project in order to understand how it was built. You are now ready to begin the actual work of porting the project from the desktop platform to AR.

In this tutorial, you will start by getting the project to run on a mobile device. You’ll create a new AR-compatible Unity project, import the assets and scenes directly into that new project, and then test it without any modifications on your mobile device.

By the end of this tutorial, your project will look something like the video below.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

You might already have an idea of how well the game will run on this new platform, or you might not be sure. Once you actually experience the application running on your mobile device, you'll definitely notice the main problems!

Mark step as complete

## 2. Create a new project with the AR Mobile project template

Q&A (0)

After Unity and the appropriate build modules have finished installing, you are ready to create a new project using the AR Mobile project template.

To create a new project using Unity Hub, complete the following steps:

**1.**In the **Projects** tab of the Hub, select the**New project** button and then select the **2022.3.1f1 LTS** version.

**2.**  Select the **AR Mobile Core** template from the template list and select the download template button to download the template to your computer.

[Image: image]

**3.**Give your project a meaningful name, like “**[your-name]_AR_Final_Project**”, and select a suitable location to save it on your computer.

**4.**Select your desired Unity Cloud Organization from the dropdown, and optionally disable **Connect to Unity Cloud**.

We won’t be using any gaming services in this project.

**5.**Select **Create** **project** and wait for Unity to load.

Mark step as complete

## 3. Create a new scene and test build

Q&A (0)

**Important:** You should have already completed the [**Get Started with AR**](https://learn.unity.com/project/get-started-with-ar) project to configure your mobile device and AR development environment.

Before you begin production on your port, double-check that the Unity project and your mobile device are properly configured for AR development.

Follow these instructions to set up your new scene and build a test app from this project:

**1.** Go to**File**>**New Scene**. Select the **AR** scene template from the list, and select **Create**.

**2.** Save the new scene in the **Scenes** folder as “ARPort”.

**3.** Open the build settings (**File** > **Build Settings**).

**4.** In the **Scenes in Build** section, select **Add Open Scenes** to add your new ARPort scene to the Scenes in Build list.

**5.** Disable the **SampleScene** in that same list.

[Image: image]

**6.**  Switch the build platform to iOS or Android, depending on your testing device. This may take a few minutes.

**7.**Select **Player Settings**at the bottom left corner of the Build Settings window.

**Note:** If the **Project Settings**window opens with a different section visible, select **Player** in the left navigation bar.

**8.**  Change the **Company Name** or **Product Name**to something new and unique. A unique identifier is required to successfully build for iOS devices.

[Image: image]

**Important:** Your identifier cannot include any spaces or special characters. You can only use upper and lower case letters. If you include any special characters, your app will not build.

**9.**  Build and test the app.

The app will load with the rotating cube visible on your device. If the app didn’t build successfully, review the [**Get Started with AR**](https://learn.unity.com/project/get-started-with-ar) project for guidance on how to debug it.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

Mark step as complete

## 4. Export the assets from the desktop version

Q&A (0)

You’ve confirmed that your Unity project is properly configured to build for the mobile AR platform. Next, you need to get all the assets from the desktop project into this new AR project.

Follow these instructions to export the assets from the desktop project:

**1.**Open the Desktop UFO Unity project.

**2.**In the **Project**window, right-click the **_UFO Game** folder, then select **Export Package.**

[Image: image]

**Important:**Make sure that you export the **_UFO Game** folder, and not the entire **Assets** folder. If you export the entire Assets folder, it will include the project settings which will overwrite the AR project settings.

**3.**In the **Exporting package** window, select **Export**.

**4.**  Choose a location and name for your exported package, then select **Save** to export the assets.

[Image: image]

When the export process is complete, the new **.unitypackage** file will appear in your file browser window.

[Image: image]Mark step as complete

## 5. Import the assets into the AR port project

Q&A (0)

Follow these instructions to import the assets from the desktop version into the new Unity AR project:

**1.**Open the empty Unity AR project you created earlier.

**2.**From the main menu, select **Assets**> **Import Package**> **Custom Package.**

**3.**Locate and select the package you just exported from the desktop project to open the**Import Unity Package** window.

**4.**Select **Import**to import the assets.

[Image: image]

**5.**  In the **Project** window, check that all the assets and scenes from the desktop version are now present in your AR project.

[Image: image]Mark step as complete

## 6. Regenerate Visual Scripting library

Q&A (0)

In order for the visual scripts to be linked properly in this new project, Unity needs to generate all of the required nodes and libraries. To prompt Unity to initiate this process, all you need to do is open one of the visual scripts in the project.

Follow these instructions to resolve the errors related to the imported visual scripts:

**1.**From the **Project** window, go to **_UFO Game** > **Scenes**, then open **MainScene.**

**2.**In the **Hierarchy**window, select the **UFO**GameObject.

When the GameObject is selected, you will notice some **NullReferenceException** errors in the Console. These errors will appear if you select any GameObject that contains visual scripts.

[Image: image]

**3.**In the**Inspector** window, locate any of the Script Machine components and select **Edit Graph** to open the Graph Editor.

A new progress window should appear, which will generate the required nodes and libraries for Visual Scripting.

[Image: image]

**4.**Close the Graph Editor, and clear the errors from the **Console**window.

**5.**Select the **UFO**, **Farmer**, or **Game Manager** GameObjects, all of which contain visual scripts. Check that there are no longer errors appearing in the **Console**window.

**Note:** If warnings or errors persist, close the project and reopen it.

Mark step as complete

## 7. Run the game on your mobile device

Q&A (0)

The moment has finally come when you can test the desktop version of the game on your mobile device. But first you have to configure the project’s build settings.

You may remember from the previous [**Explore the Unity project**](https://learn.unity.com/tutorial/66f6f28aedbc2a073daf7fd5?uv=2022.3) project tutorial that navigating between the scenes relies on the scenes’ build indices. The build index value for each scene corresponds to the order of the scenes in the Scenes in Build list. For this app to function, the scenes need to be added to the build in the following order: **StartScene**, **MainScene**, **WinScene**, then **LoseScene**.

Follow these instructions to add the scenes to the build and test the game on your device:

**1.**Go to **File**> **Build Settings**.

**2.**Delete any scenes currently listed in the **Scenes in Build** section.

You can select them and press **Delete**, or right-click the scene and select **Remove Selection**.

[Image: image]

**3.**From the**Project** window, click and drag **StartScene**, **MainScene**, **WinScene**, and **LoseScene** into the **Scenes in Build** section.

Make sure they are listed in the correct order. This order is referenced in the visual script graphs, so changing it will result in the incorrect scene loading.

[Image: image]

**Note:**If clicking and dragging is difficult, you can open each scene one at a time, then use the **Add Open Scenes** button. You can also easily change the order after the scenes have been added by clicking and dragging the scene names to reposition them within the list.

**4.**Build and run the game on your device.

This first build will take a few minutes.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

The buttons on the **StartScreen** should all work as expected, and allow you to start the game. However, once you get to the **MainScene** you’ll be stuck with no way to move the UFO or enable the beam.

Mark step as complete

## 8. Add an AR camera to the main scene

Q&A (0)

There is currently no AR functionality in the app. The most important scene to implement AR functionality in will be **MainScene**. Before you actually change any of the user experience, you need to implement an AR camera, which will lay the scene on top of the user's physical environment.

Follow these instructions to implement an AR camera in the **MainScene**:

**1.**Open the **MainScene**.

**2.**In the Hierarchy, delete the **MainCamera** GameObject.

**3.**In the **Hierarchy**window, right-click and select**XR** > **XR Origin (Mobile AR).**

The **XR Origin (Mobile AR)** includes the AR camera.

**4.**In the **Hierarchy**window, right-click and select**XR** > **AR Session.**

**5.**Build and run the game to test the AR camera.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

When the **MainScene** starts, you should be able to see your physical environment as well as the farm, but the farm will be gigantic – and the controls still won’t work.

Even though it doesn’t work yet, it is still very exciting to see the UFO game in AR!

**Note:** The app may also ask for permission to use the device camera when **MainScene** opens.  If this happens, be sure to approve access.

Mark step as complete

## 9. More things to try

Q&A (0)

If you want to further develop your skills, explore new concepts, or improve your project, check out some of the optional activities below. Each activity is identified as being either Easy, Medium, or Difficult so you know what level of difficulty to expect.

These activities are entirely optional, so if you’re not interested, no problem — just skip this step.

We do recommend attempting at least one of them in order to get the most out of this learning experience, however. Good luck!

#### Easy: Add more notes to your design document

Now that you’ve experienced the app on your mobile device, you have a much clearer picture of how the game will feel on a smaller mobile screen. Take some time to record any additional ideas or concerns that you have identified during this tutorial in your design document.

#### Medium: Add an fps overlay to your app

In the [AR Portal project](https://learn.unity.com/tutorial/66f6b3d1edbc2a068de15e02?uv=2022.3), you added a user interface that displayed the current frames per second (fps) while the app was running on the device. Now that you are overlaying digital content on your device’s camera feed, you should begin considering your app’s performance. It’s important that your app runs at a minimum 50fps for a positive user experience.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

Return to the **AR Portal** project and export the **FPS Overlay UI** prefab and the **Display FPS** script, then import them into this AR port project and incorporate it into **MainScene**.

Mark step as complete

## 10. Next steps

Q&A (0)

Congratulations! You've successfully begun your AR Port. In the next tutorial, you will begin actually editing and designing the project to create an amazing mobile AR experience.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
