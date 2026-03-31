This version of Unity is unsupported.



# [AssetImporterEditor](AssetImporters.AssetImporterEditor.html).Apply




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

protected void Apply();






### Description



Saves any changes from the Editor's control into the asset's import settings object.





Can be overridden as required. Gets called when changes to settings are being applied.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.AssetImporters;public class ExampleScript : AssetImporterEditor
{
    protected override void Apply()
    {
        base.Apply();
        Debug.Log("The Importer has been applied.");
    }
}
```


            
