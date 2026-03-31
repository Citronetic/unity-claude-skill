This version of Unity is unsupported.



# [TerrainData](TerrainData.html).CopyActiveRenderTextureToTexture




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

public void CopyActiveRenderTextureToTexture(string textureName,
int textureIndex,
[RectInt](RectInt.html) sourceRect,
[Vector2Int](Vector2Int.html) dest,
bool allowDelayedCPUSync);






### Parameters



| Parameter | Description |
| --- | --- |
| textureName | The name of the Terrain texture to copy into. |
| textureIndex | The index of the Terrain texture to copy into. |
| sourceRect | The part of the active Render Texture to copy. |
| dest | The X and Y coordinates of the Terrain texture to copy into. |
| allowDelayedCPUSync | Specifies whether to allow delayed CPU synchronization of the texture. |





### Description



Copies the specified part of the active [RenderTexture](RenderTexture.html) to the Terrain texture.





If the `allowDelayedCPUSync` parameter is set to `true`, and the platform supports copying between a [RenderTexture](RenderTexture.html) and a [Texture2D](Texture2D.html), Unity performs a GPU copy from the active RenderTexture to the Terrain texture. This is sufficient for Terrain rendering, but you will need to call [SyncTexture](TerrainData.SyncTexture.html) afterward to synchronize the CPU part of the texture.

If the `allowDelayedCPUSync` parameter is set to `false`, or the platform doesn't support copying between textures, Unity immediately reads back the content of the active RenderTexture, and updates both the CPU and GPU parts of the Terrain texture.

Unity recommends you create the source Render Texture to copy in the format that [Terrain.heightmapRenderTextureFormat](Terrain-heightmapRenderTextureFormat.html) specifies, and call the HLSL function `PackHeightmap` before you write to the source render texture. To use `PackHeightmap`, make sure you have the include directive `#include "UnityCG.cginc"` in your shader.

Additional resources: [DirtyTextureRegion](TerrainData.DirtyTextureRegion.html), [SyncTexture](TerrainData.SyncTexture.html).


            
