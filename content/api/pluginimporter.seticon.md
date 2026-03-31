This version of Unity is unsupported.



# [PluginImporter](PluginImporter.html).SetIcon




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

public void SetIcon(string className,
[Texture2D](Texture2D.html) icon);






### Parameters



| Parameter | Description |
| --- | --- |
| className | The fully qualified class name of a MonoScript imported by this managed plugin. |
| icon | The custom icon to associate with the imported MonoScript. When the value is null, Unity restores the default icon. |





### Description



Sets the custom icon to associate with a [MonoScript](MonoScript.html) imported by a managed plugin.





Each [MonoScript](MonoScript.html) imported by managed plugins can have an associated custom icon. This icon is used in the Scene view, the Inspector, and the Project window. To remove a [MonoScript](MonoScript.html)'s associated custom icon, pass null to this method.

Additional resources: [MonoScript.GetClass](MonoScript.GetClass.html), Type.FullName, [PluginImporter.GetIcon](PluginImporter.GetIcon.html), [MonoImporter.SetIcon](MonoImporter.SetIcon.html), [EditorGUIUtility.SetIconForObject](EditorGUIUtility.SetIconForObject.html).


              


```
using UnityEngine;
using UnityEditor;public class Example
{
    [MenuItem("Examples/Set Custom Icon on Managed Plugin MonoScript")]
    static void SetCustomIconOnManagedPluginMonoScript()
    {
        var dllPath = "Assets/MyManagedPlugin.dll";
        var iconPath = "Assets/MyIcon.png";
        var pluginImporter = AssetImporter.GetAtPath(dllPath) as PluginImporter;
        var monoScript = AssetDatabase.LoadAssetAtPath<MonoScript>(dllPath);
        var icon = AssetDatabase.LoadAssetAtPath<Texture2D>(iconPath);        pluginImporter.SetIcon(monoScript.GetClass().FullName, icon);
        pluginImporter.SaveAndReimport();
    }
}
```


            
