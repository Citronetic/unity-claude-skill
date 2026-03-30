[Image: image]

# 3.3 - Lighting

Tutorial

Beginner

+10XP

90 mins

9

(368)

Unity Technologies

[Image: 3.3 - Lighting]SummarySkills

In this lesson, you will learn how to use light modes, lightmapping, and light probes in order to optimize the lighting for VR. By the end of this lesson, the lighting in your scene will be both beautiful and performant.

This lesson is part of the [Create with VR course](https://learn.unity.com/course/create-with-vr).

Languages available:

EnglishEnglishEspañol한국어English

## Overview Video

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- English

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

## 1. Experiment with your lighting settings

Q&A (0)

Before you start editing the lighting of the scene, you will create a new Lighting Settings asset and get familiar with the settings at your disposal.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- English

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**1.  Access the render pipeline settings:**

- In the Project window, search for and select the “UniversalRenderPipelineAsset”.

**2.  Experiment with the render pipeline settings:**

- In the Inspector for the URP Asset, in the **Lighting** section, play with the settings.
- Be sure to include experimenting with the **Per Object Limit** slider to appreciate the limitations it places on complex lighting.

**3.  Create new Lighting Settings for your scene:**

- Click **Window**> **Rendering**>**Lighting** to open the Lighting window.
- Dock the window next to the Inspector, then click the **New Lighting Settings** button to create a new profile.

**4.  Experiment with the environmental lighting in your scene:**

- At the top of the Lighting window, select the **Environment** tab
- Experiment with the settings to see the impact they have on your scene.

[Image: image][Image: image]

You should now be able to locate and adjust the lighting settings from within the Lighting window and the URP Asset.

**Related resources:**

- [Universal Render Pipeline Asset](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.0/manual/universalrp-asset.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949580232)

**Note**: In Unity 2022.3, the **New** lighting settings button is in a different position than what is shown in the video.

[Image: image]Mark step as complete

## 2. Prepare and bake your first lightmap

Q&A (0)

The time has come to attempt your first lightmap bake. There are just a few steps you need to take beforehand.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- English

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**1.  Allow all of your lights to be baked:**

- Locate and select each light in the scene that will not move or turn on and off. You can do this by searching “t:light” in the Hierarchy search bar.
- In their Light components, inside the **General** fold-out, change the **Mode** setting from **Realtime** to **Baked**.

**2.  Allow objects in your scene to have light baked onto them:**

- In the Hierarchy, select all non-moving, static objects.
- At the top of the Inspector, make sure the **Static** check box is selected.
- **Note:**Remember to select the objects in your Lighting section (e.g. lamps, sconces, chandeliers, etc)

**3.  Remove the background and foreground objects from your lightmap to reduce bake times:**

- Select each large background object.
- In its Mesh Renderer component, for the **Lightmapping** section, reduce the **Scale in Lightmap** property to 0.

**4.  Try baking your lights:**

- Navigate to the **Lighting**window.
- At the bottom of the **Scene** tab, click **Generate Lighting.**
- **Note:**if baking freezes or seems to crash, try changing the Lightmapper baking system to Progressive GPU instead of Progressive CPU.

**5.  Temporarily minimize the time to generate your lightmap:**

- Reducing the **Lightmap Resolution** to a value between 5-10.
- Reduce some of the other values which contribute to lightmap quality (samples, bounces, etc).

[Image: image][Image: image][Image: image]

You should now have a low resolution baked lightmap in your scene.

**Related resources:**

- [Light modes: Baked, Mixed, Realtime](https://docs.unity3d.com/Manual/LightModes.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949580232)

**Note**: In Unity 2022.3, the **Scene Display** settings button is now an icon and in a different position than what is shown in the video.

[Image: image]Mark step as complete

## 3. Adjust scene lighting and re-bake

Q&A (0)

Now that you have attempted your first bake, you can take some time to properly light your scene and try again.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- English

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**1.  Clear your lightmap and view lighting changes in real time:**

- At the bottom of the Lighting window, click the **dropdown** next to Generate Lighting.
- Select **Clear Baked Data.**

**2.  View the effect of as many lights as possible:**

- Select the **UniversalRenderPipelineAsset**.
- Temporarily increase the **Additional Light** **Per Object Limit** to the maximum.

**3.  Remove the default lights that came with the Room prefab:**

- In the Hierarchy, expand the Room_[style] prefab.
- Delete the two child Point Lights.
- **Note:** you will have to open the room prefab in order to delete the lights.

**4.  Add more realistic lighting from actual light sources in your scene:**

- From the **Course Library** > **Prefabs** > **Lighting** folder, make sure you have enough light-emitting objects to light your scene.
- To add child Light objects to those lighting elements, right-click them in the Hierarchy and select **Light**> **Point / Spot Light**.

**5.  Get more even, balanced lighting in the room:**

- On your **Directional Light**, try increasing the **Intensity** and **Indirect Multiplier**values.
- In your Lighting settings, try increasing the **Indirect Intensity** value.

**6.  Test how your lighting looks:**

- Click Generate Lighting again.
- If you have time, increase the **Lightmap Resolution** and other Light settings values to see how it might look in its final state.
- **Note:**if you are getting splotchy, pixelated shadows: from the Lighting settings, set the **Lightmap Compression**property to **None.**

[Image: image]

You should now have rough lighting baked into your scene looking approximately the way you want.

**Related resources:**

- [Configuring Lightmaps](https://learn.unity.com/tutorial/configuring-lightmaps#)

Mark step as complete

## 4. Add mixed lighting

Q&A (0)

If you want your objects to cast shadows in real time, but also get the benefits of the performance from baked lightmaps, you can use “Mixed” lighting.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- English

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**1.  Get real-time shadows on top of your baked lightmaps:**

- Change the **Mode** of your **Directional Light** to “Mixed**”**(instead of “Baked”).

**2.  See the new mixed lighting take effect:**

- In the **Lighting** window, click **Generate Lighting** to re-bake your lighting
- Notice what effect the mixed light has on the lighting and shadows of your dynamic objects.

[Image: image]

You should now have real-time shadows on your dynamic objects coming from your directional light.

**Related resources:**

- [Mixed Lighting](https://docs.unity3d.com/Manual/LightMode-Mixed.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949580232)

Mark step as complete

## 5. Add light probes

Q&A (0)

In order to get more realistic real-time lighting from all of your baked lights in the scene, you need Light Probes.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- English

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**1.  Add a new Light Probe Group as a child of the Room object:**

- In the Hierarchy, right-click the **Room_[style]** object and select **Light** > **Light Probe Group**.

**2.  To be able to edit the light probes:**

- Make sure **Gizmos**with **3D Icons** are enabled from the top-right corner of the Scene view.
- Click the **Edit Light Probes** button in the Inspector of the Light Probe Group.

**3.  Duplicate and reposition the light probes around the room:**

- Drag **selection** boxes around probes to select them.
- Use the **Move** tool to position the probes.
- Use **Ctrl/Cmd+D** to duplicate selected probes.
- **Note:**It may be helpful to switch to Isometric view by clicking on the small icon below the axis gizmo in the top-right corner of the Scene view.

**4.  To position your light probes properly:**

- Make sure you have probes in areas where lighting changes drastically either in color or intensity.
- Make sure your probes are not inside objects.

**5.  See the effect of your light probes:**

- From the Lighting window, re-generate your lighting and test to see the lighting on your dynamic objects.

[Image: image]

You should now have approximate dynamic lighting in your scene based on your baked lighting calculated by your light probes.

**Related resources:**

- [Light Probes](https://docs.unity3d.com/Manual/LightProbes.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949580232)
- [Light Probe Groups](https://docs.unity3d.com/Manual/class-LightProbeGroup.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949580232)
- [Configuring Light Probes](https://learn.unity.com/tutorial/configuring-light-probes-2019-3#)

**Note**: In Unity 2022.3, the **Edit Light Probe** button is in a different position than what is shown in the video.

[Image: image]Mark step as complete

## 6. Finalize lightmap

Q&A (0)

Now that your lighting is configured approximately the way you want, you are ready for a more final higher resolution lightmap.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- English

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**1.  Make sure your lighting is optimized appropriately for your target device:**

- Test your app in the manner you expect it to be used by users (i.e. if you are targeting a mobile device, test it on the standalone device, not connected to your computer).
- Make sure you’re hitting your target frame rate.
- For instructions on how to build and run your app on the actual device, refer to the instructions in the [VR Project Setup tutorial](https://learn.unity.com/tutorial/vr-project-setup).

**2.  Generate a single lightmap file rather than several smaller ones:**

- Increase the **Max Lightmap Size** to 4096.
- It is recommended to have a single lightmap file rather than several smaller ones.

**3.  If you are getting splotchy or pixelated shadows:**

- Set the **Lightmap Compression**property to **None.**

**4.  If you are happy with the general appearance of your lighting and are ready to generate your final lightmap:**

- In the **Lighting** window, increase the Lightmap Resolution to somewhere between 20 and 80.
- If you want, continue to adjust other lighting settings (samples, bounces, etc) to get the desired result.

[Image: image]

Your lighting should now look the way you want and be optimized for performance.

**Related resources:**

- [Setting up Lighting in Unity](https://docs.unity3d.com/Manual/BestPracticeLightingPipelines.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949580232)

Mark step as complete

## 7. Recap

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- English

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**New Functionality:**

- Complex performant lighting

**New Concepts and Skills:**

- Baked vs Realtime lighting
- Lightmapping
- Light probes

**Next Lesson:**

- Publishing

Mark step as completeOptional Step

## 8. Extension Activities

Q&A (0)

If you want to further develop your skills, explore new concepts, and improve your project, check out some of the optional extension activities below.

Each one is tagged as [Easy], [Medium], [Difficult], or [Expert] and will also include a [Requires Programming] tag if some coding is required.

**1.  Add a new skybox [Easy]**

Create or download a new skybox to enhance the look of your scene:

- Learn more about [Skyboxes](https://docs.unity3d.com/Manual/skyboxes-using.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949580232)
- You can download skyboxes on the Unity Asset Store - search for Free assets
- Add your skybox from the Lighting window in the Environment tab
- Warning: if you have a high resolution skybox, and have your skybox set as the Source of your Environment Lighting in the Environment tab, Lightmapping may take a very long time. You can change your Source to a Gradient to avoid this.

[Image: image][Image: image]

**2.  Continue tweaking lighting [Medium]**

Continue to fine-tune the lighting in your scene and the lighting settings to make it as beautiful and performant as possible:

- Try adjusting values in the [The Lighting Window](https://docs.unity3d.com/2020.1/Documentation/Manual/lighting-window.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949580232) to see what kind of results you get.
- Learn more about lighting in Unity:

- [Intro to Lighting and Rendering](https://learn.unity.com/tutorial/introduction-to-lighting-and-rendering#)

[Image: image]

**3.  Explore Reflection Probes [Hard]**

Add reflection probes into your scene in order to get more realistic reflections from metallic objects:

- [Reflection Probes Manual](https://docs.unity3d.com/Manual/class-ReflectionProbe.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949580232) and all about [using reflection probes](https://docs.unity3d.com/Manual/UsingReflectionProbes.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949580232)
- You should probably duplicate the Material_Main to create a new “Material_Main_Shiny”, increase the material’s metallic property, then assign that material to a shiny object in your scene that should be reflective.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
