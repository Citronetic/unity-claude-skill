This version of Unity is unsupported.



# [Material](Material.html).rawRenderQueue




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




                [Switch to Manual](../Manual/class-Material.html)







                    public int rawRenderQueue;






### Description



Raw render queue of this material.





This property returns the render queue override value of this material. The value returned is -1 if no override has been specified (i.e. the actual renderQueue value used for rendering will be [Shader.renderQueue](Shader-renderQueue.html)), or a custom value in [0..5000] range if set.

For purposes of getting the actual render queue value used for rendering, refer to [Material.renderQueue](Material-renderQueue.html).

Additional resources: [Material.renderQueue](Material-renderQueue.html),  [Shader.renderQueue](Shader-renderQueue.html), [RenderQueue](Rendering.RenderQueue.html) enum, [subshader tags](../Manual/SL-SubShaderTags.html).


            
