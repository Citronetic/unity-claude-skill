This version of Unity is unsupported.



# [ScriptedImporterAttribute](AssetImporters.ScriptedImporterAttribute.html).version




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












                    public int version;






### Description



Importer version number that is used by the import layer to detect new version of the importer and trigger re-imports when such events occur, to apply latest changes made to the scripted imrpoter.


              


```
using UnityEngine;
using UnityEditor.AssetImporters;[ScriptedImporter(1, "sphere")]
public class SphereImporter : ScriptedImporter
{
    public override void OnImportAsset(AssetImportContext ctx)
    {
        // ...
    }
}
```


            
