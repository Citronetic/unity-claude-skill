This version of Unity is unsupported.



# [RayTracingGeometryInstanceConfig](Rendering.RayTracingGeometryInstanceConfig.html).motionVectorMode




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












                    public [MotionVectorGenerationMode](MotionVectorGenerationMode.html) motionVectorMode;






### Description



Motion vector mode.





Unity configures the following built-in shader uniforms to calculate motion vectors in HLSL code: `unity_MotionVectorsParams`,  `unity_MatrixPreviousM` and `unity_MatrixPreviousMI`.

For ray tracing instances, `unity_MotionVectorsParams` is a vector uniform. Its component values are as follows:



          - the x and z components are 0

          - the y component is 0 if the motion vector mode is [MotionVectorGenerationMode.ForceNoMotion](MotionVectorGenerationMode.ForceNoMotion.html). Otherwise it is 1.

          - the w component is 0 if the motion vector mode is [MotionVectorGenerationMode.Camera](MotionVectorGenerationMode.Camera.html). Otherwise it is 1.





`unity_MatrixPreviousM` and `unity_MatrixPreviousMI` are the instance matrix and its inverse respectively used in the previous frame. Note that Unity only updates these matrices only when there's a [Camera](Camera.html) in the Scene that's using the [DepthTextureMode.MotionVectors](DepthTextureMode.MotionVectors.html) flag in [Camera.depthTextureMode](Camera-depthTextureMode.html).

To access the ray tracing instance matrix in closest hit, any hit, and intersection shaders, use the `ObjectToWorld` or `WorldToObject` HLSL functions.

Additional resources: [MotionVectorGenerationMode](MotionVectorGenerationMode.html).


            
