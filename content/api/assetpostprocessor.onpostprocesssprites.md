This version of Unity is unsupported.



# [AssetPostprocessor](AssetPostprocessor.html).OnPostprocessSprites(Texture2D, Sprite[])




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



















### Description



Add this function to a subclass to get a notification when an texture of sprite(s)  has completed importing.





For Multiple sprite-mode assets each sprite will be passed in the second argument as an array of sprites.


              


```
using UnityEngine;
using UnityEditor;public class Example : AssetPostprocessor
{
    void OnPostprocessSprites(Texture2D texture, Sprite[] sprites)
    {
        Debug.Log("Sprites: " + sprites.Length);
    }    void OnPostprocessTexture(Texture2D texture)
    {
        Debug.Log("Texture2D: (" + texture.width + "x" + texture.height + ")");
    }
}
```


            
