This version of Unity is unsupported.



# TerrainHeightmapSyncControl





enumeration


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



Controls what Terrain heightmap data to synchronize when there are changes to the heightmap texture.





Additional resources: [TerrainData.CopyActiveRenderTextureToHeightmap](TerrainData.CopyActiveRenderTextureToHeightmap.html), [TerrainData.DirtyHeightmapRegion](TerrainData.DirtyHeightmapRegion.html), [TerrainData.SyncHeightmap](TerrainData.SyncHeightmap.html).





### Properties



| Property | Description |
| --- | --- |
| None | Does not synchronize the height data nor the LOD data. |
| HeightOnly | Synchronizes only height data of the heightmap texture from the GPU back to CPU memory. |
| HeightAndLod | Synchronizes height data of the heightmap texture from the GPU back to CPU memory. Then computes LOD data, used for determining the tessellation level, from the height data. |


            
