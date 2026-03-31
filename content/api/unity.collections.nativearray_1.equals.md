This version of Unity is unsupported.



# [NativeArray<T0>](Unity.Collections.NativeArray_1.html).Equals




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

public bool Equals(NativeArray<T> other);






### Parameters



| Parameter | Description |
| --- | --- |
| other | The NativeArray to compare against. |





### Returns



**bool**
        True if the two NativeArray instances are the same, false otherwise.





### Description



Compares two [NativeArray<T0>](Unity.Collections.NativeArray_1.html) instances.





Two [NativeArray<T0>](Unity.Collections.NativeArray_1.html) instances are considered the same if they point to the same underlying memory buffer, and
have the same length.




---








## Declaration

public bool Equals(object obj);






### Parameters



| Parameter | Description |
| --- | --- |
| obj | The object to compare against. |





### Returns



**bool**
        True if the NativeArray and the object are the same, false otherwise.





### Description



Compares a [NativeArray<T0>](Unity.Collections.NativeArray_1.html) instance and an object.





A NativeArray and an object are considered the same if they point to the same underlying memory buffer, and have the same length.


            
