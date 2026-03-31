This version of Unity is unsupported.



# [Transform](Transform.html).InverseTransformVector




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

public [Vector3](Vector3.html) InverseTransformVector([Vector3](Vector3.html) vector);






### Parameters



| Parameter | Description |
| --- | --- |
| vector | The vector to transform, in world space. |





### Returns



**Vector3**
        The transformed vector, in local space.





### Description



Transforms a `vector` from world space to local space. The opposite of [Transform.TransformVector](Transform.TransformVector.html).





This operation is not affected by position of the transform but it is affected by scale. The returned vector may have a different length than `vector`.

If you need to transform many vectors at once consider using [Transform.InverseTransformVectors](Transform.InverseTransformVectors.html) instead as it is much faster than repeatedly calling this function.

Additional resources:[Transform.TransformVector](Transform.TransformVector.html), [Transform.InverseTransformVectors](Transform.InverseTransformVectors.html), [Transform.InverseTransformPoint](Transform.InverseTransformPoint.html), [Transform.InverseTransformDirection](Transform.InverseTransformDirection.html).




---








## Declaration

public [Vector3](Vector3.html) InverseTransformVector(float x,
float y,
float z);






### Parameters



| Parameter | Description |
| --- | --- |
| x | The x component of the vector to transform, in world space. |
| y | The y component of the vector to transform, in world space. |
| z | The z component of the vector to transform, in world space. |





### Returns



**Vector3**
        The transformed vector, in local space.





### Description



Transforms the vector `x`, `y`, `z` from world space to local space. The opposite of [Transform.TransformVector](Transform.TransformVector.html).





This operation is not affected by position of the transform but it is affected by scale. The returned vector may have a different length than `vector`.

If you need to transform many vectors at once consider using [Transform.InverseTransformVectors](Transform.InverseTransformVectors.html) instead as it is much faster than repeatedly calling this function.

Additional resources:[Transform.TransformVector](Transform.TransformVector.html), [Transform.InverseTransformVectors](Transform.InverseTransformVectors.html), [Transform.InverseTransformPoint](Transform.InverseTransformPoint.html), [Transform.InverseTransformDirection](Transform.InverseTransformDirection.html).


            
