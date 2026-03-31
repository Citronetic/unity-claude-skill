This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).GetImporterTypes




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

public static Type[] GetImporterTypes(ReadOnlySpan<GUID> guids);






### Parameters



| Parameter | Description |
| --- | --- |
| guids | Array of asset GUIDs to check. The importer type for each asset in the array is returned. |





### Description



Returns the types of importers associated with the specified array of assets, without loading those assets.





This method is a batch version of [AssetDatabase.GetImporterType](AssetDatabase.GetImporterType.html). Use this method if you need to check a large number of asset importers at once.
 **Note**: GUID Arrays can be implicitly cast to ReadOnlySpan, see example for usage.


              


```
using UnityEngine;
using UnityEditor;public class AssetDatabaseExamples
{
    [MenuItem("AssetDatabase/GetMatchingAssetTypes")]
    public static void GetMatchingAssetTypes()
    {
        var matchingAssets = AssetDatabase.FindAssets("Powerup");
        GUID[] guids = new GUID[matchingAssets.Length];        for(int i = 0; i < guids.Length; ++i)
        {
            guids[i] = new GUID(matchingAssets[i]);
        }        var matchingTypes = AssetDatabase.GetImporterTypes(guids);        foreach (var curType in matchingTypes)
        {
            Debug.Log($"Importer type: {curType}");
        }
    }
}
```




---








## Declaration

public static Type[] GetImporterTypes(string[] paths);






### Parameters



| Parameter | Description |
| --- | --- |
| paths | Array of asset paths to check. The importer type for each asset in the array is returned. |





### Description



Returns the types of importers associated with the specified array of assets, without loading those assets.





The asset paths you provide should be relative to the project folder root. For example, "Assets/MyTextures/hello.png". This method is a batch version of [AssetDatabase.GetImporterType](AssetDatabase.GetImporterType.html). Use this method if you need to check a large number of asset importers at once.


              


```
using UnityEngine;
using UnityEditor;public class AssetDatabaseExamples
{
    [MenuItem("AssetDatabase/GetImporterTypeOfSelectedObjects")]
    public static void GetImporterTypeOfSelectedObjects()
    {
        var selectedObjects = Selection.objects;
        string[] paths = new string[selectedObjects.Length];        for (int i = 0; i < paths.Length; ++i)
        {
            paths[i] = AssetDatabase.GetAssetPath(selectedObjects[i]);
        }        var selectedObjectTypes = AssetDatabase.GetImporterTypes(paths);        foreach (var curType in selectedObjectTypes)
        {
            Debug.Log($"Importer type: {curType}");
        }
    }
}
```


            
