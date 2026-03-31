This version of Unity is unsupported.



# [GUIStyle](GUIStyle.html).hover




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




                [Switch to Manual](../Manual/class-GUIStyle.html)







                    public [GUIStyleState](GUIStyleState.html) hover;






### Description



Rendering settings for when the mouse is hovering over the control.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Prints the text color that button is using
    // when the mouse is hovering over a control    void OnGUI()
    {
        Debug.Log(GUI.skin.button.hover.textColor);
    }
}
```


            
