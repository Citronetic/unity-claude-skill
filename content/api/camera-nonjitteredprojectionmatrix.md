This version of Unity is unsupported.



# [Camera](Camera.html).nonJitteredProjectionMatrix




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




                [Switch to Manual](../Manual/class-Camera.html)







                    public [Matrix4x4](Matrix4x4.html) nonJitteredProjectionMatrix;






### Description



Get or set the raw projection matrix with no camera offset (no jittering).





For many temporal image effects, the camera that is currently rendering needs to be slightly offset from the default projection (that is, the camera is ‘jittered’). Use this function to specify the default (non-jittered) perspective matrix that was used before the offset was applied. It is possible to configure whether the jittered or non jittered matrix should be used for objects rendered after the opaque objects pass (transparent objects for example), see [Camera.useJitteredProjectionMatrixForTransparentRendering](Camera-useJitteredProjectionMatrixForTransparentRendering.html).

If you use motion vectors and camera jittering together, use this property to keep the motion vectors stable between frames.

Set the jittered matrix using [Camera.projectionMatrix](Camera-projectionMatrix.html).


            
