This version of Unity is unsupported.



# [AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html).SetStaticSafetyId




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

public static void SetStaticSafetyId(ref [Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html) handle,
int staticSafetyId);






### Parameters



| Parameter | Description |
| --- | --- |
| handle | The AtomicSafetyHandle to modify. |
| staticSafetyId | The static safety ID to associate with the provided AtomicSafetyHandle. This ID must have been allocated with NewStaticSafetyId. |





### Description



Assigns a provided static safety ID to an [AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html).





The ID's owner type name and any custom error messages are used by the job debugger when reporting errors involving the target handle.

Additional resources: [AtomicSafetyHandle.NewStaticSafetyId](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.NewStaticSafetyId.html).


            
