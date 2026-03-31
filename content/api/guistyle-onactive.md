This version of Unity is unsupported.



# [GUIStyle](GUIStyle.html).onActive




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







                    public [GUIStyleState](GUIStyleState.html) onActive;






### Description



Rendering settings for when the element is turned on and pressed down.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Sets the text color of button to yellow when an
    // element is turned on and pressed down.
    void OnGUI()
    {
        GUI.skin.button.onActive.textColor = Color.yellow;
    }
}
```


            
