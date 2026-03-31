This version of Unity is unsupported.



# [AnimatorStateMachine](Animations.AnimatorStateMachine.html).RemoveAnyStateTransition




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

public bool RemoveAnyStateTransition([Animations.AnimatorStateTransition](Animations.AnimatorStateTransition.html) transition);






### Parameters



| Parameter | Description |
| --- | --- |
| transition | The AnyStat transition to remove. |





### Description



Utility function to remove an AnyState transition from the state machine.





If the transition is a sub asset of the state machine, it will be deleted.
This function pushes an Undo operation.


            
