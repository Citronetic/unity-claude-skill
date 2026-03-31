This version of Unity is unsupported.



# [GUIUtility](GUIUtility.html).GetControlID




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

public static int GetControlID([FocusType](FocusType.html) focus);






## Declaration

public static int GetControlID([FocusType](FocusType.html) focus,
[Rect](Rect.html) position);






### Description



Get a unique ID for a control.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Prints a not used ID that can be assigned to a control    void OnGUI()
    {
        // Gets a ID for a control that cannot receive keyboard focus (A button)
        Debug.Log("Available id: " + GUIUtility.GetControlID(FocusType.Passive));
    }
}
```




---








## Declaration

public static int GetControlID(int hint,
[FocusType](FocusType.html) focus);






## Declaration

public static int GetControlID(int hint,
[FocusType](FocusType.html) focusType,
[Rect](Rect.html) rect);






### Description



Get a unique ID for a control, using an integer as a hint to help ensure correct matching of IDs to controls.




---








## Declaration

public static int GetControlID([GUIContent](GUIContent.html) contents,
[FocusType](FocusType.html) focus);






## Declaration

public static int GetControlID([GUIContent](GUIContent.html) contents,
[FocusType](FocusType.html) focus,
[Rect](Rect.html) position);






### Description



Get a unique ID for a control, using a the label content as a hint to help ensure correct matching of IDs to controls.


            
