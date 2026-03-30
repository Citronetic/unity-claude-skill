[Image: image]

# Create a new project for marker-based AR

Tutorial

Beginner

+10XP

30 mins

12

(205)

Unity Technologies

[Image: Create a new project for marker-based AR]SummarySkills

In this tutorial, you’ll set up your marker-based AR project in Unity and test your app using a 3D model of your choice.

Languages available:

日本語EnglishEspañol日本語한국어日本語

## 1. Overview

Q&A (0)

In this tutorial, you’ll create a Unity project in which you’ll develop a marker-based interactive AR app.

**Marker-based AR** makes it possible for your app to detect an image in the real world and trigger some action, such as displaying AR content, when the image is detected.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:00Loaded: 0%Remaining Time -0:001xPlayback Rate

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

An **AR marker** is an image that your app will search for in the real world. When the app detects the marker, it will project a 3D model on top of the marker in AR. The marker works somewhat like a QR code, except that instead of taking you to a website, it can trigger an entire AR experience.

In this tutorial, you’ll set up your project and select the 3D model that will appear when the marker is detected. This can be a model that we have provided, or one of your own. We’ve also provided you with multiple AR markers to choose from, but you may wish to create a marker of your own, especially if you’re using your own custom model.

Later in this project, you’ll add a series of UI buttons to allow your user to rotate the object, display text, play audio, or to do some other action unique to your chosen model.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:00Loaded: 0%Remaining Time -0:001xPlayback Rate

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

By the time you’ve completed this project, you’ll probably have a lot of new ideas on how you can use marker-based AR in your own apps!

ステップを完了としてマーク

## 2. Use cases for AR markers

Q&A (0)

Marker-based AR apps are used across a wide variety of industries, including marketing and games, manufacturing, art, and architecture, just to name a few. The reasons that companies use marker-based AR vary, but often it is used to provide additional content about something in the real world. From fun games that make pizza boxes interactive, business cards that come to life, art that comes off the canvas, or tattoo planning apps that let you place and edit what you want tattoos to look like, marker-based AR has a lot of potential.

To get an idea of what this looks like, explore the links for the examples below:

- Marketing and games ([Pizza Hut Pac-Man](https://www.8thwall.com/toolofnorthamerica/pizza-hut-pacman))
- Provide additional information ([business cards](https://www.youtube.com/watch?v=xBYDmauqdaw), [medical demos](https://www.youtube.com/watch?v=1nZpX9BQEfo))
- Art (ArtVive [demo](https://youtu.be/3yc3tjyAdv0) | [iOS](https://apps.apple.com/us/app/artivive/id1188737494) | [Android](https://play.google.com/store/apps/details?id=com.artivive&hl=en_US&gl=US))
- Utility (Inkhunter [demo](https://www.youtube.com/watch?v=p_Q7eA-C6X0&t=19s) | [iOS](https://apps.apple.com/us/app/inkhunter-try-tattoo-designs/id991558368) | [Android](https://play.google.com/store/apps/details?id=tattoo.inkhunter))

ステップを完了としてマーク

## 3. Before you begin

Q&A (0)

You should have already completed [**Get started with AR**](https://learn.unity.com/project/get-started-with-ar)tutorials. In those tutorials, you complete the following setup tasks:

- Install Unity version****2022.3.62f3 LTS.
- Make sure your mobile device and computer are set up for AR development.
- Download and open a new Unity project configured for AR.
- Deploy a simple AR app to your mobile device that displays a spinning cube in your physical environment.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:00Loaded: 0%Remaining Time -0:001xPlayback Rate

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

If you have already successfully built and run the spinning cube app on your device, you are ready to continue with this tutorial.

ステップを完了としてマーク

## 4. Create a new project

Q&A (0)

Follow these instructions to create your new project:

**1.**In the **Projects** tab of the Hub, select the **New Project**button.

**2.**  Select the AR Mobile Core template from the template list and select the download template button to download the template to your computer.

**3.**Give your project a meaningful name, like “**[your-name]_AR_Project**”, and select a suitable location to save it on your computer.

**4.**Select your desired Unity Cloud Organization from the dropdown, and optionally deselect Connect to Unity Cloud. We will not be using any gaming services in this project.

**5.**Select Create project and wait for Unity to load.

The AR project should now be open in Unity.

ステップを完了としてマーク

## 5. Import the project assets

Q&A (0)

Follow these instructions to import the project assets:

**1.**  Download the[AR Marker assets](https://unity-connect-prd.storage.googleapis.com/20240930/2abaf9fe-8d06-4b5e-97b2-f8afaedeea8f/_ARMarker.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954087310).

**2.**  Unzip the downloaded folder and locate **AR_Marker_Assets.unitypackage**.

**Note:** It’s important to fully unzip the folder rather than looking inside it by double-clicking. Attempting to import unzipped files will result in an error.

**3.**  Drag **AR_Marker_Assets.unitypackage** into the **Assets** folder in the **Project** window of the Unity Editor.

**4.**  When prompted by the Import Unity Package dialog window, select **Import**.

ステップを完了としてマーク

## 6. Create a new scene and test build

Q&A (0)

**Important:** You must have already completed the [**Get Started with AR**](https://learn.unity.com/project/get-started-with-ar) project to configure your mobile device and AR development environment before you can continue.

Before you begin production, double-check that Unity and your mobile device are properly configured for AR development.

Follow these instructions to set up your new scene and build a test app:

**1.** Go to**File**>**New Scene**, select the **AR** scene template from the list, and select **Create**.

**2.** Save the new scene as “ARMarker” in the Scenes folder.

**3.** Open the build settings (**File** > **Build Settings**).

**4.** Below the **Scenes in Build** section, select **Add Open Scenes** to add your new ARMarker scene to the Scenes in Build list.

**5.** Disable the **SampleScene** in that same list.

[Image: image]

**6.**  Switch the build platform to iOS or Android, depending on your testing device.

**7.**In the Player Settings, change the **Company Name** or **Product Name**to something new and unique. A unique identifier is required to successfully build for iOS devices.

**Important:** Your identifier cannot include any spaces or special characters. You can only use upper and lower case letters. If you include any special characters, your app will not build.

**8.**  Build and test the app.

The app will load with the rotating cube visible on your device. If the app didn’t build successfully, review the [**Get Started with AR**](https://learn.unity.com/project/get-started-with-ar) project to debug.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:00Loaded: 0%Remaining Time -0:001xPlayback Rate

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

ステップを完了としてマーク

## 7. Select the model for your app

Q&A (0)

You’ll be using a marker to generate a 3D model in your app. The asset pack you imported in the previous step includes multiple markers and 3D models that you can choose from.

If you prefer, you may also use your own marker and model. Take a look at the assets provided for examples.

Follow these instructions to select a 3D model:

**1.**  In the **Project** window, navigate to the **_ARMarker** > **Prefabs** folder.

[Image: image]

**2.**  Review each of the prefabs, either by dragging them into the **Hierarchy** window or looking at the **Inspector** window's preview when you select them.

**Note:**These tutorials will use the **Fusebox** prefab as an example.

**3.**  Drag your chosen prefab from the **Project** window to the **Hierarchy** window.

**4.** With your prefab selected in the **Hierarchy** window, set the **Transform Position** to **X**=**0, Y**=**0, Z**=**1**.

This will position the model one meter in front of the AR camera, which is approximately the distance a user will typically be from a marker when they scan it with their device’s camera.

**5.**Delete the cube from the **Hierarchy**window.

[Image: image]

**6.**  Save the scene and build the app again. Take note of the size of the model in your environment. In the next step, you can adjust the size if needed.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:00Loaded: 0%Remaining Time -0:001xPlayback Rate

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

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:00Loaded: 0%Remaining Time -0:001xPlayback Rate

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

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:00Loaded: 0%Remaining Time -0:001xPlayback Rate

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

ステップを完了としてマーク

## 8. Adjust the model’s scale

Q&A (0)

Depending on the experience you’re creating, you may want an AR object to appear in your app at varying scales. For certain applications such as training simulations or shopping apps, you would use the object’s true scale. In other situations, such as the **Beachside Town** prefab, you will have to scale it down so it can fit comfortably on your desk.

Follow these instructions to adjust the scale of your model:

**1.**  Expand your chosen GameObject in the **Hierarchy**window so that you can see its child GameObjects. Select the child GameObject named **[your model]Mesh**.

**2.**  Edit the **Scale** of the mesh so that your model appears as you want it to appear in your app, relative to the real world.

[Image: image]

**3.**To achieve a specific real-world scale, temporarily add a cube to the scene and adjust its **Transform Scale** **X**, **Y**, or **Z** values to create a kind of primitive measuring stick. Remember that one Unity unit is equal to one meter in the real world. So if you want your chosen GameObject to be 0.5 meters tall, it should be the same height as a cube scaled down to 0.5.

**4.**Save the scene and rebuild as necessary until you’re satisfied with the scale.

ステップを完了としてマーク

## 9. Next steps

Q&A (0)

In this tutorial you created a new Unity project using the AR Template and imported the project assets. Then, you selected the model that will appear in your app when a marker is detected. In the next tutorial you’ll configure the app so your model only appears when a specific AR marker is detected.

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
