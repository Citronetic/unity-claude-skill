This version of Unity is unsupported.



# [AssetPostprocessor](AssetPostprocessor.html).OnPreprocessModel()




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



Add this function to a subclass to get a notification just before a model (.fbx, .mb file etc.) is imported.





This lets you control the import settings through code.


              


```
using UnityEngine;
using UnityEditor;// Disable import of materials if the file contains
// the @ sign marking it as an animation.
public class Example : AssetPostprocessor
{
    void OnPreprocessModel()
    {
        if (assetPath.Contains("@"))
        {
            ModelImporter modelImporter = assetImporter as ModelImporter;
            modelImporter.materialImportMode = ModelImporterMaterialImportMode.None;
        }
    }
}
```


            
