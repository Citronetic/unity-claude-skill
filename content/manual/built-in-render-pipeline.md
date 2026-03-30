This version of Unity is unsupported.

Using the High Definition Render Pipeline

Hardware requirements for the Built-in Render Pipeline

# Using the Built-In Render Pipeline

[Image: A scene from Adam, a short film created with the Built-In Render Pipeline. A robot studies its hand and arm.]
A scene from [Adam](https://unity.com/demos/adam?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774936643243), a short film created with the Built-In Render Pipeline. A robot studies its hand and arm.

Unity’s Built-in Render Pipeline is Unity’s older render pipeline. It’s not based on the Scriptable Render Pipeline, but you can configure it by choosing between different [rendering paths](RenderingPaths.html)The technique that a render pipeline uses to render graphics. Choosing a different rendering path affects how lighting and shading are calculated. Some rendering paths are more suited to different platforms and hardware than others. [More info](RenderingPaths.html)
See in [Glossary](Glossary.html#RenderingPath), and extend its functionality with [command buffers](GraphicsCommandBuffers.html) and [callbacks](./execution-order.html).

| Page | Description |
| --- | --- |
| Hardware requirements | Learn about general hardware requirements for the Built-In Render Pipeline, and requirements for realtime shadows, post-processingA process that improves product visuals by applying filters and effects before the image appears on screen. You can use post-processing effects to simulate physical camera and film properties, for example Bloom and Depth of Field. More info post processing, postprocessing, postprocessSee in Glossary effects, and higher shaderA program that runs on the GPU. More infoSee in Glossary models. |
| Graphics quality settings | Resources for understanding and configuring graphics tiers in the Built-In Render Pipeline. |
| Rendering paths | Resources for choosing between the Forward, Deferred and Legacy Vertex Lit rendering paths in the Built-In Render Pipeline. |
| Rendering order | Resources for using render queues and sorting behaviours to change how Unity renders GameObjectsThe fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. More infoSee in Glossary. |
| Custom rendering | Resources for using the CommandBuffer API to schedule and execute rendering commands at various points in the Built-In Render Pipeline. |

## Additional resources

- [Render pipelines](render-pipelines.html)A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline)

- [Choosing a render pipeline](choose-a-render-pipeline-landing.html)

- [Upgrade to URP from the Built-In Render Pipeline](urp/upgrading-from-birp.html)

- [Graphics quality settings in URP](urp/urp-quality-settings-landing.html)

Using the High Definition Render Pipeline

Hardware requirements for the Built-in Render Pipeline
