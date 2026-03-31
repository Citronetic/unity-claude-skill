This version of Unity is unsupported.



# [RenderPipeline](Rendering.RenderPipeline.html).SupportsRenderRequest




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

public static bool SupportsRenderRequest([Camera](Camera.html) camera,
RequestData data);






### Parameters



| Parameter | Description |
| --- | --- |
| camera | The camera to verify if it supports this render request. |
| data | The render request to verify if the render pipeline supports it. |





### Returns



**bool**

          `true` if the combination of the camera and render pipeline supports the `RequestData` type.





### Description



Checks if the render pipeline supports the `RequestData` type with the camera.





Call this method before [RenderPipeline.SubmitRenderRequest](Rendering.RenderPipeline.SubmitRenderRequest.html) to verify if the render pipeline supports the `RequestData` render request. By default `SupportsRenderRequest` returns `false` unless the render pipeline implements [RenderPipeline.IsRenderRequestSupported](Rendering.RenderPipeline.IsRenderRequestSupported.html).

For an example that uses `SupportsRenderRequest`, refer to [RenderPipeline.SubmitRenderRequest](Rendering.RenderPipeline.SubmitRenderRequest.html).


            
