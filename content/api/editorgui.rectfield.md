This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).RectField




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

public static [Rect](Rect.html) RectField([Rect](Rect.html) position,
[Rect](Rect.html) value);






## Declaration

public static [Rect](Rect.html) RectField([Rect](Rect.html) position,
string label,
[Rect](Rect.html) value);






## Declaration

public static [Rect](Rect.html) RectField([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
[Rect](Rect.html) value);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the field. |
| label | Optional label to display above the field. |
| value | The value to edit. |





### Returns



**Rect**
        The value entered by the user.





### Description



Makes an X, Y, W, and H field for entering a [Rect](Rect.html).





[Image: image]


*Rect field in an Editor Window.*


              


```
using UnityEngine;
using UnityEditor;// Find all the cameras in the Scene and shows all their viewports togheterclass EditorGUIRectField : EditorWindow
{
    Camera[] cameras;    [MenuItem("Examples/Editor GUI RectField usage")]
    static void Init()
    {
        var window = GetWindow<EditorGUIRectField>();
        window.position = new Rect(0, 0, 150, 120);
        window.Show();
    }    void OnGUI()
    {
        if (GUI.Button(new Rect(3, 3, position.width - 6, 20), "Update list"))
            cameras = FindObjectsOfType<Camera>();        if (cameras.Length > 0)
        {
            for (var i = 0; i < cameras.Length; i++)
            {
                cameras[i].rect = EditorGUI.RectField(
                    new Rect(3, 25 + 45 * i, position.width - 6, 25),
                    cameras[i].name,
                    cameras[i].rect);
            }
        }
    }
}
```




---












### Description



Makes an X, Y, W, and H for Rect using SerializedProperty (not public).


            
