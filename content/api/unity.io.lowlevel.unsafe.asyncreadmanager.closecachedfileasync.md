This version of Unity is unsupported.



# [AsyncReadManager](Unity.IO.LowLevel.Unsafe.AsyncReadManager.html).CloseCachedFileAsync




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

public static [Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) CloseCachedFileAsync(string fileName,
[Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) dependency);






### Parameters



| Parameter | Description |
| --- | --- |
| fileName | The path to the file to close. |
| dependency | (Optional) A JobHandle to wait on before performing the close. |





### Returns



**JobHandle**
        A JobHandle that completes when the asynchronous close operation finishes.





### Description



Closes a file held open internally by the AsyncReadManager.





The AsyncReadManager has an internal cache of up to 10 open files, so use this method if you experience a sharing violation when trying to access one of these files that is held open.

Note: Do not use this method for files opened with [OpenFileAsync](Unity.IO.LowLevel.Unsafe.AsyncReadManager.OpenFileAsync.html), as these files do not go into the AsyncReadManager's file cache. Use [FileHandle.Close](Unity.IO.LowLevel.Unsafe.FileHandle.Close.html) instead.


            
