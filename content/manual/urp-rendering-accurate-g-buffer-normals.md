This version of Unity is unsupported.

G-buffer layout in the Deferred and Deferred+ rendering paths in URP

Make a shader compatible with the Deferred or Deferred+ rendering paths in URP

# Enable accurate G-buffer normals in the Deferred and Deferred+ rendering path in URP

In the Deferred and Deferred+ **rendering paths**The technique that a render pipeline uses to render graphics. Choosing a different rendering path affects how lighting and shading are calculated. Some rendering paths are more suited to different platforms and hardware than others. [More info](../../RenderingPaths.html)
See in [Glossary](../../Glossary.html#RenderingPath), Unity stores normals in the G-buffer.

By default, Unity encodes each normal in the RGB channel of a normal texture, using 8 bits each for x, y and z. The values are quantized with the loss of accuracy. This increases performance, especially on mobile GPUs, but might lead to color banding artifacts on smooth surfaces.

To improve the quality of the normals, you can enable the **Accurate G-buffer normals** property in the Universal Renderer asset. Follow these steps:

1. In the **Project** window, select the Universal Renderer asset.

2. In the ****Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](../../UsingTheInspector.html)
See in [Glossary](../../Glossary.html#Inspector)** window, go to the **Renderer** section.

3. Set **Accurate G-buffer normals** to **On**.

When you set **Accurate G-buffer normals** to **On**, Unity uses octahedron encoding. The values of normal vectors are more accurate, but the encoding and decoding operations put extra load on the GPU. The precision of the encoded normal vectors is similar to the precision of the sampled values in the **Forward rendering**A rendering path that renders each object in one or more passes, depending on lights that affect the object. Lights themselves are also treated differently by Forward Rendering, depending on their settings and intensity. [More info](../../RenderTech-ForwardRendering.html)
See in [Glossary](../../Glossary.html#ForwardRendering) path.

The following illustration shows the visual difference between the two options when the **Camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](../../CamerasOverview.html)
See in [Glossary](../../Glossary.html#Camera) is very close to the **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](../../class-GameObject.html)
See in [Glossary](../../Glossary.html#GameObject):

[Image: Accurate G-buffer normals, visual difference between the two options.]
Accurate G-buffer normals, visual difference between the two options.

This option does not support the following:

- Decal normal blending when used with the [Screen Space decal technique](../renderer-feature-decal.html).

- **Terrain**The landscape in your scene. A Terrain GameObject adds a large flat plane to your scene and you can use the Terrain’s Inspector window to create a detailed landscape. [More info](../../terrain-UsingTerrains.html)
See in [Glossary](../../Glossary.html#Terrain) blending with more than four Terrain layers, because normals in different layers encoded using octahedron encoding cannot be blended together because of the bitwise nature of the encoding (2 x 12 bits).

## Additional resources

- [G-buffer layout in the Deferred rendering path](g-buffer-layout.html)

- [Normals](../../StandardShaderMaterialParameterNormalMapSurfaceNormals.html)The direction perpendicular to the surface of a mesh, represented by a Vector. Unity uses normals to determine object orientation and apply shading. [More info](../../scripting-vectors.html)
See in [Glossary](../../Glossary.html#Normal)

G-buffer layout in the Deferred and Deferred+ rendering paths in URP

Make a shader compatible with the Deferred or Deferred+ rendering paths in URP
