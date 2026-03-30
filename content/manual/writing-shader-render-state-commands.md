This version of Unity is unsupported.

GLSL in Unity

Enable conservative rasterization in a shader

# Setting the render state on the GPU

Use these commands within a Pass block to set the render state for that Pass, or within a SubShader block to set the render state for that SubShader and any Passes that it contains.

| Page | Description |
| --- | --- |
| Enable conservative rasterization in a shader | Use the Conservative command to rasterize pixelsThe smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. More infoSee in Glossary that are partially covered by a triangle, regardless of coverage. |
| Set the culling mode in a shader | Use the Cull command to improve rendering efficiency by setting which polygons the GPU doesn’t draw. |
| Set the depth bias in a shader | Use the Offset command to set the depth at which the GPU draws geometry. |
| Set the depth clip mode in a shader | Use the ZClip command to set how the GPU handles fragments that are outside the near and far clip planes. |
| Set the depth testing mode in a shader | Use the ZTest command to change the conditions of depth testing to achieve visual effects such as object occlusion. |
| Disable writing to the depth buffer in a shader | Use the ZWrite command to set whether the GPU renders to the depth bufferA memory store that holds the z-value depth of each pixel in an image, where the z-value is the depth for each rendered pixel from the projection plane. More infoSee in Glossary. |
| Check or write to the stencil buffer in a shader | Use the Stencil command to configure the stencil test, or configure what the GPU writes to the stencil bufferA memory store that holds an 8-bit per-pixel value. In Unity, you can use a stencil buffer to flag pixels, and then only render to pixels that pass the stencil operation. More infoSee in Glossary. |
| Set the blending mode in a shader | Use the Blend and BlendOp commands to set how the GPU combines the output of the fragment shaderA program that runs on the GPU. More infoSee in Glossary with the render target. |
| Set the color channels the GPU renders to | Use the ColorMask command to prevent the GPU rendering to certain color channels, for example to render uncolored shadows. |
| Reduce aliasing with AlphaToMask mode | Use the AlphaToMask command to set the GPU to modify multisample anti-aliasing (MSAA) to reduce aliasing un shaders that use alpha testing, such as vegetation shaders. |
| Group commands with the Category block | Use the Category block to group commands that set the render state, so you can inherit the grouped rendering state within the block. |

## Additional resources

- [ShaderLab language reference](SL-Reference.html)

GLSL in Unity

Enable conservative rasterization in a shader
