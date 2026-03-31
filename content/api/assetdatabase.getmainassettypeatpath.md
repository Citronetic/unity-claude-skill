This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).GetMainAssetTypeAtPath




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

public static Type GetMainAssetTypeAtPath(string assetPath);






### Parameters



| Parameter | Description |
| --- | --- |
| assetPath | Filesystem path of the asset to load. |





### Description



Returns the type of the main asset object at `assetPath`.





All paths are relative to the Project folder, for example: "Assets/MyTextures/hello.png".


              


```
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;public class AssetDatabaseExamples : MonoBehaviour
{
    [MenuItem("AssetDatabase/Print Type Count")]
    static void GetAllAssetTypeCount()
    {
        var typeCount = new Dictionary<string, uint>();
        //Put all the types that were found in the typeCount dictionary and increment their count
        foreach (var guid in AssetDatabase.FindAssets("", new []{"Assets"}))
        {
            var path = AssetDatabase.GUIDToAssetPath(guid);
            var typeString = AssetDatabase.GetMainAssetTypeAtPath(path).ToString();
            if (typeCount.ContainsKey(typeString))
                typeCount[typeString]++;
            else
                typeCount.Add(typeString, 1);
        }
        //Print types and their count into the Unity Console
        foreach (var element in typeCount)
        {
            Debug.Log(element);
        }
    }
}
```


            
