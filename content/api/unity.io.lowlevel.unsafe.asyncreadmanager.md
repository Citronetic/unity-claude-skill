This version of Unity is unsupported.



# AsyncReadManager





class in
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



With the AsyncReadManager, you can perform asynchronous I/O operations through Unity's virtual file system. You can perform these operations on any thread or job.





### Static Methods



| Method | Description |
| --- | --- |
| CloseCachedFileAsync | Closes a file held open internally by the AsyncReadManager. |
| GetFileInfo | Gets information about a file. |
| OpenFileAsync | Opens the file asynchronously. |
| Read | Issues an asynchronous file read operation. Returns a ReadHandle. |
| ReadDeferred | Queues a set of read operations for a file once the specified Jobs have completed. |


            
