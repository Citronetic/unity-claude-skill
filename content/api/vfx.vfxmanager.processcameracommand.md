This version of Unity is unsupported.



# [VFXManager](VFX.VFXManager.html).ProcessCameraCommand




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













                        **Obsolete**
                        Use ProcessCameraCommand with CullingResults to allow culling of VFX per camera.




## Declaration

public static void ProcessCameraCommand([Camera](Camera.html) cam,
[Rendering.CommandBuffer](Rendering.CommandBuffer.html) cmd);




                        **Obsolete**
                        Use ProcessCameraCommand with CullingResults to allow culling of VFX per camera.




## Declaration

public static void ProcessCameraCommand([Camera](Camera.html) cam,
[Rendering.CommandBuffer](Rendering.CommandBuffer.html) cmd,
[VFX.VFXCameraXRSettings](VFX.VFXCameraXRSettings.html) camXRSettings);






## Declaration

public static void ProcessCameraCommand([Camera](Camera.html) cam,
[Rendering.CommandBuffer](Rendering.CommandBuffer.html) cmd,
[VFX.VFXCameraXRSettings](VFX.VFXCameraXRSettings.html) camXRSettings,
[Rendering.CullingResults](Rendering.CullingResults.html) results);






## Declaration

public static void ProcessCameraCommand([Camera](Camera.html) cam,
[Rendering.CommandBuffer](Rendering.CommandBuffer.html) cmd,
[VFX.VFXCameraXRSettings](VFX.VFXCameraXRSettings.html) camXRSettings,
[Rendering.CullingResults](Rendering.CullingResults.html) results,
[Rendering.CullingResults](Rendering.CullingResults.html) customPassResults);






### Parameters



| Parameter | Description |
| --- | --- |
| cam | The Camera to process the VFX commands for. |
| cmd | The CommandBuffer to push commands to (can be null). |
| camXRSettings | The XR settings that the Visual Effect Graph uses to process the Camera commands. |
| results | The CullingResults for the current camera, used to cull per-camera VFX commands. |
| customPassResults | Additional CullingResults coming from custom passes, if any. |





### Description



Use this method to process per-Camera VFX commands for the current frame.





The current Scriptable Render Pipeline implementation is responsible for calling this function. The High Definition and Universal Render Pipelines implement this call but you must do it manually if you create your own Scriptable Render Pipeline.

Additional resources: [VFXManager.PrepareCamera](VFX.VFXManager.PrepareCamera.html).


            
