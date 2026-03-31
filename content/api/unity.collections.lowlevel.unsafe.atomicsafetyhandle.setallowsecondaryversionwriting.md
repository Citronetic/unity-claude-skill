This version of Unity is unsupported.



# [AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html).SetAllowSecondaryVersionWriting




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

public static void SetAllowSecondaryVersionWriting([Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html) handle,
bool allowWriting);






### Parameters



| Parameter | Description |
| --- | --- |
| handle | The AtomicSafetyHandle of the NativeContainer. |
| allowWriting | If true, allows write access to the NativeContainer for AtomicSafetyHandles that use secondary version number. If false,
handles that usse a secondary version number only have read access to the NativeContainer. |





### Description



Sets whether other AtomicSafetyHandles that use a secondary version number can write to the NativeContainer protected by a given AtomicSafetyHandle.





Additional resources: [AtomicSafetyHandle.UseSecondaryVersion](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.UseSecondaryVersion.html), [Copying NativeContainer structures](../Manual/job-system-copy-nativecontainer.html).


            
