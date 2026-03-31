This version of Unity is unsupported.



# AsyncGPUReadbackRequest





struct in
          UnityEngine.Rendering



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Represents an asynchronous request for a GPU resource.





Use [AsyncGPUReadback.Request](Rendering.AsyncGPUReadback.Request.html) to retrieve an asynchronous request for a GPU resource.
Pending requests are automatically updated each frame. The result is accessible only for a single frame once is successfully fulfilled and this request is then disposed of in the following frame.
Common uses for this are to query [AsyncGPUReadbackRequest.done](Rendering.AsyncGPUReadbackRequest-done.html) each frame (or within a coroutine) and then call [AsyncGPUReadbackRequest.GetData](Rendering.AsyncGPUReadbackRequest.GetData.html) if the [AsyncGPUReadbackRequest.hasError](Rendering.AsyncGPUReadbackRequest-hasError.html) is false.
You don't have to manage the request lifetime as this is managed internally. A request that has been disposed of will result in the [AsyncGPUReadbackRequest.hasError](Rendering.AsyncGPUReadbackRequest-hasError.html) property being true.
Additional resources:[AsyncGPUReadback](Rendering.AsyncGPUReadback.html).





### Properties



| Property | Description |
| --- | --- |
| depth | When reading data from a ComputeBuffer, depth is 1, otherwise, the property takes the value of the requested depth from the texture. |
| done | Checks whether the request has been processed. |
| forcePlayerLoopUpdate | In the Editor, defines whether the Player loop is updated while the GPU request is in flight. |
| hasError | This property is true if the request has encountered an error. |
| height | When reading data from a ComputeBuffer, height is 1, otherwise, the property takes the value of the requested height from the texture. |
| layerCount | Number of layers in the current request. |
| layerDataSize | The size in bytes of one layer of the readback data. |
| width | The width of the requested GPU data. |





### Public Methods



| Method | Description |
| --- | --- |
| GetData | Fetches the data of a successful request. |
| Update | Triggers an update of the request. |
| WaitForCompletion | Waits for completion of the request. |


            
