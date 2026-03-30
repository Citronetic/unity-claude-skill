This version of Unity is unsupported.



# [GraphicsDevice](NVIDIA.GraphicsDevice.html).CreateFeature




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

public [NVIDIA.DLSSContext](NVIDIA.DLSSContext.html) CreateFeature([Rendering.CommandBuffer](Rendering.CommandBuffer.html) cmd,
ref [NVIDIA.DLSSCommandInitializationData](NVIDIA.DLSSCommandInitializationData.html) initSettings);






### Parameters



| Parameter | Description |
| --- | --- |
| cmd | The rendering command buffer to record commands into. This call does not execute the command buffer, you must execute the command buffer yourself at any time after this call. |
| initSettings | Initial settings structure for the specific feature. |





### Returns



**DLSSContext**
        Returns a Deep Learning Super Sampling (DLSS) context object.





### Description



Creates a specific NVIDIA feature.





`initSettings` must belong to the feature you want to create. A usual use case is to call this function once per view you want to apply the feature too. For example, if your application uses two screens, call this function for each screen respectively. When the application no longer requires the feature (for example a view is destroyed), the application must call [GraphicsDevice.DestroyFeature](NVIDIA.GraphicsDevice.DestroyFeature.html) to recover the allocated memory.


            
