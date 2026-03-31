This version of Unity is unsupported.



# [MonoImporter](MonoImporter.html).SetExecutionOrder




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

public static void SetExecutionOrder([MonoScript](MonoScript.html) script,
int order);






### Parameters



| Parameter | Description |
| --- | --- |
| script | The script to set the execution order for. |
| order | The execution order for the given MonoScript. |





### Description



Sets the execution order for a [MonoScript](MonoScript.html). This method forces Unity to reimport the [MonoImporter](MonoImporter.html) for the target script.





This is the same execution order that the [Script Execution Order Settings](../Manual/class-MonoManager.html) window displays.

The default execution order for scripts is 0.

Additional resources: [MonoImporter.GetExecutionOrder](MonoImporter.GetExecutionOrder.html).


              


```
using UnityEngine;
using UnityEditor;class Example
{
    [MenuItem("Examples/Set Execution Order for a Script")]
    public static void SetExecutionOrderForAScript()
    {
        var assetPath = "Assets/MyMonoBehaviour.cs";
        var monoImporter = AssetImporter.GetAtPath(assetPath) as MonoImporter;        MonoImporter.SetExecutionOrder(monoImporter.GetScript(), 100);
    }
}
```


            
