This version of Unity is unsupported.



# [HapticCapabilities](XR.HapticCapabilities.html).bufferOptimalSize




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












                    public uint bufferOptimalSize;






### Description



The optimal buffer size an [InputDevice](XR.InputDevice.html) expects to be sent via [InputDevice.SendHapticBuffer](XR.InputDevice.SendHapticBuffer.html) in order to provide a continuous rumble between individual frames.





Check that the device supports haptic buffers via [InputDevice.TryGetHapticCapabilities](XR.InputDevice.TryGetHapticCapabilities.html) and [HapticCapabilities.supportsBuffer](XR.HapticCapabilities-supportsBuffer.html).
Will be set to 0 if [HapticCapabilities.supportsBuffer](XR.HapticCapabilities-supportsBuffer.html) is false.


            
