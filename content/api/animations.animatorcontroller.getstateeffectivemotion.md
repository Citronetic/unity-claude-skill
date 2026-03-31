This version of Unity is unsupported.



# [AnimatorController](Animations.AnimatorController.html).GetStateEffectiveMotion




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

public [Motion](Motion.html) GetStateEffectiveMotion([Animations.AnimatorState](Animations.AnimatorState.html) state);






## Declaration

public [Motion](Motion.html) GetStateEffectiveMotion([Animations.AnimatorState](Animations.AnimatorState.html) state,
int layerIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| state | The AnimatorState which we want the Motion. |
| layerIndex | The layer that is queried. |





### Description



Gets the effective Motion for the AnimatorState. The Motion is either stored in the AnimatorStateMachine or in the AnimatorLayer's ovverrides. Use this function to get the Motion that is effectively used.


            
