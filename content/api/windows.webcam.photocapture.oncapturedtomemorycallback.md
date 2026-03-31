This version of Unity is unsupported.



# [PhotoCapture](Windows.WebCam.PhotoCapture.html).OnCapturedToMemoryCallback




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

public delegate void OnCapturedToMemoryCallback([Windows.WebCam.PhotoCapture.PhotoCaptureResult](Windows.WebCam.PhotoCapture.PhotoCaptureResult.html) result,
[Windows.WebCam.PhotoCaptureFrame](Windows.WebCam.PhotoCaptureFrame.html) photoCaptureFrame);






### Parameters



| Parameter | Description |
| --- | --- |
| result | Indicates whether or not the photo was successfully captured to memory. |
| photoCaptureFrame | Contains the target texture.  If available, the spatial information will be accessible through this structure as well. |





### Description



Called when a photo has been captured to memory.


            
