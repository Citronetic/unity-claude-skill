This version of Unity is unsupported.


                  **Method group is Obsolete**





#




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















### Description



Returns `true` after this [UnityWebRequest](Networking.UnityWebRequest.html) encounters a system error. (Read Only)





Examples of system errors include failure to resolve a DNS entry, a socket error or a redirect limit being exceeded. When this property returns `true`, the [error](Networking.UnityWebRequest-error.html) property will contain a human-readable string describing the error.

**Note:** Error-type server return codes, such as 404/Not Found and 500/Internal Server Error, are reflected in the [isHttpError](Networking.UnityWebRequest-isHttpError.html) property, not the [isNetworkError](Networking.UnityWebRequest-isNetworkError.html) property.

Additional resources: [responseCode](Networking.UnityWebRequest-responseCode.html), [isHttpError](Networking.UnityWebRequest-isHttpError.html).


            
