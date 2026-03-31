This version of Unity is unsupported.



# [IDeviceContext](LightTransport.IDeviceContext.html).CreateEvent




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

public [LightTransport.EventID](LightTransport.EventID.html) CreateEvent();






### Returns



**EventID**
        Unique identifier for the newly created event.





### Description



Creates a synchronization event for tracking asynchronous operations.





Events provide a mechanism to track the completion status of asynchronous operations such as ReadBuffer and WriteBuffer. Each event can be used only once. After being passed to a read or write operation, it cannot be reused.

Use Wait to block until an event completes, or IsCompleted to check completion status without blocking.

**Important:** Events are single-use and must be destroyed with DestroyEvent after use to prevent resource leaks.


              


```
// Create an event to track a write operation
var writeEvent = context.CreateEvent();
context.WriteBuffer(bufferSlice, inputData, writeEvent);// Check if the operation completed
if (context.IsCompleted(writeEvent))
{
    Console.WriteLine("Write operation completed");
    context.DestroyEvent(writeEvent);
}
```


            
