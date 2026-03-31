This version of Unity is unsupported.



# [UnsafeUtility](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.html).IsUnmanaged




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

public static bool IsUnmanaged();






## Declaration

public static bool IsUnmanaged(Type type);






### Parameters



| Parameter | Description |
| --- | --- |
| type | The System.Type of a struct. |





### Returns



**bool**
        True if `type` is unmanaged, otherwise false.





### Description



Checks whether the struct or type is unmanaged.





An unmanaged type contains no managed fields, and can be freely copied in memory.


            
