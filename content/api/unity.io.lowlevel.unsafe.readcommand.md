This version of Unity is unsupported.



# ReadCommand





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



Describes the offset, size, and destination buffer of a single read operation.





If the asynchronous file read request results in a [ReadStatus.Truncated](Unity.IO.LowLevel.Unsafe.ReadStatus.Truncated.html) or [ReadStatus.Failed](Unity.IO.LowLevel.Unsafe.ReadStatus.Failed.html) state the `Size` field will be updated with the actual number of bytes read.





### Properties



| Property | Description |
| --- | --- |
| Buffer | The buffer that receives the read data. |
| Offset | The offset where the read begins, within the file. |
| Size | The size of the read in bytes. |


            
