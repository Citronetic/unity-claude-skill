This version of Unity is unsupported.



# [UnsafeUtility](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.html).CopyStructureToPtr




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

public static void CopyStructureToPtr(ref T input,
void* ptr);






### Parameters



| Parameter | Description |
| --- | --- |
| ptr | The memory pointer to copy from. |
| input | A struct to copy data to. |





### Description



Copies sizeof(T) bytes from a memory pointer to a struct.


            
