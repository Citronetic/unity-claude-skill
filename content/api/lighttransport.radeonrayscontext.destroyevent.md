This version of Unity is unsupported.



# [RadeonRaysContext](LightTransport.RadeonRaysContext.html).DestroyEvent




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

public void DestroyEvent([LightTransport.EventID](LightTransport.EventID.html) id);






### Parameters



| Parameter | Description |
| --- | --- |
| id | ID of the event to destroy. |





### Description



Destroy the event with the given ID. You should call this to free temporary resources associated with an event. Attempting to use the event after it has been destroyed, for example using [IDeviceContext.Wait](LightTransport.IDeviceContext.Wait.html) or [IDeviceContext.IsCompleted](LightTransport.IDeviceContext.IsCompleted.html) will result in undefined behavior.


              


```
using Unity.Collections;
using UnityEngine;
using UnityEngine.LightTransport;// Create context.
using var ctx = new RadeonRaysContext();
ctx.Initialize();// Create buffer.
BufferID buffer = ctx.CreateBuffer(sizeof(int) * 8, sizeof(int));
using var array = new NativeArray<int>(8, Allocator.Persistent, NativeArrayOptions.ClearMemory);// Write to buffer and wait for completion.
EventID evt = ctx.CreateEvent();
ctx.WriteBuffer(buffer.Slice<int>(), array, evt);
var flushOk = ctx.Flush();
Assert.IsTrue(flushOk);
var waitOk = ctx.Wait(evt);
Assert.IsTrue(waitOk);// Cleanup. After this point, we may no longer use `evt`.
ctx.DestroyEvent(evt);
ctx.DestroyBuffer(buffer);
```





Proper usage of DestroyEvent.


            
