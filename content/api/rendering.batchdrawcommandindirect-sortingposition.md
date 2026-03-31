This version of Unity is unsupported.



# [BatchDrawCommandIndirect](Rendering.BatchDrawCommandIndirect.html).sortingPosition




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












                    public int sortingPosition;






### Description



Together with [BatchDrawCommand.flags](Rendering.BatchDrawCommand-flags.html), this specifies how to depth sort the instances in this draw command.





If [BatchDrawCommandFlags.HasSortingPosition](Rendering.BatchDrawCommandFlags.HasSortingPosition.html) is set, this contains the index of the first position in the [BatchCullingOutputDrawCommands.instanceSortingPositions](Rendering.BatchCullingOutputDrawCommands-instanceSortingPositions.html) array which contains world-space positions that Unity uses to depth sort the instances. In this case, set this value to the index of the x component of the world space position of the first instance.

                    If [BatchDrawCommandFlags.HasSortingPosition](Rendering.BatchDrawCommandFlags.HasSortingPosition.html) is not set, Unity casts this value to a float and uses it as an approximate depth to depth sort the instances in the draw command.


            
