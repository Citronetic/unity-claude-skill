This version of Unity is unsupported.



# [GUIStyle](GUIStyle.html).padding




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







                    public [RectOffset](RectOffset.html) padding;






### Description



Space from the edge of [GUIStyle](GUIStyle.html) to the start of the contents.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Prints the left, right, top and down values of the GUIStyle overflow    RectOffset rctOff;    void OnGUI()
    {
        rctOff = GUI.skin.button.padding;
        Debug.Log("Left: " + rctOff.left + " Right: " + rctOff.right);
        Debug.Log("Top: " + rctOff.top + " Bottom: " + rctOff.bottom);
    }
}
```


            
