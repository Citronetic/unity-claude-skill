This version of Unity is unsupported.



# XRStats





class in
          UnityEngine.XR



/



Implemented in:[UnityEngine.VRModule](UnityEngine.VRModule.html)


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



Timing and other statistics from the XR subsystem.





Some XR SDKs provide access to additional timing and other statistics. These can be used by games and applications for profiling and dynamic performance adjustments. For example, modifying [XRSettings.eyeTextureResolutionScale](XR.XRSettings-eyeTextureResolutionScale.html) or [XRSettings.renderViewportScale](XR.XRSettings-renderViewportScale.html) during runtime can improve performance. This class exposes a set of information that can be optionally reported by SDKs. Make sure to use the return values of any methods to know whether the data is being reported by the SDK or not.





### Static Methods



| Method | Description |
| --- | --- |
| TryGetDroppedFrameCount | Retrieves the number of dropped frames reported by the XR SDK. |
| TryGetFramePresentCount | Retrieves the number of times the current frame has been drawn to the device as reported by the XR SDK. |
| TryGetGPUTimeLastFrame | Retrieves the time spent by the GPU last frame, in seconds, as reported by the XR SDK. |


            
