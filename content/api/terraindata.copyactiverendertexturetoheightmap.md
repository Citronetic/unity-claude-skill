This version of Unity is unsupported.



# [TerrainData](TerrainData.html).CopyActiveRenderTextureToHeightmap




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

public void CopyActiveRenderTextureToHeightmap([RectInt](RectInt.html) sourceRect,
[Vector2Int](Vector2Int.html) dest,
[TerrainHeightmapSyncControl](TerrainHeightmapSyncControl.html) syncControl);






### Parameters



| Parameter | Description |
| --- | --- |
| sourceRect | The part of the active Render Texture to copy. |
| dest | The X and Y coordinates of the heightmap texture to copy into. |
| syncControl | Controls how CPU synchronization is performed. |





### Description



Copies the specified part of the active [RenderTexture](RenderTexture.html) to the Terrain heightmap texture.





This functions calls [DirtyHeightmapRegion](TerrainData.DirtyHeightmapRegion.html) internally and sends out the OnTerrainChanged message accordingly.

               The range of expected height values for the active [RenderTexture](RenderTexture.html) is between `0` and `0.5`. This is unlike [TerrainData.SetHeights](TerrainData.SetHeights.html), which expects height values between `0` and `1`.
Additional resources: [TerrainHeightmapSyncControl](TerrainHeightmapSyncControl.html), [DirtyHeightmapRegion](TerrainData.DirtyHeightmapRegion.html), [SyncHeightmap](TerrainData.SyncHeightmap.html).


            
