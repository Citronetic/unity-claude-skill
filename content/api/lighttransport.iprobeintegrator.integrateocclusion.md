This version of Unity is unsupported.



# [IProbeIntegrator](LightTransport.IProbeIntegrator.html).IntegrateOcclusion




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
| context | Device context for computation and memory operations. |
| positionOffset | Starting index in the probe position buffer. |
| positionCount | Number of probe positions to process. |
| sampleCount | Number of directional samples to take per probe. |
| maxLightsPerProbe | Maximum number of lights to compute occlusion for per probe (typically 4). |
| perProbeLightIndices | Buffer containing light indices for each probe, computed using InputExtraction.ComputeOcclusionLightIndicesFromBakeInput. |
| probeOcclusionEstimateOut | Output buffer for occlusion values. Size must be positionCount × maxLightsPerProbe × sizeof(float). |





### Returns



**Result**
        Result indicating success or failure with detailed error information.





### Description



Computes occlusion values for mixed lighting scenarios with shadowmask support.





This method computes occlusion factors for mixed lights at each probe position. Mixed lights are lights that provide both real-time dynamic lighting and baked shadows through shadowmasks.

The occlusion calculation:



          - Value 1.0: No occlusion (light is fully visible).

          - Values between 0-1: Partial occlusion.

          - Value 0.0: Full occlusion (light is completely blocked).





The light indices can be precomputed using [InputExtraction.ComputeOcclusionLightIndicesFromBakeInput](LightTransport.InputExtraction.ComputeOcclusionLightIndicesFromBakeInput.html) to select the most influential lights for each probe position.

Additional resources: [InputExtraction.ComputeOcclusionLightIndicesFromBakeInput](LightTransport.InputExtraction.ComputeOcclusionLightIndicesFromBakeInput.html), [InputExtraction.GetShadowmaskChannelsFromLightIndices](LightTransport.InputExtraction.GetShadowmaskChannelsFromLightIndices.html).


              


```
// Compute light indices for occlusion
var probePositions = GetProbePositions(); // Vector3[]
var lightIndices = InputExtraction.ComputeOcclusionLightIndicesFromBakeInput(bakeInput, probePositions, 4);// Create buffer for light indices
BufferID lightIndexBuffer = context.CreateBuffer((ulong)(probePositions.Length * 4), sizeof(int));
var lightIndexSlice = new BufferSlice<int>(lightIndexBuffer, 0);
context.WriteBuffer(lightIndexSlice, new NativeArray<int>(lightIndices, Allocator.Temp));// Create output buffer for occlusion values
BufferID occlusionBuffer = context.CreateBuffer((ulong)(probePositions.Length * 4), sizeof(float));
var occlusionSlice = new BufferSlice<float>(occlusionBuffer, 0);// Compute occlusion
var result = integrator.IntegrateOcclusion(context, 0, probePositions.Length, 512, 4, lightIndexSlice, occlusionSlice);Assert.AreEqual(IProbeIntegrator.ResultType.Success, result.type);
```


            
