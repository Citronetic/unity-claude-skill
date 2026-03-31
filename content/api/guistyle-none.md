This version of Unity is unsupported.



# [GUIStyle](GUIStyle.html).none




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







                    public static [GUIStyle](GUIStyle.html) none;






### Description



Shortcut for an empty GUIStyle.





This style contains no decoration and just renders everything in the default font.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void OnGUI()
    {
        // Make a button with no decoration
        GUI.Button(new Rect(0, 0, 250, 100), "Basic Button", GUIStyle.none);
    }
}
```


            
