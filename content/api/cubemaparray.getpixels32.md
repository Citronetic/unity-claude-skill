This version of Unity is unsupported.



# [CubemapArray](CubemapArray.html).GetPixels32




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

public Color32[] GetPixels32([CubemapFace](CubemapFace.html) face,
int arrayElement,
int miplevel);






## Declaration

public Color32[] GetPixels32([CubemapFace](CubemapFace.html) face,
int arrayElement);






### Parameters



| Parameter | Description |
| --- | --- |
| face | The CubemapFace to read pixel data from. |
| arrayElement | The array slice to read pixel data from. |
| miplevel | The mipmap level to get. The range is 0 through the texture's Texture.mipmapCount. The default value is 0. |





### Returns



**Color32[]**
        An array that contains the pixel colors.





### Description



Gets the pixel color data for a mipmap level of a face of a slice as [Color32](Color32.html) structs.





This method gets pixel data from the texture in CPU memory. [Texture.isReadable](Texture-isReadable.html) must be `true`.

The array contains the pixels row by row, starting at the bottom left of the face texture. The size of the array is the width × height of the mipmap level.

Each pixel is a [Color32](Color32.html) struct. `GetPixels32` might be slower than some other texture methods because it converts the format the texture uses into [Color32](Color32.html). To get pixel data more quickly, use [GetPixelData](CubemapArray.GetPixelData.html) instead.

If `GetPixels32` fails, Unity throws an exception. `GetPixels32` might fail if the array contains too much data. Use [GetPixelData](CubemapArray.GetPixelData.html) instead for very large textures.


              


```
using UnityEngine;public class CubemapArrayExample : MonoBehaviour
{
    public CubemapArray source;
    public CubemapArray destination;    void Start()
    {
        // Get a copy of the color data from the source CubemapArray, in lower-precision int format.
        // Each element in the array represents the color data for an individual pixel.
        CubemapFace sourceFace = CubemapFace.PositiveX;
        int sourceSlice = 0;
        int sourceMipLevel = 0;
        Color32[] pixels = source.GetPixels32(sourceFace, sourceSlice, sourceMipLevel);        // If required, manipulate the pixels before applying them to the destination texture.
        // This example code reverses the array, which rotates the image 180 degrees.
        System.Array.Reverse(pixels, 0, pixels.Length);        // Set the pixels of the destination CubemapArray.
        CubemapFace destinationFace = CubemapFace.PositiveX;
        int destinationSlice = 0;
        int destinationMipLevel = 0;
        destination.SetPixels32(pixels, destinationFace, destinationSlice, destinationMipLevel);        // Apply changes to the destination CubemapArray, which uploads its data to the GPU.
        destination.Apply();
    }
}
```





Additional resources: [GetPixels](CubemapArray.GetPixels.html), [GetPixelData](CubemapArray.GetPixelData.html), [SetPixels32](CubemapArray.SetPixels32.html), [Graphics.CopyTexture](Graphics.CopyTexture.html).


            
