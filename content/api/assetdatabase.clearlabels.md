This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).ClearLabels




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

public static void ClearLabels([Object](Object.html) obj);






### Description



Removes all labels attached to an asset.


              


```
using UnityEngine;
using UnityEditor;
public class AssetDatabaseExamples : MonoBehaviour
{
    [MenuItem("AssetDatabase/Clear Labels")]
    static void ClearAssetLabels()
    {
        for (var i = 0; i < 10; i++)
        {
            var prefabPath = $"Assets/Prefabs/Litter/Litter{i}.prefab";
            var asset = AssetDatabase.LoadMainAssetAtPath(prefabPath);
            AssetDatabase.ClearLabels(asset);
        }
    }
}
```


            
