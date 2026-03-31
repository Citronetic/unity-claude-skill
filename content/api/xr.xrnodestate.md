This version of Unity is unsupported.



# XRNodeState





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



Describes the state of a node tracked by an XR system.





To track available XR nodes and acquire state data, handle the [InputTracking.nodeAdded](XR.InputTracking-nodeAdded.html) and [InputTracking.nodeRemoved](XR.InputTracking-nodeRemoved.html) events or call [InputTracking.GetNodeStates](XR.InputTracking.GetNodeStates.html).

            Not all XR platforms provide complete tracking data. Use the methods [XRNodeState.TryGetPosition](XR.XRNodeState.TryGetPosition.html), [XRNodeState.TryGetRotation](XR.XRNodeState.TryGetRotation.html), etc. to read the data if it's available.

            XR devices can be accessed in different ways, with the XR Node representing a physical input source such as a head position, hand, or camera.

            See [XR Input](../Manual/xr_input.html) for an overview of accessing XR devices.





### Properties



| Property | Description |
| --- | --- |
| acceleration | Sets the vector representing the current acceleration of the tracked node. |
| angularAcceleration | Sets the vector representing the current angular acceleration of the tracked node. |
| angularVelocity | Sets the vector representing the current angular velocity of the tracked node. |
| nodeType | The type of the tracked node as specified in XRNode. |
| position | Sets the vector representing the current position of the tracked node. |
| rotation | Sets the quaternion representing the current rotation of the tracked node. |
| tracked | Set to true if the node is presently being tracked by the underlying XR system,
and false if the node is not presently being tracked by the underlying XR system. |
| uniqueID | The unique identifier of the tracked node. |
| velocity | Sets the vector representing the current velocity of the tracked node. |





### Public Methods



| Method | Description |
| --- | --- |
| TryGetAcceleration | Attempt to retrieve a vector representing the current acceleration of the tracked node. |
| TryGetAngularAcceleration | Attempt to retrieve a Vector3 representing the current angular acceleration of the tracked node. |
| TryGetAngularVelocity | Attempt to retrieve a Vector3 representing the current angular velocity of the tracked node. |
| TryGetPosition | Attempt to retrieve a vector representing the current position of the tracked node. |
| TryGetRotation | Attempt to retrieve a quaternion representing the current rotation of the tracked node. |
| TryGetVelocity | Attempt to retrieve a vector representing the current velocity of the tracked node. |


            
