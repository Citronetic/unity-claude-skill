This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).GetCachedIcon




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

public static [Texture](Texture.html) GetCachedIcon(string path);






### Description



Retrieves an icon for the asset at the given asset path.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;public class AssetDatabaseExamples : MonoBehaviour
{
    [MenuItem("AssetDatabase/Get Cached Icon Example")]
    public static void GetCachedIconExample()
    {
        var textureList = new List<Texture>();
        //Get asset icons and put them in a list
        foreach (var guid in AssetDatabase.FindAssets("", new []{"Assets"}))
        {
            var path = AssetDatabase.GUIDToAssetPath(guid);
            textureList.Add(AssetDatabase.GetCachedIcon(path));
        }        //Set Material textures to the asset icons
        var textureNo = 0;
        for (var i = 0; i < 10; i++)
        {
            var path = $"Assets/Materials/GroundMaterial{i}.mat";
            var asset = (Material)AssetDatabase.LoadMainAssetAtPath(path);
            if (textureNo >= textureList.Count)
                textureNo = 0;
            asset.mainTexture = textureList[textureNo++];
        }
    }
}
```


            
