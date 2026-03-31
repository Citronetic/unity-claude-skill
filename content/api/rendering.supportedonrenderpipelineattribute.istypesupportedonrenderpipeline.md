This version of Unity is unsupported.



# [SupportedOnRenderPipelineAttribute](Rendering.SupportedOnRenderPipelineAttribute.html).IsTypeSupportedOnRenderPipeline




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

public static bool IsTypeSupportedOnRenderPipeline(Type type,
Type renderPipelineAssetType);






### Parameters



| Parameter | Description |
| --- | --- |
| type | The type you want to check. |
| renderPipelineAssetType | RenderPipelineAsset type. |





### Returns



**bool**
        Returns `true` if the provided type is supported on the provided [RenderPipelineAsset](Rendering.RenderPipelineAsset.html) type.





### Description



Use this method to determine whether a type has the [SupportedOnRenderPipelineAttribute](Rendering.SupportedOnRenderPipelineAttribute.html) attribute and determine whether a [RenderPipelineAsset](Rendering.RenderPipelineAsset.html) type supports that attribute.


            
