This version of Unity is unsupported.



# [AnimatorControllerPlayable](Animations.AnimatorControllerPlayable.html).SetBool




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

public void SetBool(string name,
bool value);






## Declaration

public void SetBool(int id,
bool value);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The parameter name. |
| id | The parameter ID. |
| value | The new parameter value. |





### Description



Sets the value of the given boolean parameter.





Use AnimatorControllerPlayable.SetBool to pass Boolean values to an [Animator Controller](../Manual/class-AnimatorController.html)
via script.

Use this to trigger transitions between states. For example, triggering a death animation by setting an “alive” boolean to false. See documentation on [Animation](../Manual/AnimatorControllerCreation.html) for more information on setting up Animators.

Note: You can identify the parameter by name or by ID number, but the name or ID number must be the same as the parameter you want to change in the AnimatorController.


            
