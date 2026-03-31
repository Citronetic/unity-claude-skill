This version of Unity is unsupported.



# [PaintContext](TerrainTools.PaintContext.html).GetClippedPixelRectInRenderTexturePixels




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

public [RectInt](RectInt.html) GetClippedPixelRectInRenderTexturePixels(int terrainIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| terrainIndex | Index of the Terrain. |





### Returns



**RectInt**
        Returns the clipped pixel rectangle.





### Description



Retrieves the clipped pixel rectangle for a Terrain, relative to the PaintContext render textures.





When painting across a border, the PaintContext can refer to several Terrain tiles.
                  GetClippedPixelRectInTerrainPixels returns the [PaintContext.pixelRect](TerrainTools.PaintContext-pixelRect.html) clipped to the specified Terrain, in the pixel coordinates of [PaintContext.sourceRenderTexture](TerrainTools.PaintContext-sourceRenderTexture.html) and [PaintContext.destinationRenderTexture](TerrainTools.PaintContext-destinationRenderTexture.html).
                  terrainIndex must be between 0 and [PaintContext.terrainCount](TerrainTools.PaintContext-terrainCount.html) - 1.
                  Additional resources: [PaintContext.GetTerrain](TerrainTools.PaintContext.GetTerrain.html).


            
