This version of Unity is unsupported.



# [InputDevice](XR.InputDevice.html).SendHapticBuffer




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

public bool SendHapticBuffer(uint channel,
byte[] buffer);






### Parameters



| Parameter | Description |
| --- | --- |
| channel | The channel to receive the data. |
| buffer | A raw byte buffer that contains the haptic data to send to the device. |





### Returns



**bool**
        Returns true if successful. Returns false otherwise.





### Description



Sends a raw buffer of haptic data to the device.





The buffered data plays at the sampleRate rate, represented by the frequencyHz value returned by a call to the TryGetCapabilities method, until it completes.

                **Note:** Not all devices support playing haptic buffers. To determine whether buffered haptics are supported, call the [InputDevice.TryGetHapticCapabilities](XR.InputDevice.TryGetHapticCapabilities.html) method and inspect the [HapticCapabilities.supportsBuffer](XR.HapticCapabilities-supportsBuffer.html) property. Also, the size of the buffer sent to the [InputDevice](XR.InputDevice.html) must never be greater than [HapticCapabilities.bufferMaxSize](XR.HapticCapabilities-bufferMaxSize.html).


            
