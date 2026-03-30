This version of Unity is unsupported.

Branch based on shader model

Branch based on Unity version

# Branch based on platform features

Direct use of these platform macros is discouraged, as they don’t always contribute to the future-proofing of your code. For example, if you’re writing a **Shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) that checks for D3D11, you may want to ensure that, in the future, the check is extended to include Vulkan. Instead, Unity defines several helper macros (in [`HLSLSupport.cginc`](SL-BuiltinIncludes.html)):

| Macro: | Use: |
| --- | --- |
| UNITY_BRANCH | Add this before conditional statements to tell the compiler that this should be compiled into an actual branch. Expands to [branch] when on HLSL platforms. |
| UNITY_FLATTEN | Add this before conditional statements to tell the compiler that this should be flattened to avoid an actual branch instruction. Expands to [flatten] when on HLSL platforms. |
| UNITY_LOOP | This macro makes Unity generate code that instructs the shader compiler to keep the for loop as a loop instead of unrolling it into a fixed set of operations. For an example of how to use the macro, refer to Render additional lights in a shader. |
| UNITY_NO_SCREENSPACE_SHADOWS | Defined on platforms that do not use cascaded screenspace shadowmaps (mobile platforms). |
| UNITY_NO_LINEAR_COLORSPACE | Defined on platforms that do not support Linear color space (mobile platforms). |
| UNITY_NO_RGBM | Defined on platforms where RGBM compressionA method of storing data that reduces the amount of storage space it requires. See Texture Compression, Animation Compression, Audio Compression, Build Compression.See in Glossary for lightmapsA pre-rendered texture that contains the effects of light sources on static objects in the scene. Lightmaps are overlaid on top of scene geometry to create the effect of lighting. More infoSee in Glossary is not used (mobile platforms). |
| UNITY_NO_DXT5nm | Defined on platforms that do not use DXT5nm normal-map compression (mobile platforms). |
| UNITY_FRAMEBUFFER_FETCH_AVAILABLE | Defined on platforms where “framebuffer color fetch” functionality can be available (generally iOS platforms). |
| UNITY_USE_RGBA_FOR_POINT_SHADOWS | Defined on platforms where point light shadowmaps use RGBA Textures with encoded depth (other platforms use single-channel floating point Textures). |
| UNITY_ATTEN_CHANNEL | Defines which channel of light attenuation Texture contains the data; used in per-pixel lighting code. Defined to either ‘r’ or ‘a’. |
| UNITY_HALF_TEXEL_OFFSET | Defined on platforms that need a half-texel offset adjustment in mapping texels to pixelsThe smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. More infoSee in Glossary. |
| UNITY_UV_STARTS_AT_TOP | Always defined with value of 1 or 0. A value of 1 is on platforms where Texture V coordinate is 0 at the “top” of the Texture. Direct3D-like platforms use value of 1; OpenGL-like platforms use value of 0. |
| UNITY_MIGHT_NOT_HAVE_DEPTH_Texture | Defined if a platform might emulate shadow maps or depth Textures by manually rendering depth into a Texture. |
| UNITY_PROJ_COORD(a) | Given a 4-component vector, this returns a Texture coordinate suitable for projected Texture reads. On most platforms this returns the given value directly. |
| UNITY_NEAR_CLIP_VALUE | Defined to the value of near clipping planeA plane that limits how far or close a camera can see from its current position. A camera’s viewable range is between the far and near clipping planes. See far clipping plane and near clipping plane. More infoSee in Glossary. Direct3D-like platforms use 1.0 while OpenGL-like platforms use –1.0. |
| UNITY_VPOS_TYPE | Defines the data type required for pixel position input (VPOS): float2 on D3D9, float4 elsewhere. |
| UNITY_CAN_COMPILE_TESSELLATION | Defined when the Shader compiler “understands” the tessellation Shader HLSL syntax (currently only D3D11). |
| UNITY_INITIALIZE_OUTPUT(type,name) | Initializes the variable name of given type to zero. |
| UNITY_COMPILER_HLSL, UNITY_COMPILER_HLSL2GLSL, UNITY_COMPILER_CG | Indicates which Shader compiler is being used to compile Shaders. See documentation on Shader compilation for more details. Use this if you run into very specific Shader syntax handling differences between the compilers, and want to write different code for each compiler. |

- `UNITY_REVERSED_Z` - defined on plaftorms using reverse Z buffer. Stored Z values are in the range 1..0 instead of 0..1.

## Additional resources

- [HLSL pragma directives reference](SL-PragmaDirectives.html)

- [HLSL pragma target command reference](SL-Pragma-target.html)

- [HLSL pragma require command reference](SL-Pragma-require.html)

Branch based on shader model

Branch based on Unity version
