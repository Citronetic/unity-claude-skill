This version of Unity is unsupported.

Change or detect the active render pipeline

Using the Universal Render Pipeline

# Rendering paths in Unity

A **rendering path**The technique that a render pipeline uses to render graphics. Choosing a different rendering path affects how lighting and shading are calculated. Some rendering paths are more suited to different platforms and hardware than others. [More info](RenderingPaths.html)
See in [Glossary](Glossary.html#RenderingPath) is the series of operations that draws and lights **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) the **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera) sees. Different rendering paths have different capabilities and performance characteristics.

Unity supports forward and deferred rendering paths.

## Forward

The **Forward rendering**A rendering path that renders each object in one or more passes, depending on lights that affect the object. Lights themselves are also treated differently by Forward Rendering, depending on their settings and intensity. [More info](RenderTech-ForwardRendering.html)
See in [Glossary](Glossary.html#ForwardRendering) path is the default rendering path in Unity projects. It works in the following way:

- Unity lights each GameObject in turn.

- Lighting has limits, for example how often or how well Unity can light each GameObject. These limits are different for each **render pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline).

The Universal Render Pipeline (URP) also has a [Forward+ rendering path](urp/rendering/forward-rendering-paths.html), which is similar to the Forward rendering path but has no limit on lights per GameObject.

**Note:** The Built-In Render Pipeline also has a [Legacy Vertex Lit](RenderTech-VertexLit.html) rendering path, which is a subset of the Forward rendering path.

## Deferred

The Deferred rendering path works in the following way:

- Unity first creates a geometry buffer (G-buffer), which is a set of textures that stores data about the geometry and materials the camera sees.

- Unity uses the data from the G-buffer to light all the GameObjects at once.

- There are fewer limits on lighting, so GameObjects and shadows are more detailed. For example, **normal maps**A type of Bump Map texture that allows you to add surface detail such as bumps, grooves, and scratches to a model which catch the light as if they are represented by real geometry.
See in [Glossary](Glossary.html#Normalmap) and cookies work with all lights.

Deferred rendering paths can’t render transparent objects, so at the end of the rendering path Unity uses a forward render pass to render transparent objects.

## Choose a rendering path

Each rendering path has advantages and disadvantages. For more information, refer to the following:

- [Introduction to rendering paths in URP](urp/rendering-paths-introduction-urp.html)

- [Introduction to rendering paths in the Built-In Render Pipeline](built-in-rendering-paths.html)

## Additional resources

- [Understanding rendering paths](https://learn.unity.com/tutorial/understanding-rendering-paths?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774937443516) on the Unity Learn site

- [Per-pixel and per-vertex lights](PerPixelLights.html)

Change or detect the active render pipeline

Using the Universal Render Pipeline
