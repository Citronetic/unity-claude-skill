This version of Unity is unsupported.



# [RenderPipelineManager](Rendering.RenderPipelineManager.html).currentPipeline




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












                    public static [Rendering.RenderPipeline](Rendering.RenderPipeline.html) currentPipeline;






### Description



Returns the active [RenderPipeline](Rendering.RenderPipeline.html).





The active render pipeline is the render pipeline that Unity is currently using to render your application and parts of the Editor such as the Scene view and Game view. The active render pipeline can be a default value, or you can set override values for different quality levels.

Unity updates this property only after rendering at least one frame with the active render pipeline, which can take up to four calls to [Update](MonoBehaviour.Update.html). This means that this property is `null` on startup, and does not immediately reflect changes to the active render pipeline.

You can access the [RenderPipelineAsset](Rendering.RenderPipelineAsset.html) that defines the active render pipeline with [GraphicsSettings.currentRenderPipeline](Rendering.GraphicsSettings-currentRenderPipeline.html). `GraphicsSettings.currentRenderPipeline` is always up to date, which means that you can query it on startup or immediately after changing the active render pipeline.

Additional resources: [How to get, set, and configure the active render pipeline](../Manual/srp-setting-render-pipeline-asset.html), [GraphicsSettings.currentRenderPipeline](Rendering.GraphicsSettings-currentRenderPipeline.html), [GraphicsSettings.defaultRenderPipeline](Rendering.GraphicsSettings-defaultRenderPipeline.html), [QualitySettings.renderPipeline](QualitySettings-renderPipeline.html), [RenderPipelineManager.activeRenderPipelineTypeChanged](Rendering.RenderPipelineManager-activeRenderPipelineTypeChanged.html).


            
