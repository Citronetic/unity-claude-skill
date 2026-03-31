This version of Unity is unsupported.



# [Screen](Screen.html).fullScreen




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












                    public static bool fullScreen;






### Description



Enables full-screen mode for the application.





Use this property to toggle full-screen mode:


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        // Toggle fullscreen
        Screen.fullScreen = !Screen.fullScreen;
    }
}
```





A full-screen switch does not happen immediately; it happens when the current frame is finished.

**Notes:**



          - `Screen.fullScreen` is read-only on iOS.

          - When Stage Manager is enabled on iPadOS, the `Screen.fullScreen` remains true for the application built with [full screen display mode](../Manual/class-PlayerSettingsiOS.html#Multitasking). The application maintains the full screen resolution in supported orientations even when the Stage Manager scales the application.





Additional resources: [SetResolution](Screen.SetResolution.html).


            
