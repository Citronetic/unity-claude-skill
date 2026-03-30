This version of Unity is unsupported.



# [AnimatorControllerPlayable](Animations.AnimatorControllerPlayable.html).ResetTrigger




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

public void ResetTrigger(string name);






## Declaration

public void ResetTrigger(int id);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The parameter name. |
| id | The parameter ID. |





### Description



Resets the value of the given trigger parameter.





Use this to reset a Trigger [parameter](../Manual/AnimationParameters.html) in an Animator Controller that could still be active. Make sure to create a parameter in the Animator Controller with the same name. See [Animator.SetTrigger](Animator.SetTrigger.html) for more information about how to set a Trigger.


            
