This version of Unity is unsupported.



# [IProbePostProcessor](LightTransport.PostProcessing.IProbePostProcessor.html).ConvolveRadianceToIrradiance




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

public bool ConvolveRadianceToIrradiance([LightTransport.IDeviceContext](LightTransport.IDeviceContext.html) context,
BufferSlice<SphericalHarmonicsL2> radianceIn,
BufferSlice<SphericalHarmonicsL2> irradianceOut,
int probeCount);






### Parameters



| Parameter | Description |
| --- | --- |
| context | Device context. |
| radianceIn | Source buffer of spherical radiance encoded as SphericalHarmonicsL2. |
| irradianceOut | Destination buffer of the convolved spherical irradiance encoded as SphericalHarmonicsL2. |
| probeCount | Number of SphericalHarmonicsL2 probes to convolve. |





### Returns



**bool**
        True if the operation was successfully added to the command queue on the context.





### Description



Convolve radiance to irradiance.





Convolve spherical radiance to irradiance on an array of [SphericalHarmonicsL2](Rendering.SphericalHarmonicsL2.html).


            
