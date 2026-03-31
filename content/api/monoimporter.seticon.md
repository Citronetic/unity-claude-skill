This version of Unity is unsupported.



# [MonoImporter](MonoImporter.html).SetIcon




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

public void SetIcon([Texture2D](Texture2D.html) icon);






### Parameters



| Parameter | Description |
| --- | --- |
| icon | The custom icon to associate with the imported MonoScript. When the value is null, Unity restores the default icon. |





### Description



Sets a custom icon to associate with the imported [MonoScript](MonoScript.html).





MonoScripts can have an associated custom icon. This icon is used in the Scene view, the Inspector, and the Project window.

Additional resources: [MonoImporter.GetIcon](MonoImporter.GetIcon.html), [PluginImporter.SetIcon](PluginImporter.SetIcon.html), [EditorGUIUtility.SetIconForObject](EditorGUIUtility.SetIconForObject.html).


              


```
using UnityEngine;
using UnityEditor;public class Example
{
    [MenuItem("Examples/Set Custom Icon on MonoScript")]
    static void SetCustomIconOnMonoScript()
    {
        var monoImporter = AssetImporter.GetAtPath("Assets/MyMonoBehaviour.cs") as MonoImporter;
        var icon = AssetDatabase.LoadAssetAtPath<Texture2D>("Assets/MyIcon.png");        monoImporter.SetIcon(icon);
        monoImporter.SaveAndReimport();
    }
}
```


            
