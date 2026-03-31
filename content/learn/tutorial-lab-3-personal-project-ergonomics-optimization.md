[Image: image]

# Lab 3 - Personal Project Ergonomics & Optimization

Tutorial

Beginner

+10XP

120 mins

1

(202)

Unity Technologies

[Image: Lab 3 - Personal Project Ergonomics & Optimization]SummarySkills

By the end of this lab, your personal project will be filled with beautiful art, optimized for performance and ready to share.

This lab will draw on skills learned in the following lessons:

- [Comfort & Accessibility](https://learn.unity.com/tutorial/3-1-comfort-and-accessibility?uv=2020.2&courseId=60183276edbc2a2e6c4c7dae&projectId=6018353dedbc2a0f634b7918)
- [Optimization](https://learn.unity.com/tutorial/3-2-optimization?uv=2020.2&courseId=60183276edbc2a2e6c4c7dae&projectId=6018353dedbc2a0f634b7918)
- [Lighting](https://learn.unity.com/tutorial/3-3-lighting?uv=2020.2&courseId=60183276edbc2a2e6c4c7dae&projectId=6018353dedbc2a0f634b7918)
- [Building & Sharing](https://learn.unity.com/tutorial/3-4-building-and-sharing?uv=2020.2&courseId=60183276edbc2a2e6c4c7dae&projectId=6018353dedbc2a0f634b7918)

This lab is part of the [Create with VR course](https://learn.unity.com/course/create-with-vr).

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

## 1. Fill in Design Document for ergonomics & optimization

Q&A (0)

Before you resume work on your project, you need a plan for what you’re actually going to work on. You will continue filling out your design document so you have a clear plan of action for this lab.

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

**1.  Pick up where you left off with your design document:**

- Re-open the document you created during [Lab 1](https://learn.unity.com/tutorial/lab-1-vr-personal-project-basics) and continued working on during [Lab 2](https://learn.unity.com/tutorial/lab-2-personal-project-events-interactions).

**2.  Fill out Section 5 (Optimization & Publishing) of the document:**

- List the ways you intend to make the user experience more comfortable or accessible.
- Write down the target performance metrics for your target device(s).
- Describe the lighting strategy you will implement.

**3.  (Optional) Add more specific details to your design document:**

- Continue to fill out section 6 (Other features)
- Continue to fill out section 7 (Sketch)
- Continue to fill out section 8 (Timeline)

You should now have section 4 of your Design Document complete, providing direction for this lab where you will be implementing your app’s core functionality.

**Related resources:**

- [Oculus Dev Documentation](https://developer.oculus.com/documentation/unity/)

Mark step as complete

## 2. Replace primitive objects with 3D art

Q&A (0)

Before we begin optimizing our app and improving the user experience, it’s time to replace some of our primitive assets with some real 3D art.

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

**1.  Browse assets on the asset store:**

- Go to [assetstore.unity.com](http://assetstore.unity.com/).
- Sign in to the Unity Asset Store.
- Search for “low poly” assets.
**Tip:** You can also filter by “Free”.

**2.  Import an asset pack you like:**

- Click **Add to My Assets** > **Open in Unity.**
- From the Package Manager, click **Download.**
- Then click **Import** to add the assets to your project.

**3.  To create your own 3D models inside Unity using Probuilder:**

- From the Package Manager, install the **Probuilder** package.
- From the top menu in Unity, click **Tools > Probuilder > Probuilder Window.**

**4.  Replace the primitive shapes in your scene with custom or imported 3D art:**

- Add the 3D models as child objects of empty parent objects in your scene.
- To achieve appropriate scale, adjust the scale of the child object rather than the scale of the parent object.
- As necessary, add colliders to your objects to make them collide appropriately.
- As necessary, adjust the attach points of your objects so that they are grabbed appropriately.
- If possible, try to use the same shaders to reduce draw calls.

Your scene should now look a lot nicer with some real 3D art.

**Related resources:**

- [About Probuilder](https://unity3d.com/unity/features/worldbuilding/probuilder)  / [Probuilder Docs](https://docs.unity3d.com/Packages/com.unity.probuilder@4.0/manual/index.html?_ga=2.71858515.1191904534.1604942181-59568313.1601905412)

Mark step as complete

## 3. Improve comfort and accessibility

Q&A (0)

You should take time to consider how comfortable and accessible your app will be. This will allow it to be enjoyed by as many people as possible and make sure fewer people are excluded from using your app due to design decisions you’ve made.

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

**1.  Make sure your app’s locomotion is as comfortable as possible.**

- Follow the instructions in the [Comfort and Accessibility tutorial](https://learn.unity.com/tutorial/3-1-comfort-and-accessibility).

**2.  Add settings and menu options that increase the accessibility of your app:**

- Follow the instructions in the [Comfort and Accessibility tutorial](https://learn.unity.com/tutorial/3-1-comfort-and-accessibility).

Your app should now be more comfortable and accessible, allowing it to be enjoyed by more people than it was before.

Mark step as complete

## 4. Optimize draw calls and polycount

Q&A (0)

Now that the app is largely functional and has some real 3d assets, you can attempt to optimize your app’s performance to hit your target metrics.

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

**1.  Determine your app is currently performing, including fps, draw calls (batches), and polycount (tris):**

- Follow the instructions in the [Optimization tutorial](https://learn.unity.com/tutorial/3-2-optimization?uv=2020.2&courseId=60183276edbc2a2e6c4c7dae&projectId=6018353dedbc2a0f634b7918).

**2.  Reduce polycount (tris):**

- Follow the instructions in the [Optimization tutorial](https://learn.unity.com/tutorial/3-2-optimization?uv=2020.2&courseId=60183276edbc2a2e6c4c7dae&projectId=6018353dedbc2a0f634b7918), including replacing high-poly assets with lower-poly ones.

**3.  Reduce draw calls (batches):**

- Follow the instructions in the [Optimization tutorial](https://learn.unity.com/tutorial/3-2-optimization?uv=2020.2&courseId=60183276edbc2a2e6c4c7dae&projectId=6018353dedbc2a0f634b7918), including marking objects as static and using shared materials.

**4.  Improve jagged lines with anti-aliasing:**

- Follow the instructions in the [Optimization tutorial](https://learn.unity.com/tutorial/3-2-optimization?uv=2020.2&courseId=60183276edbc2a2e6c4c7dae&projectId=6018353dedbc2a0f634b7918).

**5.  Quickly experiment with changes to your app’s performance:**

- Locate the **UniversalRenderPipelineAsset** and tweak its settings to see what has an impact.

You should now have an understanding of how your app is performing and, if it is performing poorly, what the cause of that poor performance might be. You should not be discouraged if your frames per second is still too low, though, since you have not yet optimized lighting.

**Related resources:**

- [Seven stages of optimizing mobile VR content in Unity](https://unity3d.com/how-to/optimize-mobile-VR-games)
- [Optimizing your VR/AR Experiences](https://learn.unity.com/tutorial/optimizing-your-vr-ar-experiences)
- [Unit 9 - Optimizing VR Apps](https://learn.unity.com/tutorial/unit-9-optimizing-vr-apps)
- [VR Best Practice](https://learn.unity.com/tutorial/vr-best-practice)
- [Optimizing graphics performance](https://docs.unity3d.com/Manual/OptimizingGraphicsPerformance.html)

Mark step as complete

## 5. Optimize lighting

Q&A (0)

In VR, performance is critical to the user experience and lighting is one of the biggest components of performance. In order to optimize performance for VR, baking most of the lighting is highly recommended, using a minimal number of real-time or mixed lights.

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

**1.  Add and bake environmental lighting in your scene:**

- Follow the instructions in the [Lighting tutorial](https://learn.unity.com/tutorial/3-3-lighting).

**2.  Improve realtime lighting with mixed lights and light probes:**

- Follow the instructions in the [Lighting tutorial](https://learn.unity.com/tutorial/3-3-lighting).

You should now have baked lighting in your scene with realtime effects on dynamic objects from mixed lights and light probes.

Mark step as complete

## 6. Confirm settings and build your app

Q&A (0)

The final step before building a version of an app that you would consider sharing or publishing is double-checking that you are using all of the recommended build settings for your target platform.

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

**1.  Confirm that your app’s project settings are following best practices for VR:**

- Follow the instructions in the [Building and Sharing tutorial](https://learn.unity.com/tutorial/3-4-building-and-sharing?uv=2020.2&courseId=60183276edbc2a2e6c4c7dae&projectId=6018353dedbc2a0f634b7918), including Player settings, Quality settings, Build settings, Render Pipeline Asset properties, Lighting and shadow settings

**2.  Build a version of your app that can be shared or published:**

- Follow the instructions in the [Building and Sharing tutorial](https://learn.unity.com/tutorial/3-4-building-and-sharing?uv=2020.2&courseId=60183276edbc2a2e6c4c7dae&projectId=6018353dedbc2a0f634b7918).

You should now have a built app, ready for distribution, following all best practices for build settings.

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

- New art
- Improved comfort and accessibility
- Optimized key metrics
- Improved, baked lighting
- Built app

**New Concepts & Skills:**

- Optimizing and publishing your own VR app.

Next **Lab**:

- Next Steps and the rest of your VR development life!

Mark step as complete

## Complete this Tutorial

Mark all steps complete
