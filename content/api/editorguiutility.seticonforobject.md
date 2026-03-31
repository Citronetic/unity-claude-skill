This version of Unity is unsupported.



# [EditorGUIUtility](EditorGUIUtility.html).SetIconForObject




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

public static void SetIconForObject([Object](Object.html) obj,
[Texture2D](Texture2D.html) icon);






### Parameters



| Parameter | Description |
| --- | --- |
| obj | The GameObject or MonoScript to associate the icon with. |
| icon | The custom icon to associate with the GameObject or MonoScript. When this value is null, the default icon is restored. |





### Description



Sets a custom icon to associate with a [GameObject](GameObject.html) or [MonoScript](MonoScript.html). The custom icon is displayed in the Scene view and the Inspector.





Custom icons for GameObjects are saved in the scene.


              


```
using UnityEngine;
using UnityEditor;class Example
{
    [MenuItem("Examples/Set Custom Icon on GameObject")]
    public static void SetCustomIconOnGameObject()
    {
        var go = new GameObject();
        var icon = AssetDatabase.LoadAssetAtPath<Texture2D>("Assets/MyIcon.png");        EditorGUIUtility.SetIconForObject(go, icon);
    }
}
```





Using this function, you can set custom icons directly on a [MonoScript](MonoScript.html). However the next time the script is reimported, the change will be lost.

To make the custom icon persistent, call [MonoImporter.SetIcon](MonoImporter.SetIcon.html) and [AssetImporter.SaveAndReimport](AssetImporter.SaveAndReimport.html). If the script is in a managed plugin, call [PluginImporter.SetIcon](PluginImporter.SetIcon.html) instead of [MonoImporter.SetIcon](MonoImporter.SetIcon.html).


              


```
using UnityEngine;
using UnityEditor;class Example
{
    [MenuItem("Examples/Set Custom Icon on MonoScript")]
    public static void SetCustomIconOnMonoScript()
    {
        var monoImporter = AssetImporter.GetAtPath("Assets/MyMonoBehaviour.cs") as MonoImporter;
        var monoScript = monoImporter.GetScript();
        var icon = AssetDatabase.LoadAssetAtPath<Texture2D>("Assets/MyIcon.png");        EditorGUIUtility.SetIconForObject(monoScript, icon);        // make the custom icon persistent
        monoImporter.SetIcon(icon);
        monoImporter.SaveAndReimport();
    }
}
```





When you set custom icons from a GUI, it is recommended that you defer reimport until the GUI is closed. If you reimport before the GUI is closed, the domain reload caused by recompiling the script could lead to a poor user experience.

Additional resources: [MonoImporter](MonoImporter.html), [PluginImporter](PluginImporter.html).


            
