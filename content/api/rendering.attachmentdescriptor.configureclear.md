This version of Unity is unsupported.



# [AttachmentDescriptor](Rendering.AttachmentDescriptor.html).ConfigureClear




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

public void ConfigureClear([Color](Color.html) clearColor,
float clearDepth,
uint clearStencil);






### Parameters



| Parameter | Description |
| --- | --- |
| clearCol | Color clear value. Ignored on depth/stencil attachments. |
| clearDep | Depth clear value. Ignored on color surfaces. |
| clearStenc | Stencil clear value. Ignored on color or depth-only surfaces. |





### Description



When the RenderPass starts, clear this attachment into the color or depth/stencil values given (depending on the format of this attachment). Changes [loadAction](Rendering.AttachmentDescriptor-loadAction.html) to [RenderBufferLoadAction.Clear](Rendering.RenderBufferLoadAction.Clear.html).


            
