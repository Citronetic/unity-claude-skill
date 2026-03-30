This version of Unity is unsupported.

Use shadows in a custom URP shader

Make a URP shader compatible with the SRP Batcher

# ShaderLab Pass tags in URP reference

This section contains descriptions of URP-specific **ShaderLab**Unity’s language for defining the structure of Shader objects. [More info](../../SL-Shader.html)
See in [Glossary](../../Glossary.html#ShaderLab) Pass tags.

> **Note**: URP does not support the following LightMode tags: `Always`, `ForwardAdd`, `PrepassBase`, `PrepassFinal`, `Vertex`, `VertexLMRGBM`, `VertexLM`.

## LightMode

The value of this tag lets the pipeline determine which Pass to use when executing different parts of the **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../../render-pipelines.html)
See in [Glossary](../../Glossary.html#Renderpipeline).

If you do not set the `LightMode` tag in a Pass, URP uses the `SRPDefaultUnlit` tag value for that Pass.

The `LightMode` tag can have the following values.

| Property | Description | PassType |
| --- | --- | --- |
| UniversalForward | The Pass renders object geometry and evaluates all light contributions. URP uses this tag value in the Forward Rendering PathThe technique that a render pipeline uses to render graphics. Choosing a different rendering path affects how lighting and shading are calculated. Some rendering paths are more suited to different platforms and hardware than others. More infoSee in Glossary. | ScriptableRenderPipeline |
| UniversalGBuffer | The Pass renders object geometry without evaluating any light contribution. Use this tag value in Passes that Unity must execute in the Deferred Rendering Path. | ScriptableRenderPipeline |
| UniversalForwardOnly | The Pass renders object geometry and evaluates all light contributions, similarly to when LightMode has the UniversalForward value. The difference from UniversalForward is that URP can use the Pass for both the Forward and the Deferred Rendering Paths.Use this value if a certain Pass must render objects with the Forward Rendering Path when URP is using the Deferred Rendering Path. For example, use this tag if URP renders a scene using the Deferred Rendering Path and the scene contains objects with shader data that does not fit the GBuffer, such as Clear Coat normals.If a shader must render in both the Forward and the Deferred Rendering Paths, declare two Passes with the UniversalForward and UniversalGBuffer tag values.If a shader must render using the Forward Rendering Path regardless of the Rendering Path that the URP Renderer uses, declare only a Pass with the LightMode tag set to UniversalForwardOnly.If you use the SSAO Renderer Feature, add a Pass with the LightMode tag set to DepthNormalsOnly. For more information, check the DepthNormalsOnly value. | ScriptableRenderPipeline |
| DepthNormalsOnly | Use this value in combination with UniversalForwardOnly in the Deferred Rendering Path. This value lets Unity render the shaderA program that runs on the GPU. More infoSee in Glossary in the Depth and normal prepass. In the Deferred Rendering Path, if the Pass with the DepthNormalsOnly tag value is missing, Unity does not generate the ambient occlusionA method to approximate how much ambient light (light not coming from a specific direction) can hit a point on a surface.See in Glossary around the MeshThe main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. More infoSee in Glossary. | ScriptableRenderPipeline |
| Universal2D | The Pass renders objects and evaluates 2D light contributions. URP uses this tag value in the 2D Renderer. | ScriptableRenderPipeline |
| ShadowCaster | The Pass renders object depth from the perspective of lights into the Shadow map or a depth texture. | ShadowCaster |
| DepthOnly | The Pass renders only depth information from the perspective of a CameraA component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. More infoSee in Glossary into a depth texture. | ScriptableRenderPipeline |
| Meta | Unity executes this Pass only when baking lightmapsA pre-rendered texture that contains the effects of light sources on static objects in the scene. Lightmaps are overlaid on top of scene geometry to create the effect of lighting. More infoSee in Glossary in the Unity Editor. Unity strips this Pass from shaders when building a Player. | Meta |
| SRPDefaultUnlit | Use this LightMode tag value to draw an extra Pass when rendering objects. Application example: draw an object outline. This tag value is valid for both the Forward and the Deferred Rendering Paths.URP uses this tag value as the default value when a Pass does not have a LightMode tag. | ScriptableRenderPipelineDefaultUnlit |
| MotionVectors | Use this tag to add motion vector support to your shader. For more information, refer to Motion vector pass for ShaderLab. | MotionVectors |

## UniversalMaterialType

Unity uses this tag in the Deferred Rendering Path.

The `UniversalMaterialType` tag can have the following values.

If this tag is not set in a Pass, Unity uses the `Lit` value.

| Property | Description |
| --- | --- |
| Lit | This value indicates that the shader type is Lit. During the G-buffer Pass, Unity uses stencil to mark the pixels that use the Lit shader type (specular model is PBR).Unity uses this value by default, if the tag is not set in a Pass. |
| SimpleLit | This value indicates that the shader type is SimpleLit. During the G-buffer Pass, Unity uses stencil to mark the pixelsThe smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. More infoSee in Glossary that use the SimpleLit shader type (specular model is Blinn-Phong). |

Use shadows in a custom URP shader

Make a URP shader compatible with the SRP Batcher
