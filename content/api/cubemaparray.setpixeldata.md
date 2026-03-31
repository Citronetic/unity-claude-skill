This version of Unity is unsupported.



# [CubemapArray](CubemapArray.html).SetPixelData




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

public void SetPixelData(T[] data,
int mipLevel,
[CubemapFace](CubemapFace.html) face,
int element,
int sourceDataStartIndex = 0);






## Declaration

public void SetPixelData(NativeArray<T> data,
int mipLevel,
[CubemapFace](CubemapFace.html) face,
int element,
int sourceDataStartIndex = 0);






### Parameters



| Parameter | Description |
| --- | --- |
| data | The array of data to use. |
| mipLevel | The mipmap level to write to. The range is 0 through the texture's Texture.mipmapCount. The default value is 0. |
| face | The CubemapFace to write to. |
| sourceDataStartIndex | The index in the source array to start copying from. The default value is 0. |
| element | The array slice to write to. |





### Description



Sets the raw data of an entire mipmap level of a face directly in CPU memory.





This method sets pixel data for the texture in CPU memory. [Texture.isReadable](Texture-isReadable.html) must be `true`, and you must call [Apply](CubemapArray.Apply.html) after `SetPixelData` to upload the changed pixels to the GPU.

`SetPixelData` is useful if you want to load compressed or other non-color texture format data into a texture.

The size of the `data` array must be the width × height of the mipmap level of the face, and the data layout must match the texture format, otherwise `SetPixelData` fails. You can use `byte` for `T` if you don't want to define a custom struct to match the texture format.

Unity throws an exception when `SetPixelData` fails.

Additional resources: [SetPixels](CubemapArray.SetPixels.html), [GetPixelData](CubemapArray.GetPixelData.html), [Apply](CubemapArray.Apply.html).


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    public CubemapArray texture;
    public void Start()
    {
        texture = new CubemapArray(2, 2, TextureFormat.RGB24, true);
        var data = new byte[]
        {
            // mip 0: 2x2 size
            255, 0, 0, // red
            0, 255, 0, // green
            0, 0, 255, // blue
            255, 255, 255, // white
            // mip 1: 1x1 size
            255, 255, 0 // yellow
        };
        texture.SetPixelData(data, 0, CubemapFace.PositiveX, 0, 0);
        texture.SetPixelData(data, 1, CubemapFace.PositiveX, 0, 12);
        texture.Apply(updateMipmaps: false);
    }
}
```


            
