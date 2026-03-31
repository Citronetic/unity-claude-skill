This version of Unity is unsupported.



# [SimulationStage](SimulationStage.html).PrepareSimulation




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



This stage prepares the physics scene for simulation.





Specifically, this stage:



          - Displays any pending errors from the physics system.

          - Calls [Physics.SyncTransforms](Physics.SyncTransforms.html) to apply any pending [Transform](Transform.html) changes to the physics system.

          - Stores interpolation poses.




            
