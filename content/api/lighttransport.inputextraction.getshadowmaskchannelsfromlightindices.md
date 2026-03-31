This version of Unity is unsupported.



# [InputExtraction](LightTransport.InputExtraction.html).GetShadowmaskChannelsFromLightIndices




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

public static int[] GetShadowmaskChannelsFromLightIndices([LightTransport.InputExtraction.BakeInput](LightTransport.InputExtraction.BakeInput.html) bakeInput,
int[] lightIndices);






### Parameters



| Parameter | Description |
| --- | --- |
| bakeInput | The BakeInput containing light configuration data. |
| lightIndices | Array of light indices to query for shadowmask channels. |





### Returns



**int[]**
        Array of shadowmask channel indices (0-3 for RGBA, or -1 for no channel) corresponding to each input light index.





### Description



Retrieves the shadowmask channel assignments for specified mixed lights.





This method maps light indices to their assigned shadowmask channels in Unity's mixed lighting system. Mixed lights use shadowmask textures to store precomputed shadow information while providing real-time lighting.

**Channel Mapping:**



          - 0: Red channel.

          - 1: Green channel.

          - 2: Blue channel.

          - 3: Alpha channel.

          - -1: Light has no shadowmask channel assigned.





The shadowmask channels are automatically assigned by Unity's lighting system based on light overlap and priority. Use this information to correctly interpret occlusion data from [IProbeIntegrator.IntegrateOcclusion](LightTransport.IProbeIntegrator.IntegrateOcclusion.html).

Additional resources: [InputExtraction.ComputeOcclusionLightIndicesFromBakeInput](LightTransport.InputExtraction.ComputeOcclusionLightIndicesFromBakeInput.html), [IProbeIntegrator.IntegrateOcclusion](LightTransport.IProbeIntegrator.IntegrateOcclusion.html).


              


```
// Get light indices for occlusion computation
var lightIndices = InputExtraction.ComputeOcclusionLightIndicesFromBakeInput(bakeInput, probePositions, 4);// Map indices to shadowmask channels
var channels = InputExtraction.GetShadowmaskChannelsFromLightIndices(bakeInput, lightIndices);// Process occlusion results with channel mapping
for (int probeIndex = 0; probeIndex < probeCount; probeIndex++)
{
    for (int lightIndex = 0; lightIndex < 4; lightIndex++)
    {
        int arrayIndex = probeIndex * 4 + lightIndex;
        int globalLightIndex = lightIndices[arrayIndex];
        int shadowmaskChannel = channels[arrayIndex];
        float occlusion = occlusionResults[arrayIndex];        if (shadowmaskChannel >= 0)
        {
            Debug.Log($"Probe {probeIndex}, Light {globalLightIndex}: " +
                     $"Channel {shadowmaskChannel}, Occlusion {occlusion}");
        }
    }
}
```


            
