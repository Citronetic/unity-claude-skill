This version of Unity is unsupported.


                  **Method group is Obsolete**





# [RenderPipeline](Rendering.RenderPipeline.html).EndFrameRendering




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













                        **Obsolete**
                        EndFrameRendering is deprecated. Use EndContextRendering instead. #from 6000.1.




## Declaration

protected static void EndFrameRendering([Rendering.ScriptableRenderContext](Rendering.ScriptableRenderContext.html) context,
Camera[] cameras);






### Description



Calls the [RenderPipelineManager.endFrameRendering](Rendering.RenderPipelineManager-endFrameRendering.html) delegate.





This method is replaced by [RenderPipeline.EndContextRendering](Rendering.RenderPipeline.EndContextRendering.html). It is supported and documented for backwards compatibility only.

If you are writing a custom Scriptable Render Pipeline, you can call this method at the end of [RenderPipeline.Render](Rendering.RenderPipeline.Render.html) to implement functionality using the [RenderPipelineManager.endFrameRendering](Rendering.RenderPipelineManager-endFrameRendering.html) delegate.

Using [RenderPipelineManager.endFrameRendering]] causes heap allocations. Using [RenderPipeline.EndContextRendering](Rendering.RenderPipeline.EndContextRendering.html) and the [RenderPipelineManager.endContextRendering](Rendering.RenderPipelineManager-endContextRendering.html) delegate provide the same functionality, but without heap allocations. You should therefore use [RenderPipeline.EndContextRendering](Rendering.RenderPipeline.EndContextRendering.html) and the [RenderPipelineManager.endContextRendering](Rendering.RenderPipelineManager-endContextRendering.html) delegate instead.

Additional resources: [RenderPipelineManager.endFrameRendering](Rendering.RenderPipelineManager-endFrameRendering.html), RenderPipeline.BeginFrameRendering, [RenderPipelineManager.beginFrameRendering](Rendering.RenderPipelineManager-beginFrameRendering.html), [Unity Manual: Scriptable Render Pipeline](../Manual/ScriptableRenderPipeline.html)


            
