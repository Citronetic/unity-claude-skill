This version of Unity is unsupported.



# [MonoImporter](MonoImporter.html).GetDefaultReference




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

public Object GetDefaultReference(string name);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The name of a public field in the imported MonoScript. |





### Returns



**Object**
        The Unity object to use as a default value for the given reference field.





### Description



Gets the default value for a reference field in the imported [MonoScript](MonoScript.html).





Additional resources: [MonoImporter.SetDefaultReferences](MonoImporter.SetDefaultReferences.html).


              


```
using UnityEngine;
using UnityEditor;class Example
{
    [MenuItem("Examples/Get Default Reference")]
    public static void GetDefaultReference()
    {
        var assetPath = "Assets/MyMonoBehaviour.cs";
        var monoImporter = AssetImporter.GetAtPath(assetPath) as MonoImporter;
        var value = monoImporter.GetDefaultReference("MyGameObject");
        Debug.Log($"Default reference for MyGameObject in {monoImporter.GetScript().GetClass().FullName} is {value}");
    }
}
```


            
