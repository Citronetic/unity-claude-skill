This version of Unity is unsupported.



# [ImageConversion](ImageConversion.html).EncodeToEXR




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

public static byte[] EncodeToEXR([Texture2D](Texture2D.html) tex,
[Texture2D.EXRFlags](Texture2D.EXRFlags.html) flags);






### Parameters



| Parameter | Description |
| --- | --- |
| tex | The texture to convert. |
| flags | Flags used to control compression and the output format. The default is Texture2D.EXRFlags.None |





### Description



Encodes this texture into the EXR format.





This function returns a byte array which is the EXR file data. You can store the encoded data as a file or send it over the network without further processing.

                    This function does not work on any compressed format.
                    Although it is best to use this function for HDR texture formats (either 16-bit or 32-bit floats), it can be used with other formats (and the data is converted on the fly).
                    The default output format is uncompressed 16-bit float EXR and can be controlled using the passed in flags.
                    For the texture pass in, [Texture.isReadable](Texture-isReadable.html) must be `true`.
                    The encoded EXR data will only contain an alpha channel when the passed-in format has one. For single-channel red textures ( `R8`, `R16`, `RFloat` and `RHalf` ), the encoded data will be in grayscale mode.

                    Additional resources: [EXRFlags](Texture2D.EXRFlags.html), [EncodeToJPG](ImageConversion.EncodeToJPG.html), [EncodeToPNG](ImageConversion.EncodeToPNG.html).


              


```
// Saves HDR RenderTexture as an EXR file.
using UnityEngine;
using System.Collections;
using System.IO;public class SaveRenderTextureToEXR : MonoBehaviour
{
    RenderTexture m_InputTexture;    void SaveRenderTexture()
    {
        if (m_InputTexture != null)
        {
            int width = m_InputTexture.width;
            int height = m_InputTexture.height;            Texture2D tex = new Texture2D(width, height, TextureFormat.RGBAFloat, false);            // Read screen contents into the texture
            Graphics.SetRenderTarget(m_InputTexture);
            tex.ReadPixels(new Rect(0, 0, width, height), 0, 0);
            tex.Apply();            // Encode texture into the EXR
            byte[] bytes = ImageConversion.EncodeToEXR(tex, Texture2D.EXRFlags.CompressZIP);
            File.WriteAllBytes(Application.dataPath + "/../SavedRenderTexture.exr", bytes);            Object.DestroyImmediate(tex);
        }
    }
}
```





Additional resources: [EncodeArrayToEXR](ImageConversion.EncodeArrayToEXR.html), [EncodeNativeArrayToEXR](ImageConversion.EncodeNativeArrayToEXR.html), [EncodeToPNG](ImageConversion.EncodeToPNG.html), [EncodeToJPG](ImageConversion.EncodeToJPG.html), [EncodeToTGA](ImageConversion.EncodeToTGA.html).


            
