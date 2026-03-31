This version of Unity is unsupported.



# CertificateHandler





class in
          UnityEngine.Networking



/



Implemented in:[UnityEngine.UnityWebRequestModule](UnityEngine.UnityWebRequestModule.html)


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



Responsible for rejecting or accepting certificates received on https requests.





**Note**: Custom certificate validation is currently implemented for Android, iOS, tvOS, visionOS, and desktop platforms only.
To trust certificates on iOS, tvOS, and visionOS platforms, enable arbitrary loads either by enabling unsecured HTTP in Player Settings or explicitly in Info.plist file. For more information, refer to [Apple documentation](https://developer.apple.com/documentation/bundleresources/information_property_list/nsapptransportsecurity/nsallowsarbitraryloads?language=objc).





### Public Methods



| Method | Description |
| --- | --- |
| Dispose | Signals that this [CertificateHandler] is no longer being used, and should clean up any resources it is using. |





### Protected Methods



| Method | Description |
| --- | --- |
| ValidateCertificate | Callback, invoked for each leaf certificate sent by the remote server. |


            
