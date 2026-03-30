This version of Unity is unsupported.



# [GraphicsDevice](AMD.GraphicsDevice.html).CreateFeature




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

public [AMD.FSR2Context](AMD.FSR2Context.html) CreateFeature([Rendering.CommandBuffer](Rendering.CommandBuffer.html) cmd,
ref [AMD.FSR2CommandInitializationData](AMD.FSR2CommandInitializationData.html) initSettings);






### Parameters



| Parameter | Description |
| --- | --- |
| cmd | The rendering command buffer to record commands into. This call does not execute the command buffer. You must execute the command buffer yourself at any time after this call. |
| initSettings | Initial settings structure for the FSR2 feature. |





### Returns



**FSR2Context**
        Returns a Fidelity FX Super Resolution 2.0 context object.





### Description



Creates an FSR2Context object.


            
