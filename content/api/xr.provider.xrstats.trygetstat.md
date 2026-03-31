This version of Unity is unsupported.



# [XRStats](XR.Provider.XRStats.html).TryGetStat




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















## Declaration

public static bool TryGetStat([IntegratedSubsystem](IntegratedSubsystem.html) xrSubsystem,
string tag,
out float value);






### Parameters



| Parameter | Description |
| --- | --- |
| xrSubsystem | The subsystem with which the stat is registered. |
| tag | The tag used to query for a statistic. |
| value | Receives the current value of the requested statistic. Contains a valid value when this method returns true. |





### Returns



**bool**
        True, if the requested statistic is available, false otherwise.





### Description



Retrieve a statistic for an XR subsystem.





The TryGetStat method queries an XR subsystem for the specified statistic and, if available, sets the output `value` parameter to the current statistic value. TryGetStat returns true to indicate that the output parameter contains a valid statistic value. If the specified tag is not defined for the subsystem or the subsystem itself is not ready, TryGetStat returns false.


              


```
using UnityEngine.XR.Provider;
using System.Collections.Generic;
using UnityEngine.XR;
using UnityEngine;
using XRStats = UnityEngine.XR.Provider.XRStats;public static class OpenVRStats
{
    public static float GPUFrameTime()
    {
        float tmp;
        XRStats.TryGetStat(GetFirstDisplaySubsystem(), "OpenVR.Display.GPUFrameTime", out tmp);
        return tmp;
    }    public static float MotionToPhoton()
    {
        float tmp;
        XRStats.TryGetStat(GetFirstDisplaySubsystem(), "MotionToPhoton", out tmp);
        return tmp;
    }    // etc...
    private static IntegratedSubsystem GetFirstDisplaySubsystem()
    {
        List<XRDisplaySubsystem> displays = new List<XRDisplaySubsystem>();
        SubsystemManager.GetInstances(displays);
        if (displays.Count == 0)
        {
            Debug.Log("No display subsystem found.");
            return null;
        }
        return displays[0];
    }
}
```


            
