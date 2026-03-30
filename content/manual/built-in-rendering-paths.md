This version of Unity is unsupported.

Configure graphics tiers in the Built-In Render Pipeline

Introduction to rendering paths in the Built-In Render Pipeline

# Rendering paths in the Built-In Render Pipeline

Resources for choosing between the Forward, Deferred and Legacy Vertex Lit **rendering paths**The technique that a render pipeline uses to render graphics. Choosing a different rendering path affects how lighting and shading are calculated. Some rendering paths are more suited to different platforms and hardware than others. [More info](RenderingPaths.html)
See in [Glossary](Glossary.html#RenderingPath) in the Built-In **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline).

| Page | Description |
| --- | --- |
| Introduction to rendering paths | Learn about how rendering paths have different capabilities and performance characteristics, and understand the difference between Forward, Deferred and Legacy Vertex Lit. |
| Forward rendering path | Understand the Forward renderingA rendering path that renders each object in one or more passes, depending on lights that affect the object. Lights themselves are also treated differently by Forward Rendering, depending on their settings and intensity. More infoSee in Glossary path, which renders each GameObjectThe fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. More infoSee in Glossary in one or more passes, depending on the lights that affect the GameObject. |
| Deferred rendering path | Understand the Deferred rendering path, which has no limit on the number of lights that can affect a GameObject. |
| Legacy Vertex Lit rendering path | Understand the Vertex Lit rendering path, which has the lowest lighting fidelity and no support for real-time shadows. |

## Additional resources

- [Introduction to render pipelines](render-pipelines-overview.html)

- [Rendering paths in the Universal Render Pipeline](urp/rendering-paths-landing.html)

Configure graphics tiers in the Built-In Render Pipeline

Introduction to rendering paths in the Built-In Render Pipeline
