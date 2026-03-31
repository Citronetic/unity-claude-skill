This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).NextSubPass




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

public void NextSubPass();






### Description



Start the next native subpass as discribed by [CommandBuffer.BeginRenderPass](Rendering.CommandBuffer.BeginRenderPass.html).





This can only be called during an active native render pass (encapsulated by [CommandBuffer.BeginRenderPass](Rendering.CommandBuffer.BeginRenderPass.html) and [CommandBuffer.EndRenderPass](Rendering.CommandBuffer.EndRenderPass.html)). You need to call this function for every subpass listed in [CommandBuffer.BeginRenderPass](Rendering.CommandBuffer.BeginRenderPass.html) expect for the first subpass (implicitly called by BeginRenderPass).


            
