[Image: image]

# Add accessories to your filter

Tutorial

Beginner

+10XP

30 mins

1

(135)

Unity Technologies

[Image: Add accessories to your filter]SummarySkills

When you’re tracking the user’s face, you're also effectively tracking the position and rotation of their head. This allows you to add 3D models on and around the user’s head, like a halo or funny glasses!

In this tutorial you'll do the following:

- Add 3D accessories to the face tracker.
- Place the 3D accessories, using the Face Reference Mesh as a reference.
- Learn about the basics of mesh optimization and working with custom assets.
- Build and test your updated app.

Languages available:

EnglishEnglishEspañol日本語한국어English

## 1. Overview

Q&A (0)

So far you’ve added a 2D texture to your app, but AR filters can do more. In this tutorial you’ll do the following:

- Add 3D accessories to the face tracker.
- Place the 3D accessories, using the Face Reference Mesh as a reference.
- Learn about the basics of mesh optimization and working with FBX custom assets.

By the end of this tutorial, you’ll be ready to start making your own 3D face filters.

Mark step as complete

## 2. Explore the 3D accessories

Q&A (0)

The package you downloaded for this project contains pre-made accessories that you can add to your scene. In the **Project** window, go to **Assets**>**_BasicFaceFilter**>**Prefabs** and take some time to explore the provided models.

[Image: image]Mark step as complete

## 3. Attach an accessory to the face tracker

Q&A (0)

Before you attach one of these 3D accessories to the face tracker, you need to add a visible face reference to your **AR Default Face** to help you place it properly.

Follow the below instructions to add a face reference:

**1.**  In the **Project** window, make sure that you're in the**Prefabs** folder.

**2.**  Double-click the **AR Default Face** prefab in the folder to open the prefab in the **Scene** view.

**3.**  Drag the **Face_Reference_Mesh** prefab from the **Project** window into the **Hierarchy**window to act as a reference. To zoom in on the**Face_Reference_Mesh**, double-click it in the **Hierarchy**window.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%0:00Remaining Time -0:001xPlayback Rate

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

**4.**  Drag one of the provided accessories onto the **AR Default Face** GameObject in the **Hierarchy**window.

This will add the accessory to the prefab as a child of the GameObject.

[Image: image]

**5.**  Use the Transform tools to place your chosen accessory in the correct position. You can also adjust the rotation and scale if necessary.

[Image: image]

**Note:** If you need to refresh your memory, you can [review the Transform tools and their shortcuts](https://learn.unity.com/tutorial/explore-the-unity-editor-1#6273f00fedbc2a7f158cc1f2).

**6.**  In the **Inspector**window, disable the **Face_Reference_Mesh**GameObject.

[Image: image]

**7.**  In the **Hierarchy**window, select the back arrow in the top left of the window to exit prefab editing mode.

[Image: image]Mark step as complete

## 4. Build and test

Q&A (0)

When you build your application now, the accessory you added should appear in the correct position on your face. This may take some trial and error. If you’re not happy with the position of the accessory, open the prefab again to make further adjustments.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%0:00Remaining Time -0:001xPlayback Rate

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

Follow the below instructions to build and test your app:

**1.**  Save the scene.

**2.**  Open the **Build Settings** window (**File** > **Build Settings**).

**3.** Make sure that your device is plugged in and then select **Build and Run**to build the app onto your device.

**4.** The application will open automatically on your device.

When a face is detected, the application should display the accessory you added (though it may not be in the perfect position).

**Note:** For a reminder of how to build to your device, you can review the process for [Android](https://learn.unity.com/tutorial/66edba36edbc2a0512b946f6?uv=2022.3#66edba36edbc2a0512b94703) or[iOS](https://learn.unity.com/tutorial/66edba36edbc2a0512b946f6?uv=2022.3#66edba36edbc2a0512b946f9).

Mark step as complete

## 5. Tips on using your own assets

Q&A (0)

Since AR typically runs on mobile hardware, it’s critical to create and use optimized assets for your applications. Optimization is a complicated topic, and there are many ways to optimize experiences.

**Mesh optimization** is one of the most important ways you can ensure better performance in your games and apps. The mesh for every model in a game or application (like the accessory that you just added to your AR app) is made up of polygons. The number of polygons in your game assets influences the performance of your game. High polycounts require a lot of real-time calculations and management, leading to a drop in frame rate.

For mobile hardware, keeping the polycount between 300 and 1500 polygons per mesh will yield good results, whereas for desktop platforms the ideal range is 1500 to 4000 polygons. Keep in mind that these are only general recommendations. The overall polycount in the scene is also critical, meaning a scene with lots of characters would need to use even lower polycount models.

If you want to know more about mesh optimization, you can explore the following resources:

- [Arm & Unity Presents: 3D Art Optimization for Mobile Applications](https://learn.unity.com/course/3d-art-optimization-for-mobile-gaming-5474), which is an intermediate course for mobile development.
- [Unity’s documentation on normal maps](https://docs.unity3d.com/Manual/StandardShaderMaterialParameterNormalMap.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950556810), which you can use to give low-poly models high-poly details.

Mark step as completeOptional Step

## 6. Import FBX files

Q&A (0)

If you create your own assets and export them to Unity in FBX format, the materials and textures are usually embedded in the model during the export process by the modeling application, such as [Blender](https://www.blender.org/) or [Maya](https://www.autodesk.com/products/maya/overview).  When you import these models into Unity, the materials and textures will often not be visible and the model will only display in gray.

To fix this, you need to extract the embedded materials and textures after you have imported the model:

**1.**  In the **Project** window, navigate to the **Assets** folder and select the imported FBX model.

**2.**  In the**Inspector**window, select the **Materials** tab.

[Image: image]

**3.**  Select **Extract textures** and choose the folder where the texture will be saved.

**4.**  Select **Extract materials** and choose the folder where the materials will be saved.

Mark step as complete

## 7. More things to try

Q&A (0)

If you want to further develop your skills, explore new concepts, or improve your project, check out some of the optional activities below. Each one is tagged as either Easy or Difficult, so you can choose the level of challenge.

These activities are entirely optional, so if you’re not interested, no problem — just skip this step. We do recommend attempting at least one of them in order to get the most out of this learning experience. Good luck!

#### Easy: Import accessories from the Asset Store

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%0:00Remaining Time -0:001xPlayback Rate

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

The Unity Asset Store has many different kinds of assets you can use in your applications. Remember to use low-poly models for your app to ensure good performance on mobile devices. The [Hats pack - 3D Microgames Add-Ons](https://assetstore.unity.com/packages/3d/hats-pack-3d-microgames-add-ons-163011) from Unity is a great asset package to start with!

To extend your project:

- Find low-poly assets in the Unity Asset Store.
- Import them into your project.
- Add the accessory model or prefab to your app using the process that you followed earlier in this tutorial.

#### Difficult: Create new accessories

There are many ways to create your own 3D accessories both inside of Unity and with third-party applications like [Blender](https://www.blender.org/), [3dsMax](https://www.autodesk.com/products/3ds-max/free-trial), or [Maya](https://www.autodesk.com/products/maya/free-trial). In Unity, you can use combinations of primitive shapes that share an empty parent, like cubes, spheres, and capsules, to create new looks and objects. You can also use Unity tools like [ProBuilder](https://learn.unity.com/tutorial/working-with-shapes-in-probuilder#) to create more complex shapes inside of the Editor.

When you’re ready to create your own 3D masterpiece, remember to use the Face Reference Mesh as a reference for the placement, rotation, and scale of your own 3D accessories.

Mark step as complete

## 8. Next steps

Q&A (0)

In this tutorial you learned how to add additional 3D accessories to a face filter. In the next tutorial, you'll make things even more exciting with special effects!

Mark step as complete

## Complete this Tutorial

Mark all steps complete
