This version of Unity is unsupported.



# StereoRenderingMode





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



Enum type signifying the different stereo rendering modes available.





To find out what the current stereo rendering mode used in your Unity project at runtime, use [XRSettings.stereoRenderingMode](XR.XRSettings-stereoRenderingMode.html). This method returns a value of type StereoRenderingMode.





### Properties



| Property | Description |
| --- | --- |
| MultiPass | This is the reference stereo rendering path for VR. |
| SinglePass | This is a faster rendering path for VR than XRSettings.StereoRenderingMode.MultiPass. |
| SinglePassInstanced | This is an optimized version of the XRSettings.StereoRenderingMode.SinglePass mode. |
| SinglePassMultiview | This is a OpenGL optimized version of the XRSettings.StereoRenderingMode.SinglePassInstanced mode. |


            
