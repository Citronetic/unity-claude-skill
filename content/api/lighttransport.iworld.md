This version of Unity is unsupported.



# IWorld





interface in
          UnityEngine.LightTransport


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



















### Description



Interface for integration world data structures used by light transport calculations.





This interface provides an abstraction for world space data structures used by integrators, such as acceleration structures, lookup tables, and other optimized data that can be shared between different integration operations.

The IWorld interface enables:
- Scene geometry and material data storage.
- Spatial acceleration structures for efficient ray tracing.
- Light source data storage and acceleration structures for efficient lookups.
- Shared data structures across multiple integration passes.

Unity provides a concrete implementation of this interface:
- UnityEngine.LightTransport.RadeonRaysWorld for GPU-accelerated operations using OpenCL 1.2.

World objects are populated using [InputExtraction.PopulateWorld](LightTransport.InputExtraction.PopulateWorld.html) and consumed by [IProbeIntegrator](LightTransport.IProbeIntegrator.html) implementations.


              


```
// Extract scene data for baking.
bool extractResult = InputExtraction.ExtractFromScene(out var bakeInput);
Assert.IsTrue(extractResult);// Create context and world for GPU acceleration.
using var context = new RadeonRaysContext();
Assert.IsTrue(context.Initialize());
var world = new RadeonRaysWorld();// Populate world with scene data.
using var progress = new BakeProgressState();
bool populateResult = InputExtraction.PopulateWorld(bakeInput, progress, context, world);
Assert.IsTrue(populateResult);// Use world with multiple integrators.
var directIntegrator = new RadeonRaysProbeIntegrator();
var indirectIntegrator = new RadeonRaysProbeIntegrator();// Both integrators can share the same world data.
directIntegrator.Prepare(context, world, probePositions, 0.5f, 1);
indirectIntegrator.Prepare(context, world, probePositions, 0.1f, 3);// Perform light integration passes
var directResult = directIntegrator.IntegrateDirectRadiance(context, 0, probeCount, 256, false, directBuffer);
var indirectResult = indirectIntegrator.IntegrateIndirectRadiance(context, 0, probeCount, 2048, false, indirectBuffer);// Clean up
world.Dispose();
```


            
