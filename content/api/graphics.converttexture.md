This version of Unity is unsupported.



# [Graphics](Graphics.html).ConvertTexture




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















## Declaration

public static bool ConvertTexture([Texture](Texture.html) src,
[Texture](Texture.html) dst);






## Declaration

public static bool ConvertTexture([Texture](Texture.html) src,
int srcElement,
[Texture](Texture.html) dst,
int dstElement);






## Declaration

public static bool ConvertTexture([Rendering.GraphicsTexture](Rendering.GraphicsTexture.html) src,
[Rendering.GraphicsTexture](Rendering.GraphicsTexture.html) dst);






## Declaration

public static bool ConvertTexture([Rendering.GraphicsTexture](Rendering.GraphicsTexture.html) src,
int srcElement,
[Rendering.GraphicsTexture](Rendering.GraphicsTexture.html) dst,
int dstElement);






### Parameters



| Parameter | Description |
| --- | --- |
| src | The source texture. The TextureDimension must be Tex2D or Cube. |
| dst | The destination texture. The TextureDimension must be Tex2D, Tex2DArray, Cube, or CubeArray. The texture must also be uncompressed and correspond to a supported RenderTextureFormat. |
| srcElement | The element in the source texture to copy from. Use CubemapFace if src is a Cubemap. Set the value to 0 if src is a 2D texture. |
| dstElement | The element in the source texture to copy to. For example, the CubemapFace in a Cubemap or the slice in a texture array. Set the value to 0 if `dst` is a 2D texture. |





### Returns



**bool**

          `true` if the method succeeded.





### Description



Copies the pixel data from one texture, converts the data into a different format, and copies it into another texture.





This method converts and copies pixel data from one texture to another on the GPU.

When you use `ConvertTexture`, Unity does the following:



          1. Creates a temporary [RenderTexture](RenderTexture.html) that matches the size and format of the `dst` texture.

          2. Uses [Graphics.Blit](Graphics.Blit.html) to copy from the `src` texture to the temporary render texture, and converts to the format of `dst`.

          3. Uses [Graphics.CopyTexture](Graphics.CopyTexture.html) to copy from the temporary render texture to the `dst` texture.





This means it might be faster to convert the texture before you load it into Unity. Alternatively, if you can create `dst` as a render texture (or a graphics texture with [GraphicsTextureDescriptorFlags.RenderTarget](Rendering.GraphicsTextureDescriptorFlags.RenderTarget.html) enabled), you can use [Graphics.Blit](Graphics.Blit.html) instead.

You can use textures with different sizes for `src` and `dst`.

`ConvertTexture` doesn't support the following conversions:



          - Cubemap to Texture2D.

          - Conversions that use render targets (RenderTextures or GraphicsTextures that have [the RenderTarget flag](Rendering.GraphicsTextureDescriptorFlags.RenderTarget.html) enabled). Use [Graphics.Blit](Graphics.Blit.html) instead.





You can't use `ConvertTexture` if you use OpenGL with MacOS. Depending on your graphics API, you might not be able to do some types of conversions. For more information on compatibility, see [SystemInfo.copyTextureSupport](SystemInfo-copyTextureSupport.html), [CopyTextureSupport](Rendering.CopyTextureSupport.html) and [Graphics.CopyTexture](Graphics.CopyTexture.html).

To copy the converted texture from the GPU to the CPU, use Texture2D.RequestIntoNativeArray.

Additional resources: [CopyTextureSupport](Rendering.CopyTextureSupport.html).


            
