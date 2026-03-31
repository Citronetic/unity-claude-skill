This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).MoveAssetToTrash




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

public static bool MoveAssetToTrash(string path);






### Parameters



| Parameter | Description |
| --- | --- |
| path | Project relative path of the asset or folder to be deleted. |





### Returns



**bool**
        Returns true if the asset has been successfully removed, false if it doesn't exist or couldn't be removed.





### Description



Moves the specified asset  or folder to the OS trash.





Paths should be relative to the project folder, for example: "Assets/MyTextures/hello.png"

Additional resources: [AssetDatabase.DeleteAsset](AssetDatabase.DeleteAsset.html), [AssetDatabase.DeleteAssets](AssetDatabase.DeleteAssets.html),  [AssetDatabase.MoveAssetsToTrash](AssetDatabase.MoveAssetsToTrash.html).


              


```
using UnityEngine;
using UnityEditor;//Note: When moving many Assets to trash and using version control integration it's better to use MoveAssetsToTrash method for performance reasons
public class AssetDatabaseExamples : MonoBehaviour
{
    [MenuItem("AssetDatabase/Move All Files In Folder To Trash")]
    static void MoveAllFilesInFolderToTrash()
    {
        string[] unusedFolder = { "Assets/Unused" };
        foreach (var asset in AssetDatabase.FindAssets("", unusedFolder))
        {
            var path = AssetDatabase.GUIDToAssetPath(asset);
            AssetDatabase.MoveAssetToTrash(path);
        }
    }
}
```


            
