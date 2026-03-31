This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).IntPopup




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

public static int IntPopup([Rect](Rect.html) position,
int selectedValue,
string[] displayedOptions,
int[] optionValues,
[GUIStyle](GUIStyle.html) style = EditorStyles.popup);






## Declaration

public static int IntPopup([Rect](Rect.html) position,
int selectedValue,
GUIContent[] displayedOptions,
int[] optionValues,
[GUIStyle](GUIStyle.html) style = EditorStyles.popup);






## Declaration

public static int IntPopup([Rect](Rect.html) position,
string label,
int selectedValue,
string[] displayedOptions,
int[] optionValues,
[GUIStyle](GUIStyle.html) style = EditorStyles.popup);






## Declaration

public static int IntPopup([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
int selectedValue,
GUIContent[] displayedOptions,
int[] optionValues,
[GUIStyle](GUIStyle.html) style = EditorStyles.popup);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the field. |
| label | Optional label in front of the field. |
| selectedValue | The value of the option the field shows. |
| displayedOptions | An array with the displayed options the user can choose from. |
| optionValues | An array with the values for each option. If optionValues a direct mapping of selectedValue to displayedOptions is assumed. |
| style | Optional GUIStyle. |





### Returns



**int**
        The value of the option that has been selected by the user.





### Description



Makes an integer popup selection field.





Takes the currently selected integer as a parameter and returns the integer selected by the user.

[Image: image]

*Int Popup in an Editor Window.*


              


```
using UnityEngine;
using UnityEditor;
// Multiplies the scale of the selected transform.class EditorGUIIntPopup : EditorWindow
{
    int selectedSize = 1;
    string[] names = { "Double", "Triple", "Quadruple" };
    int[] sizes = { 2, 3, 4 };    [MenuItem("Examples/Editor GUI Int Popup usage")]
    static void Init()
    {
        EditorWindow window = GetWindow<EditorGUIIntPopup>();
        window.position = new Rect(0, 0, 180, 60);
        window.Show();
    }    void OnGUI()
    {
        selectedSize = EditorGUI.IntPopup(
            new Rect(3, 3, position.width - 6, 20),
            "Size:",
            selectedSize,
            names,
            sizes);        if (GUI.Button(new Rect(0, 25, position.width, position.height - 27), "Modify"))
        {
            Rescale();
        }
    }    void Rescale()
    {
        if (Selection.activeTransform)
        {
            Selection.activeTransform.localScale *= selectedSize;
        }
        else
        {
            Debug.LogError("No Object selected, please select an object to scale.");
        }
    }
}
```




---








## Declaration

public static void IntPopup([Rect](Rect.html) position,
[SerializedProperty](SerializedProperty.html) property,
GUIContent[] displayedOptions,
int[] optionValues,
[GUIContent](GUIContent.html) label = null);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the field. |
| property | The SerializedProperty to use for the control. |
| displayedOptions | An array with the displayed options the user can choose from. |
| optionValues | An array with the values for each option. If optionValues a direct   mapping of selectedValue to displayedOptions is assumed. |
| label | Optional label in front of the field. |





### Description




            
