This version of Unity is unsupported.



# InputDevices





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



An interface for accessing devices in the XR input subsytem.





To route haptic feedback to XR input devices, specify an [XRNode](XR.XRNode.html) as the destination. This interface provides access to input devices using an XRNode. For example, use the use [XRNode.LeftHand](XR.XRNode.LeftHand.html) and [XRNode.RightHand](XR.XRNode.RightHand.html) to access the left or right devices.





### Static Methods



| Method | Description |
| --- | --- |
| GetDeviceAtXRNode | Gets the input device at a given XRNode endpoint. |
| GetDevices | Gets a list of active input devices available to the XR Input Subsystem. |
| GetDevicesAtXRNode | Gets a list of active input devices available to the XR Input Subsystem at a given XRNode endpoint. |
| GetDevicesWithCharacteristics | Gets the list of active XR input devices that match the specified InputDeviceCharacteristics. |





### Events



| Event | Description |
| --- | --- |
| deviceConfigChanged | Defines the delegate to use to register events when an InputDevice's configuration changes. |
| deviceConnected | Defines the delegate to use to register events when an InputDevice is connected. |
| deviceDisconnected | Defines the delegate to use to register events when an InputDevice is disconnected. |


            
