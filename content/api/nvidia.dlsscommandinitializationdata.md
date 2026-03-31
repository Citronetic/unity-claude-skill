This version of Unity is unsupported.



# DLSSCommandInitializationData





struct in
          UnityEngine.NVIDIA



/



Implemented in:[UnityEngine.NVIDIAModule](UnityEngine.NVIDIAModule.html)


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



















### Description



Represent the initialization state of a [DLSSContext](NVIDIA.DLSSContext.html). You can only use and set this when calling [GraphicsDevice.CreateFeature](NVIDIA.GraphicsDevice.CreateFeature.html).





### Properties



| Property | Description |
| --- | --- |
| featureFlags | Bit mask containing feature flags to be used for DLSS. |
| inputRTHeight | The texture input height size of the input buffers in texels. |
| inputRTWidth | The texture input width size of the input buffers in texels. |
| outputRTHeight | The output buffer height size in texels to upscale to. |
| outputRTWidth | The output buffer width size in texels to upscale to. |
| quality | The quality property for DLSS. |





### Public Methods



| Method | Description |
| --- | --- |
| GetFlag | Helper function. Gets weither if a DLSS feature is set or unset. Additional resources: DLSSFeatureFlags. |
| SetFlag | Helper function. Controls the feature flags used by DLSS. Additional resources: DLSSFeatureFlags. |


            
