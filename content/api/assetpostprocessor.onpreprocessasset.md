This version of Unity is unsupported.



# [AssetPostprocessor](AssetPostprocessor.html).OnPreprocessAsset()




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



Add this function to a subclass to get a notification just before any Asset is imported.





This lets you control the import settings through code.


              


```
using UnityEditor;class MyModelPostprocessor : AssetPostprocessor
{
    void OnPreprocessAsset()
    {
        if (assetImporter.importSettingsMissing)
        {
            ModelImporter modelImporter = assetImporter as ModelImporter;
            if (modelImporter != null)
            {
                if (!assetPath.Contains("@"))
                    modelImporter.importAnimation = false;
                modelImporter.materialImportMode = ModelImporterMaterialImportMode.None;
            }
        }
    }
}
```


            
