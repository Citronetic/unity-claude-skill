This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).ConfigureFoveatedRendering




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

public void ConfigureFoveatedRendering(IntPtr platformData);






### Parameters



| Parameter | Description |
| --- | --- |
| platformData | The native pointer from XRDisplaySubsystem.XRRenderPass.foveatedRenderingInfo. |





### Description



Adds a command to configure foveated rendering.





The scriptable render pipeline must call this method for each XR rendering pass.


            
