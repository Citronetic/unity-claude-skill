This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).SetViewport




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

public void SetViewport([Rect](Rect.html) pixelRect);






### Parameters



| Parameter | Description |
| --- | --- |
| pixelRect | Viewport rectangle in pixel coordinates. |





### Description



Add a command to set the rendering viewport.





By default after render target changes the viewport is set to encompass the whole render target.
This command can be used to limit further rendering to the specified pixel rectangle.

Additional resources: [SetRenderTarget](Rendering.CommandBuffer.SetRenderTarget.html).


            
