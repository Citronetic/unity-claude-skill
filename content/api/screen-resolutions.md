This version of Unity is unsupported.



# [Screen](Screen.html).resolutions




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












                    public static Resolution[] resolutions;






### Description



Returns all full-screen resolutions that the monitor supports (Read Only).





Unity dynamically returns the supported resolutions for the monitor on which the application window is currently displayed, sorting them first by width and then by ascending resolution.
 **Important:** When using [FullScreenMode.ExclusiveFullScreen](FullScreenMode.ExclusiveFullScreen.html), use `Screen.resolutions` to determine which resolution to pass to [Screen.SetResolution](Screen.SetResolution.html), because `FullScreenMode.ExclusiveFullScreen` only works with supported resolutions. Passing an unsupported resolution can severely impact performance. All other full-screen modes support arbitrary resolutions without performance impact.


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    void Start()
    {
        Resolution[] resolutions = Screen.resolutions;        // Print the resolutions
        foreach (var res in resolutions)
        {
            Debug.Log(res.width + "x" + res.height + " : " + res.refreshRateRatio);
        }
    }
}
```





**Note:** On MacOS devices that have a notch area, the resolution array contains resolutions that don't fit under the notch area and will be resized when applied.

Additional resources: [Resolution](Resolution.html) structure, [SetResolution](Screen.SetResolution.html).


            
