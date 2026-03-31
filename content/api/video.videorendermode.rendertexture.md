This version of Unity is unsupported.



# [VideoRenderMode](Video.VideoRenderMode.html).RenderTexture




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



Draw video content into a RenderTexture.





Use this setting to play your video on a 3D surface in your scene. For example, you can use this to show videos on TV/computer screens in your scene.
You can display your video on multiple objects that share the same RenderTexture. You can also use this to add post-processing effects and shaders to your video content. If you want to show the video on one object, it might be more efficient to use MaterialOverride instead.
When you use this mode, if the target RenderTexture has the same resolution as the content played by the VideoPlayer, this will enable an internal optimization that saves a texture copy, which skips unnecessary steps and improves performance.


            
