This version of Unity is unsupported.



# [IDeviceContext](LightTransport.IDeviceContext.html).Flush




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

public bool Flush();






### Returns



**bool**
        True if the flush operation was successful.





### Description



Initiates execution of all enqueued operations on the device.





Forces the device to begin processing all previously enqueued operations such as buffer reads, writes, and compute operations. Some implementations may flush automatically, while others require explicit flushing.

This method returns immediately after submitting the operations to the device. Non-blocking operations that produce an event can be followed by a call to [IDeviceContext.Wait](LightTransport.IDeviceContext.Wait.html), to perform a blocking wait while the event completes. Use [IDeviceContext.IsCompleted](LightTransport.IDeviceContext.IsCompleted.html) to determine if an event produced by an asynchronous operation has completed.

**Performance Note:** Call Flush once after enqueuing multiple operations rather than after each individual operation for better performance.


              


```
// Enqueue multiple operations
context.WriteBuffer(slice1, data1, event1);
context.WriteBuffer(slice2, data2, event2);
context.ReadBuffer(slice3, data3, event3);// Submit all operations for execution
bool flushSuccess = context.Flush();
Assert.IsTrue(flushSuccess);// Wait for all operations to complete
context.Wait(event1);
context.Wait(event2);
context.Wait(event3);
```


            
