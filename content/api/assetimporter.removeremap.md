This version of Unity is unsupported.



# [AssetImporter](AssetImporter.html).RemoveRemap




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

public bool RemoveRemap([AssetImporter.SourceAssetIdentifier](AssetImporter.SourceAssetIdentifier.html) identifier);






### Parameters



| Parameter | Description |
| --- | --- |
| identifier | The identifier of the sub-asset. |





### Returns



**bool**
        Returns true if an element was removed, otherwise false.





### Description



Removes an item from the map of external objects.





Apply changes by writing the metadata and reimporting the Asset.

The external Asset referenced in the map is not affected in any way by this method.


              


```
using UnityEngine;
using UnityEditor;public class Extractor
{
    public static void RemoveExternalObjectMapping(string assetPath, AssetImporter.SourceAssetIdentifier subAssetIdentifier)
    {
        var assetImporter = AssetImporter.GetAtPath(assetPath);
        assetImporter.RemoveRemap(subAssetIdentifier);        AssetDatabase.WriteImportSettingsIfDirty(assetPath);
        AssetDatabase.ImportAsset(assetPath, ImportAssetOptions.ForceUpdate);
    }
}
```





Additional resources: [AssetImporter.AddRemap](AssetImporter.AddRemap.html).


            
