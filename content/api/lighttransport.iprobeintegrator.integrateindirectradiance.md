This version of Unity is unsupported.



# [IProbeIntegrator](LightTransport.IProbeIntegrator.html).IntegrateIndirectRadiance(IDeviceContext,int,int,int,BufferSlice<SphericalHarmonicsL2>)




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
| ignoreEnvironment | If true, excludes environment lighting from the indirect contribution calculation. |
| radianceEstimateOut | Output buffer slice that the indirect radiance estimate is written into, encoded as spherical harmonics coefficients. |





### Returns



**void**
        Result indicating success or failure with detailed error information.





### Description



Computes indirect lighting contribution at probe positions using spherical sampling and path tracing.





This method performs multi-bounce global illumination calculations by tracing rays from each probe position and accumulating light bounces through the scene. The number of bounces is controlled by the bounce count parameter set in Prepare.

Indirect radiance includes contribution from:



          - Light bounced off surfaces.

          - Light transmitted through transparent materials.

          - Illumination from emissive materials.

          - Multi-bounce environment lighting.





Higher sample counts and bounce counts significantly improve quality but increase computation time.


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
integrator.Prepare(context, world, posSlice, 0.1f, 2);// Compute indirect lighting
var indirectResult = integrator.IntegrateIndirectRadiance(context, 0, probeCount, 2048, false, indirectBuffer);// Cleanup
integrator.Dispose();
context.DestroyBuffer(posBuffer);
context.DestroyBuffer(indirectBuffer);
probePositions.Dispose();
```


            
