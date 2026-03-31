This version of Unity is unsupported.



# [PluginImporter](PluginImporter.html).GetIcon




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

public [Texture2D](Texture2D.html) GetIcon(string className);






### Parameters



| Parameter | Description |
| --- | --- |
| className | The fully qualified class name of a MonoScript imported by this plugin. |





### Returns



**Texture2D**
        Returns the custom icon that will be associated with the imported [MonoScript](MonoScript.html). If no custom icon will be associated with the imported [MonoScript](MonoScript.html), returns null.





### Description



Gets the custom icon to associate with a MonoScript at import time.





Additional resources: [MonoScript.GetClass](MonoScript.GetClass.html), Type.FullName, [PluginImporter.SetIcon](PluginImporter.SetIcon.html), [EditorGUIUtility.GetIconForObject](EditorGUIUtility.GetIconForObject.html).


              


```
using UnityEngine;
using UnityEditor;class Example
{
    [MenuItem("Examples/Get Icon for MonoScript from PluginImporter")]
    public static void GetIconForMonoScriptFromPluginImporter()
    {
        var assetPath = "Assets/MyManagedPlugin.dll";
        var pluginImporter = AssetImporter.GetAtPath(assetPath) as PluginImporter;
        var monoScript = AssetDatabase.LoadAssetAtPath<MonoScript>(assetPath);        var icon = pluginImporter.GetIcon(monoScript.GetClass().FullName);
        Debug.Log("Icon for " + monoScript.GetClass().FullName + " in " + assetPath + " is " + icon);
    }
}
```


            
