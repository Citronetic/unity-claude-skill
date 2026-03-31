This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).indentLevel




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












                    public static int indentLevel;






### Description



The indent level of the field labels.





[EditorGUILayout.LabelField](EditorGUILayout.LabelField.html) will display the string given as an argument.  This string can be displayed at a horizontal position, and the position changed by [indentLevel](EditorGUI-indentLevel.html).  As [indentLevel](EditorGUI-indentLevel.html) increases the labels will move right.  Decreasing [indentLevel](EditorGUI-indentLevel.html) will move labels to the left.

                [Image: image]

*Shows info of the selected object.*


              


```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;public class EditorGUIIndent : EditorWindow
{
    [MenuItem("Examples/indentLevel demo")]
    static void Init()
    {
        EditorWindow window = GetWindow(typeof(EditorGUIIndent));
        window.position = new Rect(100, 100, 300, 150);
        window.Show();
    }    void OnGUI()
    {
        Transform obj = Selection.activeTransform;
        EditorGUILayout.LabelField("Name:", obj ? obj.name : "Select an Object");        if (obj)
        {
            // Indent further the area of position and rotation
            EditorGUI.indentLevel++;
            EditorGUILayout.LabelField("Position:", obj.position.ToString());
            EditorGUILayout.LabelField("Rotation:", obj.rotation.eulerAngles.ToString());            // Indent further again the area of rotation values
            EditorGUI.indentLevel++;
            EditorGUILayout.LabelField("X:", obj.rotation.x.ToString());
            EditorGUILayout.LabelField("Y:", obj.rotation.y.ToString());
            EditorGUILayout.LabelField("Z:", obj.rotation.z.ToString());
            EditorGUILayout.LabelField("W:", obj.rotation.w.ToString());            // End of inner area
            EditorGUI.indentLevel--;
            EditorGUILayout.LabelField("Scale:", obj.localScale.ToString());            // End of area
            EditorGUI.indentLevel--;
        }
    }
}
```





To maximize future compatibility, do not make assumptions about what a specific indent level means,
but instead just increase or decrease by one around blocks of controls that need to be more indented, as in the example above.


            
