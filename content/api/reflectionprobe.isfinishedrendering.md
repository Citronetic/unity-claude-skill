This version of Unity is unsupported.



# [ReflectionProbe](ReflectionProbe.html).IsFinishedRendering




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




                [Switch to Manual](../Manual/class-ReflectionProbe.html)










## Declaration

public bool IsFinishedRendering(int renderId);






### Parameters



| Parameter | Description |
| --- | --- |
| renderId | An integer representing the RenderID as returned by the RenderProbe method. |





### Returns



**bool**

          True if the render has finished, false otherwise.

          Additional resources: [timeSlicingMode](ReflectionProbe-timeSlicingMode.html)





### Description



Checks if a probe has finished a time-sliced render.


              


```
using UnityEngine;
using System.Collections;
public class UpdateProbeEvery2Seconds : MonoBehaviour
{
    private int RenderId = -1;
    private ReflectionProbe TheProbe;
    public RenderTexture TargetTexture;    IEnumerator Start()
    {
        TheProbe = GetComponent<ReflectionProbe>();        // set the probe to render in time-slicing mode and make sure all faces of the cubemap render the same frame.
        TheProbe.timeSlicingMode = UnityEngine.Rendering.ReflectionProbeTimeSlicingMode.AllFacesAtOnce;
        while (true)
        {
            yield return new WaitForSeconds(2.0f);            // render the probe over several frames and blit into TargetTexture once finished.
            RenderId = TheProbe.RenderProbe(TargetTexture);
        }
    }    void Update()
    {
        if (TheProbe.IsFinishedRendering(RenderId))
        {
            // Probe has finished rendering, do something with the render texture
        }
    }
}
```


            
