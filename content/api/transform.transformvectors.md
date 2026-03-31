This version of Unity is unsupported.



# [Transform](Transform.html).TransformVectors




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

public void TransformVectors(Span<Vector3> vectors);






### Parameters



| Parameter | Description |
| --- | --- |
| vectors | The vectors to be transformed, each is replaced by the transformed version. |





### Description



Transforms multiple vectors from local space to world space overwriting each original vector with the transformed version.





This operation is not affected by the position of the transform, but it is affected by scale. The transformed vectors may have a different length to the original versions.

If you need the inverse operation to transform from world space to local space you can use [Transform.InverseTransformVectors](Transform.InverseTransformVectors.html)

Additional resources:[Transform.TransformVector](Transform.TransformVector.html), [Transform.InverseTransformVectors](Transform.InverseTransformVectors.html), [Transform.TransformPoint](Transform.TransformPoint.html), [Transform.TransformDirection](Transform.TransformDirection.html).




---








## Declaration

public void TransformVectors(ReadOnlySpan<Vector3> vectors,
Span<Vector3> transformedVectors);






### Parameters



| Parameter | Description |
| --- | --- |
| vectors | The vectors to be transformed, these vectors are not modified by the function unless the transformedVectors span overlaps. |
| transformedVectors | Receives the transformed vectors, must be the same length as vectors otherwise an exception will be thrown.  If this span overlaps vectors other than representing the exact same elements the behaviour is undefined. |





### Description



Transforms multiple vectors from local space to world space writing the transformed versions to a possibly different location.





This operation is not affected by the position of the transform, but is is affected by scale.The transformed vectors may have a different length to the original versions.

If you need the inverse operation to transform from world space to local space you can use [Transform.InverseTransformVectors](Transform.InverseTransformVectors.html)

Additional resources:[Transform.TransformVector](Transform.TransformVector.html), [Transform.InverseTransformVectors](Transform.InverseTransformVectors.html), [Transform.TransformPoint](Transform.TransformPoint.html), [Transform.TransformDirection](Transform.TransformDirection.html).


            
