This version of Unity is unsupported.



# [IProbePostProcessor](LightTransport.PostProcessing.IProbePostProcessor.html).ConvertToUnityFormat




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

public bool ConvertToUnityFormat([LightTransport.IDeviceContext](LightTransport.IDeviceContext.html) context,
BufferSlice<SphericalHarmonicsL2> irradianceIn,
BufferSlice<SphericalHarmonicsL2> irradianceOut,
int probeCount);






### Parameters



| Parameter | Description |
| --- | --- |
| context | Device context. |
| irradianceIn | Buffer containing input irradiance. |
| irradianceOut | Output buffer containing the irradiance array after the conversion to the  format compatible with a Unity renderer. |
| probeCount | Number of SphericalHarmonicsL2 probes to convert. |





### Returns



**bool**
        True if the operation was successfully added to the command queue on the context.





### Description



Converts light probes encoded as [SphericalHarmonicsL2](Rendering.SphericalHarmonicsL2.html) to the format expected by the Unity renderer.





The irradiance [SphericalHarmonicsL2](Rendering.SphericalHarmonicsL2.html) light probes must satisfy the following conditions when used with a Unity renderer:



          1. For L0 and L1, the coefficients must have the SH standard normalization terms folded into them (to avoid doing this multiplication in a shader).

          2. The coefficients must be divided by Pi (π) for compatibility reasons.

          3. L1 must be ordered as yzx (rather than xyz). The order is flipped back right before rendering in the GetShaderConstantsFromNormalizedSH function, before the [SphericalHarmonicsL2](Rendering.SphericalHarmonicsL2.html) probes are passed to a shader.




            
