This version of Unity is unsupported.



# [Camera](Camera.html).targetTexture




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




                [Switch to Manual](../Manual/class-Camera.html)







                    public [RenderTexture](RenderTexture.html) targetTexture;






### Description



Destination render texture.





Usually cameras render directly to screen, but for some effects it is useful to make
a camera render into a texture. This is done by creating a [RenderTexture](RenderTexture.html) object
and setting it as [targetTexture](Camera-targetTexture.html) on the camera. The camera will then render into
that texture.

When targetTexture is `null`, camera renders to screen.

When rendering into a texture, the camera always renders into the whole texture; effectively
[rect](Camera-rect.html) and [pixelRect](Camera-pixelRect.html) are ignored.

It is also possible to make camera render into separate [RenderBuffers](RenderBuffer.html), or into
multiple textures at once, using [SetTargetBuffers](Camera.SetTargetBuffers.html) function.

Additional resources: [RenderTexture](RenderTexture.html), [SetTargetBuffers](Camera.SetTargetBuffers.html).


            
