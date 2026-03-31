[Image: image]

# Introduction to URP

Tutorial

intermediate

+10XP

10 mins

238

(1342)

Unity Technologies

[Image: Introduction to URP]Summary

The goal of the Universal Rendering Pipeline (URP) is to provide optimized performance for developers targeting a broad range of platforms, VR, and games with limited realtime lighting needs. It does this by making some tradeoffs with regard to lighting and shading.

Languages available:

EnglishEnglish日本語简体中文English

## 1. Introduction to URP

Q&A (0)

This tutorial has been verified using Unity 2019.4 LTS

The goal of the Universal Rendering Pipeline (URP) is to provide optimized performance for developers targeting a broad range of platforms, VR, and games with limited real-time lighting needs. It does this by making some tradeoffs with regard to lighting and shading.

[Image: image]

The URP performs single-pass forward rendering with one real-time shadow light and light culling per-object. By comparison, the legacy pipeline of forwarding rendering performs an additional pass per pixel light within range. This means the URP will result in fewer draw calls. It’s also supported by the Shader Graph tool, which provides additional benefits for shader authoring workflow.

[Image: image]Mark step as complete

## 2. Creating a new project with URP

Q&A (0)

Let’s start a new project with URP.

1. Open Unity Hub and create a new project.

2. In the new window, select the Universal RP template (**Figure 03**).

[Image: image]

3. Name your project and set the location for the project.

4. Finally click Create.

Once that’s done, your new Unity Project with the URP will be ready to go.

Mark step as complete

## 3. Upgrading an existing project to use URP

Q&A (0)

To upgrade an existing project, you must first download the URP using the Unity Package Manager.

1. Go to the **Window**> **Package Manager** to open the Package Manager (**Figure 04**).

[Image: image]

2. Make sure you see All Packages in the top left selected.

3. Find “Universal RP” in the list and select it.

4. Click Install.

After the package has been installed from the Package Manager, you have to add the URP Asset to the Scriptable Render Pipeline Graphics settings field.

1. Open the Project settings window by clicking **Edit**>**Project Settings**.

2. Select Player settings on the left side of the new window.

3. Set Color Space to Linear in Other Settings section of Player Settings. (**Figure 05**)

[Image: image]

4. Create a pipeline asset by selecting the Asset drop-down and
**Create**> **Rendering**> **Pipeline Asset**.

5. Open the Project settings window by clicking **Edit**> **Project Settings**.

6. Select Graphic settings on the left side of the new window.

7. In the Graphics Inspector, click the circle dial and select the **UniversalRenderPipelineAsset***.* (**Figure 06**)

[Image: image]

Now your existing project will be able to use the Universal Render Pipeline.

Mark step as complete

## 4. Conclusion

Q&A (0)

URP establishes standardization by bringing in restrictions and disabling features that wouldn’t be supported on lower-end devices. This allows developers to worry less about how to optimize a project and to focus more on developing projects for the wider audience.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
