This version of Unity is unsupported.



# InputTracking





class in
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



A collection of methods and properties for accessing XR input devices by their XR Node representation.





XR devices can be accessed in different ways, with the XR Node representing a physical input source such as a head position, hand, or camera.

See [XR Input](../Manual/xr_input.html) for an overview of accessing XR devices.





### Static Methods



| Method | Description |
| --- | --- |
| GetNodeStates | Describes all currently connected XRNodes and provides available tracking states for each. |





### Events



| Event | Description |
| --- | --- |
| nodeAdded | Called when a tracked node is added to the underlying XR system. |
| nodeRemoved | Called when a tracked node is removed from the underlying XR system. |
| trackingAcquired | Called when a tracked node begins reporting tracking information. |
| trackingLost | Called when a tracked node stops reporting tracking information. |


            
