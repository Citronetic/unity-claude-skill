This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).EnumPopup




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

public static Enum EnumPopup([Rect](Rect.html) position,
Enum selected,
[GUIStyle](GUIStyle.html) style = EditorStyles.popup);






## Declaration

public static Enum EnumPopup([Rect](Rect.html) position,
string label,
Enum selected,
[GUIStyle](GUIStyle.html) style = EditorStyles.popup);






## Declaration

public static Enum EnumPopup([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
Enum selected,
[GUIStyle](GUIStyle.html) style = EditorStyles.popup);






## Declaration

public static Enum EnumPopup([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
Enum selected,
Func<Enum,bool> checkEnabled = null,
bool includeObsolete = false,
[GUIStyle](GUIStyle.html) style = null);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the field. |
| label | Optional label in front of the field. |
| selected | The enum option the field shows. |
| style | Optional GUIStyle. |
| includeObsolete | Set to true to include Enum values with ObsoleteAttribute. Set to false to exclude Enum values with ObsoleteAttribute. |
| checkEnabled | Method called for each Enum value displayed. The specified method should return true if the option can be selected, false otherwise. |





### Returns



**Enum**
        The enum option that has been selected by the user.





### Description



Makes an enum popup selection field.





Takes the currently selected enum value as a parameter and returns the enum value selected by the user.
[Image: image]

*Enum Popup in an Editor Window.*


              


```
using UnityEditor;
using UnityEngine;
// Shows info of a GameObject depending on the selected optionpublic enum OPTIONS
{
    Position = 0,
    Rotation = 1,
    Scale = 2,
}
public class EditorGUIEnumPopup : EditorWindow
{
    OPTIONS display = OPTIONS.Position;    [MenuItem("Examples/Editor GUI Enum Popup usage")]
    static void Init()
    {
        EditorWindow window = GetWindow(typeof(EditorGUIEnumPopup));
        window.position = new Rect(0, 0, 220, 80);
        window.Show();
    }    void OnGUI()
    {
        Transform selectedObj = Selection.activeTransform;        display = (OPTIONS)EditorGUI.EnumPopup(
            new Rect(3, 3, position.width - 6, 15),
            "Show:",
            display);        EditorGUI.LabelField(new Rect(0, 20, position.width, 15),
            "Name:",
            selectedObj ? selectedObj.name : "Select an Object");
        if (selectedObj)
        {
            switch (display)
            {
                case OPTIONS.Position:
                    EditorGUI.LabelField(new Rect(0, 40, position.width, 15),
                        "Position:",
                        selectedObj.position.ToString());
                    break;                case OPTIONS.Rotation:
                    EditorGUI.LabelField(new Rect(0, 40, position.width, 15),
                        "Rotation:",
                        selectedObj.rotation.ToString());
                    break;                case OPTIONS.Scale:
                    EditorGUI.LabelField(new Rect(0, 40, position.width, 15),
                        "Scale:",
                        selectedObj.localScale.ToString());
                    break;                default:
                    Debug.LogError("Unrecognized Option");
                    break;
            }
        }        if (GUI.Button(new Rect(3, position.height - 25, position.width - 6, 24), "Close"))
            this.Close();
    }
}
```


            
