This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).RenameAsset




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

public static string RenameAsset(string pathName,
string newName);






### Parameters



| Parameter | Description |
| --- | --- |
| pathName | The path where the asset currently resides. |
| newName | The new name which should be given to the asset. |





### Returns



**string**
        An empty string, if the asset has been successfully renamed, otherwise an error message.





### Description



Rename an asset file.





All paths are relative to the project folder, for example: "Assets/MyTextures/hello.png".


              


```
using UnityEngine;
using UnityEditor;public class AssetDatabaseExamples : MonoBehaviour
{
    [MenuItem("AssetDatabase/Rename Materials")]
    static void RenameMaterials()
    {
        var matID = 0;
        foreach (var asset in AssetDatabase.FindAssets("t: Material New Material"))
        {
            var path = AssetDatabase.GUIDToAssetPath(asset);
            AssetDatabase.RenameAsset(path, $"ShipMaterial{matID++}");
        }
    }
}
```


            
