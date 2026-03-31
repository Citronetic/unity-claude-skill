This version of Unity is unsupported.



# ReflectionProbeTimeSlicingMode





enumeration


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



















### Description



Options for distributing the update workload of a reflection probe, if [ReflectionProbe.mode](ReflectionProbe-mode.html) is set to [ReflectionProbeMode.Realtime](Rendering.ReflectionProbeMode.Realtime.html) and [ReflectionProbe.refreshMode](ReflectionProbe-refreshMode.html) is set to  [ReflectionProbeRefreshMode.EveryFrame](Rendering.ReflectionProbeRefreshMode.EveryFrame.html).





Unity updates the cubemap of a reflection probe by rendering the entire scene onto each of its faces, then generates mipmaps of each face using specialized filtering for glossy reflection. This process is performance-intensive, but you can use `ReflectionProbeTimeSlicingMode` to adjust the impact on the framerate.


              


```
using UnityEngine;
using UnityEngine.Rendering;public class ReflectionProbeTimeSlicingModeExample : MonoBehaviour
{
    public ReflectionProbe reflectionProbe;    void Start()
    {
        if (reflectionProbe == null)
        {
            // Add a GameObject with a ReflectionProbe component
            GameObject probeGameObject = new GameObject("Realtime Reflection Probe");
            reflectionProbe = probeGameObject.AddComponent<ReflectionProbe>();			// Set the modes so that the probe is updated every frame.
            reflectionProbe.mode = ReflectionProbeMode.Realtime;
            reflectionProbe.refreshMode = ReflectionProbeRefreshMode.EveryFrame;            // Set the mode to do time-sliced updates
            reflectionProbe.timeSlicingMode = ReflectionProbeTimeSlicingMode.IndividualFaces;
        }
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| AllFacesAtOnce | Spreads the cubemap update over 9 frames, so that all faces are rendered in the first frame. Generates mipmaps over the subsequent 8 frames. |
| IndividualFaces | Spreads the cubemap update over 14 frames, so that each face is rendered per frame. Generates mipmaps over the subsequent 8 frames. This option significantly reduces the impact on the framerate, but may lead to inconsistent results, particularly during dynamic lighting changes. |
| NoTimeSlicing | Updates the entire cubemap in one frame. |


            
