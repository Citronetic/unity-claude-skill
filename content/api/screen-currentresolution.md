This version of Unity is unsupported.



# [Screen](Screen.html).currentResolution




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












                    public static [Resolution](Resolution.html) currentResolution;






### Description



The current screen resolution (Read Only).





Returns the current screen resolution (read only). If the player is running in windowed mode, this returns the current resolution of the desktop. If you are working with VR devices, use [XRSettings.eyeTextureWidth](XR.XRSettings-eyeTextureWidth.html) and [XRSettings.eyeTextureHeight](XR.XRSettings-eyeTextureHeight.html) instead.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        print(Screen.currentResolution);
    }
}
```


            
