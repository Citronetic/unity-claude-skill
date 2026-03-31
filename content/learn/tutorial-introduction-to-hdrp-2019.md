[Image: image]

# Introduction to HDRP

Tutorial

intermediate

+10XP

10 mins

47

(159)

Unity Technologies

[Image: Introduction to HDRP]Summary

The High-Definition Rendering Pipeline (HDRP) is designed to produce high-quality visuals with ease. If you want high-end visual quality and are aiming for your project to be released on high-end PC’s and Consoles then you will benefit from using HDRP. In this tutorial, you will learn about the HDRP and its uses.

Languages available:

EnglishEnglish日本語English

## 1. Introduction to High Definition Render Pipeline

Q&A (0)

*This tutorial has been verified using Unity 2022.2*

Unity’s High Definition Render Pipeline (HDRP) allows you to enhance your project’s visual appeal with ease. This new architecture brings a new level of quality and accuracy to your Scene while also unifying your project’s lighting.

In this tutorial, we will learn what HDRP is and why you should use it.

[Image: image]Mark step as complete

## 2. What is HDRP?

Q&A (0)

HDRP is a high-fidelity scriptable render pipeline built by Unity to target modern platforms that are compute Shader compatible. It aims to provide developers with tools to achieve high-definition visuals with ease.

HDRP follows three principles: Physically Based Rendering (PBR), unified and coherent lighting, and rendering-path independence. It builds upon all of these with new rendering processes, new Shaders, and vast improvements over the lighting within the Scene. It uses a hybrid of deferred and forward rendering paths along with tile and cluster renderers that allow the lighting to scale better than it would with Unity’s built-in renderer.

Mark step as complete

## 3. Why use HDRP?

Q&A (0)

HDRP is designed to target high-end PCs and consoles, prioritizing stunning, high-definition visuals. It’s designed to help smaller development teams achieve AAA graphic features with ease. If you want the highest-quality visual fidelity for your project, and performance isn’t your first consideration, HDRP is a perfect choice.

Mark step as complete

## 4. Upgrading projects to HDRP

Q&A (0)

To upgrade an existing project, you must first download HDRP using Unity’s Package Manager.

1. Go to the Window drop-down and select **Package Manager** to open the Packages window (**Figure 02**).

[Image: image]

2. Find **High Definition RP** in the list and select it.

3. Select **Install**.

After the package has been installed from the Package Manager, you may need to Restart Unity.  Next, you have to then add the HDRP Asset to the Scriptable Render Pipeline Graphics settings field.

4. Right-click in the Project window and go to **Create**>**Rendering**>**HDRP Asset**.

5. Go to **Edit**>**Project Settings**>**Graphics**.

6. In the Graphics Inspector, enable the Scriptable Render Pipeline Settings button (**Figure 03**), to select the  newly created **New HDRenderPipelineAsset**file.

[Image: image]

Your existing project will now use HDRP.

Mark step as complete

## 5. Conclusion

Q&A (0)

Now that your project is using the High Definition Render Pipeline, you will be able to use additional features within the Unity engine. Take a look at Shader Graph and the Post Processing Stack to enhance the visuals in your project.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
