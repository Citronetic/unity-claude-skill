This version of Unity is unsupported.



# [PhotoCapture](Windows.WebCam.PhotoCapture.html).CreateAsync




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

public static void CreateAsync([Windows.WebCam.PhotoCapture.OnCaptureResourceCreatedCallback](Windows.WebCam.PhotoCapture.OnCaptureResourceCreatedCallback.html) onCreatedCallback);






## Declaration

public static void CreateAsync(bool showHolograms,
[Windows.WebCam.PhotoCapture.OnCaptureResourceCreatedCallback](Windows.WebCam.PhotoCapture.OnCaptureResourceCreatedCallback.html) onCreatedCallback);






### Parameters



| Parameter | Description |
| --- | --- |
| showHolograms | Will allow you to capture holograms in your photo. |
| onCreatedCallback | This callback will be invoked when the PhotoCapture instance is created and ready to be used. |





### Description



Asynchronously creates an instance of a PhotoCapture object that can be used to capture photos.





If the instance failed to be created, the instance returned will be null.
Capturing holograms is currently disabled therefore the showHolograms parameter will be ignored.


            
