This version of Unity is unsupported.



# [TerrainData](TerrainData.html).DirtyHeightmapRegion




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

public void DirtyHeightmapRegion([RectInt](RectInt.html) region,
[TerrainHeightmapSyncControl](TerrainHeightmapSyncControl.html) syncControl);






### Parameters



| Parameter | Description |
| --- | --- |
| region | The rectangular region to mark as dirty. |
| syncControl | Controls how CPU synchronization is performed. |





### Description



Marks the specified part of the heightmap as dirty.





Use this function only after you manually change the GPU part of the heightmap texture by rendering into it, or by using [Graphics.CopyTexture](Graphics.CopyTexture.html). Use the `syncControl` parameter to control how you want Unity to perform CPU synchronization. Unity queues the reading back of unsynchronized data (height data, LOD data, or both) until the next call to [SyncHeightmap](TerrainData.SyncHeightmap.html).

If the current active [RenderTexture](RenderTexture.html) contains your changes, and you want to copy a part of it into the heightmap texture, use [CopyActiveRenderTextureToHeightmap](TerrainData.CopyActiveRenderTextureToHeightmap.html) instead.

This function sends out the OnTerrainChanged message with [TerrainChangedFlags.Heightmap](TerrainChangedFlags.Heightmap.html) if you pass [TerrainHeightmapSyncControl.HeightAndLod](TerrainHeightmapSyncControl.HeightAndLod.html) to the `syncControl` parameter. If you pass TerrainHeightmapSyncControl.Height to the `syncControl` parameter, it sends out the OnTerrainChanged message with [TerrainChangedFlags.DelayedHeightmapUpdate](TerrainChangedFlags.DelayedHeightmapUpdate.html).


            
