This version of Unity is unsupported.



# IDeviceContext





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



Provides an abstraction layer for memory management, synchronization, and compute operations across different devices.





The IDeviceContext interface abstracts memory, synchronization, and compute operations for different compute devices such as CPU and GPU. It enables implementation-agnostic code while providing access to device-specific optimizations.

Unity provides concrete implementations of this interface including:
- UnityEngine.LightTransport.RadeonRaysContext for GPU-accelerated operations using OpenCL 1.2.

The interface manages buffer allocation, asynchronous operations through events, and data transfer between host and device memory.


              


```
// Create and initialize a device context
using var context = new RadeonRaysContext();
bool initialized = context.Initialize();
Assert.IsTrue(initialized, "Failed to initialize context");// Create a buffer and perform read/write operations
BufferID bufferId = context.CreateBuffer(1024, sizeof(int));
var bufferSlice = new BufferSlice<int>(bufferId, 0);// Write data asynchronously
using var inputData = new NativeArray<int>(1024, Allocator.Persistent);
for (int i = 0; i < inputData.Length; i++)
    inputData[i] = i;var writeEvent = context.CreateEvent();
context.WriteBuffer(bufferSlice, inputData, writeEvent);// Read data back
using var outputData = new NativeArray<int>(1024, Allocator.Persistent);
var readEvent = context.CreateEvent();
context.ReadBuffer(bufferSlice, outputData, readEvent);// Flush and wait for completion
context.Flush();
context.Wait(readEvent);// Cleanup
context.DestroyEvent(writeEvent);
context.DestroyEvent(readEvent);
context.DestroyBuffer(bufferId);
```





### Public Methods



| Method | Description |
| --- | --- |
| CreateBuffer | Allocates a new buffer on the device with the specified element count and stride. |
| CreateEvent | Creates a synchronization event for tracking asynchronous operations. |
| DestroyBuffer | Destroy the buffer with the given ID. |
| DestroyEvent | Destroy the event with the given ID. You should call this to free temporary resources associated with an event. Attempting to use the event after it has been destroyed, for example using IDeviceContext.Wait or IDeviceContext.IsCompleted will result in undefined behavior. |
| Flush | Initiates execution of all enqueued operations on the device. |
| Initialize | Initialize. |
| IsCompleted | Returns true if the asynchronous operation completed. |
| ReadBuffer | Asynchronously copies data from a device buffer to host memory. |
| Wait | Wait for an asynchronous event. |
| WriteBuffer | Asynchronously copies data from host memory to a device buffer. |


            
