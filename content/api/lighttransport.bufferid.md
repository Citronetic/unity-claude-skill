This version of Unity is unsupported.



# BufferID





struct in
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



Unique identifier to a memory buffer in device.





BufferID serves as an opaque handle to memory buffers allocated through [IDeviceContext.CreateBuffer](LightTransport.IDeviceContext.CreateBuffer.html). The buffer can reside in CPU memory, GPU memory, or unified memory, depending on the implementation.

                The BufferID abstracts the underlying memory management details and provides a unified interface for:



          - Cross-platform memory allocation.

          - Memory lifetime management.

          - Type-safe buffer operations through BufferSlice.





BufferIDs must be explicitly destroyed using [IDeviceContext.DestroyBuffer](LightTransport.IDeviceContext.DestroyBuffer.html) to prevent memory leaks.


              


```
// Create buffers for different data types
BufferID vertexBuffer = context.CreateBuffer(1000, 12); // 1000 Vector3s
BufferID resultBuffer = context.CreateBuffer(64, 108);  // 64 SphericalHarmonicsL2// Create typed slices for safe operations
var vertices = new BufferSlice<Vector3>(vertexBuffer, 0);
var results = new BufferSlice<SphericalHarmonicsL2>(resultBuffer, 0);// Use buffers with integrator operations
integrator.Prepare(context, world, vertices, 0.1f, 2);
var result = integrator.IntegrateDirectRadiance(
    context, 0, 64, 1024, false, results);// Cleanup - important to prevent memory leaks
context.DestroyBuffer(vertexBuffer);
context.DestroyBuffer(resultBuffer);
```





### Properties



| Property | Description |
| --- | --- |
| Value | The underlying buffer identifier value. |





### Constructors



| Constructor | Description |
| --- | --- |
| BufferID | Create a new BufferID. |





### Public Methods



| Method | Description |
| --- | --- |
| Slice | Constructs a typed slice from the BufferID. |


            
