This version of Unity is unsupported.



# [ScriptableRenderContext](Rendering.ScriptableRenderContext.html).CreateRendererList




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

public [Rendering.RendererList](Rendering.RendererList.html) CreateRendererList([Rendering.RendererUtils.RendererListDesc](Rendering.RendererUtils.RendererListDesc.html) desc);






## Declaration

public [Rendering.RendererList](Rendering.RendererList.html) CreateRendererList(ref [Rendering.RendererListParams](Rendering.RendererListParams.html) param);






### Parameters



| Parameter | Description |
| --- | --- |
| desc | A high level descriptor that represents the set of GameObjects the RendererList contains. |
| param | The parameters used to derive the set of GameObjects the RendererList contains. |





### Returns



**RendererList**
        Returns a new RendererList based on the descriptor or parameters you pass in.





### Description



Creates a new renderers [RendererList](Rendering.RendererList.html).





A [RendererList](Rendering.RendererList.html) represents a set of visible GameObjects. To draw the GameObjects in a RendererList, add the [CommandBuffer.DrawRendererList](Rendering.CommandBuffer.DrawRendererList.html) command to a [CommandBuffer](Rendering.CommandBuffer.html).


            
