This version of Unity is unsupported.



# [EditorUtility](EditorUtility.html).CompressCubemapTexture




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

public static void CompressCubemapTexture([Cubemap](Cubemap.html) texture,
[TextureFormat](TextureFormat.html) format,
int quality);






## Declaration

public static void CompressCubemapTexture([Cubemap](Cubemap.html) texture,
[TextureFormat](TextureFormat.html) format,
[TextureCompressionQuality](TextureCompressionQuality.html) quality);






### Description



Compress a cubemap texture.





Use this function to explicitly compress a cube map texture into specified format.


              


```
using UnityEngine;
using UnityEditor;public class CompressCubemapTextureExample : AssetPostprocessor
{
    // Automatically Compress all imported cube map textures to the project to RGB24
    void OnPostprocessTexture(Cubemap t)
    {
        EditorUtility.CompressCubemapTexture(t, TextureFormat.RGB24, TextureCompressionQuality.Normal);
    }
}
```


            
