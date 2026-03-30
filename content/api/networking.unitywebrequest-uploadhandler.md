This version of Unity is unsupported.



# [UnityWebRequest](Networking.UnityWebRequest.html).uploadHandler




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












                    public [Networking.UploadHandler](Networking.UploadHandler.html) uploadHandler;






### Description



Holds a reference to the [UploadHandler](Networking.UploadHandler.html) object which manages body data to be uploaded to the remote server.





Setting this property to `null` indicates that this [UnityWebRequest](Networking.UnityWebRequest.html) has no body data to upload. See the reference on [UploadHandler](Networking.UploadHandler.html) objects for more information on creating and using UploadHandlers.

This property cannot be set after calling [Send](Networking.UnityWebRequest.Send.html).


            
