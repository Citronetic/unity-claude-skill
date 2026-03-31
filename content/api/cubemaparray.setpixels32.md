This version of Unity is unsupported.



# [CubemapArray](CubemapArray.html).SetPixels32




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




                [Switch to Manual](../Manual/class-CubemapArray.html)










## Declaration

public void SetPixels32(Color32[] colors,
[CubemapFace](CubemapFace.html) face,
int arrayElement,
int miplevel);






## Declaration

public void SetPixels32(Color32[] colors,
[CubemapFace](CubemapFace.html) face,
int arrayElement);






### Parameters



| Parameter | Description |
| --- | --- |
| colors | The array of pixel colours to use. This is a 2D image flattened to a 1D array. |
| face | The CubemapFace to write colors to. |
| arrayElement | The array slice to write colors to. |
| miplevel | The mipmap level to write colors to. The range is 0 through the texture's Texture.mipmapCount. The default value is 0. |





### Description



Sets the pixel colors of an entire mipmap level of a face of a slice.





This method sets pixel data for the texture in CPU memory. [Texture.isReadable](Texture-isReadable.html) must be `true`, and you must call [Apply](CubemapArray.Apply.html) after `SetPixels32` to upload the changed pixels to the GPU.

`colors` must contain the pixels row by row, starting at the bottom left of the face texture. The size of the array must be the width x height of the mipmap level.

`SetPixels32` might be slower than some other texture methods because it converts the [Color32](Color32.html) struct into the format the texture uses. To set pixel data more quickly, use [SetPixelData](CubemapArray.SetPixelData.html) instead.

You can use `SetPixels32` with the following [texture formats](TextureFormat.html):



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





For all other formats, `SetPixels32` fails. Unity throws an exception when `SetPixels32` fails.

Additional resources: [SetPixels](CubemapArray.SetPixels.html), [SetPixelData](CubemapArray.SetPixelData.html), [GetPixels32](CubemapArray.GetPixels32.html), [GetPixels](CubemapArray.GetPixels.html), [Apply](CubemapArray.Apply.html), [mipmapCount](Texture-mipmapCount.html).


            
