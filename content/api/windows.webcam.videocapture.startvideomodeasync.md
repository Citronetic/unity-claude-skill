This version of Unity is unsupported.



# [VideoCapture](Windows.WebCam.VideoCapture.html).StartVideoModeAsync




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















## Declaration

public void StartVideoModeAsync([Windows.WebCam.CameraParameters](Windows.WebCam.CameraParameters.html) setupParams,
[Windows.WebCam.VideoCapture.AudioState](Windows.WebCam.VideoCapture.AudioState.html) audioState,
[Windows.WebCam.VideoCapture.OnVideoModeStartedCallback](Windows.WebCam.VideoCapture.OnVideoModeStartedCallback.html) onVideoModeStartedCallback);






### Parameters



| Parameter | Description |
| --- | --- |
| setupParams | The various settings that should be applied to the web camera. |
| audioState | Indicates how audio should be recorded. |
| onVideoModeStartedCallback | This callback will be invoked once video mode has been activated. |





### Description



Asynchronously starts video mode.





Activates the web camera with the settings specified in [CameraParameters](Windows.WebCam.CameraParameters.html). Only one VideoCapture instance can start the video mode at any given time. After starting the video mode, you can record videos via [VideoCapture.StartRecordingAsync](Windows.WebCam.VideoCapture.StartRecordingAsync.html). Video mode can impact performance, so  make sure to call [VideoCapture.StopVideoModeAsync](Windows.WebCam.VideoCapture.StopVideoModeAsync.html) when you are done recording.


            
