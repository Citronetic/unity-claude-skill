This version of Unity is unsupported.



# [RenderTargetSetup](RenderTargetSetup.html).depthLoad




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












                    public [Rendering.RenderBufferLoadAction](Rendering.RenderBufferLoadAction.html) depthLoad;






### Description



Load Action for Depth Buffer. It will override any actions set on RenderBuffer itself.





Please note that not all platforms have load/store actions, so this setting might be ignored at runtime. Generally mobile-oriented graphics APIs (OpenGL ES, Metal) take advantage of these settings.


            
