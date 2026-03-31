This version of Unity is unsupported.



# [MonoImporter](MonoImporter.html).GetIcon




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

public [Texture2D](Texture2D.html) GetIcon();






### Returns



**Texture2D**
        Returns the custom icon that will be associated with the imported [MonoScript](MonoScript.html). If no custom icon will be associated with the imported [MonoScript](MonoScript.html), returns null.





### Description



Gets the icon to associate with the imported [MonoScript](MonoScript.html).





Additional resources: [MonoImporter.SetIcon](MonoImporter.SetIcon.html), [EditorGUIUtility.GetIconForObject](EditorGUIUtility.GetIconForObject.html).


              


```
using UnityEngine;
using UnityEditor;class Example
{
    [MenuItem("Examples/Get Icon for MonoScript from MonoImporter")]
    public static void GetIconForMonoScriptFromMonoImporter()
    {
        var assetPath = "Assets/MyMonoBehaviour.cs";
        var monoImporter = AssetImporter.GetAtPath(assetPath) as MonoImporter;
        var icon = monoImporter.GetIcon();
        Debug.Log($"Icon for {assetPath} is {icon}");
    }
}
```


            
