This version of Unity is unsupported.

Introduction to render pipelines

Choosing a render pipeline

# Scriptable Render Pipeline fundamentals

This page explains how Unity’s [Scriptable Render Pipeline (SRP)](scriptable-render-pipeline-introduction.html) works, and introduces some key concepts and terminology. The information on this page is applicable to the Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline) (URP), the High Definition Render Pipeline (HDRP), and custom render pipelines that are based on SRP.

The Scriptable Render Pipeline is a thin API layer that lets you schedule and configure rendering commands using C# **scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](creating-scripts.html)
See in [Glossary](Glossary.html#Scripts). Unity passes these commands to its low-level graphics architecture, which then sends instructions to the graphics API.

URP and HDRP are built on top of SRP. You can also create your own custom render pipeline on top of SRP.

## Render Pipeline Instance and Render Pipeline Asset

Every render pipeline based on SRP has two key customized elements:

- A **Render Pipeline Instance**. This is an instance of a class that defines the functionality of your render pipeline. Its script inherits from [RenderPipeline](../ScriptReference/Rendering.RenderPipeline.html), and overrides its `Render()` method.

- A **Render Pipeline Asset**. This is an asset in your Unity Project that stores data about which Render Pipeline Instance to use, and how to configure it. Its script inherits from [RenderPipelineAsset](../ScriptReference/Rendering.RenderPipelineAsset.html) and overrides its `CreatePipeline()` method.

For more information on these elements, and instructions on how to create them in a custom render pipeline, see [Creating a Render Pipeline Asset and a Render Pipeline Instance](https://docs.unity3d.com/Packages/com.unity.render-pipelines.core@17.0/manual/index.html).

## ScriptableRenderContext

`ScriptableRenderContext` is a class that acts as an interface between the custom C# code in the render pipeline and Unity’s low-level graphics code.

Use the [ScriptableRenderContext](../ScriptReference/Rendering.ScriptableRenderContext.html) API to schedule and execute rendering commands. For information, see [Scheduling and executing rendering commands in the Scriptable Render Pipeline](https://docs.unity3d.com/Packages/com.unity.render-pipelines.core@17.0/manual/srp-using-scriptable-render-context.html).

## Additional resources

- [Universal Render Pipeline](universal-render-pipeline.html)

- [High Definition Render Pipeline](high-definition-render-pipeline.html)

- [Creating a custom render pipeline](https://docs.unity3d.com/Packages/com.unity.render-pipelines.core@17.0/manual/srp-custom.html)

Introduction to render pipelines

Choosing a render pipeline
