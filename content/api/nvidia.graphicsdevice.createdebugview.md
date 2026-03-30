This version of Unity is unsupported.



# [GraphicsDevice](NVIDIA.GraphicsDevice.html).CreateDebugView




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

public [NVIDIA.GraphicsDeviceDebugView](NVIDIA.GraphicsDeviceDebugView.html) CreateDebugView();






### Returns



**GraphicsDeviceDebugView**
        Returns an object of type [GraphicsDeviceDebugView](NVIDIA.GraphicsDeviceDebugView.html). This object contains a snapshot of the debug information of the device..





### Description



Creates an object containing debug information of the device.





It is best practice to call this function once per application instantiation. If you call this function, you must call [GraphicsDevice.DeleteDebugView](NVIDIA.GraphicsDevice.DeleteDebugView.html) during application destruction. Additional resources: [GraphicsDevice.UpdateDebugView](NVIDIA.GraphicsDevice.UpdateDebugView.html).


            
