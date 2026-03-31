This version of Unity is unsupported.



# GraphicsFence





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



Used to manage synchronisation between tasks on async compute queues and the graphics queue.





Not all platforms support graphics fences. See [SystemInfo.supportsGraphicsFence](SystemInfo-supportsGraphicsFence.html).

A [GraphicsFence](Rendering.GraphicsFence.html) represents a point during GPU processing after a specific compute shader dispatch or draw call has completed. It can be used to achieve synchronisation between tasks running on the async compute queues or the graphics queue by having one or more queues wait until a given fence has passed. This is an important consideration when working with async compute because the various tasks running at the same time on the graphics queue and the async compute queues are key to improving GPU performance.

You don't need to use a graphics fence to synchronise a GPU task writing to a resource and another GPU task reading the resource. Unity handles these resource dependencies automatically.

You must create a graphics fence using [Graphics.CreateGraphicsFence](Graphics.CreateGraphicsFence.html) or [CommandBuffer.CreateGraphicsFence](Rendering.CommandBuffer.CreateGraphicsFence.html), otherwise Unity raises an exception.

It's possible to create circular dependencies that deadlock the GPU. Unity detects circular dependencies in the Editor, and raises exceptions if any dependencies exist after calls to the following:



          - [Graphics.CreateGraphicsFence](Graphics.CreateGraphicsFence.html)

          - [Graphics.ExecuteCommandBuffer](Graphics.ExecuteCommandBuffer.html)

          - [Graphics.ExecuteCommandBufferAsync](Graphics.ExecuteCommandBufferAsync.html)

          - [ScriptableRenderContext.ExecuteCommandBuffer](Rendering.ScriptableRenderContext.ExecuteCommandBuffer.html)

          - [ScriptableRenderContext.ExecuteCommandBufferAsync](Rendering.ScriptableRenderContext.ExecuteCommandBufferAsync.html)





Additional resources: [CommandBuffer.WaitOnAsyncGraphicsFence](Rendering.CommandBuffer.WaitOnAsyncGraphicsFence.html), [Graphics.ExecuteCommandBuffer](Graphics.ExecuteCommandBuffer.html), [Graphics.ExecuteCommandBufferAsync](Graphics.ExecuteCommandBufferAsync.html), [ScriptableRenderContext.ExecuteCommandBuffer](Rendering.ScriptableRenderContext.ExecuteCommandBuffer.html), [ScriptableRenderContext.ExecuteCommandBufferAsync](Rendering.ScriptableRenderContext.ExecuteCommandBufferAsync.html).





### Properties



| Property | Description |
| --- | --- |
| passed | true if GPU execution has passed the processing point where you inserted the GraphicsFence, otherwise false. |


            
