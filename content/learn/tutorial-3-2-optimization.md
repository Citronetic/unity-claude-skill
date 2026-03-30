[Image: image]

# 3.2 - Optimization

Tutorial

Beginner

+10XP

90 mins

16

(418)

Unity Technologies

[Image: 3.2 - Optimization]SummarySkills

In this lesson, you will learn about each of the key performance metrics for VR (fps, polycount, and draw calls) and how to ensure these metrics are optimized. By the end of this lesson, your app will be more optimized for performance.

This lesson is part of the [Create with VR course](https://learn.unity.com/course/create-with-vr).

Languages available:

EspañolEnglishEspañol한국어Español

## Video de descripción general

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

## 1. Take stock of current fps

Q&A (0)

Before you start optimizing your code, you will want to identify your performance goals and how to evaluate if your app is meeting them.

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

**1.  Determine your device’s target frames per second (FPS):**

- Use the links below as reference and write down your target FPS.

**2.  Determine the frames per second (fps) running on your device:**

- From the **Course Library** > **Prefabs** > **Testing**, drag the **FPS Overlay UI** into your Hierarchy.
- Assign your **Main Camera** to the **Render Camera** property.
- Run your application to see your FPS.
- **Note**: If you are running the app through the Unity editor, this will not be an accurate prediction of the FPS.

**3.  View the FPS in the Unity Stats window:**

- In **Game View**, in the top-right corner, enable the **Stats** window, and locate the FPS number.

**4.  Explore the Unity Profiler:**

- Click the Play button.
- From the top menu bar, select **Window** > **Analysis** > **Profiler**.
- Click the red circular record button in the Profiler window.

**5.  To test the true frames per second running on a mobile headset:**

- Build and run the app on your device with no connection to the computer.

[Image: image][Image: image]

You should now know where to find target metrics for your device and how to find the frames per second on your device.

**Related resources:**

- Target performance metrics

- [HTC Vive performance targets](https://hub.vive.com/storage/app/doc/en-us/MobileVRperformancechecklist.html#:~:text=The%20target%20framerate%20for%20Vive,as%20Desktop%20PCs%20and%20Laptops.)
- [Oculus performance targets](https://developer.oculus.com/documentation/unity/unity-perf/)
- Unity Tools

- [Stats window](https://docs.unity3d.com/Manual/RenderingStatistics.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949548345)
- [Frame debugger](https://docs.unity3d.com/Manual/FrameDebugger.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949548345)
- [Profiler](https://docs.unity3d.com/Manual/ProfilerWindow.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949548345)

Marcar paso como completado

## 2. Minimize draw calls

Q&A (0)

In order to render a single frame, Unity “draws” things to the screen in “batches” of objects. Every time Unity “calls” on the engine to “draw” something to the screen is called a “draw call”. If you can minimize draw calls, you can improve performance.

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

**1.  Determine your device’s target draw calls (batches):**

- Consult your platform’s website to find your target “Draw Call” metric.

**2.  Find the number of draw calls in your scene:**

- Open the Game Stats window and locate the “Batches” (draw call batches) value.

**3.  Visualize how batching and draw calls can affect frame rate:**

- In the top menu, select **Window** > **Analysis** > **Frame Debugger**.
- Click **Enable**.
- Use the left/right arrows in the Frame Debugger window and watch in the Game view to see the step-by-step creation of a single frame.

**4.  Make sure “Static Batching” is enabled:**

- From the top menu, select **Edit > Project Settings > Player** panel.
- In the**Other Settings** foldout, make sure **Static Batching**is enabled.

**5.  Improve batching by marking unmoving objects as “Static”:**

- Make sure your Hierarchy is organized so that all static objects can be selected easily.
- Select all static objects (including lighting objects like lamps and chandeliers).
- At the top of the Inspector select the **Static** checkbox.
- When prompted, choose “**Yes, change children**”.
- Notice the effect this has on Batches when you click **Play**.

**6.  If your Batches number is still very high (over 175):**

- Consider removing the mirror object from the scene.

[Image: image]

You should have now reduced the number of draw calls through batching objects with shared materials.

**Related resources:**

- [Draw call batching](https://docs.unity3d.com/Manual/DrawCallBatching.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949548345)

Marcar paso como completado

## 3. Minimize polycount

Q&A (0)

The most straight-forward performance metric is the poly (polygon) count. The poly count is often measured in “Tris” counting triangles or “Verts” counting vertices.

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

**1.  Determine your device’s target polycount (triangles):**

- Consult your platform’s website to find your target “triangles” metric.

**2.  Find the number of triangles in your scene:**

- Open the Game Stats window and locate the “tris” (triangles) value.

**3.  Visualize your triangles more clearly:**

- From the **Scene** view, change from the “Shaded” draw mode  to the **Wireframe** draw mode.
- **Note:**In Unity 2021 LTS: the draw mode dropdown is represented by a circular icon at the top of Scene view:

[Image: image]

**4.  Determine the number of triangles for an individual object:**

- Select an object.
- In its Mesh Filter component, click its Mesh.
- Select that Mesh in the Project window to view its triangle count in the Inspector.
- **Note:**  Anything under 1,000 tris is pretty “low poly”

**5.  Notice how your tris change depending on what objects are in frame:**

- Monitor the stats window as you rotate the XR Rig around.

**6.  If you are not hitting the suggested target for Tris:**

- Remove or replace assets with high polygon counts until you reach your target
- You can also try removing the mirror from your scene.

[Image: image][Image: image]

You should now be hitting your target for Tris and have an understanding of where you are spending your tri budget.

**Related resources:**

- [Occlusion culling](https://docs.unity3d.com/Manual/OcclusionCulling.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949548345)

**Note**: Depending on which version of the Unity Editor you’re using, the **Scene display** settings may be an icon in the upper right of the viewport and not in the upper left as shown in the video.

[Image: image]Marcar paso como completado

## 4. Optimize textures

Q&A (0)

In addition to evaluating the draw calls Unity makes, it is also important to consider the size of the textures used in your scene.

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

**1.  Add a painting to the scene to better analyze the impact of texture settings:**

- From the **Course Library** > **Prefabs** > **Art**, add a piece of Art to a wall in your scene.

**2.  Access the material for the objects in your scene:**

- In the painting’s Mesh Renderer component, expand the **Material**section at the bottom of the inspector..

**3.  Locate the texture atlas used for the material:**

- From the material’s **Surface Inputs** foldout, click the thumbnail next to **Base Map**to locate the texture in the Project window.
- Click this texture to view the texture’s **Import Settings**.

**4.  Experiment with the texture settings:**

- At the bottom of the texture’s settings, adjust the **Max Size, Resize Algorithm,** **Format**, and **Compression**properties.
- Click **Apply**to see the impact each setting has on the visuals in your scene.
- Once you have observed the difference, revert back to the original settings.

**5.  Enable “mip maps”: to automatically reduce the resolution of textures seen from a distance :**

- Locate and select the InteriorColorSwatch texture in the Project window.
- In the Inspector, expand the**Advanced** fold-out, and select **Generate Mip Maps.**
- Click **Apply**. This will generate and apply lower quality textures on farther-away objects.

**6.  Enable “Anisotropic Filtering” to improve the visuals of textures when viewed at a shallow angle:**

- Locate and select the **WoodFloor_Texture**in the Project window.
- In the Inspector, drag to increase the **Aniso Level** slider.
- Click **Apply**. This will increase Anisotropic Filtering to improve texture visuals when viewed at shallow angles.

[Image: image]

You should now know which settings exist to optimize textures for performance and/or visual quality.

**Related resources:**

- [Importing Textures](https://docs.unity3d.com/Manual/ImportingTextures.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949548345)
- [Texture import settings (and mip maps](https://docs.unity3d.com/Manual/class-TextureImporterOverride.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949548345))
- [Anisotropic Filtering](https://docs.unity3d.com/ScriptReference/Texture-anisoLevel.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949548345)

Marcar paso como completado

## 5. Optimize particles and post-processing

Q&A (0)

Particles and post-processing also impact performance. You will look at how these can affect frames per second and ensure they are not causing performance issues in the project.

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

**1.  Optimize the particle’s shader so that it does not respond to dynamic lights:**

- Select the Particle_Fire object.
- Locate the **Shader** property drop-down at the bottom of the Inspector.
- Make sure your particle is using the **Universal Render Pipeline**>**Particles**>**Unlit**shader.

**2.  Experiment with Post-processing:**

- In your **Main Camera**object’s Camera component, enable the **Post-processing**setting.
- Add a Volume component.
- Click the **New** button to create a new Post-Processing profile.
- You can then experiment by clicking the **Add Override** button and enabling new effects.
- **Warning:**If you are going to add any post-processing effects, color adjustments are a good option. Lens distortions and motion blurs induce cyber sickness; avoid using these effects.

[Image: image][Image: image]

You should now have appropriate particles and post-processing for your app.

**Related resources:**

- [Choosing shaders in URP](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.1/manual/shaders-in-universalrp.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949548345)
- [Post-processing in the Universal Render Pipeline](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.1/manual/integration-with-post-processing.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949548345)

Marcar paso como completado

## 6. Enable anti-aliasing

Q&A (0)

You may have noticed that the edges of some of the 3D objects appear jagged. This can be immersion-breaking in VR. We can smooth these jagged edges with anti-aliasing.

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

- In the Project window, search for “UniversalRenderPipelineAsset” and select it to see its properties in the inspector.

**2.  Enable anti-aliasing in the Universal Render Pipeline (URP) asset:**

- In the **Quality** fold-out, change the **Anti-Aliasing** setting from Disabled to **4x**.

**3.  If you want to add additional anti-aliasing on the main camera:**

- On your **Main Camera** object, in the Camera component, expand the **Rendering** fold-out.
- Change the **Anti-Aliasing** setting to “Fast Approximate Anti-Aliasing (FXAA).
- Make sure the **Post-Processing** setting is enabled to be able to see the effect.
- **Note:** This may have a significant impact on FPS.

**4.  Apply anti-aliasing to the mirror:**

- Locate the “Mirror_Texture” in your project.
- Change the **Anti-Aliasing** property from “None” to “4 samples”.

[Image: image][Image: image]

Your main camera and your mirror should now have much smoother edges than they did before.

**Related resources:**

- [Anti-Aliasing](https://docs.unity3d.com/Packages/com.unity.postprocessing@2.3/manual/Anti-aliasing.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949548345)

Marcar paso como completado

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

- Higher frame rate

**New Concepts and Skills:**

- Target metrics for VR
- Polycount
- Draw calls
- Texture and materials optimization
- Particles and FX optimization
- Anti-aliasing

**Next Lesson:**

- Lighting

Marcar paso como completadoPaso opcional

## 8. Extension Activities

Q&A (0)

If you want to further develop your skills, explore new concepts, and improve your project, check out some of the optional extension activities below.

Each one is tagged as [Easy], [Medium], [Difficult], or [Expert] and will also include a [Requires Programming] tag if some coding is required.

**1.  Learn more about VR optimization [Medium]**

Read more about optimization techniques and strategies for VR. Note that a big part of optimization is Lighting, which we will tackle in the next lesson:

- [Seven Stages of Optimization for Mobile VR](https://unity3d.com/how-to/optimize-mobile-VR-games?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949548345)
- [Optimizing your VR/AR Experiences](https://learn.unity.com/tutorial/optimizing-your-vr-ar-experiences)
- [Optimizing Graphics Performance](https://docs.unity3d.com/Manual/OptimizingGraphicsPerformance.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949548345)

**2.  Research platform-specific tools [Hard]**

Depending on what platform you’re using, there may be specific tools available for monitoring performance on your device:

- If it requires a separate application download, you may need to “sideload” the app onto your device rather than downloading it from an official store (e.g. using SideQuest for Oculus).
- Examples:

- Oculus - [Oculus Developer Hub](https://developer.oculus.com/documentation/unity/ts-odh/) and the [OVR Metrics Tool](https://developer.oculus.com/documentation/tools/tools-ovrmetricstool/)
- HTC Vive - [Android Systrace](https://hub.vive.com/storage/app/doc/en-us/PerformanceProfiling.html)
- Valve / SteamVR - [Frame Timing Tool](https://developer.valvesoftware.com/wiki/SteamVR/Frame_Timing)

**3.  Explore the Unity Profiler [Expert]**

Get more comfortable with the Unity Profiler window.

- [Unity Profiler Window manual](https://docs.unity3d.com/Manual/ProfilerWindow.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949548345)
- [Optimization guide using the Profiler](https://docs.unity3d.com/Manual/BestPracticeUnderstandingPerformanceInUnity.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949548345)
- [Diagnosing performance issues](https://learn.unity.com/tutorial/diagnosing-performance-problems#5c7f8528edbc2a002053b597)

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
