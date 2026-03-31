This version of Unity is unsupported.



# CacheServerValidationMode





enumeration


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



Options for the accelerate server validation mode.





Use this enum with [EditorSettings.cacheServerValidationMode](EditorSettings-cacheServerValidationMode.html) to select the Accelerator server validation mode for the project.
Used in conjunction with the Accelerator server [Accelerator server](../Manual/UnityAccelerator.html) settings ProtobufBlobHashRequired ProtobufBlobHashValidateGets and ProtobufBlobHashValidatePuts.





### Properties



| Property | Description |
| --- | --- |
| Disabled | Disable validation for the cache server. |
| UploadOnly | Calculate content hashes for uploaded artifacts and send them to the Accelerator for validation. |
| Enabled | Calculate and upload hashes. Validate Accelerator-provided hashes during downloads. |
| Required | Calculate and uploaded content hashes to the Accelerator. Require Accelerator-provided hashes for download validation. |


            
