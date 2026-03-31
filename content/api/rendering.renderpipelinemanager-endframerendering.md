This version of Unity is unsupported.



# [RenderPipelineManager](Rendering.RenderPipelineManager.html).endFrameRendering




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



Delegate that you can use to invoke custom code at the end of [RenderPipeline.Render](Rendering.RenderPipeline.Render.html).





This delegate is replaced by [RenderPipelineManager.endContextRendering](Rendering.RenderPipelineManager-endContextRendering.html). It is supported and documented for backwards compatibility only.

When Unity calls RenderPipeline.EndFrameRendering, it executes the methods in this delegate's invocation list. If you are writing a custom Scriptable Render Pipeline, you can call this method at the start of [RenderPipeline.Render](Rendering.RenderPipeline.Render.html).

Using this delegate causes heap allocations. Using [RenderPipeline.EndContextRendering](Rendering.RenderPipeline.EndContextRendering.html) and the [RenderPipelineManager.endContextRendering](Rendering.RenderPipelineManager-endContextRendering.html) delegate provide the same functionality, but without unnecessary heap allocations. You should use them instead.

Additional resources: RenderPipeline.EndFrameRendering, RenderPipeline.BeginFrameRendering, [RenderPipelineManager.beginFrameRendering](Rendering.RenderPipelineManager-beginFrameRendering.html), [Unity Manual: Scriptable Render Pipeline](../Manual/ScriptableRenderPipeline.html)


            
