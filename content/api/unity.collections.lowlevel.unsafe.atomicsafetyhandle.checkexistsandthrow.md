This version of Unity is unsupported.



# [AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html).CheckExistsAndThrow




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

public static void CheckExistsAndThrow(ref [Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html) handle);






### Parameters



| Parameter | Description |
| --- | --- |
| handle | The AtomicSafetyHandle to check. |





### Description



Check if an AtomicSafetyHandle is valid.





Throws an exception if the AtomicSafetyHandle is already destroyed.

An `AtomicSafetyHandle` is invalid under the following conditions:

* The version number it stores no longer matches the version number of the associated entry in the safety system.
* [AtomicSafetyHandle.Release](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.Release.html) is called on the `AtomicSafetyHandle`, or on another `AtomicSafetyHandle` that references the same memory region.
* The secondary version number it stores no longer matches the secondary version number of the associated entry in the safety system. This situation happens when [AtomicSafetyHandle.CheckWriteAndBumpSecondaryVersion](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.CheckWriteAndBumpSecondaryVersion.html)
or AtomicSafetyHandle.SetBumpSecondaryVersionOnSchedule are called on the `AtomicSafetyHandle`.

For more information about container version numbers, refer to [Copying NativeContainer structures](../Manual/job-system-copy-nativecontainer.html).

CheckExistsAndThrow is identical in behavior to [AtomicSafetyHandle.IsHandleValid](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.IsHandleValid.html), except that it throws an exception when the handle isn't valid, rather than returning `false`.

Additional resources: [AtomicSafetyHandle.IsHandleValid](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.IsHandleValid.html)


            
