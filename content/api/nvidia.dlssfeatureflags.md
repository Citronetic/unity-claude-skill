This version of Unity is unsupported.



# DLSSFeatureFlags





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



Options that represent subfeatures of DLSS.





### Properties



| Property | Description |
| --- | --- |
| None | Disables every subfeature. |
| IsHDR | Indicates whether the input buffer uses high dynamic range. If set, the input buffer is raw luminance, if not set, the input buffer is normalized color. |
| MVLowRes | Indicates whether the input motion vector buffer is a lower resolution than the output. If set, you must specify DLSSCommandExecutionData.mvScaleX and DLSSCommandExecutionData.mvScaleY. |
| MVJittered | Indicates whether the input motion vector buffer is jittered or not. If set, you must specify DLSSCommandExecutionData.jitterOffsetX and DLSSCommandExecutionData.jitterOffsetY. |
| DepthInverted | Indicates whether to invert the depth buffer or not. |
| DoSharpening | Indicates whether to use the sharpening feature or not. |


            
