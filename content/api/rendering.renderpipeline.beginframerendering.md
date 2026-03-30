This version of Unity is unsupported.


                  **Method group is Obsolete**





# [RenderPipeline](Rendering.RenderPipeline.html).BeginFrameRendering




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
                        BeginFrameRendering is deprecated. Use BeginContextRendering instead. #from 6000.1.




## Declaration

protected static void BeginFrameRendering([Rendering.ScriptableRenderContext](Rendering.ScriptableRenderContext.html) context,
Camera[] cameras);






### Description



Calls the [RenderPipelineManager.beginFrameRendering](Rendering.RenderPipelineManager-beginFrameRendering.html) delegate.





This method is replaced by [RenderPipeline.BeginContextRendering](Rendering.RenderPipeline.BeginContextRendering.html). It is supported and documented for backwards compatibility only.

If you are writing a custom Scriptable Render Pipeline, you can call this method at the start of your [RenderPipeline.Render](Rendering.RenderPipeline.Render.html) method to implement functionality using the [RenderPipelineManager.beginFrameRendering](Rendering.RenderPipelineManager-beginFrameRendering.html) delegate.

Using [RenderPipelineManager.beginFrameRendering](Rendering.RenderPipelineManager-beginFrameRendering.html) causes heap allocations. Using [RenderPipeline.BeginContextRendering](Rendering.RenderPipeline.BeginContextRendering.html) and the [RenderPipelineManager.beginContextRendering](Rendering.RenderPipelineManager-beginContextRendering.html) delegate provide the same functionality, but without heap allocations. You should therefore use [RenderPipeline.BeginContextRendering](Rendering.RenderPipeline.BeginContextRendering.html) and the [RenderPipelineManager.beginContextRendering](Rendering.RenderPipelineManager-beginContextRendering.html) delegate instead.

Additional resources: [RenderPipelineManager.beginFrameRendering](Rendering.RenderPipelineManager-beginFrameRendering.html), RenderPipeline.EndFrameRendering, [RenderPipelineManager.endFrameRendering](Rendering.RenderPipelineManager-endFrameRendering.html)


            
