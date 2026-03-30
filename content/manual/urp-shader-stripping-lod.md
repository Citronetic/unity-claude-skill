This version of Unity is unsupported.

Strip feature shader variants in URP

Strip fog shader variants in URP

# Strip level of detail (LOD) shader variants in URP

In the URP Asset, set ****LOD**The *Level Of Detail* (LOD) technique is an optimization that reduces the number of triangles that Unity has to render for a GameObject when its distance from the Camera increases. [More info](../LevelOfDetail.html)
See in [Glossary](../Glossary.html#LOD) Cross Fade Dithering Type** to **2x2 Stencil** to make Unity use stencil testing instead of alpha testing to fade between different [LOD levels](../lod-landing.html). Unity removes the `_LOD_FADE_CROSSFADE` keyword used in most default URP shaders, which reduces the number of **shader**A program that runs on the GPU. [More info](../Shaders.html)
See in [Glossary](../Glossary.html#Shader) variants by around 50%. However, LOD calculations need slightly more processing time on the GPU.

Unity falls back to alpha testing if you [disable the render graph system](compatibility-mode.html) or enable [GPU instancing](../GPUInstancing-landing.html).

This setting might not work correctly if you enable **Stencil** in the **Overrides** section of the [Universal Renderer asset](urp-universal-renderer.html).

## Additional resources

- [Strip feature shader variants](shader-stripping-features.html)

Strip feature shader variants in URP

Strip fog shader variants in URP
