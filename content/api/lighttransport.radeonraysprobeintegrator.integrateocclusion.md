This version of Unity is unsupported.



# [RadeonRaysProbeIntegrator](LightTransport.RadeonRaysProbeIntegrator.html).IntegrateOcclusion




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

public [LightTransport.IProbeIntegrator.Result](LightTransport.IProbeIntegrator.Result.html) IntegrateOcclusion([LightTransport.IDeviceContext](LightTransport.IDeviceContext.html) context,
int positionOffset,
int positionCount,
int sampleCount,
int maxLightsPerProbe,
BufferSlice<int> perProbeLightIndices,
BufferSlice<float> probeOcclusionEstimateOut);






### Parameters



| Parameter | Description |
| --- | --- |
| context | Device context. |
| positionOffset | Offset measured from the beginning of the probe position buffer. |
| positionCount | Number of probes to integrate. |
| sampleCount | Number of samples to take. |
| maxLightsPerProbe | Maximum number of lights per probe. The value must be 4. |
| perProbeLightIndices | Buffer slice containing the per probe light indices. |
| probeOcclusionEstimateOut | Buffer slice to write the probe occlusion estimate into. The size of the buffer in bytes should be maxLightsPerProbe * sizeof(float). |





### Returns



**Result**
        Return code.





### Description



Integrate occlusion.





The integrator does spherical sampling for each probe position. Occlusion is 1 if all rays hit front-facing triangles or the sky. Occlusion is 0 if all rays hit back-facing triangles.

Additional resources: [InputExtraction.ComputeOcclusionLightIndicesFromBakeInput](LightTransport.InputExtraction.ComputeOcclusionLightIndicesFromBakeInput.html).


            
