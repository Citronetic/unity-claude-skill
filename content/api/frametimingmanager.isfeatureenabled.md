This version of Unity is unsupported.



# [FrameTimingManager](FrameTimingManager.html).IsFeatureEnabled




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

public static bool IsFeatureEnabled();






### Returns



**bool**
        Whether frame timing statistics are enabled.





### Description



Check if frame timing statistics are enabled.





When enabled, the player collects CPU and GPU frame timing statistics that can be accessed using [CaptureFrameTimings](FrameTimingManager.CaptureFrameTimings.html).

**Note:** The FrameTimingManager is always active on Development Player builds. However, to use this feature in Release Player builds, go to **Edit** > **Project Settings** > **Player** and enable the **Frame Timing Stats** property. If you enable the feature in settings, it’ll remain active whether or not you need it at a specific point in time.


            
