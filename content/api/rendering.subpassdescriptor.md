This version of Unity is unsupported.



# SubPassDescriptor





struct in
          UnityEngine.Rendering



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



















### Description



Structure discribing a single native subpass.





### Properties



| Property | Description |
| --- | --- |
| colorOutputs | Array of attachment indices to be used as the color render targets in this sub pass. These are specificed as indices into the attachment array passed to CommandBuffer.BeginRenderPass. |
| flags | Flags controlling specific reading behaviour of depth and stencil attachments. |
| inputs | Array of attachment indices to be used as input attachments in this sub pass. These are specificed as indices into the attachment array passed to CommandBuffer.BeginRenderPass. |


            
