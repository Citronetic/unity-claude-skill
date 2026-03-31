This version of Unity is unsupported.



# [RenderTexture](RenderTexture.html).RenderTexture Constructor




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




                [Switch to Manual](../Manual/class-RenderTexture.html)










## Declaration

public RenderTexture([RenderTexture](RenderTexture.html) textureToCopy);






## Declaration

public RenderTexture([RenderTextureDescriptor](RenderTextureDescriptor.html) desc);






## Declaration

public RenderTexture(int width,
int height,
int depth,
[RenderTextureFormat](RenderTextureFormat.html) format = RenderTextureFormat.Default,
[RenderTextureReadWrite](RenderTextureReadWrite.html) readWrite = RenderTextureReadWrite.Default);






























### Parameters



| Parameter | Description |
| --- | --- |
| width | Texture width in pixels. |
| height | Texture height in pixels. |
| depth | Number of bits in depth buffer (0, 16, 24 or 32). Note that only 24 and 32 bit depth have stencil buffer support. |
| format | Texture color format. |
| colorFormat | The color format for the RenderTexture. |
| depthStencilFormat | The depth stencil format for the RenderTexture. |
| mipCount | Amount of mips to allocate for the RenderTexture. |
| readWrite | How color space conversions are applied on texture read/write. |
| desc | Create the RenderTexture with the settings in the RenderTextureDescriptor. |
| textureToCopy | Copy the settings from another RenderTexture. |





### Description



Creates a new RenderTexture object.





The render texture is created with `width` by `height` size, with a depth buffer
of `depth` bits (depth can be 0, 16, 24 or 32), and in `format` format and with sRGB read / write on or off.

Note that constructing a RenderTexture object does not create the hardware representation immediately.
The actual render texture is created upon first use or when [Create](RenderTexture.Create.html) is called manually. So after
constructing the render texture, it is possible to set additional variables, like [format](RenderTexture-graphicsFormat.html),
[dimension](RenderTexture-dimension.html) and so on.

Also note that your graphics device capabilities determine the maximum size of a RenderTexture. To determine the maximum size, use [SystemInfo.maxTextureSize](SystemInfo-maxTextureSize.html) for 2D and cubemap RenderTextures, [SystemInfo.maxTexture3DSize](SystemInfo-maxTexture3DSize.html) for 3D RenderTextures, and [SystemInfo.maxTextureSize](SystemInfo-maxTextureSize.html) and [SystemInfo.maxTextureArraySlices](SystemInfo-maxTextureArraySlices.html) for 2D array RenderTextures.

When the requested size exceeds the maximum size, Unity's behavior varies. If the RenderTexture is not a 3D texture, and the requested size is a power of two, Unity automatically scales down the requested size by a factor of 2 until it is below the maximum, and then creates the RenderTexture at that size. Otherwise, Unity fails to create the RenderTexture, and throws an error.

Additional resources: [format](RenderTexture-graphicsFormat.html), [GetTemporary](RenderTexture.GetTemporary.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    public RenderTexture rt;    void  Start()
    {
        rt = new RenderTexture(256, 256, 16, RenderTextureFormat.ARGB32);
    }
}
```


            
