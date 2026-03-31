This version of Unity is unsupported.



# [AssetImporterEditor](AssetImporters.AssetImporterEditor.html).OnEnable




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

public void OnEnable();






### Description



This function is called when the object is loaded.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.AssetImporters;public class ExampleScript : AssetImporterEditor
{
    public override void OnEnable()
    {
        base.OnEnable();
        Debug.Log("editor was enabled");
    }
}
```





OnEnable cannot be a co-routine.


            
