This version of Unity is unsupported.



# [EditorGUIUtility](EditorGUIUtility.html).GetIconForObject




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

public static [Texture2D](Texture2D.html) GetIconForObject([Object](Object.html) obj);






### Parameters



| Parameter | Description |
| --- | --- |
| obj | The GameObject or MonoScript to query |





### Returns



**Texture2D**
        Returns the custom icon associated with the object. If there is no custom icon associated with the object, returns null.





### Description



Gets the custom icon associated with an object. Only GameObjects and MonoScripts have associated custom icons.


              


```
using UnityEngine;
using UnityEditor;class Example
{
    [MenuItem("Examples/Get Icon for GameObject")]
    public static void GetIconForGameObject()
    {
        var go = GameObject.Find("Main Camera");
        var icon = EditorGUIUtility.GetIconForObject(go);
        Debug.Log("Icon for " + go + " is " + icon);
    }    [MenuItem("Examples/Get Icon for MonoScript")]
    public static void GetIconForMonoScript()
    {
        var monoScript = AssetDatabase.LoadAssetAtPath<MonoScript>("Assets/MyMonoBehaviour.cs");
        var icon = EditorGUIUtility.GetIconForObject(monoScript);
        Debug.Log("Icon for " + monoScript.GetClass().FullName + " is " + icon);
    }
}
```


            
