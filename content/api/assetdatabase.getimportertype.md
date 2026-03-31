This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).GetImporterType




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

public static Type GetImporterType(GUID guid);






### Parameters



| Parameter | Description |
| --- | --- |
| guid | GUID of the asset to get the importer type from. |





### Description



Returns the type of importer associated with an asset without loading the asset.





This method allows you to determine which importer is associated with an asset. This method is more efficient than [AssetImporter.GetAtPath](AssetImporter.GetAtPath.html), which also loads the object. If you need to check a large number of asset importers at once, you should use the batch version of this method [AssetDatabase.GetImporterTypes](AssetDatabase.GetImporterTypes.html).


              


```
using UnityEngine;
using UnityEditor;public class AssetDatabaseExamples
{
    [MenuItem("AssetDatabase/GetMatchingAssetType")]
    public static void GetMatchingAssetType()
    {
        var matchingAssets = AssetDatabase.FindAssets("Powerup");
        var matchingAssetGuid = new GUID(matchingAssets[0]);
        Debug.Log($"Importer type: {AssetDatabase.GetImporterType(matchingAssetGuid)}");
    }
}
```




---








## Declaration

public static Type GetImporterType(string assetPath);






### Parameters



| Parameter | Description |
| --- | --- |
| assetPath | Path of asset to get importer Type from. |





### Description



Returns the type of the importer associated with an asset without loading the asset.





The asset path you provide should be relative to the project folder root. For example, "Assets/MyTextures/hello.png". This method allows you to determine which importer is associated with an asset. This method is more efficient than [AssetImporter.GetAtPath](AssetImporter.GetAtPath.html), which also loads the object. If you need to check a large number of asset importers at once, you should use the batch version of this method [AssetDatabase.GetImporterTypes](AssetDatabase.GetImporterTypes.html).


              


```
using UnityEngine;
using UnityEditor;public class AssetDatabaseExamples
{
    [MenuItem("AssetDatabase/GetImporterTypeOfSelectedObject")]
    public static void GetImporterTypeOfSelectedObject()
    {
        var selectedObject = Selection.activeObject;
        var objectPath = AssetDatabase.GetAssetPath(selectedObject);
        Debug.Log($"Importer type: {AssetDatabase.GetImporterType(objectPath)}");
    }
}
```


            
