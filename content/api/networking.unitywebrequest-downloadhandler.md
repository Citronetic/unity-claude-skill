This version of Unity is unsupported.



# [UnityWebRequest](Networking.UnityWebRequest.html).downloadHandler




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












                    public [Networking.DownloadHandler](Networking.DownloadHandler.html) downloadHandler;






### Description



Holds a reference to a [DownloadHandler](Networking.DownloadHandler.html) object, which manages body data received from the remote server by this [UnityWebRequest](Networking.UnityWebRequest.html).





Setting this property to `null` indicates that this [UnityWebRequest](Networking.UnityWebRequest.html) does not care about the response’s body data; all received body data will be ignored and discarded. See the reference on [DownloadHandler](Networking.DownloadHandler.html) objects for more information on creating and using DownloadHandlers.

This property cannot be changed after calling [Send](Networking.UnityWebRequest.Send.html).

*Default value:* `null`.


            
