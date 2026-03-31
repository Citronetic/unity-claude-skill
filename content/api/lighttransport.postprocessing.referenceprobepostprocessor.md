This version of Unity is unsupported.



# ReferenceProbePostProcessor





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



ReferenceProbePostProcessor is a post processor for light probes. The ReferenceProbePostProcessor implements the [IProbePostProcessor](LightTransport.PostProcessing.IProbePostProcessor.html) interface.





The implementation favors correctness and simplicity over performance. It runs on CPU without multithreading, asynchronous execution or any other optimizations. The class is meant for debugging and is not intended for production use.





### Constructors



| Constructor | Description |
| --- | --- |
| ReferenceProbePostProcessor | Constructor. |





### Public Methods



| Method | Description |
| --- | --- |
| AddSphericalHarmonicsL2 | Perform the sum of two arrays of SphericalHarmonicsL2. |
| ConvertToUnityFormat | Converts light probes encoded as SphericalHarmonicsL2 to the format expected by the Unity renderer. |
| ConvolveRadianceToIrradiance | Convolve radiance to irradiance. |
| DeringSphericalHarmonicsL2 | De-ring an array of SphericalHarmonicsL2 probes. |
| Dispose | Disposes the post processor. |
| Initialize | Initialize the ReferenceProbePostProcessor. |
| ScaleSphericalHarmonicsL2 | Scale an array of SphericalHarmonicsL2 probes. |
| WindowSphericalHarmonicsL2 | Apply a windowing operation on an array of SphericalHarmonicsL2 probes. |


            
