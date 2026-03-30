This version of Unity is unsupported.



# [TransformStreamHandle](Animations.TransformStreamHandle.html).SetLocalTRS




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

public void SetLocalTRS([Animations.AnimationStream](Animations.AnimationStream.html) stream,
[Vector3](Vector3.html) position,
[Quaternion](Quaternion.html) rotation,
[Vector3](Vector3.html) scale,
bool useMask);






### Parameters



| Parameter | Description |
| --- | --- |
| stream | The AnimationStream that holds the animated values. |
| position | The position of the transform relative to the parent. |
| rotation | The rotation of the transform relative to the parent. |
| scale | The scale of the transform relative to the parent. |
| useMask | Set to true to write the specified parameters if the matching stream parameters have not already been modified. |





### Description



Sets the position, rotation and scale of the transform relative to the parent.


            
