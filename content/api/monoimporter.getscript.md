This version of Unity is unsupported.



# [MonoImporter](MonoImporter.html).GetScript




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

public [MonoScript](MonoScript.html) GetScript();






### Returns



**MonoScript**
        Returns the imported script.





### Description



Gets the imported [MonoScript](MonoScript.html). If the imported C# file contains multiple classes, the first is returned.


              


```
using UnityEngine;
using UnityEditor;class Example
{
    [MenuItem("Examples/Output the Name of an Imported MonoScript")]
    public static void OutputTheNameOfAnImportedMonoScript()
    {
        var assetPath = "Assets/MyMonoBehaviour.cs";
        var monoImporter = AssetImporter.GetAtPath(assetPath) as MonoImporter;        var monoScript = monoImporter.GetScript();
        Debug.Log($"{assetPath} contains {monoScript.GetClass().FullName}");
    }
}
```


            
