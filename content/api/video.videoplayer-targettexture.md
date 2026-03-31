This version of Unity is unsupported.



# [VideoPlayer](Video.VideoPlayer.html).targetTexture




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












                    public [RenderTexture](RenderTexture.html) targetTexture;






### Description



[RenderTexture](RenderTexture.html) to draw to when [VideoPlayer.renderMode](Video.VideoPlayer-renderMode.html) is set to [VideoRenderMode.RenderTexture](Video.VideoRenderMode.RenderTexture.html).





If the [RenderTexture](RenderTexture.html) is of [TextureDimension.Tex2D](Rendering.TextureDimension.Tex2D.html) the video frames will be drawn directly into this target. For optimal performance, [RenderTexture.width](RenderTexture-width.html) and [RenderTexture.height](RenderTexture-height.html) should match those of the video media exactly.

If the [RenderTexture](RenderTexture.html) is of [TextureDimension.Cube](Rendering.TextureDimension.Cube.html) the video frames will be interpreted as a cubemap in one of the 4 supported layouts (horizontal or vertical orientation of a cross or strip layout) based on video aspect ratio. The cubemap faces of the video frame are drawn to the 6 faces of the [RenderTexture](RenderTexture.html). For a one-to-one pixel mapping, [RenderTexture.width](RenderTexture-width.html) and [RenderTexture.height](RenderTexture-height.html) should match the size of the individual faces contained within the video media's cubemap (eg. for a 2048x1536 horizontal cross cubemap video, the [RenderTexture](RenderTexture.html) cube size should be set to 512x512).


            
