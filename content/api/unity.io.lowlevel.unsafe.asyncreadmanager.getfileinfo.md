This version of Unity is unsupported.



# [AsyncReadManager](Unity.IO.LowLevel.Unsafe.AsyncReadManager.html).GetFileInfo




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

public static [Unity.IO.LowLevel.Unsafe.ReadHandle](Unity.IO.LowLevel.Unsafe.ReadHandle.html) GetFileInfo(string filename,
FileInfoResult* result);






### Parameters



| Parameter | Description |
| --- | --- |
| filename | The name of the file to query. |
| result | A struct that this function fills in with information about the file upon completion of this asynchronous request. |





### Returns



**ReadHandle**
        A read handle that you can use to monitor the progress and status of this GetFileInfo command.





### Description



Gets information about a file.





This function gets information about the specified file asynchronously without opening the file.
On completion of the asynchronous operation, the `result` parameter's [FileInfoResult.FileState](Unity.IO.LowLevel.Unsafe.FileInfoResult.FileState.html) member reports whether the file exists ([FileState.Exists](Unity.IO.LowLevel.Unsafe.FileState.Exists.html)) or not ([FileState.Absent](Unity.IO.LowLevel.Unsafe.FileState.Absent.html)).
If the file exists, the `result` parameter's [FileInfoResult.FileSize](Unity.IO.LowLevel.Unsafe.FileInfoResult.FileSize.html) member reports the size of the file in bytes. If the file is absent, the size is reported as zero.


            
