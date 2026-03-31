This version of Unity is unsupported.



# RenderParams





struct in
          UnityEngine



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



Rendering parameters used by various rendering functions.





This struct defines common parameters shared across various rendering functions.

Additional resources: [Graphics.RenderMesh](Graphics.RenderMesh.html), [Graphics.RenderMeshInstanced](Graphics.RenderMeshInstanced.html), [Graphics.RenderMeshIndirect](Graphics.RenderMeshIndirect.html), [Graphics.RenderMeshPrimitives](Graphics.RenderMeshPrimitives.html), [Graphics.RenderPrimitives](Graphics.RenderPrimitives.html), [Graphics.RenderPrimitivesIndexed](Graphics.RenderPrimitivesIndexed.html), [Graphics.RenderPrimitivesIndirect](Graphics.RenderPrimitivesIndirect.html), [Graphics.RenderPrimitivesIndexedIndirect](Graphics.RenderPrimitivesIndexedIndirect.html).





### Properties



| Property | Description |
| --- | --- |
| camera | The camera used for rendering. If set to null (default) renders for all cameras. |
| forceMeshLod | Force Unity to use a specific Mesh LOD if the mesh has Mesh LODs. |
| instanceID | The instance ID of the GameObject that issues the draw. Provide an instanceID to make a rendered GameObject pickable in the scene view when you click on it. The default value is 0, which means that you can't pick or outline the procedural GameObject in the scene view. |
| layer | Layer used for rendering. Layer to use. |
| lightProbeProxyVolume | Light Probe Proxy Volume (LPPV) used for rendering. |
| lightProbeUsage | The type of light probe usage. |
| material | Material used for rendering. |
| matProps | Material properties used for rendering. |
| meshLodSelectionBias | Bias to add to the calculated value when selecting a Mesh LOD level. |
| motionVectorMode | Motion vector mode used for rendering. |
| overrideSceneCullingMask | Uses the RenderParams.sceneCullingMask property to specify a custom SceneCullingMasks. This property is only available in the Editor, you can still access it in a Player but it'll be ignored. |
| receiveShadows | Descripes if the rendered geometry should receive shadows. |
| reflectionProbeUsage | The type of reflection probe used for rendering. |
| rendererPriority | Renderer priority. |
| renderingLayerMask | Renderer layer mask used for rendering. |
| sceneCullingMask | Overrides the scene culling mask for the rendered object. This can help you control prefab stage visibility or entities sub-scene visibiliy. This property is only available in the Editor, you can still access it in a Player but it'll be ignored.. |
| shadowCastingMode | Describes if geometry should cast shadows. |
| worldBounds | Defines world space bounds for the geometry. Used to cull and sort the rendered geometry. |





### Constructors



| Constructor | Description |
| --- | --- |
| RenderParams | Constructor. |


            
