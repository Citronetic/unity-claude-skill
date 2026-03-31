This version of Unity is unsupported.



# [IDeviceContext](LightTransport.IDeviceContext.html).WriteBuffer




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

public void WriteBuffer(BufferSlice<T> dst,
NativeArray<T> src);






## Declaration

public void WriteBuffer(BufferSlice<T> dst,
NativeArray<T> src,
[LightTransport.EventID](LightTransport.EventID.html) id);






### Parameters



| Parameter | Description |
| --- | --- |
| dst | The buffer slice specifying the destination on the device. |
| src | The source array in CPU memory. Must remain valid until the operation completes. |
| id | Optional event ID to track completion of the write operation. |





### Description



Asynchronously copies data from host memory to a device buffer.





Initiates an asynchronous transfer of data from host memory to device memory. The method returns immediately after enqueuing the operation. Use Flush to ensure the operation begins executing, then use Wait or IsCompleted with the provided event to determine when the transfer is complete.

The source [NativeArray<T0>](Unity.Collections.NativeArray_1.html) must remain allocated and unchanged until the write operation completes, as indicated by the event.

**Warning:** [EventID](LightTransport.EventID.html) instances are single-use. Do not reuse an event that has been passed to this method.


              


```
// Prepare data and write to buffer
using var inputData = new NativeArray<float>(512, Allocator.Persistent);
for (int i = 0; i < inputData.Length; i++)
    inputData[i] = i * 0.5f;var writeEvent = context.CreateEvent();
context.WriteBuffer(bufferSlice, inputData, writeEvent);
context.Flush();// Wait for write to complete before using the buffer
context.Wait(writeEvent);
context.DestroyEvent(writeEvent);
```


            
