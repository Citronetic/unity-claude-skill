This version of Unity is unsupported.



# [InputExtraction](LightTransport.InputExtraction.html).ComputeOcclusionLightIndicesFromBakeInput




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

public static int[] ComputeOcclusionLightIndicesFromBakeInput([LightTransport.InputExtraction.BakeInput](LightTransport.InputExtraction.BakeInput.html) bakeInput,
Vector3[] probePositions,
uint maxLightsPerProbe);






### Parameters



| Parameter | Description |
| --- | --- |
| bakeInput | The BakeInput containing light source information. |
| probePositions | Array of world-space positions where occlusion should be computed. |
| maxLightsPerProbe | Maximum number of lights to select per probe (typically 4 for shadowmask compatibility). |





### Returns



**int[]**
        Flattened array of light indices where each consecutive group of maxLightsPerProbe indices corresponds to one probe position.





### Description



Determines the most influential lights for occlusion calculations at each probe position.





This method analyzes the light sources in the scene and selects the most influential ones for each probe position.

The returned indices are used with [IProbeIntegrator.IntegrateOcclusion](LightTransport.IProbeIntegrator.IntegrateOcclusion.html) to compute shadow mask data for mixed lighting mode.

**Array Layout:** For N probes and M lights per probe, the result contains N × M indices where indices [I × M to (I + 1) × M - 1] belong to probe i.

Additional resources: [IProbeIntegrator.IntegrateOcclusion](LightTransport.IProbeIntegrator.IntegrateOcclusion.html), [InputExtraction.GetShadowmaskChannelsFromLightIndices](LightTransport.InputExtraction.GetShadowmaskChannelsFromLightIndices.html).


              


```
// Extract probe positions from light probe groups
var probePositions = new List<Vector3>();
var lightProbeGroups = FindObjectsOfType<LightProbeGroup>();
foreach (var group in lightProbeGroups)
{
    probePositions.AddRange(group.probePositions.Select(p =>
        group.transform.TransformPoint(p)));
}// Compute light indices for shadowmask occlusion
var lightIndices = InputExtraction.ComputeOcclusionLightIndicesFromBakeInput(
    bakeInput,
    probePositions.ToArray(),
    4  // 4 lights per probe for RGBA shadowmask
);// Get corresponding shadowmask channels
var shadowmaskChannels = InputExtraction.GetShadowmaskChannelsFromLightIndices(bakeInput, lightIndices);// Use with integrator
var result = integrator.IntegrateOcclusion(context, 0, probePositions.Count, 512, 4, lightIndexBuffer, occlusionBuffer);
```


            
