This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).IssuePluginCustomTextureUpdateV2




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

public void IssuePluginCustomTextureUpdateV2(IntPtr callback,
[Texture](Texture.html) targetTexture,
uint userData);






### Parameters



| Parameter | Description |
| --- | --- |
| callback | Native code callback to queue for Unity's renderer to invoke. |
| targetTexture | Texture resource to be updated. |
| userData | User data to send to the native plugin. |





### Description



Send a texture update event to a native code plugin.


            
