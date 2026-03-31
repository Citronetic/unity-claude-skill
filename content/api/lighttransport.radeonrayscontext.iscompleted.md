This version of Unity is unsupported.



# [RadeonRaysContext](LightTransport.RadeonRaysContext.html).IsCompleted




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

public bool IsCompleted([LightTransport.EventID](LightTransport.EventID.html) id);






### Parameters



| Parameter | Description |
| --- | --- |
| id | ID of the event to query. |





### Returns



**bool**
        True if the asynchronous operation has completed.





### Description



Returns true if the asynchronous operation completed.





This method returns immediately and does not wait for the operation to complete. Use Flush to force the device implementation to start processing commands. Use [IDeviceContext.Wait](LightTransport.IDeviceContext.Wait.html) to busy-wait for a specific event.


              


```
using System.Threading;
using Unity.Collections;
using UnityEngine;
using UnityEngine.LightTransport;IDeviceContext ctx = new RadeonRaysContext();
ctx.Initialize();
uint length = 8;
var input = new NativeArray<byte>((int)length, Allocator.Persistent);
for (int i = 0; i < length; ++i)
{
    input[i] = (byte)i;
}
var output = new NativeArray<byte>((int)length, Allocator.Persistent);
BufferID id = ctx.CreateBuffer(length, 1);
var writeEvent = ctx.CreateEvent();
ctx.WriteBuffer(id.Slice<byte>(), input, writeEvent);
var readEvent = ctx.CreateEvent();
ctx.ReadBuffer(id.Slice<byte>(), output, readEvent);
bool flushOk = ctx.Flush();
Assert.IsTrue(flushOk);
input.Dispose();
var watchDogTimeout = Time.realtimeSinceStartup + 5.0f;
while (!ctx.IsCompleted(readEvent))
{
    Thread.Sleep(10);
    if (Time.realtimeSinceStartup > watchDogTimeout)
        Assert.IsTrue(false, "watchdog timeout");
}// The event has completed.
ctx.DestroyEvent(readEvent);
ctx.DestroyEvent(writeEvent);ctx.DestroyBuffer(id);
for (int i = 0; i < length; ++i)
    Assert.AreEqual((byte)i, output[i]);
output.Dispose();
ctx.Dispose();
```





How to check if an asynchronous operation has completed.


            
