This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).IsNativeAsset




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

public static bool IsNativeAsset([Object](Object.html) obj);






## Declaration

public static bool IsNativeAsset(int instanceID);






### Description



Determines whether the Asset is a native Asset.





A native Asset is a file produced directly by Unity's serialization system (for example, a .mat Material file is a native Asset)

Note that scenes, prefabs and assembly definitions are not considered to be native assets.

Additional resources: [AssetDatabase.IsForeignAsset](AssetDatabase.IsForeignAsset.html).


              


```
using UnityEditor;
using UnityEngine;public class AssetDatabaseExamples : MonoBehaviour
{
    [MenuItem("AssetDatabase/List All Native Files")]
    static void ListNativeFiles()
    {
        //List all native assets in the project
        foreach (var guid in AssetDatabase.FindAssets("", new []{"Assets"}))
        {
            var path = AssetDatabase.GUIDToAssetPath(guid);
            var asset = AssetDatabase.LoadMainAssetAtPath(path);
            if(AssetDatabase.IsNativeAsset(asset))
                Debug.Log(asset);
        }
    }
}
```


            
