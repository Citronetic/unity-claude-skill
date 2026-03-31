This version of Unity is unsupported.



# ReadStatus





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



The state of an asynchronous file request.





These enumerations represent the raw underlying states of an asynchronous file request.

When submitted, all requests enter the [ReadStatus.InProgress](Unity.IO.LowLevel.Unsafe.ReadStatus.InProgress.html) state while they are pending execution or in progress. On completion, the state changes to [ReadStatus.Complete](Unity.IO.LowLevel.Unsafe.ReadStatus.Complete.html), [ReadStatus.Truncated](Unity.IO.LowLevel.Unsafe.ReadStatus.Truncated.html) or [ReadStatus.Failed](Unity.IO.LowLevel.Unsafe.ReadStatus.Failed.html). If the read is canceled before completion, the state becomes [ReadStatus.Canceled](Unity.IO.LowLevel.Unsafe.ReadStatus.Canceled.html).

A truncated read occurs when attempting to access beyond the end of a file.





### Properties



| Property | Description |
| --- | --- |
| Complete | The asynchronous file request completed successfully and all read operations within it were completed in full. |
| InProgress | The asynchronous file request is in progress. |
| Failed | One or more of the asynchronous file request's read operations have failed. |
| Truncated | The asynchronous file request has completed but one or more of the read operations were truncated. |
| Canceled | The asynchronous file request was canceled before the read operations were completed. |


            
