This version of Unity is unsupported.



# [AnimatorStateMachine](Animations.AnimatorStateMachine.html).RemoveStateMachine




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

public void RemoveStateMachine([Animations.AnimatorStateMachine](Animations.AnimatorStateMachine.html) stateMachine);






### Parameters



| Parameter | Description |
| --- | --- |
| stateMachine | The state machine to remove. |





### Description



Utility function to remove a state machine from its parent state machine.





If the state machine is a sub asset of the parent state machine, it will be deleted.
This function pushes an Undo operation.


            
