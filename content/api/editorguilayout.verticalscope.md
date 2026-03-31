This version of Unity is unsupported.



# VerticalScope





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



Disposable helper class for managing [BeginVertical](EditorGUILayout.BeginVertical.html) / [EndVertical](EditorGUILayout.EndVertical.html).





This is an extension to [VerticalScope](GUILayout.VerticalScope.html). It can be used for making compound controls

[Image: image]

*Vertical Compound group.*


              


```
using UnityEngine;
using UnityEditor;// Create a Vertical Compound Button
class VerticalScopeExample : EditorWindow
{
    [MenuItem("Examples/Vertical scope usage")]
    static void Init()
    {
        var window = GetWindow<VerticalScopeExample>();
        window.Show();
    }    void OnGUI()
    {
        using (var v = new EditorGUILayout.VerticalScope("Button"))
        {
            if (GUI.Button(v.rect, GUIContent.none))
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
| rect | The rect of the vertical group. |





### Constructors



| Constructor | Description |
| --- | --- |
| EditorGUILayout.VerticalScope | Create a new VerticalScope and begin the corresponding vertical group. |


            
