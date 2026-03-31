This version of Unity is unsupported.



# [AssetPostprocessor](AssetPostprocessor.html).assetImporter




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












                    public [AssetImporter](AssetImporter.html) assetImporter;






### Description



Reference to the asset importer.


              


```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;// Set the scale of all the imported models to  "globalScaleModifier"
// and dont generate materials for the imported objectspublic class CustomImportSettings : AssetPostprocessor
{
    float globalScaleModifier  = 0.0028f;    void OnPreprocessModel()
    {
        ModelImporter importer = (ModelImporter)assetImporter;
        importer.globalScale = globalScaleModifier;
        importer.materialImportMode = ModelImporterMaterialImportMode.None;
    }
}
```


            
