This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).ClearImporterOverride




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

public static void ClearImporterOverride(string path);






### Parameters



| Parameter | Description |
| --- | --- |
| path | Project relative path for the asset. |





### Description



Clears the importer override for the asset.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.AssetImporters;
using UnityEngine.Assertions;public class AssetDatabaseExamples : MonoBehaviour
{
    [MenuItem("AssetDatabase/Example Importer Actions")]
    static void AllImporterActions()
    {
        //This sets CubeImporter to be used for the asset
        AssetDatabase.SetImporterOverride<CubeImporter>("Assets/CompanionCube.cube");
        Debug.Log("New importer: " + AssetDatabase.GetImporterOverride("Assets/CompanionCube.cube"));        //This clears importer override and sets it to null
        AssetDatabase.ClearImporterOverride("Assets/CompanionCube.cube");
        Assert.IsNull(AssetDatabase.GetImporterOverride("Assets/CompanionCube.cube"));
    }
}
```


            
