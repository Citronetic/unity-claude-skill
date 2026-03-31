This version of Unity is unsupported.



# [EditorUtility](EditorUtility.html).OpenPropertyEditor




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

public static void OpenPropertyEditor([Object](Object.html) obj);






### Parameters



| Parameter | Description |
| --- | --- |
| obj | The object to open in the properties editor. |





### Description



Open properties editor for an Object.





Opens an Inspector-like window to show and edit the properties of an Object.


              


```
using UnityEditor;
using UnityEngine;public class EditorUtilityOpenPropertyEditor
{
    [MenuItem("Examples/OpenPropertyEditor")]
    public static void OpenSceneProperties()
    {
        var scene = AssetDatabase.LoadAssetAtPath<UnityEngine.Object>("Assets/Scenes/SampleScene.unity");
        EditorUtility.OpenPropertyEditor(scene);
    }
}
```


            
