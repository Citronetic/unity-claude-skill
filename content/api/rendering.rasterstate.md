This version of Unity is unsupported.



# RasterState





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



Values for the raster state.





Use this with [RenderStateBlock](Rendering.RenderStateBlock.html) and ScriptableRenderContext.DrawRenderers to override the GPU's render state.

Corresponds to the `Conservative`, `Cull`, `ZClip`, and `Offset` commands in [ShaderLab](../Manual/SL-Reference.html).

Additional resources: [RenderStateBlock](Rendering.RenderStateBlock.html), [[ScriptableRenderContext.DrawRenderers], [ShaderLab command: Stencil](../Manual/SL-Stencil.html).





### Static Properties



| Property | Description |
| --- | --- |
| defaultValue | Default values for the raster state. |





### Properties



| Property | Description |
| --- | --- |
| conservative | Enables conservative rasterization. Before using check for support via SystemInfo.supportsConservativeRaster property. |
| cullingMode | Controls which sides of polygons should be culled (not drawn). |
| depthClip | Enable clipping based on depth. |
| offsetFactor | Scales the maximum Z slope in the GPU's depth bias setting. |
| offsetUnits | Scales the minimum resolvable depth buffer value in the GPU's depth bias setting. |





### Constructors



| Constructor | Description |
| --- | --- |
| RasterState | Creates a new raster state with the given values. |


            
