This version of Unity is unsupported.



# Eyes





struct in
          UnityEngine.XR



/



Implemented in:[UnityEngine.XRModule](UnityEngine.XRModule.html)


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



Contains eye tracking data from the device at an [XRNode](XR.XRNode.html) in the XR input subsystem.





Represents eye tracking data collected by the device. The Eyes type contains eye position, rotation, and data indicating the eye fixation point and blink values for both the left and right eye.  All eye spatial information is in the Unity coordinate space.





### Public Methods



| Method | Description |
| --- | --- |
| TryGetFixationPoint | Gets the point represents the convergence of the line of sight for both eyes. |
| TryGetLeftEyeOpenAmount | Gets a value that represents the how far the left eye is open. |
| TryGetLeftEyePosition | Gets the Vector3 that describes the position of the left eye. |
| TryGetLeftEyeRotation | Gets the Quaternion that describes the rotation of the left eye. |
| TryGetRightEyeOpenAmount | Gets a value that represents the how far the right eye is open. |
| TryGetRightEyePosition | Gets the Vector3 that describes the position of the right eye. |
| TryGetRightEyeRotation | Gets the Quaternion that describes the rotation of the right eye. |


            
