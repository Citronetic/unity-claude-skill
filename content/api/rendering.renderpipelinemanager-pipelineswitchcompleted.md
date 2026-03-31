This version of Unity is unsupported.



# [RenderPipelineManager](Rendering.RenderPipelineManager.html).pipelineSwitchCompleted




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












                    public static bool pipelineSwitchCompleted;






### Description



Indicate when Render Pipeline switch is in progress.





The value is `false` if the render pipeline is in the process of being switched. The value is `true` if the switch has completed and the render pipeline is ready for use.

Unity doesn't switch the render pipeline immediately when you set [GraphicsSettings.currentRenderPipeline](Rendering.GraphicsSettings-currentRenderPipeline.html) or [QualitySettings.renderPipeline](QualitySettings-renderPipeline.html). Unity only initializes a new [RenderPipeline](Rendering.RenderPipeline.html) instance the first time any [Camera](Camera.html) renders after you set a new [RenderPipelineAsset](Rendering.RenderPipelineAsset.html). You can
use this property to check if this has happened and the switch has finished.

You can also subscribe to the [RenderPipelineManager.activeRenderPipelineAssetChanged](Rendering.RenderPipelineManager-activeRenderPipelineAssetChanged.html) and [RenderPipelineManager.activeRenderPipelineTypeChanged](Rendering.RenderPipelineManager-activeRenderPipelineTypeChanged.html) callbacks on the [RenderPipelineManager](Rendering.RenderPipelineManager.html) if you want to receive a callback instead of using a property.


            
