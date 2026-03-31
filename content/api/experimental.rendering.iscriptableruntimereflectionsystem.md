This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# IScriptableRuntimeReflectionSystem





interface in
          UnityEngine.Experimental.Rendering


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



Defines the required members for a Runtime Reflection Systems.





You can use the empty implementation as base class, see [ScriptableRuntimeReflectionSystem](Experimental.Rendering.ScriptableRuntimeReflectionSystem.html).


              


```
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Experimental.Rendering;abstract class CustomRuntimeReflectionSystem : IScriptableRuntimeReflectionSystem
{
    List<ReflectionProbe> m_RealtimeReflectionProbes = new List<ReflectionProbe>();
    List<RenderTexture> m_RealtimeReflectionProbeTargets = new List<RenderTexture>();    public bool TickRealtimeProbes()
    {
        for (int i = 0, c = m_RealtimeReflectionProbes.Count; i < c; ++i)
        {
            var probe = m_RealtimeReflectionProbes[i];
            var target = m_RealtimeReflectionProbeTargets[i];            RenderProbe(probe, target);            probe.realtimeTexture = target;
        }        return true;
    }    protected abstract void RenderProbe(ReflectionProbe probe, RenderTexture target);
    public abstract void Dispose();
}
```





### Public Methods



| Method | Description |
| --- | --- |
| TickRealtimeProbes | Update the reflection probes. |


            
