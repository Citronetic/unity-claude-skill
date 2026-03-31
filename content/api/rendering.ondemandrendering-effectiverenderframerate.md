This version of Unity is unsupported.



# [OnDemandRendering](Rendering.OnDemandRendering.html).effectiveRenderFrameRate




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












                    public static int effectiveRenderFrameRate;






### Description



The current estimated rate of rendering in frames per second rounded to the nearest integer.





This is an estimate and may not be achieved depending upon the application.

        If [QualitySettings.vSyncCount](QualitySettings-vSyncCount.html) is greater than 0 it is calculated by:



        FPS = Resolution.refreshRate / [QualitySettings.vSyncCount](QualitySettings-vSyncCount.html) / [OnDemandRendering.renderFrameInterval](Rendering.OnDemandRendering-renderFrameInterval.html)



        If [QualitySettings.vSyncCount](QualitySettings-vSyncCount.html) is 0 and [Application.targetFrameRate](Application-targetFrameRate.html) is also greater than 0:



        FPS = [Application.targetFrameRate](Application-targetFrameRate.html) / [OnDemandRendering.renderFrameInterval](Rendering.OnDemandRendering-renderFrameInterval.html)



        Android, iOS and tvOS use 30 FPS as the default framerate when no other value has been specified. In that case 30 / [OnDemandRendering.renderFrameInterval](Rendering.OnDemandRendering-renderFrameInterval.html) is returned. All other platforms return the value of [Application.targetFrameRate](Application-targetFrameRate.html).


              


```
using UnityEngine;
using UnityEngine.Rendering;
using System.Collections;// This example shows how to use effectiveRenderFrameRate to ensure your application renders at a given frame rate regardless of
// settings that could be changed by the user. Also demonstrates use of setting renderFrameInterval from a coroutine.
public class Example : MonoBehaviour
{
    void Start()
    {
        const int myTargetFrameRate = 10;        // Start off assuming that Application.targetFrameRate is 60 and QualitySettings.vSyncCount is 0
        OnDemandRendering.renderFrameInterval = 6;        // Some applications may allow the user to modify the quality level. So we may not be able to rely on
        // the framerate always being a specific value. For this example we want the effective framerate to be 10.
        // If it is not then check the values and adjust the frame interval accordingly to achieve the framerate that we desire.
        if (OnDemandRendering.effectiveRenderFrameRate != 10)
        {
            if (QualitySettings.vSyncCount > 0)
            {
                OnDemandRendering.renderFrameInterval = (Screen.currentResolution.refreshRate / QualitySettings.vSyncCount / myTargetFrameRate);
            }
            else
            {
                OnDemandRendering.renderFrameInterval = (Application.targetFrameRate / myTargetFrameRate);
            }
        }        StartCoroutine(SlowRenderingFor5Seconds());
    }    IEnumerator SlowRenderingFor5Seconds()
    {
        // After 5 seconds go back to rendering every frame
        yield return new WaitForSeconds(5);
        OnDemandRendering.renderFrameInterval = 1;
    }    void Update()
    {
        // For 5 seconds this will report that the effective framerate is 10. Afterward it will log what the framerate is given the current
        // quality and target framerate settings.
        Debug.Log("FrameRate: " + OnDemandRendering.effectiveRenderFrameRate);
    }
}
```


            
