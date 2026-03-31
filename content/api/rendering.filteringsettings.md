This version of Unity is unsupported.



# FilteringSettings





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



A struct that represents filtering settings for ScriptableRenderContext.DrawRenderers.





A `FilteringSettings` struct describes how to filter the set of objects that ScriptableRenderContext.DrawRenderers receives, so that Unity draws a subset of them.

Additional resources: ScriptableRenderContext.DrawRenderers, [Creating a simple render loop in a custom render pipeline](../Manual/srp-creating-simple-render-loop.html).





### Static Properties



| Property | Description |
| --- | --- |
| defaultValue | Creates a FilteringSettings struct that contains default values for all properties. With these default values, Unity does not perform any filtering. |





### Properties



| Property | Description |
| --- | --- |
| batchLayerMask | Represents which BatchRendererGroup batch layers to enable for rendering. |
| excludeMotionVectorObjects | Determines if Unity excludes GameObjects that are in motion from rendering. This refers to GameObjects that have an active Motion Vector pass assigned to their Material or have set the Motion Vector mode to per object motion (Menu: Mesh Renderer > Additional Settings > Motion Vectors > Per Object Motion).
For Unity to exclude a GameObject from rendering, the GameObject must have moved since the last frame. To exclude a GameObject manually, enable a Motion Vector pass. |
| forceAllMotionVectorObjects | Determines if Unity renders not moving GameObjects in motion vector pass. This refers to GameObjects that have an active Motion Vector pass assigned to their Material and did not move since the last frame. This flag can be used to render both moving objects and not moving objects in the motion vector pass to populate object motion data and scene depth data together. |
| layerMask | Unity renders objects whose GameObject.layer value is enabled in this bit mask. |
| renderingLayerMask | Unity renders objects whose Renderer.renderingLayerMask value is enabled in this bit mask. |
| renderQueueRange | Unity renders objects whose Material.renderQueue value is within range specified by this RenderQueueRange. |
| sortingLayerRange | Unity renders objects whose SortingLayer.value value is within range specified by this SortingLayerRange. |





### Constructors



| Constructor | Description |
| --- | --- |
| FilteringSettings | Creates a FilteringSettings struct for use with Rendering.ScriptableRenderContext.DrawRenderers. |


            
