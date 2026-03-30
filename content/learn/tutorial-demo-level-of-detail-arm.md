[Image: image]

# Demo: Level of Detail

Tutorial

intermediate

+0XP

60 mins

3

(128)

Unity Technologies

[Image: Demo: Level of Detail]Summary

Level of Detail (LOD) is a useful tool in maintaining desired aesthetic in your 3D models while optimizing for performance. In this demo, you will be able to experiment with the ideas you learned about in this project, profiling and comparing performance between LOD and non-LOD implementations.

Languages available:

日本語English日本語한국어简体中文日本語

## 1. Decreasing Vertices with LOD

Q&A (0)

In a previous tutorial, you learned about the benefits of implementing Level of Detail (LOD) on your 3D models. Using LOD in your 3D Scene reduces the number of vertices that need to be processed by your mobile device’s CPU while maintaining visual fidelity.

In this sample Scene, you will get to profile and measure the difference in performance using LOD and non-LOD models.

ステップを完了としてマーク

## 2. Before You Begin

Q&A (0)

If you haven’t done so, download the course project that contains the sample demos [here](https://connect-prd-cdn.unity.com/20210111/c313396b-3519-48b0-af40-3b8d852354f2/ARMUnityMobileOptimization.zip?_ga=2.174434018.1300965009.1610309756-1588052204.1590585134). When prompted by the pop-up, click **Geometry Demo** or open the sample Scene in the Project view (**Assets**>**1 Models**>**Scene**>**Scene 1**). Once the Scene is downloaded and open, you can either enter Play mode in the Editor or build the Scene to your mobile device to profile in the Profiler.

[Image: image]ステップを完了としてマーク

## 3. What to Watch For

Q&A (0)

The sample Scene contains an array of towers in neat rows. A Cinemachine Camera dollies between a row, looking into the distance as each tower gets farther and farther away.

There are two toggles in the Scene that you can experiment with:

- The **Change LOD multiplier** slider allows you to set the LOD bias of models in the Scene. The higher the slider, the greater the multiplier for the LOD’s switching distance for a given model.
- The **Switch Mode**button switches all models in the Scene between non-LOD and LOD implementations.

Using LOD reduces the number of vertices being processed by your game while maintaining visual fidelity. As such, keep an eye on the number of vertices being processed in the **Stats window** and the **Rendering section’s Vertices graph in the Profiler view** when toggling between LOD and non-LOD models.

[Image: image]

You might not be able to see a significant change in CPU usage while profiling the sample Scene. We encourage you to build the project onto your mobile device and profile it using the Unity Profiler. How is CPU usage affected when switching from LOD to non-LOD models?

ステップを完了としてマーク

## 4. Conclusion

Q&A (0)

When working with and creating 3D models, it’s important to keep optimization in mind. With built-in features like LOD and the tips and tricks you learned in this project, you now have an array of optimization tools. In the next project, we’ll dive into Textures, which you can use to add detail to your models.

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
