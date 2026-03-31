This version of Unity is unsupported.



# [Transform](Transform.html).TransformDirection




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

public [Vector3](Vector3.html) TransformDirection([Vector3](Vector3.html) direction);






### Description



Transforms `direction` from local space to world space.





This operation is not affected by scale or position of the transform. The returned vector has the same length as `direction`.

If you need the inverse operation to transform from world space to local space you can use [Transform.InverseTransformDirection](Transform.InverseTransformDirection.html)

You should use [Transform.TransformPoint](Transform.TransformPoint.html) for the conversion if the vector represents a position rather than a direction.

If you need to transform many directions at once consider using [Transform.TransformDirections](Transform.TransformDirections.html) instead as it is much faster than repeatedly calling this function.

Additional resources: [Transform.TransformDirections](Transform.TransformDirections.html), [Transform.InverseTransformDirection](Transform.InverseTransformDirection.html), [Transform.TransformPoint](Transform.TransformPoint.html), [Transform.TransformVector](Transform.TransformVector.html).




---








## Declaration

public [Vector3](Vector3.html) TransformDirection(float x,
float y,
float z);






### Description



Transforms direction `x`, `y`, `z` from local space to world space.





This operation is not affected by scale or position of the transform. The returned vector has the same length as `direction`.

If you need the inverse operation to transform from world space to local space you can use [Transform.InverseTransformDirection](Transform.InverseTransformDirection.html)

You should use [Transform.TransformPoint](Transform.TransformPoint.html) for the conversion if the vector represents a position rather than a direction.

If you need to transform many directions at once consider using [Transform.TransformDirections](Transform.TransformDirections.html) instead as it is much faster than repeatedly calling this function.

Additional resources: [Transform.TransformDirections](Transform.TransformDirections.html), [Transform.InverseTransformDirection](Transform.InverseTransformDirection.html), [Transform.TransformPoint](Transform.TransformPoint.html), [Transform.TransformVector](Transform.TransformVector.html).


            
