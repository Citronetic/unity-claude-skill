Post-processing in URP

Add post-processing in URP

# Introduction to post-processing in URP

The Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../render-pipelines.html)
See in [Glossary](../Glossary.html#renderpipeline) (URP) includes an integrated implementation of [post-processing](https://docs.unity3d.com/Manual/PostProcessingOverview.html)A process that improves product visuals by applying filters and effects before the image appears on screen. You can use post-processing effects to simulate physical camera and film properties, for example Bloom and Depth of Field. [More info](../PostProcessingOverview.html) post processing, postprocessing, postprocess
See in [Glossary](../Glossary.html#post-processing) effects. This implementation uses the [volume](Volumes.html) framework for post-processing effects.

URP is not compatible with the [Post Processing Stack v2](https://docs.unity3d.com/Packages/com.unity.postprocessing@latest/index.html) package.

The images below show a **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../CreatingScenes.html)
See in [Glossary](../Glossary.html#Scene) with and without URP post-processing:

[Image: A scene without post-processing]
A scene without post-processing

[Image: A scene with post-processing.]
A scene with post-processing.

**Note**: URP does not support Post-processing on OpenGL ES 2.0.

## Post-processing in URP for mobile devices

Post-processing effects can take up a lot of frame time. If you’re using URP for mobile devices, these effects are the most “mobile-friendly” by default:

- Bloom (with **High Quality Filtering** disabled)

- Chromatic Aberration

- Color Grading

- Lens Distortion

- Vignette

**Note**: For depth-of field, Unity recommends that you use Gaussian **Depth of Field**A post-processing effect that simulates the focus properties of a camera lens. [More info](../PostProcessingOverview.html)
See in [Glossary](../Glossary.html#depthoffield) for lower-end devices. For console and desktop platforms, use Bokeh Depth of Field.

## Post-processing in URP for VR

In **VR**Virtual Reality [More info](../VROverview.html)
See in [Glossary](../Glossary.html#VR) apps and games, certain post-processing effects can cause nausea and disorientation. To reduce motion sickness in fast-paced or high-speed apps, use the Vignette effect for VR, and avoid the effects Lens Distortion, Chromatic Aberration, and Motion Blur for VR.

---




Did you find this page useful? Please give it a rating:




1.
2.
3.
4.
5.





Thanks for rating this page!



Report a problem on this page



What kind of problem would you like to report?

            - This page needs code samples

            - Code samples do not work

            - Information is missing

            - Information is incorrect

            - Information is unclear or confusing

            - There is a spelling/grammar error on this page

            - Something else







Thanks for letting us know! This page has been marked for review based on your feedback.


If you have time, you can provide more information to help us fix the problem faster.


            Provide more information





You've told us this page needs code samples. If you'd like to help us further, you could provide a code sample, or tell us about what kind of code sample you'd like to see:



You've told us there are code samples on this page which don't work. If you know how to fix it, or have something better we could use instead, please let us know:



You've told us there is information missing from this page. Please tell us more about what's missing:



You've told us there is incorrect information on this page. If you know what we should change to make it correct, please tell us:



You've told us this page has unclear or confusing information. Please tell us more about what you found unclear or confusing, or let us know how we could make it clearer:



You've told us there is a spelling or grammar error on this page. Please tell us what's wrong:



You've told us this page has a problem. Please tell us more about what's wrong:









Thank you for helping to make the Unity documentation better!



Your feedback has been submitted as a ticket for our documentation team to review.



We are not able to reply to every ticket submitted.



Post-processing in URP

Add post-processing in URP
