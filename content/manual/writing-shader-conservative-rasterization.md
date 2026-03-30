This version of Unity is unsupported.

Setting the render state on the GPU

Set the culling mode in a shader

# Enable conservative rasterization in a shader

Rasterization is a rendering technique that converts vector data (triangle projections) to **pixel**The smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. [More info](ShadowPerformance.html)
See in [Glossary](Glossary.html#pixel) data (render target) by determining which pixels are covered by triangles. Normally, a GPU determines whether or not to rasterize a pixel by sampling points within the pixel to determine whether they are covered by the triangle; if the coverage is sufficient, then the GPU determines that the pixel is covered. Conservative **rasterization**The process of generating an image by calculating pixels for each polygon or triangle in the geometry. This is an alternative to ray tracing.
See in [Glossary](Glossary.html#Rasterization) means that the GPU rasterizes a pixel that is partially covered by a triangle, regardless of coverage. This is useful when certainty is required, such as when performing **occlusion culling**A process that disables rendering GameObjects that are hidden (occluded) from the view of the camera. [More info](OcclusionCulling.html)
See in [Glossary](Glossary.html#Occlusionculling), **collision**A collision occurs when the physics engine detects that the colliders of two GameObjects make contact or overlap, when at least one has a Rigidbody component and is in motion. [More info](CollidersOverview.html)
See in [Glossary](Glossary.html#Collision) detection on the GPU, or visibility detection.

Conservative rasterization means that the GPU generates more fragments on triangle edges; this leads to more fragment **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) invocations, which can lead to increased GPU frame times.

Check for hardware support using the [SystemInfo.supportsConservativeRaster](../ScriptReference/Device.SystemInfo-supportsConservativeRaster.html) API. On hardware that does not support this command, it is ignored.

## Example

```hlsl
Shader "Examples/CommandExample"
{
    SubShader
    {
         // The rest of the code that defines the SubShader goes here.

        Pass
        {
              // Enable conservative rasterization for this Pass.
              Conservative True

              // The rest of the code that defines the Pass goes here.
        }
    }
}
```

## Additional resources

- [Conservative command in ShaderLab reference](SL-Conservative.html)

Setting the render state on the GPU

Set the culling mode in a shader
