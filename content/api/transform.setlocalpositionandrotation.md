This version of Unity is unsupported.



# [Transform](Transform.html).SetLocalPositionAndRotation




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




                [Switch to Manual](../Manual/class-Transform.html)










## Declaration

public void SetLocalPositionAndRotation([Vector3](Vector3.html) localPosition,
[Quaternion](Quaternion.html) localRotation);






### Parameters



| Parameter | Description |
| --- | --- |
| localPosition | The local space position to apply to the transform. |
| localRotation | The local space rotation to apply to the transform. |





### Description



Sets the position and rotation of the Transform component in local space (i.e. relative to its parent transform).





When setting both the position and rotation of a transform, calling this method is slightly more efficient than assigning to [Transform.localPosition](Transform-localPosition.html) and [Transform.localRotation](Transform-localRotation.html) individually.

If the transform has no parent, then calling this is equivalent to calling [Transform.SetPositionAndRotation](Transform.SetPositionAndRotation.html).


            
