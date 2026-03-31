This version of Unity is unsupported.



# [ScriptableRenderContext](Rendering.ScriptableRenderContext.html).CreateUIOverlayRendererList




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

public [Rendering.RendererList](Rendering.RendererList.html) CreateUIOverlayRendererList([Camera](Camera.html) camera);






## Declaration

public [Rendering.RendererList](Rendering.RendererList.html) CreateUIOverlayRendererList([Camera](Camera.html) camera,
[Rendering.UISubset](Rendering.UISubset.html) uiSubset);






### Parameters



| Parameter | Description |
| --- | --- |
| camera | The camera that is used for rendering the UIOverlay. |
| uiSubset | The UISubset to be rendered. |





### Returns



**RendererList**
        Returns a new RendererList based on the settings you pass in.





### Description



Creates a new UIOverlay [RendererList](Rendering.RendererList.html).





A [RendererList](Rendering.RendererList.html) represents a set of draw commands. To draw the UIOverlay in a RendererList, add the [CommandBuffer.DrawRendererList](Rendering.CommandBuffer.DrawRendererList.html) command to a [CommandBuffer](Rendering.CommandBuffer.html).


            
