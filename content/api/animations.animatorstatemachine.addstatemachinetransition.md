This version of Unity is unsupported.



# [AnimatorStateMachine](Animations.AnimatorStateMachine.html).AddStateMachineTransition




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

public [Animations.AnimatorTransition](Animations.AnimatorTransition.html) AddStateMachineTransition([Animations.AnimatorStateMachine](Animations.AnimatorStateMachine.html) sourceStateMachine);






## Declaration

public [Animations.AnimatorTransition](Animations.AnimatorTransition.html) AddStateMachineTransition([Animations.AnimatorStateMachine](Animations.AnimatorStateMachine.html) sourceStateMachine,
[Animations.AnimatorStateMachine](Animations.AnimatorStateMachine.html) destinationStateMachine);






## Declaration

public [Animations.AnimatorTransition](Animations.AnimatorTransition.html) AddStateMachineTransition([Animations.AnimatorStateMachine](Animations.AnimatorStateMachine.html) sourceStateMachine,
[Animations.AnimatorState](Animations.AnimatorState.html) destinationState);






### Parameters



| Parameter | Description |
| --- | --- |
| sourceStateMachine | The source state machine. |
| destinationStateMachine | The destination state machine. |
| destinationState | The destination state. |





### Returns



**AnimatorTransition**
        The [AnimatorTransition](Animations.AnimatorTransition.html) transition that was created.





### Description



Utility function to add an outgoing transition from the source state machine to the destination.





The transition asset that is created is added as a sub asset of the state.

An example showing usage of this API can be found at the [AnimatorController](Animations.AnimatorController.html) page.


            
