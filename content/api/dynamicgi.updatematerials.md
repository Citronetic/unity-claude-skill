This version of Unity is unsupported.



# [DynamicGI](DynamicGI.html).UpdateMaterials




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













                        **Obsolete**
                        DynamicGI.UpdateMaterials(Renderer) is deprecated; instead, use extension method from RendererExtensions: 'renderer.UpdateGIMaterials()'.




## Declaration

public static void UpdateMaterials([Renderer](Renderer.html) renderer);














### Parameters



| Parameter | Description |
| --- | --- |
| renderer | The Renderer to use when searching for a system to update. |
| terrain | The Terrain to use when searching for systems to update. |





### Description



Schedules an update of the albedo and emissive textures of a system that contains the renderer or the terrain.





The third overload specifies a region of the terrain that needs to be updated. This makes sure that only the systems that overlap with the specified rectangle get updated, which could help improve performance. The coordinates are specified the same way as in [TerrainData.SetAlphamaps](TerrainData.SetAlphamaps.html).


            
