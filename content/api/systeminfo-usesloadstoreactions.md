This version of Unity is unsupported.



# [SystemInfo](SystemInfo.html).usesLoadStoreActions




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












                    public static bool usesLoadStoreActions;






### Description



True if the Graphics API takes [RenderBufferLoadAction](Rendering.RenderBufferLoadAction.html) and [RenderBufferStoreAction](Rendering.RenderBufferStoreAction.html) into account, false if otherwise.





Use this property to check if [RenderBufferLoadAction.DontCare](Rendering.RenderBufferLoadAction.DontCare.html) or [RenderBufferStoreAction.DontCare](Rendering.RenderBufferStoreAction.DontCare.html) could result in actually discarding RT contents. For example, if you render with non-fullscreen ViewPort, you do not want to discard RT contents. Note that some Unity API can use [RenderBufferLoadAction.Clear](Rendering.RenderBufferLoadAction.Clear.html) to clear a RenderTexture even if the Graphics API does not support [RenderBufferLoadAction.Clear](Rendering.RenderBufferLoadAction.Clear.html) directly. In this case, Unity issues the normal Clear call.


            
