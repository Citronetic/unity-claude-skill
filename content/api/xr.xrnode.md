This version of Unity is unsupported.



# XRNode





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



Enumeration of XR nodes which can be updated by XR input or sent haptic data.





**Note:** The types GameController, TrackingReference, and HardwareTracker are considered non-singleton nodes, as there can be many of each available.  As a result, InputTracking.GetLocalPosition, and InputTracking.GetLocalRotation will not work with those values.  Please use [InputTracking.GetNodeStates](XR.InputTracking.GetNodeStates.html) instead.
            **Note:** Only XR nodes with valid haptic devices as endpoints can be sent haptic data.





### Properties



| Property | Description |
| --- | --- |
| LeftEye | Node representing the left eye. |
| RightEye | Node representing the right eye. |
| CenterEye | Node representing a point between the left and right eyes. |
| Head | Node representing the user's head. |
| LeftHand | Node representing the left hand. |
| RightHand | Node representing the right hand. |
| GameController | Represents a tracked game Controller not associated with a specific hand. |
| TrackingReference | Represents a stationary physical device that can be used as a point of reference in the tracked area. |
| HardwareTracker | Represents a physical device that provides tracking data for objects to which it is attached. |


            
