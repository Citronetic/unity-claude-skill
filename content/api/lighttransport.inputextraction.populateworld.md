This version of Unity is unsupported.



# [InputExtraction](LightTransport.InputExtraction.html).PopulateWorld




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

public static bool PopulateWorld([LightTransport.InputExtraction.BakeInput](LightTransport.InputExtraction.BakeInput.html) bakeInput,
[LightTransport.BakeProgressState](LightTransport.BakeProgressState.html) progress,
[LightTransport.IDeviceContext](LightTransport.IDeviceContext.html) context,
[LightTransport.IWorld](LightTransport.IWorld.html) world);






### Parameters



| Parameter | Description |
| --- | --- |
| bakeInput | Scene data extracted using ExtractFromScene. |
| progress | Progress tracking object for monitoring world population status. |
| context | Device context that will be used for light transport calculations. |
| world | World object to populate with the processed scene data. |





### Returns



**bool**
        True if world population completed successfully, false if errors occurred.





### Description



Converts extracted scene data into optimized data structures for light transport calculations.





This method transforms the raw scene data from [BakeInput](LightTransport.InputExtraction.BakeInput.html) into optimized data structures suitable for ray tracing and light integration. The process includes:

**Data Processing:**



          - Building spatial acceleration structures (BVHs) for fast ray intersection.

          - Uploading geometry data to device memory.

          - Preprocessing materials and textures.

          - Setting up light data structures for efficient queries.





**Device Compatibility:**



The populated world is optimized for the specific device context:
- GPU contexts: Data uploaded to GPU memory with optimized layouts.
- CPU contexts: Data organized for SIMD processing and cache efficiency.

**Performance Impact:**

This operation can take significant time for complex scenes as it involves:
- Geometry preprocessing and optimization.
- Memory allocations and data transfers.
- Acceleration structure construction.
- Shader compilation (on first use).

The populated world can be reused across multiple integrators for efficiency.


              


```
// Complete workflow: extract scene data and populate world
bool extractResult = InputExtraction.ExtractFromScene(out var bakeInput);
Assert.IsTrue(extractResult, "Scene extraction failed");// Create device context and world
using var context = new RadeonRaysContext();
bool initResult = context.Initialize();
Assert.IsTrue(initResult, "Failed to initialize RadeonRays context");var world = new RadeonRaysWorld();// Set up progress monitoring
using var progress = new BakeProgressState();
progress.SetTotalWorkSteps(1000); // Estimate based on scene complexity// Populate world with extracted data
bool populateResult = InputExtraction.PopulateWorld(bakeInput, progress, context, world);if (!populateResult)
{
    Debug.LogError("Failed to populate world with scene data");
    return;
}// World is now ready for integration operations
var integrator = new RadeonRaysProbeIntegrator();
integrator.Prepare(context, world, probePositions, 0.1f, 2);// Proceed with lighting calculations
var result = integrator.IntegrateDirectRadiance(context, 0, probeCount, 1024, false, outputBuffer);
```


            
