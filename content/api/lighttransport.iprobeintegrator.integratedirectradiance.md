This version of Unity is unsupported.



# [IProbeIntegrator](LightTransport.IProbeIntegrator.html).IntegrateDirectRadiance(IDeviceContext,int,int,int,BufferSlice<SphericalHarmonicsL2>)




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



















### Parameters



| Parameter | Description |
| --- | --- |
| context | Device context for computation and memory operations. |
| positionOffset | Starting index in the probe position buffer. |
| positionCount | Number of probe positions to process. |
| sampleCount | Number of samples to take per probe. |
| ignoreEnvironment | If true, excludes environment lighting from the direct contribution calculation. |
| radianceEstimateOut | Output buffer slice that the direct radiance estimate is written into, encoded as spherical harmonics coefficients. |





### Returns



**void**
        Result indicating success or failure with detailed error information.





### Description



Computes direct lighting contribution at probe positions using spherical sampling.





This method performs spherical sampling around each probe position to compute direct lighting contributions from all light sources in the scene. The results are stored as L2 spherical harmonics coefficients that can be used for real-time lighting lookups.

Direct radiance includes contributions from:



          - Directional lights

          - Point lights

          - Spot lights

          - Area lights

          - Environment lighting (unless ignored)





The quality of the integration depends on the sample count - higher values produce more accurate results but require more computation time.


              


```
// Extract scene data
bool result = InputExtraction.ExtractFromScene(out var input);
Assert.IsTrue(result);// Create context and world
using var context = new RadeonRaysContext();
Assert.IsTrue(context.Initialize());
var world = new RadeonRaysWorld();// Populate world with scene data
using var progress = new BakeProgressState();
var worldResult = InputExtraction.PopulateWorld(input, progress, context, world);
Assert.IsTrue(worldResult);// Create integrator
var integrator = new RadeonRaysProbeIntegrator();
integrator.SetProgressReporter(progress);// Prepare probe positions
var probePositions = new NativeArray<Vector3>(64, Allocator.Persistent);
// ... fill probe positions ...BufferID posBuffer = context.CreateBuffer(64, 12); // Vector3 = 12 bytes
var posSlice = new BufferSlice<Vector3>(posBuffer, 0);
context.WriteBuffer(posSlice, probePositions);// Prepare integrator.
integrator.Prepare(context, world, posSlice, 0.1f, 2);// Integrate direct lighting
var result = integrator.IntegrateDirectRadiance(
    context,
    0,        // Start from first probe
    32,       // Process 32 probes
    64,       // Faster, low quality sampling, usually okay for final bake if area lights are not used.
    false,    // Include environment lighting
    shBuffer
);if (result.type != IProbeIntegrator.ResultType.Success)
{
    Debug.LogError($"Direct radiance integration failed: {result}");
}
// Cleanup
integrator.Dispose();
context.DestroyBuffer(posBuffer);
context.DestroyBuffer(shBuffer);
probePositions.Dispose();
```


            
