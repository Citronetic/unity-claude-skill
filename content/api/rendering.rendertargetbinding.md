This version of Unity is unsupported.



# RenderTargetBinding





struct in
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



Describes a render target with one or more color buffers, a depth/stencil buffer and the associated load/store-actions that are applied when the render target is active.





This data structure is similiar to [RenderTargetSetup](RenderTargetSetup.html), but relies on a [RenderTargetIdentifier](Rendering.RenderTargetIdentifier.html) to ensure compatability with [CommandBuffer.SetRenderTarget](Rendering.CommandBuffer.SetRenderTarget.html).

To render to a specific mipmap level, cubemap face or depth slice the [RenderTargetIdentifier](Rendering.RenderTargetIdentifier.html) should be created accordingly.

Note: the number of load- and store-actions specified for color buffers must be equal to the number of color buffers.

Additional resources: [CommandBuffer](Rendering.CommandBuffer.html).





### Properties



| Property | Description |
| --- | --- |
| colorLoadActions | Load actions for color buffers. |
| colorRenderTargets | Color buffers to use as render targets. |
| colorStoreActions | Store actions for color buffers. |
| depthLoadAction | Load action for the depth/stencil buffer. |
| depthRenderTarget | Depth/stencil buffer to use as render target. |
| depthStoreAction | Store action for the depth/stencil buffer. |
| flags | Optional flags. |





### Constructors



| Constructor | Description |
| --- | --- |
| RenderTargetBinding | Constructs RenderTargetBinding. |


            
