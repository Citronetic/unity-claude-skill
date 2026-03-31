This version of Unity is unsupported.



# [HapticCapabilities](XR.HapticCapabilities.html).bufferMaxSize




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












                    public uint bufferMaxSize;






### Description



The maximum amount of data that can be sent to an [InputDevice](XR.InputDevice.html) via [InputDevice.SendHapticBuffer](XR.InputDevice.SendHapticBuffer.html).





If the InputDevice receives an amount of data greater than this, then [InputDevice.SendHapticBuffer](XR.InputDevice.SendHapticBuffer.html) fails and a rumble is not  triggered.
Check that the device supports haptic buffers via [InputDevice.TryGetHapticCapabilities](XR.InputDevice.TryGetHapticCapabilities.html) and [HapticCapabilities.supportsBuffer](XR.HapticCapabilities-supportsBuffer.html).
Will be set to 0 if [HapticCapabilities.supportsBuffer](XR.HapticCapabilities-supportsBuffer.html) is false.


            
