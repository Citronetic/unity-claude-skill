This version of Unity is unsupported.



# [EditorGraphicsSettings](Rendering.EditorGraphicsSettings.html).GetSupportedRenderPipelineGraphicsSettingsTypesForPipeline




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

public static IEnumerable<Type> GetSupportedRenderPipelineGraphicsSettingsTypesForPipeline();






### Parameters



| Parameter | Description |
| --- | --- |
| renderPipelineAssetType | A valid RenderPipelineAsset type. |





### Returns



**IEnumerable<Type>**
        The available [IRenderPipelineGraphicsSettings](Rendering.IRenderPipelineGraphicsSettings.html) for `T`





### Description



Retrieves the [IRenderPipelineGraphicsSettings](Rendering.IRenderPipelineGraphicsSettings.html) available for the given [RenderPipelineAsset](Rendering.RenderPipelineAsset.html).





Note that it is not required that `T` is the currently active pipeline.


            
