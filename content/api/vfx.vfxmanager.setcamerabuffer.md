This version of Unity is unsupported.



# [VFXManager](VFX.VFXManager.html).SetCameraBuffer




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

public static void SetCameraBuffer([Camera](Camera.html) cam,
[VFX.VFXCameraBufferTypes](VFX.VFXCameraBufferTypes.html) type,
[Texture](Texture.html) buffer,
int x,
int y,
int width,
int height);






### Parameters



| Parameter | Description |
| --- | --- |
| cam | The Camera to set the buffer for. |
| type | The type of buffer to set. |
| buffer | The buffer to set. |
| x | X offset of the viewport in the buffer. |
| y | Y offset of the viewport in the buffer. |
| width | Width of the viewport in the buffer. |
| height | Height of the viewport in the buffer. |





### Description



Use this method to set the buffer of a given type for this Camera. This allows the VFX Manager to use the buffer.





In custom Scriptable Render Pipelines, this buffer allows the VFXManager to use buffer behaviors for the Camera, for example depth collisions.
The buffer must be available during the VFX update of the next frame.
To query the need for a buffer, call [VFXManager.IsCameraBufferNeeded](VFX.VFXManager.IsCameraBufferNeeded.html).


            
