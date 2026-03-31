This version of Unity is unsupported.



# [InputDevice](XR.InputDevice.html).SendHapticImpulse




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

public bool SendHapticImpulse(uint channel,
float amplitude,
float duration);






### Parameters



| Parameter | Description |
| --- | --- |
| channel | The channel to receive the impulse. |
| amplitude | The normalized (0.0 to 1.0) amplitude value of the haptic impulse to play on the device. |
| duration | The duration in seconds that the haptic impulse will play. Only supported on Oculus. |





### Returns



**bool**
        Returns true if successful. Returns false otherwise.





### Description



Sends a haptic impulse to a device.





Sends an impulse (amplitude and frequency) to a device.

                **Note:** Not all devices support all parameters (OpenVR currently only supports amplitude). To determine whether impulse haptics are supported, call the TryGetHapticCapabilities method and inspect the supportsImpulse property.


            
