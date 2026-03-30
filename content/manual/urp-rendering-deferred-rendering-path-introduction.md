This version of Unity is unsupported.

Deferred and Deferred+ rendering paths in URP

Render passes in the Deferred and Deferred+ rendering paths in URP

# Introduction to the deferred rendering path

The Deferred **rendering path**The technique that a render pipeline uses to render graphics. Choosing a different rendering path affects how lighting and shading are calculated. Some rendering paths are more suited to different platforms and hardware than others. [More info](../../RenderingPaths.html)
See in [Glossary](../../Glossary.html#RenderingPath) in the Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../../render-pipelines.html)
See in [Glossary](../../Glossary.html#Renderpipeline) (URP) first creates a G-buffer, which is a set of textures that stores information about the **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../../CreatingScenes.html)
See in [Glossary](../../Glossary.html#Scene), then uses the information to light all the **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](../../class-GameObject.html)
See in [Glossary](../../Glossary.html#GameObject) at once.

## Terrain blending accuracy with the Deferred rendering path

When blending **terrain**The landscape in your scene. A Terrain GameObject adds a large flat plane to your scene and you can use the Terrain’s Inspector window to create a detailed landscape. [More info](../../terrain-UsingTerrains.html)
See in [Glossary](../../Glossary.html#Terrain) in the **Forward rendering**A rendering path that renders each object in one or more passes, depending on lights that affect the object. Lights themselves are also treated differently by Forward Rendering, depending on their settings and intensity. [More info](../../RenderTech-ForwardRendering.html)
See in [Glossary](../../Glossary.html#ForwardRendering) path, Unity uses multi-pass rendering to calculate lighting for four layers at a time, and alpha-blends after each set of four layers. In the Deferred rendering path, Unity combines terrain layers in the G-buffer pass using hardware blending, four layers at a time, then calculates lighting only once during the Deferred rendering pass. The approach in the Deferred rendering path limits how correct the combination of property values is. For example, **pixel**The smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. [More info](../../ShadowPerformance.html)
See in [Glossary](../../Glossary.html#pixel) normals cannot be accurately combined using the alpha blend equation alone, because one terrain layer might contain coarse terrain detail while another layer might contain fine detail. Averaging or summing normals results in a loss of accuracy.

[Image: Terrain layers rendered with the Forward rendering path]
Terrain layers rendered with the Forward rendering path

[Image: Terrain layers rendered with the Deferred rendering path]
Terrain layers rendered with the Deferred rendering path

## Default shader compatibility

Unity uses a forward render pass to render the following default **shaders**A program that runs on the GPU. [More info](../../Shaders.html)
See in [Glossary](../../Glossary.html#Shader):

- Complex Lit: The lighting model is too complex to fit into the G-buffer.

- Baked Lit or Lit: There’s no realtime lighting, so Unity renders the data into the Emissive/GI/Lighting field of the G-buffer. This is quicker than using a deferred render pass.

## Additional resources

- [Introduction to rendering paths in URP](../rendering-paths-introduction-urp.html)

- [Render passes in the Deferred rendering path](render-passes-deferred.html)

- [Make a shader compatible with Deferred rendering path](make-shader-compatible-with-deferred.html)

Deferred and Deferred+ rendering paths in URP

Render passes in the Deferred and Deferred+ rendering paths in URP
