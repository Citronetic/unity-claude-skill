This version of Unity is unsupported.



# [GraphicsSettings](Rendering.GraphicsSettings.html).TryGetRenderPipelineSettings




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

public static bool TryGetRenderPipelineSettings(out T settings);






### Parameters



| Parameter | Description |
| --- | --- |
| setting | The found IRenderPipelineGraphicsSettings. Null if not found. |





### Returns



**bool**
        True if the [IRenderPipelineGraphicsSettings](Rendering.IRenderPipelineGraphicsSettings.html) is currently available and registered for the given pipeline.





### Description



Gets a [IRenderPipelineGraphicsSettings](Rendering.IRenderPipelineGraphicsSettings.html) from the [GraphicsSettings](Rendering.GraphicsSettings.html) and returns if the setting is found.


            
