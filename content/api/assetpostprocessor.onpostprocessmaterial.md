This version of Unity is unsupported.



# [AssetPostprocessor](AssetPostprocessor.html).OnPostprocessMaterial(Material)




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



















### Description



Add this function to a subclass to get a notification when a new Material is created during an import of a ModelImporter.





Use this method to modify the properties of newly created Material assets during import.

Note: This method is only called by the ModelImporter when the ModelImporter.MaterialImportMode option is set to [ModelImporterMaterialImportMode.ImportStandard](ModelImporterMaterialImportMode.ImportStandard.html).


              


```
using UnityEngine;
using UnityEditor;public class MakeMaterialsRed : AssetPostprocessor
{
    void OnPostprocessMaterial(Material material)
    {
        material.color = Color.red;
    }
}
```


            
