This version of Unity is unsupported.



# [SpeedTreeImporter](SpeedTreeImporter.html).SearchAndRemapMaterials




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




                [Switch to Manual](../Manual/class-SpeedTreeImporter.html)










## Declaration

public bool SearchAndRemapMaterials(string materialFolderPath);






### Parameters



| Parameter | Description |
| --- | --- |
| materialFolderPath | The path to search for matching materials. |





### Returns



**bool**
        Returns true if any materials have been remapped, otherwise false.





### Description



Search the project for matching materials and use them instead of the internal materials.





Unity follows specific naming conventions when importing SpeedTree materials. This allows Unity to search for matching material assets by name.

The **materialFolderPath** is relative to the project folder, for example "Assets/MyModel Materials".

Throws **ArgumentNullException** when the path is *null* and **ArgumentException** when the file path is *empty*.


              


```
using UnityEditor;public class MaterialRemapper : AssetPostprocessor
{
    void OnPreprocessModel()
    {
        var importer = assetImporter as SpeedTreeImporter;
        importer.SearchAndRemapMaterials(importer.materialFolderPath);
    }
}
```


            
