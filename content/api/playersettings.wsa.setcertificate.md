This version of Unity is unsupported.



# [PlayerSettings.WSA](PlayerSettings.WSA.html).SetCertificate




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




                [Switch to Manual](../Manual/class-PlayerSettings.html)










## Declaration

public static bool SetCertificate(string path,
string password);






### Parameters



| Parameter | Description |
| --- | --- |
| path | The relative Asset path to the Certificate file (.pfx). |
| password | The certificate password. If the certificate does not require a password, use an empty string. |





### Returns



**bool**
        Returns true if Unity successfully updates the certificate. Otherwise, returns false.





### Description



Sets the certificate to use to sign the Universal Windows Platform application package.





In the Editor, Unity displays this under **Certificate** in [UWP Player Settings](../Manual/class-PlayerSettingsWSA.html).


            
