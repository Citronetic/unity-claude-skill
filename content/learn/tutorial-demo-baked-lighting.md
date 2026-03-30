[Image: image]

# Demo: Baked Lighting

Tutorial

intermediate

+0XP

60 mins

2

(56)

Unity Technologies

[Image: Demo: Baked Lighting]Summary

When possible, it is a best practice to identify the static objects in your 3D mobile application in order to light them correctly and efficiently. In this demo, we will compare the performance between baked and non-baked lighting.

Languages available:

日本語English日本語한국어简体中文日本語

## 1. Overview

Q&A (0)

In a previous tutorial, you learned about the benefits of implementing baked lighting in your 3D Scenes. In this demo, you will profile two sample Scenes and compare the difference in performance between baked and unbaked lighting.

ステップを完了としてマーク

## 2. Before You Begin

Q&A (0)

If you haven’t done so, download the course project that contains the sample demos [here](https://connect-prd-cdn.unity.com/20210111/c313396b-3519-48b0-af40-3b8d852354f2/ARMUnityMobileOptimization.zip?_ga=2.151481081.1300965009.1610309756-1588052204.1590585134). When prompted by the pop-up, click on either the **Lighting Demo - Non-baked** or**Lighting Demo - Baked**.

You can also open the sample Scene in the Project view (**Assets**>**4 Lighting**>**Scene**>**Lighting_Baked** or **Assets**>**4 Lighting**>**Scene**>**Lighting_Unbaked**). Once downloaded and open, you can either enter Play Mode in the Editor or build this Scene to your mobile device to profile in the Profiler.

[Image: image]ステップを完了としてマーク

## 3. What to Watch For

Q&A (0)

As discussed in a previous [tutorial](https://learn.unity.com/tutorial/lighting-for-static-objects-6081?uv=2019.4&courseId=5f6baa23edbc2a0020abb1c0&projectId=5f6ca1eaedbc2a652270d9d5#), the Unity engine offers three options for generating lightmaps - **Enlighten**, the **Progressive CPU lightmapper**, and the **Progressive GPU lightmapper**. For this project, we chose the Progressive CPU lightmapper as Enlighten is being deprecated and the Progressive GPU lightmapper is in preview.

When implementing baked lighting using the Progressive CPU lightmapper, you will save CPU cycles when processing lighting information. As a result, you may see a large increase in frames per second (FPS) while seeing a decrease in CPU usage. You should see a significant difference in the **Statistics Window** when measuring FPS between the two Scenes.

Where the differences will really show is on your mobile device. Build the sample Scene to your phone of choice and profile the two Scenes while watching the **Total CPU** graph in the Profiler’s **Global Illumination** section. Depending on your phone’s specs, you should see a large difference in CPU usage.

[Image: image][Image: image]

(**Note:**While we opted for the Progressive CPU lightmapper, we encourage you to experiment and profile with the Progressive GPU lightmapper. Depending on your system's GPU, performance may vary.)

ステップを完了としてマーク

## 4. Conclusion

Q&A (0)

Lights accentuate features in your mobile application that, alone, could be overlooked or underappreciated. When making lighting decisions, choose wisely between static and non-static lights, as this choice will determine if your application lives up to expectations and performs efficiently on your target device.

---

Congratulations! You have completed this course on 3D Art Optimization for Mobile Applications! Continue on to the last project, where we’ll briefly discuss next steps and additional resources that will help you in your game-development journey.

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
