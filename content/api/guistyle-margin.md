This version of Unity is unsupported.



# [GUIStyle](GUIStyle.html).margin




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







                    public [RectOffset](RectOffset.html) margin;






### Description



The margins between elements rendered in this style and any other GUI elements.





This only has effect when using automatic layout (Additional resources: [GUILayout](GUILayout.html)).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Prints the left, right, top and down values of the GUIStyle margin    RectOffset rctOff;    void OnGUI()
    {
        rctOff = GUI.skin.button.margin;
        Debug.Log("Left: " + rctOff.left + " Right: " + rctOff.right);
        Debug.Log("Top: " + rctOff.top + " Bottom: " + rctOff.bottom);
    }
}
```


            
