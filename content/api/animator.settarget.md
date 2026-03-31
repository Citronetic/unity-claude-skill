This version of Unity is unsupported.



# [Animator](Animator.html).SetTarget




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




                [Switch to Manual](../Manual/class-Animator.html)










## Declaration

public void SetTarget([AvatarTarget](AvatarTarget.html) targetIndex,
float targetNormalizedTime);






### Parameters



| Parameter | Description |
| --- | --- |
| targetIndex | The avatar body part that is queried. |
| targetNormalizedTime | The current state Time that is queried. |





### Description



Sets an AvatarTarget and a targetNormalizedTime for the current state.





Once the frame is evaluated, use [Animator.targetPosition](Animator-targetPosition.html) and [Animator.targetRotation](Animator-targetRotation.html) to query the position and rotation.


            
