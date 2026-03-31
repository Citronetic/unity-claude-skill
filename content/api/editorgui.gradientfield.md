This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).GradientField




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

public static [Gradient](Gradient.html) GradientField([Rect](Rect.html) position,
[Gradient](Gradient.html) gradient);






## Declaration

public static [Gradient](Gradient.html) GradientField([Rect](Rect.html) position,
string label,
[Gradient](Gradient.html) gradient);






## Declaration

public static [Gradient](Gradient.html) GradientField([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
[Gradient](Gradient.html) gradient);






## Declaration

public static [Gradient](Gradient.html) GradientField([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
[Gradient](Gradient.html) gradient,
bool hdr);






## Declaration

public static [Gradient](Gradient.html) GradientField([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
[Gradient](Gradient.html) gradient,
bool hdr,
[ColorSpace](ColorSpace.html) colorSpace);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the field. |
| label | Optional label to display in front of the field. |
| gradient | The gradient to edit. |
| hdr | Display the HDR Gradient Editor. |
| colorSpace | Display the gradient and Gradient Editor in this color space. |





### Returns



**Gradient**
        The gradient edited by the user.





### Description



Makes a field for editing a [Gradient](Gradient.html).


              


```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;public class EditorGUIGradientField : EditorWindow
{
    Gradient gradient = new Gradient();    [MenuItem("Examples/Gradient Field demo")]
    static void Init()
    {
        EditorWindow window = GetWindow(typeof(EditorGUIGradientField));
        window.position = new Rect(0, 0, 400, 199);
        window.Show();
    }    void OnGUI()
    {
        gradient = EditorGUI.GradientField(
            new Rect(3, 3, position.width - 6, 50), "Gradient", gradient);
    }
}
```


            
