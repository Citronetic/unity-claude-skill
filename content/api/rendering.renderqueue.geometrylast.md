This version of Unity is unsupported.



# [RenderQueue](Rendering.RenderQueue.html).GeometryLast




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



The last render queue that is treated as opaque. This value corresponds to a render queue of 2500.





Render queues in [0, GeometryLast] range are treated as opaque objects (sorted based on [Camera.opaqueSortMode](Camera-opaqueSortMode.html) to reduce render state changes), whereas queues in [GeometryLast+1, 5000] range are treated as semitransparent objects (sorted based on [Camera.transparencySortMode](Camera-transparencySortMode.html), typically back-to-front).

Additional resources: [Material.renderQueue](Material-renderQueue.html), [Shader.renderQueue](Shader-renderQueue.html), [subshader tags](../Manual/SL-SubShaderTags.html).


            
