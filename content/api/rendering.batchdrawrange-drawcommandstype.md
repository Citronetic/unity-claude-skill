This version of Unity is unsupported.



# [BatchDrawRange](Rendering.BatchDrawRange.html).drawCommandsType




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












                    public [Rendering.BatchDrawCommandType](Rendering.BatchDrawCommandType.html) drawCommandsType;






### Description



The [BatchDrawCommandType](Rendering.BatchDrawCommandType.html) that apply to draw commands in this draw range.





The value set here controls from which command array in [BatchCullingOutputDrawCommands](Rendering.BatchCullingOutputDrawCommands.html) the range will read commands from.

                    A value of [BatchDrawCommandType.Direct](Rendering.BatchDrawCommandType.Direct.html) will read from [BatchCullingOutputDrawCommands.drawCommands](Rendering.BatchCullingOutputDrawCommands-drawCommands.html),
                    a value of [BatchDrawCommandType.Indirect](Rendering.BatchDrawCommandType.Indirect.html) will read from [BatchCullingOutputDrawCommands.indirectDrawCommands](Rendering.BatchCullingOutputDrawCommands-indirectDrawCommands.html)
                    and so on.


            
