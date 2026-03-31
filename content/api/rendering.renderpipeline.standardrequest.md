This version of Unity is unsupported.



# StandardRequest





class in
          UnityEngine.Rendering



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Standard request type for [RenderPipeline.SubmitRenderRequest](Rendering.RenderPipeline.SubmitRenderRequest.html).





Default render request type. Renders the active render pipeline into the given destination and specified face, mip and/or slice.

SRP Compatibility:



          - URP: Renders a full URP camera stack. Only works on base cameras. To render a single camera in a stack, use UniversalRenderPipeline.SingleCameraRequest.

          - HDRP: Renders an HDRP camera without [Arbitrary Output Variables](https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@latest/index.html?subfolder=/manual/AOVs.html) (AOVs).





Refer to [Render requests](https://docs.unity3d.com/Packages/com.unity.render-pipelines.core@latest/index.html?subfolder=/manual/User-Render-Requests.html) for more information about render requests in scriptable render pipelines (SRPs).

Additional resources: [RenderPipeline.SubmitRenderRequest](Rendering.RenderPipeline.SubmitRenderRequest.html), [RenderPipeline.SupportsRenderRequest](Rendering.RenderPipeline.SupportsRenderRequest.html).





### Properties



| Property | Description |
| --- | --- |
| destination | RenderTexture to store the rendering result of the request. |
| face | Target Cubemap face to store the rendering result. |
| mipLevel | Target mipLevel to store the rendering output. |
| slice | Target slice to store the rendering output. |


            
