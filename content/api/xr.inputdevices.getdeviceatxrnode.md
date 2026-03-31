This version of Unity is unsupported.



# [InputDevices](XR.InputDevices.html).GetDeviceAtXRNode




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

public static [XR.InputDevice](XR.InputDevice.html) GetDeviceAtXRNode([XR.XRNode](XR.XRNode.html) node);






### Parameters



| Parameter | Description |
| --- | --- |
| node | The XRNode that owns the requested device. |





### Returns



**InputDevice**
        An [InputDevice](XR.InputDevice.html) at this [[XR.XRNode].





### Description



Gets the input device at a given [XRNode](XR.XRNode.html) endpoint.





If there is no device at the specified endpoint, the method returns an InputDevice on which a call to InputDevice.IsValid returns false.


            
