This version of Unity is unsupported.



# [UnityWebRequest](Networking.UnityWebRequest.html).error




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












                    public string error;






### Description



A human-readable string describing any system errors encountered by this [UnityWebRequest](Networking.UnityWebRequest.html) object while handling HTTP requests or responses. The default value is `null`. (Read Only)





If the [UnityWebRequest](Networking.UnityWebRequest.html) has not encountered a system error, this property will return `null`. Examples of system errors include socket errors, errors resolving DNS entries, or the redirect limit being exceeded.

**Note:** If the [UnityWebRequest](Networking.UnityWebRequest.html) is complete and the response isn't successful, the error property will be non-empty.

Additional resources: [responseCode](Networking.UnityWebRequest-responseCode.html).


            
