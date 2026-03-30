This version of Unity is unsupported.



# [DownloadHandler](Networking.DownloadHandler.html).Dispose




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

public void Dispose();






### Description



Signals that this [DownloadHandler](Networking.DownloadHandler.html) is no longer being used, and should clean up any resources it is using.





This method must be called once you have finished using a [DownloadHandler] object.

For convenience, [UnityWebRequest](Networking.UnityWebRequest.html) exposes the [UnityWebRequest.disposeDownloadHandlerOnDispose](Networking.UnityWebRequest-disposeDownloadHandlerOnDispose.html) property, which will automatically call this method when [UnityWebRequest.Dispose](Networking.UnityWebRequest.Dispose.html) is called.

If you elect not to use [UnityWebRequest.disposeDownloadHandlerOnDispose](Networking.UnityWebRequest-disposeDownloadHandlerOnDispose.html) (by setting it to false), then you must call Dispose on the [DownloadHandler](Networking.DownloadHandler.html) yourself. This should only be in rare cases, such as when you wish to save the data in the [DownloadHandler](Networking.DownloadHandler.html)'s internal buffer(s) for later processing.


            
