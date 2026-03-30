This version of Unity is unsupported.

Lightmap UVs

Generate lightmap UVs

# Introduction to Lightmap UVs

Lightmaps are pre-calculated lighting textures that store illumination for static geometry. Unity generates them via a multi-step process that transforms 3D **mesh**The main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. [More info](mesh.html)
See in [Glossary](Glossary.html#Mesh) data into optimized 2D textures. Both the Realtime **Global Illumination**A group of techniques that model both direct and indirect lighting to provide realistic lighting results.
See in [Glossary](Glossary.html#globalillumination) system and the Baked Global Illumination system use lightmaps, and therefore need **lightmap**A pre-rendered texture that contains the effects of light sources on static objects in the scene. Lightmaps are overlaid on top of scene geometry to create the effect of lighting. [More info](Lightmapping.html)
See in [Glossary](Glossary.html#Lightmap) UVs.

The lightmap generation process is as follows:
* UV Mapping: For each mesh, Unity generates a per-mesh UV layout with UV charts. A margin separates charts within the same layout.
* Packing: Unity packs multiple UV layouts into a shared UV atlas. Padding between different UV layouts in the atlas optimizes texture space and prevents bleeding.
* Texture generation: Unity converts the UV atlas into the final lightmap texture that contains the pre-calculated lighting data.

Unity uses separate sets of lightmap UVs for the Realtime Global Illumination system and the Baked Global Illumination system. There are two reasons for this:

- There is no direct correspondence in the grouping of instances between real-time and baked lightmaps; instances that are in the same real-time lightmap may be in two different baked lightmaps, and vice versa.

- Meshes that appear at different scales share lightmap UVs in baked lightmaps, but do not share UVs in real-time lightmaps.

## Baked lightmap UVs

Baked lightmap UVs are per-mesh: all instances of the same mesh share the same baked lightmap UVs. Unity can calculate the UVs for baked lightmaps when you import a model, or you can provide your own data.

Unity stores baked lightmap UVs in its mesh in the [Mesh.uv2](../ScriptReference/Mesh-uv2.html) channel. This channel maps to the TEXCOORD1 **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) semantic, and is commonly called “UV1”.

If Baked Global Illumination is enabled and a given MeshRenderer receives its global illumination from lightmaps, Unity uses the data in the [Mesh.uv2](../ScriptReference/Mesh-uv2.html) channel to correctly map the baked lightmaps to the mesh.

**Note:** If you want to use [Mesh.uv2](../ScriptReference/Mesh-uv2.html) for another purpose in a given mesh, you must ensure that all MeshRenderer components that use the mesh receive global illumination from **Light Probes**Light probes store information about how light passes through space in your scene. A collection of light probes arranged within a given space can improve lighting on moving objects and static LOD scenery within that space. [More info](LightProbes.html)
See in [Glossary](Glossary.html#LightProbe) rather than lightmaps. Change this with the [Mesh Renderer component Inspector](class-MeshRenderer.html), or the [MeshRenderer.receiveGI](../ScriptReference/MeshRenderer.receiveGI.html) API.

For more information, see [Generating lightmap UVs](LightingGiUvs-GeneratingLightmappingUVs.html).

## Real-time lightmap UVs

Real-time lightmap UVs are per-Mesh Renderer: all instances of the same mesh share the same input data, but different instances of **Mesh Renderers**A mesh component that takes the geometry from the Mesh Filter and renders it at the position defined by the object’s Transform component. [More info](class-MeshRenderer.html)
See in [Glossary](Glossary.html#MeshRenderer) can use different real-time lightmap UVs at runtime. Unity calculates the UVs for the Realtime Global Illumination system during the precompute stage. This calculation takes per-mesh UVs as its input, and uses that data to create per-Mesh Renderer UVs. Unity can generate the input per-mesh UVs when you import a model, or you can provide your own data.

This works as follows:

- Unity can use data in the [Mesh.uv3](../ScriptReference/Mesh-uv3.html) channel as input for the real-time lightmap UV calculations. `Mesh.uv3` maps to the TEXCOORD2 shader semantic, and is commonly called “UV2”.

- If there is no data in `Mesh.uv3` but there is data in [Mesh.uv2](../ScriptReference/Mesh-uv2.html), Unity falls back to using the data in `Mesh.uv2` as input for the real-time lightmap UV calculations. `Mesh.uv2` is used for baked lightmap UVs. It is common to use the baked lightmap UVs as input data for the real-time lightmap UVs.

- The results of the calculations are stored per-MeshRenderer, in [MeshRenderer.enlightenVertexStream](../ScriptReference/MeshRenderer-enlightenVertexStream.html). If Realtime Global Illumination is enabled and a given MeshRenderer component contributes to global illumination and receives its global illumination from lightmaps, Unity automatically passes the data in `MeshRenderer.enlightenVertexStream` to TEXCOORD2 in shaders, instead of the data in Mesh.uv3.

**Note:** If you want to use [Mesh.uv3](../ScriptReference/Mesh-uv3.html) for another purpose in a mesh that uses Realtime Global Illumination, you must ensure that all MeshRenderer components that use the mesh receive global illumination from Light Probes rather than lightmaps. Change this with the [Mesh Renderer component Inspector](class-MeshRenderer.html), or the [MeshRenderer.receiveGI](../ScriptReference/MeshRenderer-receiveGI.html) API.

For more information, see [Generating lightmap UVs](LightingGiUvs-GeneratingLightmappingUVs.html).

### How Unity calculates real-time lightmap UVs

This is what happens when Unity takes the per-mesh input UVs and processes them into per-Mesh Renderer output UVs.

#### Packing

Unity repacks real-time lightmap UVs to ensure that each chart’s boundary falls on a texel center in all directions, and then adds a half-texel of margin around each chart’s boundary. This ensures that all charts have a full texel of margin between them.

This is because the resolution of real-time lightmaps is intentionally low, to make it feasible to update them in real-time. The low resolution doesn’t affect the graphical quality because these lightmaps only store low-frequency indirect lighting, but it can lead to bleeding when charts share texels. Repacking ensures that charts never share texels. It avoids this problem, and also allows Unity to efficiently pack charts next to each other.

[Image: Real-time lightmap UVs packing]
Real-time lightmap UVs packing

**Note:** This packing technique means that the calculated UVs are dependent on the scale and lightmap resolution of the instance, which is why real-time lightmap UVs are per-Mesh Renderer; however, Unity automatically optimizes this where possible and Mesh Renderers that use the same mesh with the same scale and lightmap resolution share the same UVs.

#### Merging

Optionally, you can instruct Unity to merge UV charts where possible during this process. This reduces the size of the lightmaps, and can improve runtime memory usage and performance.

You can enable this optimization on any **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) with a Mesh Renderer component. In the [Mesh Renderer Inspector](class-MeshRenderer.html), navigate to the **Lightmapping** section and **Optimize Realtime UVs**.

**Note:** This feature sometimes makes mistakes about discontinuities in the original UV mapping. For example, an intentionally sharp edge may be misinterpreted as a continuous surface. If this happens, disable this feature.

Lightmap UVs

Generate lightmap UVs
