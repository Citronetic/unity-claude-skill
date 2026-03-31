This version of Unity is unsupported.



# [Animator](Animator.html).SetBoneLocalRotation




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

public void SetBoneLocalRotation([HumanBodyBones](HumanBodyBones.html) humanBoneId,
[Quaternion](Quaternion.html) rotation);






### Parameters



| Parameter | Description |
| --- | --- |
| humanBoneId | The human bone Id. |
| rotation | The local rotation. |





### Description



Sets local rotation of a human bone during a IK pass.





Can be used to create rotation IK goals for any human bone. Ex: Control lower and upper body independantly by setting Hips and Spine local rotation during an IK pass.


            
