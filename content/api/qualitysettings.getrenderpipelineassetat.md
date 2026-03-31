This version of Unity is unsupported.



# [QualitySettings](QualitySettings.html).GetRenderPipelineAssetAt




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




                [Switch to Manual](../Manual/class-QualitySettings.html)










## Declaration

public static [Rendering.RenderPipelineAsset](Rendering.RenderPipelineAsset.html) GetRenderPipelineAssetAt(int index);






### Parameters



| Parameter | Description |
| --- | --- |
| index | Index of the quality level. |





### Returns



**RenderPipelineAsset**
        Returns `null` if the quality level does not exist, or if no asset is assigned to that quality level. Otherwise, returns the [RenderPipelineAsset](Rendering.RenderPipelineAsset.html) that defines the override render pipeline for the quality level.





### Description



Provides a reference to the [RenderPipelineAsset](Rendering.RenderPipelineAsset.html) that defines the override render pipeline for a given quality level.





Unity uses the default render pipeline defined in GraphicsSettings.renderPipeline and per quality level overrides to determine the active render pipeline for the current quality level. For more information, see [GraphicsSettings.currentRenderPipeline](Rendering.GraphicsSettings-currentRenderPipeline.html).

[QualitySettings.renderPipeline](QualitySettings-renderPipeline.html)] returns the same information, but only for the current quality level.

Additional resources: [How to get, set, and configure the active render pipeline](../Manual/srp-setting-render-pipeline-asset.html), [GraphicsSettings.currentRenderPipeline](Rendering.GraphicsSettings-currentRenderPipeline.html), [GraphicsSettings.defaultRenderPipeline](Rendering.GraphicsSettings-defaultRenderPipeline.html), [QualitySettings.renderPipeline](QualitySettings-renderPipeline.html)], [GraphicsSettings.allConfiguredRenderPipelines](Rendering.GraphicsSettings-allConfiguredRenderPipelines.html).


            
