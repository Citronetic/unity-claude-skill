This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).IsForeignAsset




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

public static bool IsForeignAsset([Object](Object.html) obj);






## Declaration

public static bool IsForeignAsset(int instanceID);






### Description



Determines whether the Asset is a foreign Asset.





A foreign Asset is an external file that you import into your Unity Project (for example, a .png Texture file is a foreign Asset).

Upon importing a foreign Asset, Unity will produce a serialized representation of the data in the Project's Library folder. This is done when the Asset is first added to the Project and when the foreign Asset is updated externally to Unity.

Additional resources: [AssetDatabase.IsNativeAsset](AssetDatabase.IsNativeAsset.html).


              


```
using UnityEditor;
using UnityEngine;public class AssetDatabaseExamples : MonoBehaviour
{
    [MenuItem("AssetDatabase/Find Foreign Assets")]
    static void FindForeignAssets()
    {
        //Find all foreign assets
        foreach (var guid in AssetDatabase.FindAssets("",new []{"Assets"}))
        {
            var path = AssetDatabase.GUIDToAssetPath(guid);
            var asset = AssetDatabase.LoadMainAssetAtPath(path);
            var assetIsForeign = AssetDatabase.IsForeignAsset(asset);
            if(assetIsForeign)
                Debug.Log(asset);
        }
    }
}
```


            
