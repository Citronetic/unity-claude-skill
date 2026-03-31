This version of Unity is unsupported.



# [AssetImporterEditor](AssetImporters.AssetImporterEditor.html).OnDisable




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

public void OnDisable();






### Description



This function is called when the editor object goes out of scope.





This is also called when the editor is destroyed and can be used for any cleanup code.
When scripts are reloaded after compilation has finished, OnDisable will be called, followed by an OnEnable after the script has been loaded.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.AssetImporters;public class ExampleScript : AssetImporterEditor
{
    public override void OnDisable()
    {
        base.OnDisable();
        Debug.Log("editor was removed");
    }
}
```





OnDisable cannot be a co-routine.


            
