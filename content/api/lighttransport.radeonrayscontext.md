This version of Unity is unsupported.



# RadeonRaysContext





class in
          UnityEngine.LightTransport


                  Leave feedback





Implements interfaces:[IDeviceContext](LightTransport.IDeviceContext.html)




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



[RadeonRaysContext](LightTransport.RadeonRaysContext.html) implements the [IDeviceContext](LightTransport.IDeviceContext.html) interface. It uses the RadeonRays SDK for ray-triangle intersection testing and the OpenCL 1.2 API for computations.





### Constructors



| Constructor | Description |
| --- | --- |
| RadeonRaysContext | Constructor. |





### Public Methods



| Method | Description |
| --- | --- |
| CreateBuffer | Create a new buffer for a number of elements with a given stride. |
| CreateEvent | Creates a new event. |
| DestroyBuffer | Destroy the buffer with the given ID. |
| DestroyEvent | Destroy the event with the given ID. You should call this to free temporary resources associated with an event. Attempting to use the event after it has been destroyed, for example using IDeviceContext.Wait or IDeviceContext.IsCompleted will result in undefined behavior. |
| Dispose | Dispose. |
| Flush | Flush the device context. |
| Initialize | Initialize the device context. |
| IsCompleted | Returns true if the asynchronous operation completed. |
| ReadBuffer | Read contents of a buffer from the context. |
| Wait | Wait for an asynchronous event. |
| WriteBuffer | Write data into the memory buffer allocated by the context. |


            
