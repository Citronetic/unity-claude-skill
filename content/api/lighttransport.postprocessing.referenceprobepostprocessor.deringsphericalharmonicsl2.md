This version of Unity is unsupported.



# [ReferenceProbePostProcessor](LightTransport.PostProcessing.ReferenceProbePostProcessor.html).DeringSphericalHarmonicsL2




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

public bool DeringSphericalHarmonicsL2([LightTransport.IDeviceContext](LightTransport.IDeviceContext.html) context,
BufferSlice<SphericalHarmonicsL2> shIn,
BufferSlice<SphericalHarmonicsL2> shOut,
int probeCount);






### Parameters



| Parameter | Description |
| --- | --- |
| context | Device context. |
| shIn | Source buffer to de-ring. |
| shOut | Destination buffer where the results are written. |
| probeCount | Number of SphericalHarmonicsL2 probes to de-ring. |





### Returns



**bool**
        True if the operation was successfully added to the command queue on the context.





### Description



De-ring an array of [SphericalHarmonicsL2](Rendering.SphericalHarmonicsL2.html) probes.





Ringing is an artifact that can occur on light probes if they are subject to drastic changes in lighting. Light may overshoot and appear in the opposite end of the probe. This method can remove ringing on probes, but might reduce overall contrast.


            
