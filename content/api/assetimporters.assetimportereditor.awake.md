This version of Unity is unsupported.



# [AssetImporterEditor](AssetImporters.AssetImporterEditor.html).Awake




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

protected void Awake();






### Description



This function is called when the Editor script is started.





Awake is called as the AssetImporterEditor script starts. This happens as the editor is launched and is similar to [MonoBehaviour.Awake](MonoBehaviour.Awake.html).


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.AssetImporters;public class ExampleScript : AssetImporterEditor
{
    protected override void Awake()
    {
        base.Awake();
        Debug.Log("Awake");
    }
}
```





OnDisable cannot be a co-routine.


            
