This version of Unity is unsupported.



# [Shader](Shader.html).renderQueue




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




                [Switch to Manual](../Manual/class-Shader.html)







                    public int renderQueue;






### Description



The default render queue for this shader. (Read Only)





Since different Render Pipelines require different render passes a shader's render queue depends on the active Render Pipeline.

Note: When Unity runs in batch mode, Scriptable Render Pipelines (SRPs) are only loaded the first time something renders. Loading an SRP modifies the subshader selected for a given material, which can change the value of this property.

Additional resources: [RenderQueue](Rendering.RenderQueue.html), [Render queues and sorting behaviours in the Built-in Render Pipeline](../Manual/built-in-rendering-order.html).


            
