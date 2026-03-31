This version of Unity is unsupported.



# [UploadHandler](Networking.UploadHandler.html).Dispose




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



Signals that this [UploadHandler](Networking.UploadHandler.html) is no longer being used, and should clean up any resources it is using.





This method must be called once you have finished using an [UploadHandler](Networking.UploadHandler.html) object.

For convenience, [UnityWebRequest](Networking.UnityWebRequest.html) exposes the [UnityWebRequest.disposeUploadHandlerOnDispose](Networking.UnityWebRequest-disposeUploadHandlerOnDispose.html) property, which will automatically call this method when [UnityWebRequest.Dispose](Networking.UnityWebRequest.Dispose.html) is called.

If you elect not to use [UnityWebRequest.disposeUploadHandlerOnDispose](Networking.UnityWebRequest-disposeUploadHandlerOnDispose.html) (by setting it to false), then you must call Dispose on the [UploadHandler] yourself. This should only be in rare cases, such as when you wish to use the [UploadHandler](Networking.UploadHandler.html) to transmit the same data multiple times.


            
