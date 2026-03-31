This version of Unity is unsupported.



# [OnDemandRendering](Rendering.OnDemandRendering.html).renderFrameInterval




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












                    public static int renderFrameInterval;






### Description



Get or set the current frame rate interval. To restore rendering back to the value of [Application.targetFrameRate](Application-targetFrameRate.html) or [QualitySettings.vSyncCount](QualitySettings-vSyncCount.html) set this to 0 or 1.


              


```
using UnityEngine;
using UnityEngine.Rendering;// This example shows how to get and set the current frame rate interval and what you can do with that information.
public class Example : MonoBehaviour
{
    void Start()
    {
        QualitySettings.vSyncCount = 0;
        Application.targetFrameRate = 60;
        OnDemandRendering.renderFrameInterval = 6;
    }    void Update()
    {
        if (Input.GetMouseButton(0) || (Input.touchCount > 0))
        {
            // If the mouse button or a finger is down render at 60 FPS (every frame).
            OnDemandRendering.renderFrameInterval = 1;
        }
        else
        {
            // If there isn't any input then we can go back to 10 FPS (every 6 frames).
            OnDemandRendering.renderFrameInterval = 6;
        }        // We've decided to lower the frame rate by increasing the frame interval. Perhaps in a pause menu.
        // There may be some other systems that we don't need at that time.
        if (OnDemandRendering.renderFrameInterval > 1)
        {
            // Disable physics
            Physics.autoSimulation = false;            // Disable other systems or turn down audio volume for example.
        }
        else
        {
            // If we are back to the normal framerate turn physics back on.
            Physics.autoSimulation = true;
        }
    }
}
```


            
