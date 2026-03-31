This version of Unity is unsupported.



# [Vector4](Vector4.html).Normalize




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

public void Normalize();






### Description



Makes this vector have a [magnitude](Vector4-magnitude.html) of 1.





When normalized, a vector keeps the same direction but its length is 1.0.

Note that this function will change the current vector. If you
want to keep the current vector unchanged, use [normalized](Vector4-normalized.html) variable.

If this vector is too small to be normalized it will be set to zero.

Additional resources: [normalized](Vector4-normalized.html) property.




---








## Declaration

public static [Vector4](Vector4.html) Normalize([Vector4](Vector4.html) a);






### Parameters



| Parameter | Description |
| --- | --- |
| a | The vector to be normalized. |





### Returns



**Vector4**
        A new vector with the same direction as the original vector but with a magnitude of 1.0.





### Description



Returns a normalized vector based on the given vector. The normalized vector has a [magnitude](Vector4-magnitude.html) of 1 and is in the same direction as the given vector. Returns a zero vector If the given vector is too small to be normalized.





Note that this does not modify the given vector. To modify and normalize the current vector, use the [Normalize](Vector4.Normalize.html) function without a parameter.

Additional resources: [normalized](Vector4-normalized.html) function.


            
