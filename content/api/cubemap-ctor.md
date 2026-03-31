This version of Unity is unsupported.



# Cubemap Constructor




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

public Cubemap(int width,
[TextureFormat](TextureFormat.html) textureFormat,
bool mipChain);






## Declaration

public Cubemap(int width,
[TextureFormat](TextureFormat.html) textureFormat,
bool mipChain,
bool createUninitialized = false);






## Declaration

public Cubemap(int width,
[TextureFormat](TextureFormat.html) format,
int mipCount);






## Declaration

public Cubemap(int width,
[TextureFormat](TextureFormat.html) format,
int mipCount,
bool createUninitialized = false);






### Parameters



| Parameter | Description |
| --- | --- |
| format | Pixel data format to be used for the Cubemap. |
| width | Width/height of a cube face in pixels. |
| textureFormat | Pixel data format to be used for the Cubemap. |
| mipChain | Should mipmaps be created? |
| createUninitialized | Use this flag to create the texture with uninitialized data. When overriding all texels anyway, this can lead to improved performance and reduced memory usage. |
| mipCount | Number of mipmaps to be created. Use TextureCreationFlags.MipChain to generate a full mipchain. |





### Description



Create a new empty cubemap texture.





The texture will be `size` on each side and can be created with or without mipmaps.

Enable `createUninitialized` to make the texture reference uninitialized data (both on the CPU and GPU). When overriding all texels, this can lead to improved performance and reduced memory usage during construction. Note that sampling an uninitialized texture gives unpredictable values.

Usually you will want to set the colors of the texture after creating it, using
[SetPixel](Cubemap.SetPixel.html) and [Apply](Cubemap.Apply.html) functions.

Note that this class does not support Cubemap creation from a script with a Crunch compression [TextureFormat](TextureFormat.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    public Cubemap texture;    void Start()
    {
        // Create a new Cubemap texture.
        texture = new Cubemap(128, TextureFormat.RGBA32, false);
    }
}
```





Additional resources: [SetPixel](Cubemap.SetPixel.html), [Apply](Cubemap.Apply.html) functions.


            
