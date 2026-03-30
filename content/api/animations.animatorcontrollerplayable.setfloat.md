This version of Unity is unsupported.



# [AnimatorControllerPlayable](Animations.AnimatorControllerPlayable.html).SetFloat




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

public void SetFloat(string name,
float value);






## Declaration

public void SetFloat(int id,
float value);














### Parameters



| Parameter | Description |
| --- | --- |
| name | The parameter name. |
| id | The parameter ID. |
| value | The new parameter value. |
| dampTime | The damper total time. |
| deltaTime | The delta time to give to the damper. |





### Description



Send float values to the AnimatorController to affect transitions.





Use SetFloat in a script to send float values to the AnimatorController in order to activate transitions. In the AnimatorController, define what values affect how certain animations transition. This is useful in various situations, especially in animation cycles such as movement animations where you might require the character to walk or run depending on the button pressure applied.


            
