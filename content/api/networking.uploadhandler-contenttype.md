This version of Unity is unsupported.



# [UploadHandler](Networking.UploadHandler.html).contentType




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












                    public string contentType;






### Description



Determines the default `Content-Type` header which will be transmitted with the outbound HTTP request.





If the parent [UnityWebRequest](Networking.UnityWebRequest.html) does not have a custom `Content-Type` header set, then the value of this property will be used to determine the value of the `Content-Type` header for the HTTP request.

*Note:* If the parent [UnityWebRequest](Networking.UnityWebRequest.html) has a custom `Content-Type` header set, then the value of this property is ignored. If this property is `null` or an empty string, and the parent [UnityWebRequest](Networking.UnityWebRequest.html) has no custom `Content-Type` header, then a default `Content-Type` will be assigned (usually `application/octet-stream`).

*Default value:* `null`.


            
