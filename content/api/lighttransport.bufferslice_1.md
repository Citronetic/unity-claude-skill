This version of Unity is unsupported.



# BufferSlice<T0>





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



Represents a typed view into a portion of a device buffer, enabling efficient memory management and type-safe buffer operations.





Unity uses the BufferSlice struct to split one large buffer allocation into smaller buffers, each with explicit types. This provides efficient memory management by allowing multiple logical buffers to share a single physical allocation while maintaining type safety.

BufferSlice is commonly used with:



          - [IDeviceContext.ReadBuffer](LightTransport.IDeviceContext.ReadBuffer.html) and [IDeviceContext.WriteBuffer](LightTransport.IDeviceContext.WriteBuffer.html) for data transfers.

          - [IProbeIntegrator](LightTransport.IProbeIntegrator.html) methods for input/output buffer specifications.

          - Memory-efficient batching of related data structures.





The slice maintains a reference to the underlying [BufferID](LightTransport.BufferID.html) and specifies an offset measured in elements of type T.


              


```
// Create a large buffer for multiple data types
BufferID sharedBuffer = context.CreateBuffer(1000, sizeof(float));// Create different views into the same buffer
var floatSlice = new BufferSlice<float>(sharedBuffer, 0);    // Elements 0-499
var vectorSlice = new BufferSlice<Vector3>(sharedBuffer, 500); // Elements 500-998// Write data through different slices
var floatData = new NativeArray<float>(500, Allocator.Temp);
var vectorData = new NativeArray<Vector3>(166, Allocator.Temp);context.WriteBuffer(floatSlice, floatData);
context.WriteBuffer(vectorSlice, vectorData);
```





### Properties



| Property | Description |
| --- | --- |
| Id | Buffer ID. |
| Offset | The number of elements to offset, measured from the beginning of the buffer. The value must not exceed the end of the buffer allocation. |





### Constructors



| Constructor | Description |
| --- | --- |
| BufferSlice_1 | Construct a new BufferSlice struct by defining an offset from the beginning of a buffer. The buffer is defined by the BufferID. |





### Public Methods



| Method | Description |
| --- | --- |
| SafeReinterpret | Reinterpret the slice as having a different data type (type punning), performing checks to ensure the reinterpret is valid. |
| UnsafeReinterpret | Reinterpret the slice as having a different data type (type punning), but does not check if the reinterpret is valid. |


            
