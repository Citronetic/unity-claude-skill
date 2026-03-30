[Image: image]

# Demo: Draw Calls and SRP Batcher

Tutorial

intermediate

+0XP

60 mins

2

(65)

Unity Technologies

[Image: Demo: Draw Calls and SRP Batcher]Summary

When using the built-in Universal Render Pipeline, you're also afforded Unity's Scriptable Render Pipeline Batcher. In this demo, you will have a chance to experiment with the SRP Batcher and compare performance before and after enabling this feature.

Languages available:

한국어English日本語한국어简体中文한국어

## 1. The SRP Batcher

Q&A (0)

In a previous tutorial, you learned about using the built-in Universal Render Pipeline (URP) Shaders in Unity to ensure the best mobile performance. One benefit of using the provided Shaders is access to Unity’s SRP (Scriptable Render Pipeline) Batcher. In this tutorial, you will have the opportunity to measure performance boosts provided by this batcher.

단계를 완료로 표시

## 2. Before You Begin

Q&A (0)

If you haven’t done so, download the course project that contains the sample demos [here](https://connect-prd-cdn.unity.com/20210111/c313396b-3519-48b0-af40-3b8d852354f2/ARMUnityMobileOptimization.zip?_ga=2.116707142.1300965009.1610309756-1588052204.1590585134). When prompted by the pop-up, click **Shaders and Materials Demo** or open the sample Scene in the Project view (**Assets**>**3 Shaders & Materials**>**Scene**>**Scene 3**). Once downloaded and open, you can either enter Play Mode in the Editor or build this Scene to your mobile device to profile in the Profiler.

[Image: image]단계를 완료로 표시

## 3. What to Watch For

Q&A (0)

The sample Scene contains several moving pieces — an animated knight, several pieces of grass applied to a flat plane, and a particle effect simulating flames using a transparent Shader so users are able to see the knights in the background.

Each Shader was implemented using **Shader Graph**, a node-based Shader tool built into URP. As such, most Shaders created with Shader Graph are also supported by URP features. One such feature is the SRP Batcher.

You can find the option to switch the SRP Batcher on and off within the provided *UniversalRenderPipelineAsset*(**Assets**>**Content**>**Settings**). Under **Advanced**, toggle the SRP Batcher.

[Image: image]

When toggling the SRP Batcher on, watch the **Statistics window** and the **Rendering Section’s Vertices Graph**in the Profiler View. Aside from a bump in FPS, the number of triangles and vertices being processed decreases dramatically. Because our objects use a Shader that is compatible with URP, the render pipeline automatically batches all relevant geometry data to reduce the amount of data processed.

[Image: image]

As such, you can also pause the game and enable the **Frame Debugger** with and without the SRP Batcher on. You will notice a significant decrease in draw calls with the SRP Batcher enabled.

[Image: image][Image: image]단계를 완료로 표시

## 4. Conclusion

Q&A (0)

The ease with which you can fine-tune and configure your Shaders and Materials in Unity allows for impressive visual effects at a small performance cost. Through features provided in the Universal Render Pipeline, and applying the built-in Shaders that use them, you can make the most out of the limited resources of the mobile devices that you target. In the next project, we will learn about using Lights to add ambience and mood to your mobile applications performantly and in conjunction with URP.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
