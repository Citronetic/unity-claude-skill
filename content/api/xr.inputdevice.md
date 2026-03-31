This version of Unity is unsupported.



# InputDevice





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



Defines an input device in the XR input subsystem.





To retrieve input features or route haptic feedback to XR input devices, specify an [XRNode](XR.XRNode.html) as the destination. Use [XRNode.LeftHand](XR.XRNode.LeftHand.html) and [XRNode.RightHand](XR.XRNode.RightHand.html) to send haptic data to left or right devices.  You can send haptic data either as an impulse or as a buffer of raw bytes that is played back through the haptic device. You can stop haptic output or query the device for its buffered capabilities at any time.





### Properties



| Property | Description |
| --- | --- |
| characteristics | Read Only. A bitmask of enumerated flags describing the characteristics of this InputDevice. |
| isValid | Read Only. True if the device is currently a valid input device; otherwise false. |
| manufacturer | The manufacturer of the connected Input Device. |
| name | Read Only. The name of the device in the XR system. This is a platform provided unique identifier for the device. |
| serialNumber | The serial number of the connected Input Device.  Blank if no serial number is available. |
| subsystem | Gets the XRInputSubsystem that reported this InputDevice. |





### Public Methods



| Method | Description |
| --- | --- |
| SendHapticBuffer | Sends a raw buffer of haptic data to the device. |
| SendHapticImpulse | Sends a haptic impulse to a device. |
| StopHaptics | Stop all haptic playback for a device. |
| TryGetFeatureUsages | Gets a list of all the input feature usages available on this device. For example, "Trigger" or "Device Position". |
| TryGetFeatureValue | Retrieves information about the input feature specified by the Usage parameter. Those functions which take a time parameter allow querying for that feature at a particular point in time |
| TryGetHapticCapabilities | Gets the haptic capabilities of the device. |


            
