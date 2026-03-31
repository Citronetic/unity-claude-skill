This version of Unity is unsupported.



# FileStatus





enumeration


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



The possible statuses of a [FileHandle](Unity.IO.LowLevel.Unsafe.FileHandle.html).





Additional resources: [FileHandle.Status](Unity.IO.LowLevel.Unsafe.FileHandle.Status.html), [AsyncReadManager.OpenFileAsync](Unity.IO.LowLevel.Unsafe.AsyncReadManager.OpenFileAsync.html)





### Properties



| Property | Description |
| --- | --- |
| Closed | The file has been closed. |
| Pending | The asynchronous operation to open the file is still in progress. |
| Open | The file is open for reading. |
| OpenFailed | The request to open this file has failed. You must still dispose of the FileHandle using FileHandle.Close. |


            
