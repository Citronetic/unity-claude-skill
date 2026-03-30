This version of Unity is unsupported.



# [UnityWebRequest](Networking.UnityWebRequest.html).certificateHandler




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












                    public [Networking.CertificateHandler](Networking.CertificateHandler.html) certificateHandler;






### Description



Holds a reference to a [CertificateHandler](Networking.CertificateHandler.html) object, which manages certificate validation for this [UnityWebRequest](Networking.UnityWebRequest.html).





Setting this property to `null` makes the platform use the default certificate validation, which will validate certificates against a root certificate authority store (most commonly Operating System store).

Not all platforms support certificate validation callbacks. See [CertificateHandler](Networking.CertificateHandler.html) for a list of supported platforms.

This property cannot be changed after calling [SendWebRequest](Networking.UnityWebRequest.SendWebRequest.html).

*Default value:* `null`.


            
