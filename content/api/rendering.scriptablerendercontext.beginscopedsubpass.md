This version of Unity is unsupported.



# [ScriptableRenderContext](Rendering.ScriptableRenderContext.html).BeginScopedSubPass




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

public [Rendering.ScopedSubPass](Rendering.ScopedSubPass.html) BeginScopedSubPass(NativeArray<int> colors,
NativeArray<int> inputs,
bool isDepthReadOnly,
bool isStencilReadOnly);






## Declaration

public [Rendering.ScopedSubPass](Rendering.ScopedSubPass.html) BeginScopedSubPass(NativeArray<int> colors,
NativeArray<int> inputs,
bool isDepthStencilReadOnly);






## Declaration

public [Rendering.ScopedSubPass](Rendering.ScopedSubPass.html) BeginScopedSubPass(NativeArray<int> colors,
bool isDepthReadOnly,
bool isStencilReadOnly);






## Declaration

public [Rendering.ScopedSubPass](Rendering.ScopedSubPass.html) BeginScopedSubPass(NativeArray<int> colors,
bool isDepthStencilReadOnly);






### Parameters



| Parameter | Description |
| --- | --- |
| colors | Array of attachments to be used as the color render targets in this sub pass. These are specificed as indices into the array passed to BeginRenderPass. The values in the array are copied immediately. |
| inputs | Array of attachments to be used as input attachments in this sub pass. These are specificed as indices into the array passed to BeginRenderPass. The values in the array are copied immediately. |
| isDepthStencilReadOnly | If true, both depth and stencil attachments are read-only in this sub pass. Some renderers require this in order to be able to use the depth and stencil attachments as inputs. |
| isDepthReadOnly | If true, the depth attachment is read-only in this sub pass. Some renderers require this in order to be able to use the depth attachment as input. |
| isStencilReadOnly | If true, the stencil attachment is read-only in this sub pass. Some renderers require this in order to be able to use the stencil attachment as input. |





### Description



Schedules the beginning of a new sub pass within a render pass. If you call this in a using-statement, Unity executes EndSubPass automatically when exiting the using-block.
Render passes can never be standalone, they must always contain at least one sub pass. Only one sub pass can be active at any time.





This method does the same as [BeginSubPass](Rendering.ScriptableRenderContext.BeginSubPass.html), but it will return an *IDisposable* that can be used in a *using*-statement, and so it is not necesssary to manually call [EndSubPass](Rendering.ScriptableRenderContext.EndSubPass.html).

Additional resources: [BeginScopedRenderPass](Rendering.ScriptableRenderContext.BeginScopedRenderPass.html).


            
