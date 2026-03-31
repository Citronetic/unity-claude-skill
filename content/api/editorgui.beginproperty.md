This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).BeginProperty




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

public static [GUIContent](GUIContent.html) BeginProperty([Rect](Rect.html) totalPosition,
[GUIContent](GUIContent.html) label,
[SerializedProperty](SerializedProperty.html) property);






### Parameters



| Parameter | Description |
| --- | --- |
| totalPosition | Rectangle on the screen to use for the control, including label if applicable. |
| label | Optional label in front of the slider. Use null to use the name from the SerializedProperty. Use GUIContent.none to not display a label. |
| property | The SerializedProperty to use for the control. |





### Returns



**GUIContent**
        The actual label to use for the control.





### Description



Create a Property wrapper, useful for making regular GUI controls work with [SerializedProperty](SerializedProperty.html).





Most [EditorGUI](EditorGUI.html) and [EditorGUILayout](EditorGUILayout.html) GUI controls already have overloads that work with SerializedProperty.
However, for GUI controls that don't handle SerializedProperty you can wrap them inside BeginProperty and EndProperty as shown in the example below.
You can use this for your own custom GUI controls too.

BeginProperty and EndProperty automatically handle default labels, bold font for Prefab overrides, revert to Prefab right click menu, and setting [showMixedValue](EditorGUI-showMixedValue.html) to true if the values of the property are different when multi-object editing.


              


```
using UnityEngine;
using UnityEditor;
class Example : MonoBehaviour
{
    // A slider function that takes a SerializedProperty
    void Slider(Rect position, SerializedProperty property, float leftValue, float rightValue, GUIContent label)
    {
        label = EditorGUI.BeginProperty(position, label, property);        EditorGUI.BeginChangeCheck();
        var newValue = EditorGUI.Slider(position, label, property.floatValue, leftValue, rightValue);
        // Only assign the value back if it was actually changed by the user.
        // Otherwise a single value will be assigned to all objects when multi-object editing,
        // even when the user didn't touch the control.
        if (EditorGUI.EndChangeCheck())
        {
            property.floatValue = newValue;
        }
        EditorGUI.EndProperty();
    }
}
```





Additional resources: [EndProperty](EditorGUI.EndProperty.html).


            
