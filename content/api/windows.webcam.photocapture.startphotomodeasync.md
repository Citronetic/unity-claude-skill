This version of Unity is unsupported.



# [PhotoCapture](Windows.WebCam.PhotoCapture.html).StartPhotoModeAsync




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

public void StartPhotoModeAsync([Windows.WebCam.CameraParameters](Windows.WebCam.CameraParameters.html) setupParams,
[Windows.WebCam.PhotoCapture.OnPhotoModeStartedCallback](Windows.WebCam.PhotoCapture.OnPhotoModeStartedCallback.html) onPhotoModeStartedCallback);






### Parameters



| Parameter | Description |
| --- | --- |
| setupParams | The various settings that should be applied to the web camera. |
| onPhotoModeStartedCallback | This callback will be invoked once photo mode has been activated. |





### Description



Asynchronously starts photo mode.





Activates the web camera with the various settings specified in [CameraParameters](Windows.WebCam.CameraParameters.html). Only one PhotoCapture instance can start the photo mode at any given time.  After starting the photo mode, you make take photos via [PhotoCapture.TakePhotoAsync](Windows.WebCam.PhotoCapture.TakePhotoAsync.html).  While in photo mode,  more power will be consumed so make sure that you call [PhotoCapture.StopPhotoModeAsync](Windows.WebCam.PhotoCapture.StopPhotoModeAsync.html) when you are done taking photos.


            
