This version of Unity is unsupported.



# [DownloadHandler](Networking.DownloadHandler.html).GetNativeData




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

protected NativeArray<byte> GetNativeData();






### Returns



**NativeArray<byte>**
        NativeArray providing access to downloaded data.





### Description



Provides allocation-free access to the downloaded data as a NativeArray.





The data is owned by the download handler and memory is released when the download handler is disposed. The returned NativeArray is read-only.


            
