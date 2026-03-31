This version of Unity is unsupported.



# [AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html).NewStaticSafetyId




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

public static int NewStaticSafetyId(byte* ownerTypeNameBytes,
int byteCount);






### Parameters



| Parameter | Description |
| --- | --- |
| ownerTypeNameBytes | The name of the scripting type that owns the AtomicSafetyHandle, to be embedded in error messages involving
the handle. This must be a UTF8-encoded byte array, and doesn't have to be null-terminated. |
| byteCount | The number of bytes in the ownerTypeNameBytes array, excluding the optional null terminator. |





### Returns



**int**
        The newly allocated safety ID.





### Description



Allocates a new static safety ID to store information for the provided type.





After creating a new static safety ID, use [SetStaticSafetyId](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.SetStaticSafetyId.html) to assign it to the applicable [AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html) instances.

The job debugger uses this static safety ID to look up the provided type's name, and any custom error messages created with [SetCustomErrorMessage](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.SetCustomErrorMessage.html). Without
this information, the job debugger can only give general error messages that might not clearly identify the source of the error.




---








## Declaration

public static int NewStaticSafetyId();






### Returns



**int**
        The newly allocated safety ID.





### Description



Allocates a new static safety ID, to store information for the provided type T.





After creating a new static safety ID, use [SetStaticSafetyId](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.SetStaticSafetyId.html) to assign it to the applicable [AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html) instances.

The job debugger uses this static safety ID to look up the provided type's name, and any custom error messages created with [SetCustomErrorMessage](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.SetCustomErrorMessage.html). Without
this information, the job debugger can only give general error messages that might not clearly identify the source of the error.

This variant uses the name of the provided type `T` as the handle's owner type name.


            
