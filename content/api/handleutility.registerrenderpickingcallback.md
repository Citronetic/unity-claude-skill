This version of Unity is unsupported.



# [HandleUtility](HandleUtility.html).RegisterRenderPickingCallback




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

public static bool RegisterRenderPickingCallback([HandleUtility.RenderPickingCallback](HandleUtility.RenderPickingCallback.html) renderPickingCallback);






### Parameters



| Parameter | Description |
| --- | --- |
| renderPickingCallback | The delegate object to register to the callback. |





### Returns



**bool**
        True if the registration succeeds. False if the callback is already registered.





### Description



Registers a callback to invoke when Unity renders for picking.





Use this callback to render custom geometries on top of the existing scene objects to the picking render texture, so that the GameObjects represented by custom geometries can be picked.

Each rendering must write out a [Vector4](Vector4.html)-typed `selectionId` to the picking render texture. The `selectionId` is encoded from the [pickingIndex](RenderPickingArgs-pickingIndex.html) passed into the callback through the [RenderPickingArgs](RenderPickingArgs.html) struct using the function [HandleUtility.EncodeSelectionId](HandleUtility.EncodeSelectionId.html). You can render multiple SelectionIds in one callback if they are encoded sequentially from incrementing the `pickingIndex`, and you return the total number of rendered picking indices when returning from the callback.

Most Unity shaders have a "ScenePickingPass" pass that can be used for the rendering. Use [Material.FindPass](Material.FindPass.html) with the pass name "ScenePickingPass" to find the index of the shader pass from a [Material](Material.html), and use this pass index when you call APIs such as [Material.SetPass](Material.SetPass.html). Note that you can only use render functions that are considered to take effect immediately, such as [Graphics.DrawMeshNow](Graphics.DrawMeshNow.html) and [Graphics.DrawProceduralNow](Graphics.DrawProceduralNow.html) (instead of their non-immediate counterparts [Graphics.DrawMesh](Graphics.DrawMesh.html) and [Graphics.DrawProcedural](Graphics.DrawProcedural.html)). The alternative is to record your rendering to a [CommandBuffer](Rendering.CommandBuffer.html) object, and call [Graphics.ExecuteCommandBuffer](Graphics.ExecuteCommandBuffer.html) after the recording.

The picking render texture has already been bound as the active render texture when it entered the callback. You can change the active render texture during the callback, but you must restore the active render texture before exiting the callback.

Your rendering must respect the ignore and filter GameObject sets passed to the callback through the [RenderPickingArgs](RenderPickingArgs.html) struct argument to determine under the current context what should be rendered. Refer to [RenderPickingArgs](RenderPickingArgs.html) for more information.

After rendering, return a [RenderPickingResult](RenderPickingResult.html) struct with the number of picking indices you used, and another callback function to invoke to resolve the picking index to a GameObject reference to be selected once the user ends up clicking on the rendered pixel under the mouse. If nothing needs to render, you can return the struct with [renderedPickingIndexCount](RenderPickingResult-renderedPickingIndexCount.html) being 0, or simply [RenderPickingResult.NoOperation](RenderPickingResult.NoOperation.html). Refer to [RenderPickingResult](RenderPickingResult.html) for more information.

The method throws `InvalidOperationException` if you try to call it inside render picking callbacks.

Additional resources: [UnregisterRenderPickingCallback](HandleUtility.UnregisterRenderPickingCallback.html).


            
