This version of Unity is unsupported.



# CommandBufferExecutionFlags





enumeration


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



Flags describing the intention for how the command buffer will be executed. Set these via [CommandBuffer.SetExecutionFlags](Rendering.CommandBuffer.SetExecutionFlags.html).





### Properties



| Property | Description |
| --- | --- |
| None | When no flags are specified, the command buffer is considered valid for all means of execution. This is the default for new command buffers. |
| AsyncCompute | Command buffers flagged for async compute execution will throw exceptions if non-compatible commands are added to them. See ScriptableRenderContext.ExecuteCommandBufferAsync and Graphics.ExecuteCommandBufferAsync. |


            
