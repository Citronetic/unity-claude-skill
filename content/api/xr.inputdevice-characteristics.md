This version of Unity is unsupported.



# [InputDevice](XR.InputDevice.html).characteristics




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












                    public [XR.InputDeviceCharacteristics](XR.InputDeviceCharacteristics.html) characteristics;






### Description



Read Only. A bitmask of enumerated flags describing the characteristics of this InputDevice.





Use **Characteristics** to determine whether an **InputDevice** has specific features or capabilities. For example, if the set of [InputDeviceCharacteristics](XR.InputDeviceCharacteristics.html) includes both [InputDeviceCharacteristics.HeldInHand](XR.InputDeviceCharacteristics.HeldInHand.html) and [InputDeviceCharacteristics.Left](XR.InputDeviceCharacteristics.Left.html), then the device provides tracking data for the left hand.

**Characteristics** is a bitmask. Use the bitwise operators to test for specific flags. For example, to determine whether an **InputDevice** has a camera, use the conditional:

`(inputDevice.characteristics & InputDeviceCharacteristics.Camera) == InputDeviceCharacteristics.Camera`.


            
