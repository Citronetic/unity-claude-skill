This version of Unity is unsupported.



# EditorGraphicsSettings





class in
          UnityEditor.Rendering


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



Editor-specific script interface for [Graphics Settings](../Manual/class-GraphicsSettings.html).





### Static Properties



| Property | Description |
| --- | --- |
| albedoSwatches | Returns an array of AlbedoSwatchInfo. |
| batchRendererGroupShaderStrippingMode | The current mode the BatchRendererGroup stripping is set to. |





### Static Methods



| Method | Description |
| --- | --- |
| GetRenderPipelineGlobalSettingsAsset | Gets the RenderPipelineGlobalSettings asset registered for the given RenderPipeline asset. |
| GetRenderPipelineSettingsFromInterface | Get all settings for the currently active pipeline that implement TSettingsInterfaceType . |
| GetSupportedRenderPipelineGraphicsSettingsTypesForPipeline | Retrieves the IRenderPipelineGraphicsSettings available for the given RenderPipelineAsset. |
| GetTierSettings | Returns TierSettings for a given build target and graphics tier. |
| PopulateRenderPipelineGraphicsSettings | Fills the settingsList with all the available IRenderPipelineGraphicsSettings that are supported for the RenderPipelineGlobalSettings asset. |
| SetRenderPipelineGlobalSettingsAsset | The method sets the association between the given RenderPipeline asset and the RenderPipelineGlobalSettings asset. |
| SetTierSettings | Set the TierSettings for a given build target and graphics tier. |
| TryGetFirstRenderPipelineSettingsFromInterface | Get the first settings for the currently active pipeline that implements TSettingsInterfaceType . |
| TryGetRenderPipelineSettingsForPipeline | Retrieves the settings object of type TSettings for the pipeline of type TPipeline if it is registered. |
| TryGetRenderPipelineSettingsFromInterface | Retrieves the array of the settings objects of type TSettingsInterfaceType for the active Render Pipeline if they are registered. |
| TryGetRenderPipelineSettingsFromInterfaceForPipeline | Retrieves the array of the settings objects of type TSettingsInterfaceType for the pipeline of type TPipeline if they are registered. |


            
