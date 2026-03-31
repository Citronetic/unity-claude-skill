This version of Unity is unsupported.



# EventID





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



Unique identifier for tracking asynchronous operations executing on a device context.





The EventID is used to track the completion status of asynchronous operations such as buffer reads and writes. Each EventID represents a unique operation and provides a mechanism to query completion status or wait for operation completion.

Key characteristics of EventID:



          - Single-use: Each EventID can only be used for one operation.

          - Non-reusable: After being passed to an operation, it cannot be reused.

          - Must be destroyed: Use [IDeviceContext.DestroyEvent](LightTransport.IDeviceContext.DestroyEvent.html) to prevent resource leaks.

          - Thread-safe: Can be queried from different threads.





EventIDs are commonly used with:



          - [IDeviceContext.ReadBuffer](LightTransport.IDeviceContext.ReadBuffer.html) and [IDeviceContext.WriteBuffer](LightTransport.IDeviceContext.WriteBuffer.html) operations.

          - [IDeviceContext.Wait](LightTransport.IDeviceContext.Wait.html) for blocking until completion.

          - [IDeviceContext.IsCompleted](LightTransport.IDeviceContext.IsCompleted.html) for non-blocking status checks.






              


```
// Create events to track multiple async operations
var writeEvent = context.CreateEvent();
var readEvent = context.CreateEvent();// Start async write operation
context.WriteBuffer(bufferSlice, inputData, writeEvent);// Start async read operation (depends on write completing)
context.ReadBuffer(bufferSlice, outputData, readEvent);// Submit all operations for execution
context.Flush();// Wait for write to complete before proceeding
bool writeSuccess = context.Wait(writeEvent);
Assert.IsTrue(writeSuccess);// Check if read completed without blocking
if (context.IsCompleted(readEvent))
{
    Debug.Log("Read operation completed");
}
else
{
    // Wait for read to complete
    bool readSuccess = context.Wait(readEvent);
    Assert.IsTrue(readSuccess);
}// Clean up events.
context.DestroyEvent(writeEvent);
context.DestroyEvent(readEvent);
```





### Properties



| Property | Description |
| --- | --- |
| Value | The underlying event identifier value. |





### Constructors



| Constructor | Description |
| --- | --- |
| EventID | Construct a new EventID object. |


            
