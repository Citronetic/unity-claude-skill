This version of Unity is unsupported.



# [HDROutputSettings](HDROutputSettings.html).RequestHDRModeChange




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

public void RequestHDRModeChange(bool enabled);






### Parameters



| Parameter | Description |
| --- | --- |
| enabled | Indicates whether HDR should be enabled. |





### Description



Use this function to request a change in the HDR Output Mode and in the value of [HDROutputSettings.active](HDROutputSettings-active.html).





When calling this function, Unity automatically sets the [HDROutputSettings.HDRModeChangeRequested](HDROutputSettings.HDRModeChangeRequested.html) property to `true` until the HDR Output Mode change completes.

This functionality could be used to implement an in application menu allowing users to swap in or our of HDR display mode.

Some platforms cannot swap in or out of HDR display mode at runtime. See [SystemInfo.hdrDisplaySupportFlags](SystemInfo-hdrDisplaySupportFlags.html) for more information.

Accessing this member results in an exception if HDR is not available on the display. Use [HDROutputSettings.available](HDROutputSettings-available.html) for the display to check that HDR is available.


            
