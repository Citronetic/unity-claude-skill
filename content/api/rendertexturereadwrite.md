This version of Unity is unsupported.



# RenderTextureReadWrite





enumeration


                  Leave feedback




                  Suggest a change












## Success!



Thank you for helping us improve the quality of Unity Documentation. Although we cannot accept all submissions, we do read each suggested change from our users and will make updates where applicable.

                      Close




## Submission failed



For some reason your suggested change could not be submitted. Please <a>try again</a> in a few minutes. And thank you for taking the time to help us improve the quality of Unity Documentation.

                      Close


                      Your name


                      Your email


                      Suggestion*

                      Submit suggestion


Cancel



















### Description



Color space conversion mode of a [RenderTexture](RenderTexture.html).





When using Gamma [color space](../Manual/LinearLighting.html), no conversions are done of any kind, and this setting is not used.

When Linear color space is used, then by default non-HDR render textures are considered
to contain sRGB data (i.e. "regular colors"), and fragment shaders are considered to output linear color values.
So by default the fragment shader color value is converted into sRGB when rendering into a texture;
and when sampling the texture in the shader the sRGB colors are converted into linear values.
This is the [sRGB](RenderTextureReadWrite-sRGB.html) read-write mode; and the [Default](RenderTextureReadWrite.Default.html) mode matches that when linear color space is used.
When this mode is set on a render texture, [RenderTexture.sRGB](RenderTexture-sRGB.html) will return true.

However, if your render texture will contain non-color data (normals, velocities, other custom values)
then you don't want Linear<->sRGB conversions to happen. This is the [Linear](RenderTextureReadWrite.Linear.html) read-write mode.
When this mode is set on a render texture, [RenderTexture.sRGB](RenderTexture-sRGB.html) will return false.

Note that some [render texture formats](RenderTextureFormat.html) are always considered to contain "linear" data
and no sRGB conversions are ever performed on them, no matter what is the read-write setting. This is true
for all "HDR" (floating point) formats, and other formats like Depth or Shadowmap.

Additional resources: [Linear Color Space](../Manual/LinearLighting.html), [RenderTexture.sRGB](RenderTexture-sRGB.html), [PlayerSettings.colorSpace](PlayerSettings-colorSpace.html), [GL.sRGBWrite](GL-sRGBWrite.html).





### Properties



| Property | Description |
| --- | --- |
| Default | Default color space conversion based on project settings. |
| Linear | Render texture contains linear (non-color) data; don't perform color conversions on it. |
| sRGB | Render texture contains sRGB (color) data, perform Linear<->sRGB conversions on it. |


            
