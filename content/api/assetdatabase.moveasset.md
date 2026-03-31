This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).MoveAsset




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

public static string MoveAsset(string oldPath,
string newPath);






### Parameters



| Parameter | Description |
| --- | --- |
| oldPath | The path where the asset currently resides. |
| newPath | The path which the asset should be moved to. |





### Returns



**string**
        An empty string if the asset has been successfully moved, otherwise an error message.





### Description



Move an asset file (or folder) from one folder to another.





All paths are relative to the project folder, for example: "Assets/MyTextures/hello.png".


              


```
using UnityEngine;
using UnityEditor;public class AssetDatabaseExamples : MonoBehaviour
{
    [MenuItem("AssetDatabase/Move All Scenes To 'Scenes' Folder")]
    static void MoveScenes()
    {
        foreach (var asset in AssetDatabase.FindAssets("t: Scene"))
        {
            var path = AssetDatabase.GUIDToAssetPath(asset);
            var assetName = AssetDatabase.LoadMainAssetAtPath(path).name;
            AssetDatabase.MoveAsset(path, $"Assets/Scenes/{assetName}.unity");
        }
    }
}
```


            
