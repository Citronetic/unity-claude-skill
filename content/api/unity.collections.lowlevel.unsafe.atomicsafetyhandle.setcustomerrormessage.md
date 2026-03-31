This version of Unity is unsupported.



# [AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html).SetCustomErrorMessage




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

public static void SetCustomErrorMessage(int staticSafetyId,
[Unity.Collections.LowLevel.Unsafe.AtomicSafetyErrorType](Unity.Collections.LowLevel.Unsafe.AtomicSafetyErrorType.html) errorType,
byte* messageBytes,
int byteCount);






### Parameters



| Parameter | Description |
| --- | --- |
| staticSafetyId | The static safety ID with which the provided custom error message should be associated.
This ID must have been allocated with NewStaticSafetyId. Passing 0 is invalid because 0 is the default static safety ID, and its error messages cann't be modified. |
| errorType | The class of error that should use the provided custom error message instead of the default job debugger error message. |
| messageBytes | The error message to use for the specified error type. This should be a UTF8-encoded byte array, and doesn't have to be null-terminated. |
| byteCount | The number of bytes in the messageBytes array, excluding the optional null terminator. |





### Description



Provides a custom error message for a specific job debugger error type, in cases where additional context can be provided.





The job debugger uses the specified static safety ID and error type to look up error messages for [AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html) instances. You
should provide a message for each applicable type of error defined in [AtomicSafetyErrorType](Unity.Collections.LowLevel.Unsafe.AtomicSafetyErrorType.html). Without a specific error message, the job debugger only gives general
error messages that might not clearly identify the source of the error.

If the message contains any of the following sequences, they are replaced with the corresponding context-specific data (if available) when the message is emitted:



          - {2} = this job name.           example: "BoidsJob"

          - {3} = this job field.          example: "BoidsJob.boidsBuffer"

          - {5} = this owner type.         example: "NativeArray<int>"




            
