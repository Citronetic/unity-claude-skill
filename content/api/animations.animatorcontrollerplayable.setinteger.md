This version of Unity is unsupported.



# [AnimatorControllerPlayable](Animations.AnimatorControllerPlayable.html).SetInteger




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

public void SetInteger(string name,
int value);






## Declaration

public void SetInteger(int id,
int value);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The parameter name. |
| id | The parameter ID. |
| value | The new parameter value. |





### Description



Sets the value of the given integer parameter.





Use this as a way to trigger transitions between Animator states. One way of using Integers instead of Floats or Booleans is to use it for something that has multiple states, for example directions (turn left, turn right etc.). Each direction could correspond to a number instead of having multiple Booleans that have to be reset each time.

See documentation on [Animation](../Manual/Animator.html) for more information on setting up Animators.

Note: You can identify the parameter by name or by ID number, but the name or ID number must be the same as the parameter you want to change in the AnimatorController.


            
