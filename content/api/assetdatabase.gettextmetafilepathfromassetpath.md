This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).GetTextMetaFilePathFromAssetPath




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

public static string GetTextMetaFilePathFromAssetPath(string path);






### Parameters



| Parameter | Description |
| --- | --- |
| path | Project relative path to the asset. |





### Returns



**string**
        The path to the .meta text file or an empty string if the file does not exist.





### Description



Gets the path to the text .meta file associated with an asset.


              


```
using UnityEngine;
using UnityEditor;public class AssetDatabaseExamples
{
    [MenuItem("AssetDatabase/Get Meta file path of Animations")]
    static void GetMetaFilePathOfAllAnimations()    {
        //This will create a list of file paths of all Animation assets.
        string[] animAssetsGuids = AssetDatabase.FindAssets("t:Animation");        foreach (var animAssetGuid in animAssetsGuids)
        {
            //This will output the path of an asset and a .meta file associated with an asset
            string animAsset = AssetDatabase.GUIDToAssetPath(animAssetGuid);
            string metaPath = AssetDatabase.GetTextMetaFilePathFromAssetPath(animAsset);
            Debug.Log("Asset file path: " + animAsset);
            Debug.Log("Meta file path: " + metaPath);
        }
    }
}
```


            
