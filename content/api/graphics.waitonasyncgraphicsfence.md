This version of Unity is unsupported.



# [Graphics](Graphics.html).WaitOnAsyncGraphicsFence




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

public static void WaitOnAsyncGraphicsFence([Rendering.GraphicsFence](Rendering.GraphicsFence.html) fence);






## Declaration

public static void WaitOnAsyncGraphicsFence([Rendering.GraphicsFence](Rendering.GraphicsFence.html) fence,
[Rendering.SynchronisationStage](Rendering.SynchronisationStage.html) stage = SynchronisationStage.PixelProcessing);






### Parameters



| Parameter | Description |
| --- | --- |
| fence | The GraphicsFence the GPU waits for. The fenceType of the graphics fence must be GraphicsFenceType.AsyncQueueSynchronisation. |
| stage | Which SynchronisationStage to wait for. |





### Description



Instructs the GPU to pause processing of the queue until it passes through the [GraphicsFence](Rendering.GraphicsFence.html) fence.





This method returns immediately on the CPU. Only GPU processing is affected by the graphics fence.

You can use the `stage` parameter to wait until the start of the next item's vertex or pixel processing. On some platforms, there's a gap between the end of vertex processing and the start of pixel processing in a draw call. If the last command was a compute shader dispatch, Unity ignores `stage`.

This method only works on platforms that support fences. Use [SystemInfo.supportsGraphicsFence](SystemInfo-supportsGraphicsFence.html) to check if a platform supports fences.

It's possible to create circular dependencies with this function that deadlock the GPU. See [GraphicsFence](Rendering.GraphicsFence.html) for more information.

Additional resources: [GraphicsFence](Rendering.GraphicsFence.html), [Graphics.CreateGraphicsFence](Graphics.CreateGraphicsFence.html).


            
