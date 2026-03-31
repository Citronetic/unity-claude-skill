This version of Unity is unsupported.



# StencilState





struct in
          UnityEngine.Rendering



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Values for the stencil state.





Use this with [RenderStateBlock](Rendering.RenderStateBlock.html) and ScriptableRenderContext.DrawRenderers to override the GPU's render state.

Corresponds to the `Stencil` command in [ShaderLab](../Manual/SL-Reference.html).

Additional resources: [RenderStateBlock](Rendering.RenderStateBlock.html), [[ScriptableRenderContext.DrawRenderers], [ShaderLab command: Stencil](../Manual/SL-Stencil.html).





### Static Properties



| Property | Description |
| --- | --- |
| defaultValue | Default values for the stencil state. |





### Properties



| Property | Description |
| --- | --- |
| compareFunctionBack | The function used to compare the reference value to the current contents of the buffer for back-facing geometry. |
| compareFunctionFront | The function used to compare the reference value to the current contents of the buffer for front-facing geometry. |
| enabled | Controls whether the stencil buffer is enabled. |
| failOperationBack | What to do with the contents of the buffer if the stencil test fails for back-facing geometry. |
| failOperationFront | What to do with the contents of the buffer if the stencil test fails for front-facing geometry. |
| passOperationBack | What to do with the contents of the buffer if the stencil test (and the depth test) passes for back-facing geometry. |
| passOperationFront | What to do with the contents of the buffer if the stencil test (and the depth test) passes for front-facing geometry. |
| readMask | An 8 bit mask as an 0–255 integer, used when comparing the reference value with the contents of the buffer. |
| writeMask | An 8 bit mask as an 0–255 integer, used when writing to the buffer. |
| zFailOperationBack | What to do with the contents of the buffer if the stencil test passes, but the depth test fails for back-facing geometry. |
| zFailOperationFront | What to do with the contents of the buffer if the stencil test passes, but the depth test fails for front-facing geometry. |





### Constructors



| Constructor | Description |
| --- | --- |
| StencilState | Creates a new stencil state with the given values. |





### Public Methods



| Method | Description |
| --- | --- |
| SetCompareFunction | The function used to compare the reference value to the current contents of the buffer. |
| SetFailOperation | What to do with the contents of the buffer if the stencil test fails. |
| SetPassOperation | What to do with the contents of the buffer if the stencil test (and the depth test) passes. |
| SetZFailOperation | What to do with the contents of the buffer if the stencil test passes, but the depth test fails. |


            
