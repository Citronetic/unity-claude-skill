This version of Unity is unsupported.



# [StreamingController](StreamingController.html).SetPreloading




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

public void SetPreloading(float timeoutSeconds,
bool activateCameraOnTimeout,
[Camera](Camera.html) disableCameraCuttingFrom);






### Parameters



| Parameter | Description |
| --- | --- |
| timeoutSeconds | Optional timeout before stopping preloading. Set to 0.0f when no timeout is required. |
| activateCameraOnTimeout | Set to True to activate the connected Camera component when timeout expires. |
| disableCameraCuttingFrom | Camera to deactivate on timeout (if Camera.activateCameraOnTime is True). This parameter can be null. |





### Description



Initiate preloading of streaming data for this camera.





Activate texture streaming at this camera location. This is for preloading texture mipmaps prior to a [Camera](Camera.html) being activated a short time later.
When the Camera component on the same GameObject becomes enabled, preloading will be disabled.
Preloading can be manually disabled with [StreamingController.CancelPreloading](StreamingController.CancelPreloading.html)

The function will do nothing if called when the associated Camera is already enabled.


            
