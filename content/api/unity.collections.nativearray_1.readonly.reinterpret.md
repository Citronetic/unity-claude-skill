This version of Unity is unsupported.



# [NativeArray<T0>](Unity.Collections.NativeArray_1.ReadOnly.html).Reinterpret




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

public ReadOnly<U> Reinterpret();






### Returns



**ReadOnly<U>**
        An alias of the [ReadOnly](Unity.Collections.NativeArray_1.ReadOnly.html), but reinterpreted as the target type.





### Description



Reinterpret a [ReadOnly](Unity.Collections.NativeArray_1.ReadOnly.html) with a different data type (type punning).





The sizes of `T` and `U` must match. You can use this method to create a view into memory that has a different element size
and length compared to the source array. For example, an array of float triples can be reinterpreted as an array of 3D vector structs.


            
