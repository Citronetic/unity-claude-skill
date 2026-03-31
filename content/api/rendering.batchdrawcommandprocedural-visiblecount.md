This version of Unity is unsupported.



# [BatchDrawCommandProcedural](Rendering.BatchDrawCommandProcedural.html).visibleCount




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












                    public uint visibleCount;






### Description



The number of instances to draw with this draw command. This must be a value greater than `1`.





If [BatchDrawCommandFlags.HasSortingPosition](Rendering.BatchDrawCommandFlags.HasSortingPosition.html) is set, you must set this to `1`. This is because Unity doesn't sort instances within a draw command, it only sorts draw commands. This means that you must place depth-sorted instances in separate draw commands.


            
