This version of Unity is unsupported.



# [ReferenceProbePostProcessor](LightTransport.PostProcessing.ReferenceProbePostProcessor.html).ScaleSphericalHarmonicsL2




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

public bool ScaleSphericalHarmonicsL2([LightTransport.IDeviceContext](LightTransport.IDeviceContext.html) context,
BufferSlice<SphericalHarmonicsL2> shIn,
BufferSlice<SphericalHarmonicsL2> shOut,
int probeCount,
float scale);






### Parameters



| Parameter | Description |
| --- | --- |
| context | Device context. |
| shIn | Source buffer of SphericalHarmonicsL2 probes to scale. |
| shOut | Destination buffer where the scaled SphericalHarmonicsL2 probes are written. |
| probeCount | Number of SphericalHarmonicsL2 probes to scale. |
| scale | Scaling factor. |





### Returns



**bool**
        True if the operation was successfully added to the command queue on the context.





### Description



Scale an array of [SphericalHarmonicsL2](Rendering.SphericalHarmonicsL2.html) probes.





shOut = shIn * scale.


            
