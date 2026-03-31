This version of Unity is unsupported.



# PropertyScope





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



Create a Property wrapper, useful for making regular GUI controls work with [SerializedProperty](SerializedProperty.html).





Most [EditorGUI](EditorGUI.html) and [EditorGUILayout](EditorGUILayout.html) GUI controls already have overloads that work with SerializedProperty.
However, for GUI controls that don't handle SerializedProperty you can wrap them inside BeginProperty and EndProperty as shown in the example below.
You can use this for your own custom GUI controls too.

BeginProperty and EndProperty automatically handle default labels, bold font for Prefab overrides, revert to Prefab right click menu, and setting [showMixedValue](EditorGUI-showMixedValue.html) to true if the values of the property are different when multi-object editing.


              


```
using UnityEngine;
using UnityEditor;public class ExampleClass : MonoBehaviour
{
    // A slider function that takes a SerializedProperty
    void Slider(Rect position, SerializedProperty prop, float leftValue, float rightValue, GUIContent label)
    {
        using (var scope = new EditorGUI.PropertyScope(position, label, prop))
        {
            label = scope.content;
            EditorGUI.BeginChangeCheck();
            var newValue = EditorGUI.Slider(position, label, prop.floatValue, leftValue, rightValue);
            // Only assign the value back if it was actually changed by the user.
            // Otherwise a single value will be assigned to all objects when multi-object editing,
            // even when the user didn't touch the control.
            if (EditorGUI.EndChangeCheck())
                prop.floatValue = newValue;
        }
    }
}
```





Additional resources: [BeginProperty](EditorGUI.BeginProperty.html).





### Properties



| Property | Description |
| --- | --- |
| content | The actual label to use for the control. |





### Constructors



| Constructor | Description |
| --- | --- |
| EditorGUI.PropertyScope | Create a new PropertyScope and begin the corresponding property. |


            
