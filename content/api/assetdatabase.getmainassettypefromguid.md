This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).GetMainAssetTypeFromGUID




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

public static Type GetMainAssetTypeFromGUID(GUID guid);






### Parameters



| Parameter | Description |
| --- | --- |
| guid | The guid of the asset. |





### Description



Returns the type of the main asset object with `guid`.


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
            var typeString = AssetDatabase.GetMainAssetTypeFromGUID(new GUID(guid)).ToString();
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


            
