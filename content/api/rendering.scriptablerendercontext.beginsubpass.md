This version of Unity is unsupported.



# [ScriptableRenderContext](Rendering.ScriptableRenderContext.html).BeginSubPass




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

public void BeginSubPass(NativeArray<int> colors,
NativeArray<int> inputs,
bool isDepthReadOnly,
bool isStencilReadOnly);






## Declaration

public void BeginSubPass(NativeArray<int> colors,
NativeArray<int> inputs,
bool isDepthStencilReadOnly);






## Declaration

public void BeginSubPass(NativeArray<int> colors,
bool isDepthReadOnly,
bool isStencilReadOnly);






## Declaration

public void BeginSubPass(NativeArray<int> colors,
bool isDepthStencilReadOnly);






### Parameters



| Parameter | Description |
| --- | --- |
| colors | Array of attachments to be used as the color render targets in this sub pass. These are specificed as indices into the array passed to BeginRenderPass. |
| inputs | Array of attachments to be used as input attachments in this sub pass. These are specificed as indices into the array passed to BeginRenderPass. |
| isDepthStencilReadOnly | If true, both depth and stencil attachments are read-only in this sub pass. Some renderers require this in order to be able to use the depth and stencil attachments as inputs. |
| isDepthReadOnly | If true, the depth attachment is read-only in this sub pass. Some renderers require this in order to be able to use the depth attachment as input. |
| isStencilReadOnly | If true, the stencil attachment is read-only in this sub pass. Some renderers require this in order to be able to use the stencil attachment as input. |





### Description



Schedules the beginning of a new sub pass within a render pass. Render passes can never be standalone, they must always contain at least one sub pass. Only one sub pass can be active at any time.





Additional resources: [EndSubPass](Rendering.ScriptableRenderContext.EndSubPass.html), [BeginRenderPass](Rendering.ScriptableRenderContext.BeginRenderPass.html), [BeginScopedSubPass](Rendering.ScriptableRenderContext.BeginScopedSubPass.html), [BeginScopedRenderPass](Rendering.ScriptableRenderContext.BeginScopedRenderPass.html).


            
