This version of Unity is unsupported.



# [AnimatorStateMachine](Animations.AnimatorStateMachine.html).AddEntryTransition




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

public [Animations.AnimatorTransition](Animations.AnimatorTransition.html) AddEntryTransition([Animations.AnimatorState](Animations.AnimatorState.html) destinationState);






## Declaration

public [Animations.AnimatorTransition](Animations.AnimatorTransition.html) AddEntryTransition([Animations.AnimatorStateMachine](Animations.AnimatorStateMachine.html) destinationStateMachine);






### Parameters



| Parameter | Description |
| --- | --- |
| destinationState | The destination AnimatorState state. |
| destinationStateMachine | The destination AnimatorStateMachine state machine. |





### Description



Utility function to add an incoming transition to the exit of it's parent state machine.





The transition asset that is created is added as a sub asset of the state.

An example showing usage of this API can be found at the [AnimatorController](Animations.AnimatorController.html) page.


            
