This version of Unity is unsupported.


                  **Method group is Obsolete**





# [UnityWebRequest](Networking.UnityWebRequest.html).Send




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













                        **Obsolete**
                        Use SendWebRequest.  It returns a UnityWebRequestAsyncOperation which contains a reference to the WebRequest object.




## Declaration

public [AsyncOperation](AsyncOperation.html) Send();






### Returns



**AsyncOperation**
        An [AsyncOperation](AsyncOperation.html) indicating the progress/completion state of the UnityWebRequest. Yield this object to wait until the UnityWebRequest is done.





### Description



Begin communicating with the remote server.





After calling this method, the UnityWebRequest will perform DNS resolution (if necessary), transmit an HTTP request to the remote server at the target URL and process the server’s response.

This method can only be called once on any given UnityWebRequest object. Once this method is called, you cannot change any of the UnityWebRequest’s properties.

This method returns an [AsyncOperation](AsyncOperation.html) object. Yielding the AsyncOperation inside a coroutine will cause the coroutine to pause until the UnityWebRequest encounters a system error or finishes communicating.


            
