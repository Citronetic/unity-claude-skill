This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).SetLabels




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

public static void SetLabels([Object](Object.html) obj,
string[] labels);






### Description



Replaces that list of labels on an asset.


              


```
using UnityEngine;
using UnityEditor;public class AssetDatabaseExamples : MonoBehaviour
{
    [MenuItem("AssetDatabase/Set Vegetation Labels")]
    static void SetVegetationAssetLabels()
    {
        //Search the Assets folder for all assets with "tree" in its name and then add "Vegetation" Label to every asset that we find
        foreach (var guid in AssetDatabase.FindAssets("tree", new [] {"Assets"}))
        {
            var path = AssetDatabase.GUIDToAssetPath(guid);
            var asset = AssetDatabase.LoadMainAssetAtPath(path);
            AssetDatabase.SetLabels(asset, new []{"Vegetation"});
        }
    }
}
```


            
