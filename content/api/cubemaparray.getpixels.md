This version of Unity is unsupported.



# [CubemapArray](CubemapArray.html).GetPixels




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

public Color[] GetPixels([CubemapFace](CubemapFace.html) face,
int arrayElement,
int miplevel);






## Declaration

public Color[] GetPixels([CubemapFace](CubemapFace.html) face,
int arrayElement);






### Parameters



| Parameter | Description |
| --- | --- |
| face | The CubemapFace to read from. |
| miplevel | The mipmap level to get. The range is 0 through the texture's Texture.mipmapCount. The default value is 0. |
| arrayElement | The array slice to read pixel data from. |





### Returns



**Color[]**
        An array that contains the pixel colors.





### Description



Gets the pixel color data for a mipmap level of a face of a slice as [Color](Color.html) structs.





This method gets pixel data from the texture in CPU memory. [Texture.isReadable](Texture-isReadable.html) must be `true`.

The array contains the pixels row by row, starting at the bottom left of the face texture. The size of the array is the width × height of the mipmap level.

Each pixel is a [Color](Color.html) struct. `GetPixels` might be slower than some other texture methods because it converts the format the texture uses into [Color](Color.html). `GetPixels` also needs to decompress compressed textures, and use memory to store the decompressed area. To get pixel data more quickly, use [GetPixelData](CubemapArray.GetPixelData.html) instead.

If `GetPixels` fails, Unity throws an exception. `GetPixels` might fail if the array contains too much data. Use [GetPixelData](CubemapArray.GetPixelData.html) instead for very large textures.

You can't use `GetPixel` with textures that use Crunch texture compression. Use [GetPixels32](CubemapArray.GetPixels32.html) instead.


              


```
using UnityEngine;public class CubemapArrayExample : MonoBehaviour
{
    public CubemapArray source;
    public CubemapArray destination;    void Start()
    {
        // Get a copy of the color data from the source CubemapArray, in high-precision float format.
        // Each element in the array represents the color data for an individual pixel.
        CubemapFace sourceFace = CubemapFace.PositiveX;
        int sourceSlice = 0;
        int sourceMipLevel = 0;
        Color[] pixels = source.GetPixels(sourceFace, sourceSlice, sourceMipLevel);        // If required, manipulate the pixels before applying them to the destination texture.
        // This example code reverses the array, which rotates the image 180 degrees.
        System.Array.Reverse(pixels, 0, pixels.Length);        // Set the pixels of the destination CubemapArray.
        CubemapFace destinationFace = CubemapFace.PositiveX;
        int destinationSlice = 0;
        int destinationMipLevel = 0;
        destination.SetPixels(pixels, destinationFace, destinationSlice, destinationMipLevel);        // Apply changes to the destination CubemapArray, which uploads its data to the GPU.
        destination.Apply();
    }
}
```





Additional resources: [SetPixels](CubemapArray.SetPixels.html), [GetPixelData](CubemapArray.GetPixelData.html), [Texture.mipmapCount](Texture-mipmapCount.html).


            
