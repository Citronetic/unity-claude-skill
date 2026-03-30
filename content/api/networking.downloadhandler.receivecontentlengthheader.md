This version of Unity is unsupported.



# [DownloadHandler](Networking.DownloadHandler.html).ReceiveContentLengthHeader




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

protected void ReceiveContentLengthHeader(ulong contentLength);






### Parameters



| Parameter | Description |
| --- | --- |
| contentLength | The value of the received Content-Length header. |





### Description



Callback, invoked with a `Content-Length` header is received.





This callback is invoked on the main thread.

*Note:* This callback is *only* called if a `Content-Length` header is received. If the remote server does not transmit a `Content-Length` header, but does include body data, then it is possible for ReceiveData to be invoked without receiving a call to this method.

*Note:* This callback may be invoked more than once. An example scenario would be a case where a redirect is encountered, followed by a standard response. If both the redirect and standard response include `Content-Length` headers, this method will be invoked twice.


            
