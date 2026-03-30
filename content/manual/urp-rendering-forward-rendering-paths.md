This version of Unity is unsupported.

Set the rendering path in URP

Deferred and Deferred+ rendering paths in URP

# Forward and Forward+ rendering paths in URP

The Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../../render-pipelines.html)
See in [Glossary](../../Glossary.html#Renderpipeline) (URP) has the following forward **rendering paths**The technique that a render pipeline uses to render graphics. Choosing a different rendering path affects how lighting and shading are calculated. Some rendering paths are more suited to different platforms and hardware than others. [More info](../../RenderingPaths.html)
See in [Glossary](../../Glossary.html#RenderingPath):

- Forward

- Forward+

## Forward rendering path

The **Forward rendering**A rendering path that renders each object in one or more passes, depending on lights that affect the object. Lights themselves are also treated differently by Forward Rendering, depending on their settings and intensity. [More info](../../RenderTech-ForwardRendering.html)
See in [Glossary](../../Glossary.html#ForwardRendering) path is the default rendering path in URP. Unity lights each **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](../../class-GameObject.html)
See in [Glossary](../../Glossary.html#GameObject) in turn, and there’s a limit to the number of lights that can affect each GameObject.

## Forward+ rendering path

The Forward+ rendering path is similar to the Forward rendering path, but there’s no limit to the number of lights that can affect each GameObject. There’s still a limit on the number of lights visible per-camera.

Using the Forward+ rendering path reduces the number of lights Unity calculates for each GameObject. Unity divides the screen into tiles, then identifies which lights affect which tiles. When Unity calculates the lighting for a GameObject, it uses only the lights that affect the tile the GameObject is in.

[Image: An example of the Lighting Complexity Debug Draw Mode using the Forward+ rendering path. Each grid square is a tile, and each value represents the number of lights affecting the tile.]
An example of the Lighting Complexity [Debug Draw Mode](../../GIVis.html) using the Forward+ rendering path. Each grid square is a tile, and each value represents the number of lights affecting the tile.

Unity ignores the following settings if you select the Forward+ rendering path:

- **Additional Lights** in the URP Asset.

- **Main Light** in the URP Asset.

- **Additional Lights** > **Per Object Limit** in the URP Asset.

## Additional resources

- [Light limits in URP](../lighting/light-limits-in-urp.html)

- [Introduction to rendering paths in URP](../rendering-paths-introduction-urp.html)

Set the rendering path in URP

Deferred and Deferred+ rendering paths in URP
