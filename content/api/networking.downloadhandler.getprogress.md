This version of Unity is unsupported.



# [DownloadHandler](Networking.DownloadHandler.html).GetProgress




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

protected float GetProgress();






### Returns



**float**
        The return value for [UnityWebRequest.downloadProgress](Networking.UnityWebRequest-downloadProgress.html).





### Description



Callback, invoked when [UnityWebRequest.downloadProgress](Networking.UnityWebRequest-downloadProgress.html) is accessed.





This callback will be invoked when scripts access the [UnityWebRequest.downloadProgress](Networking.UnityWebRequest-downloadProgress.html) property on this DownloadHandler's parent [UnityWebRequest](Networking.UnityWebRequest.html). The return value of this method will be returned as the value of the [UnityWebRequest.downloadProgress](Networking.UnityWebRequest-downloadProgress.html) property.

This callback will be invoked on the main thread.

If not overridden, the default behavior of this callback is to return `0.5`.


            
