This version of Unity is unsupported.



# [EditorUtility](EditorUtility.html).CompressTexture




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

public static void CompressTexture([Texture2D](Texture2D.html) texture,
[TextureFormat](TextureFormat.html) format,
int quality);






## Declaration

public static void CompressTexture([Texture2D](Texture2D.html) texture,
[TextureFormat](TextureFormat.html) format,
[TextureCompressionQuality](TextureCompressionQuality.html) quality);






### Description



Compress a texture.





Use this function to explicitly compress a texture into specified format.

If you want to do texture compression in-game, use [Texture2D.Compress](Texture2D.Compress.html) function, which
will use faster but lower quality DXT1/DXT5 (also known as BC1/BC3) or ETC/EAC compression.


              


```
using UnityEngine;
using UnityEditor;public class CompressTextureExample : AssetPostprocessor
{
    // Automatically Compress all imported textures to the project to RGB24
    void OnPostprocessTexture(Texture2D t)
    {
        EditorUtility.CompressTexture(t, TextureFormat.RGB24, TextureCompressionQuality.Normal);
    }
}
```


            
