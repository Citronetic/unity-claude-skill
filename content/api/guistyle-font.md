This version of Unity is unsupported.



# [GUIStyle](GUIStyle.html).font




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







                    public [Font](Font.html) font;






### Description



The font to use for rendering. If null, the default font for the current [GUISkin](GUISkin.html) is used instead.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Prints name of the font that button is using.    void OnGUI()
    {
        Debug.Log("Font name: " + GUI.skin.button.font.name);
    }
}
```


            
