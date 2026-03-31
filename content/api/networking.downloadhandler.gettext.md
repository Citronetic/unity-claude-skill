This version of Unity is unsupported.



# [DownloadHandler](Networking.DownloadHandler.html).GetText




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

protected string GetText();






### Returns



**string**
        String to return as the return value of the text property.





### Description



Callback, invoked when the text property is accessed.





The return value of this method will be returned as the value of the data property.

This method will be invoked on the main thread.

If not overridden, the default behavior of this callback is to call GetData. If GetData returns `null` or an empty string, then this method will return `null` or an empty string (respectively). Otherwise, this method will decode the byte array returned from GetData as a UTF8 string and return the decoded string.


            
