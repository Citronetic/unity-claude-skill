This version of Unity is unsupported.



# ReadHandle





struct in
          Unity.IO.LowLevel.Unsafe



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



















### Description



You can use this handle to query the status of an asynchronous read operation. Note: To avoid a memory leak, you must call Dispose.





### Properties



| Property | Description |
| --- | --- |
| JobHandle | JobHandle that completes when the read operation completes. |
| ReadCount | The number of read commands performed for this read operation. Will return zero until the reads have begun. |
| Status | Current state of the read operation. |





### Public Methods



| Method | Description |
| --- | --- |
| Cancel | Cancels the AsyncReadManager.Read operation on this handle. |
| Dispose | Disposes the ReadHandle. Use this to free up internal resources for reuse. |
| GetBytesRead | Returns the total number of bytes read by all the ReadCommand operations the asynchronous file read request. |
| GetBytesReadArray | Returns an array containing the number of bytes read by the ReadCommand operations during the asynchronous file read request, where each index corresponds to the ReadCommand index. |
| IsValid | Check if the ReadHandle is valid. |


            
