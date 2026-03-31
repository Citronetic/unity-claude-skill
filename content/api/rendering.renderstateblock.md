This version of Unity is unsupported.



# RenderStateBlock





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



A set of values that Unity uses to override the GPU's render state.





When you call ScriptableRenderContext.DrawRenderers, you can use this to override the render state for some or all of the geometry.

**Note:** You must set [mask](Rendering.RenderStateBlock-mask.html) to tell Unity which parts of the render state to override to apply. For example, to apply the values in [blendState](Rendering.RenderStateBlock-blendState.html), [mask](Rendering.RenderStateBlock-mask.html) must include [RenderStateMask.Blend](Rendering.RenderStateMask.Blend.html).


              


```
using UnityEngine;
using UnityEngine.Rendering;public class OverrideRenderStateExample
{
    ScriptableRenderContext scriptableRenderContext;    // Placeholder data
    DrawingSettings exampleDrawingSettings;
    CullingResults exampleCullingResults = new CullingResults();
    FilteringSettings exampleFilteringSettings = new FilteringSettings();    public void OverrideRenderState()
    {
        // Tell Unity how to override the render state when it draws the geometry.
        var stateBlock = new RenderStateBlock(RenderStateMask.Depth);
        stateBlock.depthState = new DepthState(true, CompareFunction.LessEqual);        // Schedule the drawing operation.
        scriptableRenderContext.DrawRenderers(exampleCullingResults, ref exampleDrawingSettings, ref exampleFilteringSettings, ref stateBlock);        // Perform all scheduled tasks, in the order that they were scheduled.
        scriptableRenderContext.Submit();
    }
}
```





Additional resources: ScriptableRenderContext.DrawRenderers, [RenderStateMask](Rendering.RenderStateMask.html).





### Properties



| Property | Description |
| --- | --- |
| blendState | Specifies the new blend state. |
| depthState | Specifies the new depth state. |
| mask | Specifies which parts of the GPU's render state to override. |
| rasterState | Specifies the new raster state. |
| stencilReference | The value to be compared against and/or the value to be written to the buffer, based on the stencil state. |
| stencilState | Specifies the new stencil state. |





### Constructors



| Constructor | Description |
| --- | --- |
| RenderStateBlock | Creates a new render state block with the specified mask. |


            
