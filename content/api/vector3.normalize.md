This version of Unity is unsupported.



# [Vector3](Vector3.html).Normalize




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



Normalizes the magnitude of the current vector to 1 while maintaining the direction.





This method converts the current vector to a unit vector in the same direction. Only the magnitude of the vector changes.

                If the current vector is too small to be normalized, then this function returns the zero vector. A vector is too small to be normalized if it is considered [equal](Vector3-equal.html) to the zero vector.

Note that this function changes the current vector. If you want to keep the current vector unchanged, use [normalized](Vector3-normalized.html) variable or the static version of this function.

Additional resources: [normalized](Vector3-normalized.html).




---








## Declaration

public static [Vector3](Vector3.html) Normalize([Vector3](Vector3.html) value);






### Parameters



| Parameter | Description |
| --- | --- |
| value | The vector to be normalized. |





### Returns



**Vector3**
        A new vector with the same direction as the original vector but with a magnitude of 1.0.





### Description



Obtains the normalized version of an input vector.





Returns a normalized vector based on the given vector. The normalized vector has a [magnitude](Vector3-magnitude.html) of 1 and is in the same direction as the given vector.

                If the given vector is too small to be normalized, then this function returns the zero vector. A vector is too small to be normalized if it is considered [equal](Vector3-equal.html) to the zero vector.

                Note that this function doesn't modify the given vector. To modify and normalize the current vector, use the instance version of this method, with no parameter.

                Additional resources: [normalized](Vector3-normalized.html).


            
