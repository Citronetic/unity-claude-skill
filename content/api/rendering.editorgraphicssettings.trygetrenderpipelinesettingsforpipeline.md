This version of Unity is unsupported.



# [EditorGraphicsSettings](Rendering.EditorGraphicsSettings.html).TryGetRenderPipelineSettingsForPipeline




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

public static bool TryGetRenderPipelineSettingsForPipeline(out TSettings settings);






## Declaration

public static bool TryGetRenderPipelineSettingsForPipeline(Type renderPipelineType,
out TSettings settings);






### Parameters



| Parameter | Description |
| --- | --- |
| settings | The IRenderPipelineGraphicsSettings settings object if found, or null. |
| renderPipelineType | A valid RenderPipeline type. |





### Returns



**bool**
        True if settings of type `TSettings` is available for registered for pipeline of type `TPipeline`.





### Description



Retrieves the settings object of type `TSettings` for the pipeline of type `TPipeline` if it is registered.





Note that it is not required that `TPipeline` is the currently active pipeline.


            
