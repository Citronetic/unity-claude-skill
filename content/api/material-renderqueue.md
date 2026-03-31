This version of Unity is unsupported.



# [Material](Material.html).renderQueue




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







                    public int renderQueue;






### Description



The render queue to use as an override on this material.





Use this property to override the render queue of the material, to change when Unity draws GameObjects that use the material.

Use a value of '-1' to use the default render queue value from the shader.

Note: When Unity runs in batch mode, Scriptable Render Pipelines (SRPs) are only loaded the first time something renders. Loading an SRP modifies the subshader selected for a given material, which can change the value of this property.

Additional resources: [RenderQueue](Rendering.RenderQueue.html), [Render queues and sorting behaviours in the Built-in Render Pipeline](../Manual/built-in-rendering-order.html).


            
