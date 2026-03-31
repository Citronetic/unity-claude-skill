This version of Unity is unsupported.



# [Screen](Screen.html).width




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












                    public static int width;






### Description



The current width of the screen window in pixels (Read Only).





This is the actual width of the Player window. In full-screen mode, it also reflects the current resolution.

**Note**: When accessed from the Editor events, such as [ContextMenu](ContextMenu.html) methods, inspector enable/disable actions, or custom Editor scripts, `Screen.width` and [Screen.height](Screen-height.html) return the current Game view window resolution in the Unity Editor. These properties do not reflect the resolution of the Player or target device in these contexts, including Simulator mode.


              


```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        //Output the current screen window width in the console
        Debug.Log("Screen Width : " + Screen.width);
    }
}
```


            
