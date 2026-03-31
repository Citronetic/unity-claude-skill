This version of Unity is unsupported.



# [VFXManager](VFX.VFXManager.html).PrepareCamera




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

public static void PrepareCamera([Camera](Camera.html) cam);






## Declaration

public static void PrepareCamera([Camera](Camera.html) cam,
[VFX.VFXCameraXRSettings](VFX.VFXCameraXRSettings.html) camXRSettings);






### Parameters



| Parameter | Description |
| --- | --- |
| cam | The Camera to prepare for processing VFX commands. |
| camXRSettings | The XR settings that the Visual Effect Graph uses to prepare the Camera. |





### Description



Use this method to prepare per-Camera VFX commands for this frame.





This function updates Materials that the VisualEffect uses internally, but does not execute any rendering commands. To execute rendering commands, call VFXManager.ProcessCamera.

Scriptable Render Pipelines (SRP) are responsible for calling this function. The High Definition and Universal Render Pipelines implement this call.

If you create your own SRP, you should typically call this function before culling.


            
