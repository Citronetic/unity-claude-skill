This version of Unity is unsupported.



# [GUIStyle](GUIStyle.html).border




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







                    public [RectOffset](RectOffset.html) border;






### Description



The borders of all background images.





This corresponds to the border settings for IMGUI elements. It only affects the rendering of the background image and has no effect on positioning.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Prints the left, right, top and down values of the GUIStyle border    RectOffset bdr;
    void OnGUI()
    {
        bdr = GUI.skin.button.border;
        Debug.Log("Left: " + bdr.left + " Right: " + bdr.right);
        Debug.Log("Top: " + bdr.top + " Bottom: " + bdr.bottom);
    }
}
```


            
