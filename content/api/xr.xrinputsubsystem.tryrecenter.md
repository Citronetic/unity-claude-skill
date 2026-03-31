This version of Unity is unsupported.



# [XRInputSubsystem](XR.XRInputSubsystem.html).TryRecenter




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

public bool TryRecenter();






### Returns



**bool**
        True if the method recenters the XRInputSubsystem. Returns false otherwise.





### Description



Centers the tracking features on all [InputDevice](XR.InputDevice.html)s to the current position and orientation of the head-mounted device.





This can fail depending on the TrackingOriginMode of the subsystem does not support recentering.


            
