This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [DefaultFormat](Experimental.Rendering.DefaultFormat.html).Shadow




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



Represents the default platform specific shadow format.





To create a [RenderTexture](RenderTexture.html) that can be used as a shadow map, you also need to set the [ShadowSamplingMode](Rendering.ShadowSamplingMode.html) using [RenderTextureDescriptor.shadowSamplingMode](RenderTextureDescriptor-shadowSamplingMode.html).
Unity does this automatically if you call the RenderTexture constructor using the `DefaultFormat.Shadow` format.


            
