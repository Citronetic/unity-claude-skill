This version of Unity is unsupported.



# [OnDemandRendering](Rendering.OnDemandRendering.html).willCurrentFrameRender




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












                    public static bool willCurrentFrameRender;






### Description



**True** if the current frame will be rendered.


              


```
using UnityEngine;
using UnityEngine.Rendering;// This example shows how to determine if the current frame will be presented to the screen.
public class Example : MonoBehaviour
{
    void Start()
    {
        QualitySettings.vSyncCount = 0;
        Application.targetFrameRate = 60;
        OnDemandRendering.renderFrameInterval = 3;
    }    // Output will be:
    //
    // Will this frame render? False
    // Will this frame render? False
    // Will this frame render? True
    // Will this frame render? False
    // Will this frame render? False
    // Will this frame render? True
    void Update()
    {
        Debug.Log("Will this frame render? " + OnDemandRendering.willCurrentFrameRender);        if (!OnDemandRendering.willCurrentFrameRender)
        {
            // Frames that are not rendered may have some extra CPU cycles to spare for processes that would otherwise be too much of a burden.
            // For example: expensive math operations, spawning prefabs or loading assets.
        }
    }
}
```


            
