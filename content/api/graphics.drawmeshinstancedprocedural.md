This version of Unity is unsupported.



# [Graphics](Graphics.html).DrawMeshInstancedProcedural




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

public static void DrawMeshInstancedProcedural([Mesh](Mesh.html) mesh,
int submeshIndex,
[Material](Material.html) material,
[Bounds](Bounds.html) bounds,
int count,
[MaterialPropertyBlock](MaterialPropertyBlock.html) properties,
[Rendering.ShadowCastingMode](Rendering.ShadowCastingMode.html) castShadows,
bool receiveShadows,
int layer,
[Camera](Camera.html) camera,
[Rendering.LightProbeUsage](Rendering.LightProbeUsage.html) lightProbeUsage,
[LightProbeProxyVolume](LightProbeProxyVolume.html) lightProbeProxyVolume);






### Parameters



| Parameter | Description |
| --- | --- |
| mesh | The Mesh to draw. |
| submeshIndex | Which subset of the mesh to draw. This applies only to meshes that are composed of several materials. |
| material | Material to use. |
| bounds | The bounding volume surrounding the instances you intend to draw. |
| count | The number of instances to be drawn. |
| properties | Additional material properties to apply. See MaterialPropertyBlock. |
| castShadows | Determines whether the Meshes should cast shadows. |
| receiveShadows | Determines whether the Meshes should receive shadows. |
| layer | Layer to use. |
| camera | If null (default), the mesh will be drawn in all cameras. Otherwise it will be drawn in the given Camera only. |
| lightProbeUsage | LightProbeUsage for the instances. |





### Description



This function is now obsolete. Use [Graphics.RenderMeshPrimitives](Graphics.RenderMeshPrimitives.html) instead. Draws the same mesh multiple times using GPU instancing.
This is similar to [Graphics.DrawMeshInstancedIndirect](Graphics.DrawMeshInstancedIndirect.html), except that when the instance count is known from script, it can be supplied directly using this method, rather than via a ComputeBuffer.





To render the instances with light probes, provide the light probe data via the MaterialPropertyBlock and specify `lightProbeUsage` with [LightProbeUsage.CustomProvided](Rendering.LightProbeUsage.CustomProvided.html). Check [LightProbes.CalculateInterpolatedLightAndOcclusionProbes](LightProbes.CalculateInterpolatedLightAndOcclusionProbes.html) for the details. Additional resources: [Graphics.RenderMeshPrimitives](Graphics.RenderMeshPrimitives.html).


            
