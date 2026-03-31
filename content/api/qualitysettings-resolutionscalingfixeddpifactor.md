This version of Unity is unsupported.



# [QualitySettings](QualitySettings.html).resolutionScalingFixedDPIFactor




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




                [Switch to Manual](../Manual/class-QualitySettings.html)







                    public static float resolutionScalingFixedDPIFactor;






### Description



In resolution scaling mode, this factor is used to multiply with the target Fixed DPI specified to get the actual Fixed DPI to use for this quality setting.





Additional resources: [Multi-Resolution UI](../Manual/HOWTO-UIMultiResolution.html), [Quality Settings](../Manual/class-QualitySettings.html).


              


```
using UnityEngine;public class StartupExampleScript : MonoBehaviour
{
    void Start()
    {
        // Set the target Fixed DPI for this quality setting to be half of the default.
        QualitySettings.resolutionScalingFixedDPIFactor = 0.5f;
    }
}
```





Additional resources: [Quality Settings](../Manual/class-QualitySettings.html).


            
