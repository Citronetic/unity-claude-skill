This version of Unity is unsupported.



# StereoScreenCaptureMode





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



Enumeration specifying the eye texture to capture when using ScreenCapture.CaptureScreenshot and when stereo rendering is enabled.





The CaptureScreenshot method will default to StereoScreenCaptureMode.LeftEye. When captured in stereo mode, the resolution of the screenshot will be the size of the game window on the main display.





### Properties



| Property | Description |
| --- | --- |
| LeftEye | The Left Eye is captured. This is the default setting for the CaptureScreenshot method. |
| RightEye | The Right Eye is captured. |
| BothEyes | Both the left and right eyes are captured and composited into one image. |
| MotionVectors | Both the left and right eyes are captured and composited into one image, showing the motion vectors. |


            
