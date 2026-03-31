This version of Unity is unsupported.



# [IDeviceContext](LightTransport.IDeviceContext.html).ReadBuffer




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

public void ReadBuffer(BufferSlice<T> src,
NativeArray<T> dst);






## Declaration

public void ReadBuffer(BufferSlice<T> src,
NativeArray<T> dst,
[LightTransport.EventID](LightTransport.EventID.html) id);






### Parameters



| Parameter | Description |
| --- | --- |
| src | The buffer slice specifying the source data on the device. |
| dst | The destination array in CPU memory. Must remain valid until the operation completes. |
| id | Optional event ID to track completion of the read operation. |





### Description



Asynchronously copies data from a device buffer to host memory.





Initiates an asynchronous transfer of data from device memory to host memory. The method returns immediately after enqueuing the operation. Use Flush to ensure the operation begins executing, then use Wait or IsCompleted with the provided event to determine when the transfer is complete.

The destination [NativeArray<T0>](Unity.Collections.NativeArray_1.html) must remain allocated and unchanged until the read operation completes, as indicated by the event.

**Warning:** [EventID](LightTransport.EventID.html) instances are single-use. Do not reuse an event that has been passed to this method.


              


```
// Read data from buffer with event tracking
using var outputData = new NativeArray<int>(1024, Allocator.Persistent);
var readEvent = context.CreateEvent();
context.ReadBuffer(bufferSlice, outputData, readEvent);// Start execution and wait for completion
context.Flush();
bool success = context.Wait(readEvent);
Assert.IsTrue(success);context.DestroyEvent(readEvent);
// outputData now contains the buffer contents
```


            
