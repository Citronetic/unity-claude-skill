This version of Unity is unsupported.



# [Vector3](Vector3.html).normalized




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












                    public [Vector3](Vector3.html) normalized;






### Description



The unit vector in the direction of the current vector.





This property holds a normalized vector based on the current vector. The normalized vector has a [magnitude](Vector3-magnitude.html) of 1 and is in the same direction as the current vector.

                If the current vector is too small to be normalized, then the value of `normalized` is the zero vector. A vector is too small to be normalized if it is considered [equal](Vector3-equal.html) to the zero vector.

                Note that this does not modify the current vector. To modify and normalize the current vector, use the instance version of the [Normalize](Vector3.Normalize.html) method.

Additional resources: [Normalize](Vector3.Normalize.html).


            
