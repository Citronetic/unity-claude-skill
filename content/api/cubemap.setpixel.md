This version of Unity is unsupported.



# [Cubemap](Cubemap.html).SetPixel




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

public void SetPixel([CubemapFace](CubemapFace.html) face,
int x,
int y,
[Color](Color.html) color,
int mip = 0);






### Parameters



| Parameter | Description |
| --- | --- |
| x | The x coordinate of the pixel to set. The range is 0 through (texture width - 1). |
| y | The y coordinate of the pixel to set. The range is 0 through (texture height - 1). |
| color | The color to set. |
| mip | The mipmap level to write to. The range is 0 through the texture's Texture.mipmapCount. The default value is 0. |
| face | The CubemapFace to write to. |





### Description



Sets the pixel color at coordinates (`x`,`y`).





This method sets pixel data for the texture in CPU memory. [Texture.isReadable](Texture-isReadable.html) must be `true`, and you must call [Apply](Cubemap.Apply.html) after `SetPixel` to upload the changed pixels to the GPU.

[Apply](Cubemap.Apply.html) is an expensive operation because it copies all the pixels in the texture even if you've only changed some of the pixels, so change as many pixels as possible before you call it.

`SetPixel` might be slower than some other texture methods because it converts the [Color](Color.html) struct into the format the texture uses. To set pixel data more quickly, use [SetPixelData](Cubemap.SetPixelData.html) instead.

The lower left corner of a face is (0, 0). If the pixel coordinate is outside the texture's dimensions, Unity clamps or repeats it, depending on the texture's [TextureWrapMode](TextureWrapMode.html).

If you need to get a large block of pixels, it might be faster to use [SetPixels](Cubemap.SetPixels.html).

You can use `SetPixel` with the following [texture formats](TextureFormat.html):



          - Alpha8

          - ARGB32

          - ARGB4444

          - BGRA32

          - R16

          - R16_SIGNED

          - R8

          - R8_SIGNED

          - RFloat

          - RG16

          - RG16_SIGNED

          - RG32

          - RG32_SIGNED

          - RGB24

          - RGB24_SIGNED

          - RGB48

          - RGB48_SIGNED

          - RGB565

          - RGB9e5Float

          - RGBA32

          - RGBA32_SIGNED

          - RGBA4444

          - RGBA64

          - RGBA64_SIGNED

          - RGBAFloat

          - RGBAHalf

          - RGFloat

          - RGHalf

          - RHalf





For all other formats, Unity ignores `SetPixel`.

Additional resources: [SetPixels](Cubemap.SetPixels.html), [SetPixelData](Cubemap.SetPixelData.html), [GetPixel](Cubemap.GetPixel.html), [Apply](Cubemap.Apply.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    public Cubemap cubeMap;    void Start()
    {
        // Set the pixel at (0,0) of the +X face red.
        cubeMap.SetPixel(CubemapFace.PositiveX, 0, 0, Color.red);
        cubeMap.Apply(); // Apply the stuff done to the Cubemap.
    }
}
```


            
