This version of Unity is unsupported.



# [ReadHandle](Unity.IO.LowLevel.Unsafe.ReadHandle.html).GetBytesRead




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

public long GetBytesRead();






### Returns



**long**
        The total number of bytes read by the asynchronous file read request.





### Description



Returns the total number of bytes read by all the [ReadCommand](Unity.IO.LowLevel.Unsafe.ReadCommand.html) operations the asynchronous file read request.





This may not be equal to the sum of all the requested [ReadCommand.Size](Unity.IO.LowLevel.Unsafe.ReadCommand.Size.html) fields in the case of a [ReadStatus.Failed](Unity.IO.LowLevel.Unsafe.ReadStatus.Failed.html) error or a [ReadStatus.Truncated](Unity.IO.LowLevel.Unsafe.ReadStatus.Truncated.html) status.

A truncated read occurs when the [ReadCommand](Unity.IO.LowLevel.Unsafe.ReadCommand.html) describing the read operation specifies a  [ReadCommand.Size](Unity.IO.LowLevel.Unsafe.ReadCommand.Size.html) and [ReadCommand.Offset](Unity.IO.LowLevel.Unsafe.ReadCommand.Offset.html) that extends past the end of the target file.




---








## Declaration

public long GetBytesRead(uint readCommandIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| readCommandIndex | The index of the ReadCommand for which to retrieve the number of bytes read. |





### Returns



**long**
        The number of bytes read for the specified [ReadCommand](Unity.IO.LowLevel.Unsafe.ReadCommand.html).





### Description



Returns the total number of bytes read for a specific [ReadCommand](Unity.IO.LowLevel.Unsafe.ReadCommand.html) index.





This may not be equal the requested [ReadCommand.Size](Unity.IO.LowLevel.Unsafe.ReadCommand.Size.html) fields in the case of a [ReadStatus.Failed](Unity.IO.LowLevel.Unsafe.ReadStatus.Failed.html) error or a [ReadStatus.Truncated](Unity.IO.LowLevel.Unsafe.ReadStatus.Truncated.html) status.

A truncated read occurs when the [ReadCommand](Unity.IO.LowLevel.Unsafe.ReadCommand.html) describing the read operation specifies a  [ReadCommand.Size](Unity.IO.LowLevel.Unsafe.ReadCommand.Size.html) and [ReadCommand.Offset](Unity.IO.LowLevel.Unsafe.ReadCommand.Offset.html) that extends past the end of the target file.


            
