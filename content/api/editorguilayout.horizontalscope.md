This version of Unity is unsupported.



# HorizontalScope





class in
          UnityEditor


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



















### Description



Disposable helper class for managing [BeginHorizontal](EditorGUILayout.BeginHorizontal.html) / [EndHorizontal](EditorGUILayout.EndHorizontal.html).





This is an extension to [HorizontalScope](GUILayout.HorizontalScope.html). It can be used for making compound controls

[Image: image]

*Horizontal Compound group.*


              


```
using UnityEngine;
using UnityEditor;// Create a Horizontal Compound Button
class HorizontalScopeExample : EditorWindow
{
    [MenuItem("Examples/Horizontal scope usage")]
    static void Init()
    {
        var window = GetWindow<HorizontalScopeExample>();
        window.Show();
    }    void OnGUI()
    {
        using (var h = new EditorGUILayout.HorizontalScope("Button"))
        {
            if (GUI.Button(h.rect, GUIContent.none))
                Debug.Log("Go here");
            GUILayout.Label("I'm inside the button");
            GUILayout.Label("So am I");
        }
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| rect | The rect of the horizontal group. |





### Constructors



| Constructor | Description |
| --- | --- |
| EditorGUILayout.HorizontalScope | Create a new HorizontalScope and begin the corresponding horizontal group. |


            
