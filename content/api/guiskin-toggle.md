This version of Unity is unsupported.



# [GUISkin](GUISkin.html).toggle




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




                [Switch to Manual](../Manual/class-GUISkin.html)







                    public [GUIStyle](GUIStyle.html) toggle;






### Description



Style used by default for [GUI.Toggle](GUI.Toggle.html) controls.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Modifies only the toggle style of the current GUISkin    GUIStyle style;
    public bool val = false;    void OnGUI()
    {
        GUI.skin.toggle = style;
        val = GUILayout.Toggle(val, "A Toggle control");
    }
}
```


            
