This version of Unity is unsupported.



# [XRStats](XR.XRStats.html).TryGetGPUTimeLastFrame




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

public static bool TryGetGPUTimeLastFrame(out float gpuTimeLastFrame);






### Parameters



| Parameter | Description |
| --- | --- |
| gpuTimeLastFrame | Outputs the time spent by the GPU last frame. |





### Returns



**bool**
        True if the GPU time spent last frame is available, false otherwise.





### Description



Retrieves the time spent by the GPU last frame, in seconds, as reported by the XR SDK.





On SDKs that support it, this method allows access to more accurate timing information from the SDK itself. This information can take into account GPU time spent in SDK-specific layers.

Statistics are not always available and can vary based on hardware, SDK, and even frame to frame. As such it is important to check the return value of this method before using the statistic value from the out parameter.


            
