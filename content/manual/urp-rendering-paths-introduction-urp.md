This version of Unity is unsupported.

Rendering paths in URP

Choose a rendering path in URP

# Introduction to rendering paths in URP

You can select one of the following **rendering paths**The technique that a render pipeline uses to render graphics. Choosing a different rendering path affects how lighting and shading are calculated. Some rendering paths are more suited to different platforms and hardware than others. [More info](../RenderingPaths.html)
See in [Glossary](../Glossary.html#RenderingPath) in the Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../render-pipelines.html)
See in [Glossary](../Glossary.html#Renderpipeline) (URP):

- Forward

- Forward+

- Deferred

- Deferred+

Each rendering path affects how Unity draws and lights objects, which affects lighting results and rendering time. The effects depend on the platform you build for.

For more information about choosing a rendering path, refer to [Choose a rendering path in URP](rendering-paths-comparison.html).

## Rendering path requirements in URP

| Feature | Forward and Forward+ | Deferred and Deferred+ |
| --- | --- | --- |
| Minimum shaderA program that runs on the GPU. More infoSee in Glossary model | 2.0 | 4.5 |
| OpenGL and OpenGL ES support | Yes | No |

## Additional resources

- [Understanding Rendering Paths](https://learn.unity.com/tutorial/understanding-rendering-paths?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774936142772) on the Unity Learn site

- [Unity LTS 2022 Release Live!](https://www.youtube.com/watch?v=oUQapNQgpRI&t=8183s) - a Unity YouTube video that demonstrates the Forward+ rendering path

Rendering paths in URP

Choose a rendering path in URP
