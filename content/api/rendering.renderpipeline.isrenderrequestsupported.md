This version of Unity is unsupported.



# [RenderPipeline](Rendering.RenderPipeline.html).IsRenderRequestSupported




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

protected bool IsRenderRequestSupported([Camera](Camera.html) camera,
RequestData data);






### Parameters



| Parameter | Description |
| --- | --- |
| camera | The camera to verify if it supports this render request. |
| data | The render request to verify if the render pipeline supports it. |





### Returns



**bool**

          `true` if the combination of the camera and the render pipeline supports the `RequestData` type.





### Description



Implement this method in a custom Scriptable Render Pipeline (SRP) to specify if a particular combination of camera and render request is supported.





In a custom Scriptable Render Pipeline (SRP), you need to implement this method to specify supported `RequestData` types. [RenderPipeline.SupportsRenderRequest](Rendering.RenderPipeline.SupportsRenderRequest.html) calls this method.

See also: [RenderPipeline.SubmitRenderRequest](Rendering.RenderPipeline.SubmitRenderRequest.html), [StandardRequest](Rendering.RenderPipeline.StandardRequest.html).


            
