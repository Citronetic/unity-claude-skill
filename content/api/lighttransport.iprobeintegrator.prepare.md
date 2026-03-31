This version of Unity is unsupported.



# [IProbeIntegrator](LightTransport.IProbeIntegrator.html).Prepare




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

public void Prepare([LightTransport.IDeviceContext](LightTransport.IDeviceContext.html) context,
[LightTransport.IWorld](LightTransport.IWorld.html) world,
BufferSlice<Vector3> positions,
float pushoff,
int bounceCount);






### Parameters



| Parameter | Description |
| --- | --- |
| context | Device context for computation and memory operations. |
| world | World object containing the scene geometry and other input data. |
| positions | Buffer slice containing the 3D positions of the light probes to be integrated. |
| pushoff | Distance to offset rays from probe positions to avoid self-intersection artifacts. |
| bounceCount | Maximum number of light bounces for indirect lighting calculations. |





### Description



Initializes the probe integrator with scene data and integration parameters.





This method must be called before any integration operations. It prepares internal data structures, compiles shaders if necessary, and sets up the integration parameters.

The preparation phase can be time-intensive for large scenes as it may involve:



          - Building acceleration structures.

          - Compiling compute shaders for the target device.

          - Preprocessing scene geometry and materials.

          - Setting up light data structures.





The pushoff parameter helps prevent ray self-intersections when probes are placed very close to surfaces.


              


```
// Create probe positions buffer
var probePositions = new NativeArray<Vector3>(numProbes, Allocator.Persistent);
// ... populate positions ...BufferID posBuffer = context.CreateBuffer((ulong)numProbes, 12);
var posSlice = new BufferSlice<Vector3>(posBuffer, 0);
context.WriteBuffer(posSlice, probePositions);
context.Flush();// Prepare integrator with 2 bounce indirect lighting
integrator.Prepare(
    context,
    world,
    posSlice,
    0.05f, // 5cm push-off to avoid self-intersection
    2      // 2 bounce indirect lighting
);// Now ready for integration operations
var result = integrator.IntegrateDirectRadiance(context, 0, numProbes, 1024, false, outputBuffer);
```


            
