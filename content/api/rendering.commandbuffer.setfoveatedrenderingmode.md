This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).SetFoveatedRenderingMode




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

public void SetFoveatedRenderingMode([Rendering.FoveatedRenderingMode](Rendering.FoveatedRenderingMode.html) foveatedRenderingMode);






### Parameters



| Parameter | Description |
| --- | --- |
| foveatedRenderingMode | The mode to set. |





### Description



Adds a command to set the mode to use for foveated rendering.





Before using this command, the scriptable render pipeline must call [CommandBuffer.ConfigureFoveatedRendering](Rendering.CommandBuffer.ConfigureFoveatedRendering.html). For compatibility with all device, it is recomended to call this before changing render targets because some device will not allow changes during a render pass. To know if you can call this function between rendertarget changes you can check the Rendering.FoveatedRenderingCaps.ModeChangeOnlyBeforeRenderTargetSet flag. If this flag is disabled you can also change the foveation mode between each drawcall.


            
