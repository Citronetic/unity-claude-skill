This version of Unity is unsupported.



# [NativeArray<T0>](Unity.Collections.NativeArray_1.html).Reinterpret




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

public NativeArray<U> Reinterpret();






## Declaration

public NativeArray<U> Reinterpret(int expectedTypeSize);






### Parameters



| Parameter | Description |
| --- | --- |
| expectedTypeSize | The expected size (in bytes, as given by sizeof) of the current element type of the array. |





### Returns



**NativeArray<U>**
        An alias of the same array, reinterpreted as the target type.





### Description



Reinterpret a [NativeArray<T0>](Unity.Collections.NativeArray_1.html) with a different data type (type punning).





If an expected element size isn't given, the sizes of `T` and `U` must match.

When an expected element size is given, this method allows you to create a view into memory that has a different element size and length compared to the source array. For example, you can reinterpret an array of float triples as an array of 3D vector structs. The expected element size serves as a checkpoint so that the underlying element size in the source array doesn't change size, which would otherwise make all future uses of the reinterpreted array invalid.


            
