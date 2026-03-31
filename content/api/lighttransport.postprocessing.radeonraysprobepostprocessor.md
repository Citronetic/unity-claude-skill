This version of Unity is unsupported.



# RadeonRaysProbePostProcessor





class in
          UnityEngine.LightTransport.PostProcessing


                  Leave feedback





Implements interfaces:[IProbePostProcessor](LightTransport.PostProcessing.IProbePostProcessor.html)




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



RadeonRaysProbePostProcessor is a post processor for light probes. It provides common operations for light probes encoded as [SphericalHarmonicsL2](Rendering.SphericalHarmonicsL2.html). Operations include radiance to irradiance conversion, conversion to the format expected by Unity for rendering (refer to [IProbePostProcessor.ConvertToUnityFormat](LightTransport.PostProcessing.IProbePostProcessor.ConvertToUnityFormat.html)), addition, and scaling.





The [RadeonRaysProbePostProcessor](LightTransport.PostProcessing.RadeonRaysProbePostProcessor.html) implements the [IProbePostProcessor](LightTransport.PostProcessing.IProbePostProcessor.html) interface. It is using the OpenCL 1.2 API for compute.





### Constructors



| Constructor | Description |
| --- | --- |
| RadeonRaysProbePostProcessor | Constructor. |





### Public Methods



| Method | Description |
| --- | --- |
| AddSphericalHarmonicsL2 | Perform the sum of two arrays of SphericalHarmonicsL2. |
| ConvertToUnityFormat | Converts light probes encoded as SphericalHarmonicsL2 to the format expected by the Unity renderer. |
| ConvolveRadianceToIrradiance | Convolve radiance to irradiance. |
| DeringSphericalHarmonicsL2 | De-ring an array of SphericalHarmonicsL2 probes. |
| Dispose | Disposes the post processor. |
| Initialize | Initialize the RadeonRaysProbePostProcessor. |
| ScaleSphericalHarmonicsL2 | Scale an array of SphericalHarmonicsL2 probes elementwise. |
| WindowSphericalHarmonicsL2 | Apply a windowing operation on an array of SphericalHarmonicsL2 probes. |


            
