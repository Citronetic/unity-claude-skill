This version of Unity is unsupported.



# AsyncGPUReadback





class in
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



Allows the asynchronous read back of GPU resources.





This class is used to copy resource data from the GPU to the CPU without any stall (GPU or CPU), but adds a few frames of latency.
Additional resources: [AsyncGPUReadbackRequest](Rendering.AsyncGPUReadbackRequest.html).

Additional resources: [SystemInfo.supportsAsyncGPUReadback](SystemInfo-supportsAsyncGPUReadback.html), [SystemInfo.supportsAsyncGPUReadback](Device.SystemInfo-supportsAsyncGPUReadback.html).





### Static Methods



| Method | Description |
| --- | --- |
| Request | Retrieves data asynchronously from a GPU resource. |
| RequestAsync | Retrieves data asynchronously from a GPU resource. |
| RequestIntoNativeArray | Retrieves data asynchronously from a GPU Texture resource. |
| RequestIntoNativeArrayAsync | Retrieves data asynchronously from a GPU Texture resource. |
| RequestIntoNativeSlice | Retrieves data asynchronously from a GPU Texture resource. |
| RequestIntoNativeSliceAsync | Retrieves data asynchronously from a GPU Texture resource. |
| WaitAllRequests | Waits until the completion of every request. |


            
