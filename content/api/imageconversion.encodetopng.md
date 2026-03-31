This version of Unity is unsupported.



# [ImageConversion](ImageConversion.html).EncodeToPNG




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

public static byte[] EncodeToPNG([Texture2D](Texture2D.html) tex);






### Parameters



| Parameter | Description |
| --- | --- |
| tex | The texture to convert. |





### Description



Encodes this texture into PNG format.





This function returns a byte array which is the PNG file data. You can store the encoded data as a file or send it over the network without further processing.

This function does not work on any compressed format.
[Texture.isReadable](Texture-isReadable.html) must be `true`.

The encoded PNG data will be either 8bit grayscale, RGB or RGBA (depending on the passed in format).
For single-channel red textures ( `R8`, `R16`, `RFloat` and `RHalf` ), the encoded PNG data will be in grayscale.
PNG data will not contain gamma correction or color profile information.


              


```
// Saves screenshot as PNG file.
using UnityEngine;
using UnityEngine.Networking;
using System.Collections;
using System.IO;public class PNGUploader : MonoBehaviour
{
    // Take a shot immediately
    IEnumerator Start()
    {
        yield return UploadPNG();
    }    IEnumerator UploadPNG()
    {
        // We should only read the screen buffer after rendering is complete
        yield return new WaitForEndOfFrame();        // Create a texture the size of the screen, RGB24 format
        int width = Screen.width;
        int height = Screen.height;
        Texture2D tex = new Texture2D(width, height, TextureFormat.RGB24, false);        // Read screen contents into the texture
        tex.ReadPixels(new Rect(0, 0, width, height), 0, 0);
        tex.Apply();        // Encode texture into PNG
        byte[] bytes = ImageConversion.EncodeToPNG(tex);
        Object.Destroy(tex);        // For testing purposes, also write to a file in the project folder
        // File.WriteAllBytes(Application.dataPath + "/../SavedScreen.png", bytes);
        // Create a Web Form
        WWWForm form = new WWWForm();
        form.AddField("frameCount", Time.frameCount.ToString());
        form.AddBinaryData("fileUpload", bytes);        // Upload to a cgi script
        var w = UnityWebRequest.Post("http://localhost/cgi-bin/env.cgi?post", form);
        yield return w.SendWebRequest();        if (w.result != UnityWebRequest.Result.Success)
        {
            Debug.Log(w.error);
        }
        else
        {
            Debug.Log("Finished Uploading Screenshot");
        }
    }
}
```





Additional resources: [Texture2D.ReadPixels](Texture2D.ReadPixels.html), [WaitForEndOfFrame](WaitForEndOfFrame.html), [LoadImage](ImageConversion.LoadImage.html), [EncodeArrayToPNG](ImageConversion.EncodeArrayToPNG.html), [EncodeNativeArrayToPNG](ImageConversion.EncodeNativeArrayToPNG.html), [EncodeToJPG](ImageConversion.EncodeToJPG.html), [EncodeToTGA](ImageConversion.EncodeToTGA.html), [EncodeToEXR](ImageConversion.EncodeToEXR.html).


            
