This version of Unity is unsupported.



# [RadeonRaysContext](LightTransport.RadeonRaysContext.html).Wait




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

public bool Wait([LightTransport.EventID](LightTransport.EventID.html) id);






### Parameters



| Parameter | Description |
| --- | --- |
| id | ID of the event. |





### Returns



**bool**
        Returns true of the event completed successfully.





### Description



Wait for an asynchronous event.





This is a blocking method which stalls the current CPU thread until the operation represented by the EventID is complete. Adding a stall can have a significant performance impact during regular execution. To avoid stalls, call [IDeviceContext.Wait](LightTransport.IDeviceContext.Wait.html) at the end of your sequence of operations.


              


```
using Unity.Collections;
using UnityEngine;
using UnityEngine.LightTransport;IDeviceContext ctx = new RadeonRaysContext();
ctx.Initialize();
uint length = 8;
var input = new NativeArray<byte>((int)length, Allocator.Persistent);
for (int i = 0; i < length; ++i)
    input[i] = (byte)i;
var output = new NativeArray<byte>((int)length, Allocator.Persistent);
BufferID id = ctx.CreateBuffer(length, 1);
var writeEvent = ctx.CreateEvent();
ctx.WriteBuffer(id.Slice<byte>(), input, writeEvent);
var readEvent = ctx.CreateEvent();
ctx.ReadBuffer(id.Slice<byte>(), output, readEvent);
bool flushOk = ctx.Flush();
Debug.Assert(flushOk);
bool eventOk = ctx.Wait(writeEvent);
Debug.Assert(eventOk);// The event has completed.input.Dispose();
Assert.IsTrue(ctx.IsCompleted(readEvent));
ctx.DestroyEvent(readEvent);
ctx.DestroyEvent(writeEvent);
ctx.DestroyBuffer(id);
for (int i = 0; i < length; ++i)
    Assert.AreEqual((byte)i, output[i]);
output.Dispose();
ctx.Dispose();
```





How to use Wait.


            
