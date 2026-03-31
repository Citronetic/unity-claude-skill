This version of Unity is unsupported.



# [GUISkin](GUISkin.html).FindStyle




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










## Declaration

public [GUIStyle](GUIStyle.html) FindStyle(string styleName);






### Description



Try to search for a [GUIStyle](GUIStyle.html). This functions returns NULL and does not give an error.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Checks if a style name exists    string aStyleName = "A Style I have";    void OnGUI()
    {
        if (GUI.skin.FindStyle(aStyleName) == null)
        {
            Debug.LogWarning("No style named \"" + aStyleName + "\" could be found");
        }
    }
}
```


            
