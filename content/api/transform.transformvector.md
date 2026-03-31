This version of Unity is unsupported.



# [Transform](Transform.html).TransformVector




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

public [Vector3](Vector3.html) TransformVector([Vector3](Vector3.html) vector);






### Parameters



| Parameter | Description |
| --- | --- |
| vector | The vector to transform, in local space. |





### Returns



**Vector3**
        The transformed vector, in world space.





### Description



Transforms `vector` from local space to world space.





This operation is not affected by position of the transform, but it is affected by scale.
The returned vector may have a different length than `vector`.

If you need the inverse operation to transform from world space to local space you can use [Transform.InverseTransformVector](Transform.InverseTransformVector.html)

If you need to transform many vectors at once consider using [Transform.TransformVectors](Transform.TransformVectors.html) instead as it is much faster than repeatedly calling this function.

Additional resources:[Transform.TransformVectors](Transform.TransformVectors.html), [Transform.InverseTransformVector](Transform.InverseTransformVector.html), [Transform.TransformPoint](Transform.TransformPoint.html), [Transform.TransformDirection](Transform.TransformDirection.html).




---








## Declaration

public [Vector3](Vector3.html) TransformVector(float x,
float y,
float z);






### Parameters



| Parameter | Description |
| --- | --- |
| x | The x component of the vector to transform, in local space. |
| y | The y component of the vector to transform, in local space. |
| z | The z component of the vector to transform, in local space. |





### Returns



**Vector3**
        The transformed vector, in world space.





### Description



Transforms vector `x`, `y`, `z` from local space to world space.





This operation is not affected by position of the transform, but is is affected by scale.
The returned vector may have a different length than `vector`.

If you need the inverse operation to transform from world space to local space you can use [Transform.InverseTransformVector](Transform.InverseTransformVector.html)

If you need to transform many vectors at once consider using [Transform.TransformVectors](Transform.TransformVectors.html) instead as it is much faster than repeatedly calling this function.

Additional resources:[Transform.TransformVectors](Transform.TransformVectors.html), [Transform.InverseTransformVector](Transform.InverseTransformVector.html), [Transform.TransformPoint](Transform.TransformPoint.html), [Transform.TransformDirection](Transform.TransformDirection.html).


            
