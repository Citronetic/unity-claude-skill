This version of Unity is unsupported.



# [ImageConversion](ImageConversion.html).EncodeNativeArrayToPNG




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

public static NativeArray<byte> EncodeNativeArrayToPNG(NativeArray<T> input,
[Experimental.Rendering.GraphicsFormat](Experimental.Rendering.GraphicsFormat.html) format,
uint width,
uint height,
uint rowBytes);






### Parameters



| Parameter | Description |
| --- | --- |
| input | The native array to convert. |
| format | The pixel format of the image data. |
| width | The width of the image data in pixels. |
| height | The height of the image data in pixels. |
| rowBytes | The length of a single row in bytes. The default is 0, which means Unity calculates the length automatically. |





### Description



Encodes this native array into PNG format.





This function returns a NativeArray<byte> which is the PNG data. You can store the encoded data as a file or send it over the network without further processing.

                    This function does not work on any compressed format.
                    The encoded PNG data will be either 8bit grayscale, RGB or RGBA (depending on the passed in format).
                    For single-channel red textures ( `R8`, `R16`, `RFloat` and `RHalf` ), the encoded PNG data will be in grayscale.

                    PNG data will not contain gamma correction or color profile information.

                    The native array that this function returns is allocated with the persistent allocator, so this function should only be called from the main thread.


              


```
// Saves screenshot as PNG file.
using System.Collections;
using System.IO;
using Unity.Collections;
using UnityEngine;public class PNGScreenSaver : MonoBehaviour
{
    // Take a shot immediately
    IEnumerator Start()
    {
        yield return SaveScreenPNG();
    }    IEnumerator SaveScreenPNG()
    {
        // Read the screen buffer after rendering is complete
        yield return new WaitForEndOfFrame();        // Create a texture in RGB24 format the size of the screen
        int width = Screen.width;
        int height = Screen.height;
        Texture2D tex = new Texture2D(width, height, TextureFormat.RGB24, false);        // Read the screen contents into the texture
        tex.ReadPixels(new Rect(0, 0, width, height), 0, 0);
        tex.Apply();        // Encode the bytes in PNG format
        NativeArray<byte> imageBytes = new NativeArray<byte>(tex.GetRawTextureData(), Allocator.Temp);
        var bytes = ImageConversion.EncodeNativeArrayToPNG(imageBytes, tex.graphicsFormat, (uint)width, (uint)height);
        Object.Destroy(tex);        // Write the returned byte array to a file in the project folder
        File.WriteAllBytes(Application.dataPath + "/../SavedScreen.png", bytes.ToArray());
    }
}
```





Additional resources: [EncodeToPNG](ImageConversion.EncodeToPNG.html), [EncodeArrayToPNG](ImageConversion.EncodeArrayToPNG.html), [EncodeNativeArrayToJPG](ImageConversion.EncodeNativeArrayToJPG.html), [EncodeNativeArrayToTGA](ImageConversion.EncodeNativeArrayToTGA.html), [EncodeNativeArrayToEXR](ImageConversion.EncodeNativeArrayToEXR.html).


            
