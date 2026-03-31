This version of Unity is unsupported.



# [TerrainPaintUtility](TerrainTools.TerrainPaintUtility.html).BeginPaintHeightmap




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

public static [TerrainTools.PaintContext](TerrainTools.PaintContext.html) BeginPaintHeightmap([Terrain](Terrain.html) terrain,
[Rect](Rect.html) boundsInTerrainSpace,
int extraBorderPixels = 0,
bool fillOutsideTerrain = true);






### Parameters



| Parameter | Description |
| --- | --- |
| terrain | Reference Terrain tile. |
| boundsInTerrainSpace | The region in terrain space to edit. |
| extraBorderPixels | Number of extra border pixels required. |
| fillOutsideTerrain | Whether to fill empty space outside of Terrain tiles with data from the nearest tile. |





### Returns



**PaintContext**
        PaintContext containing the combined heightmap data for the specified region.





### Description



Helper function to set up a PaintContext for modifying the heightmap of one or more Terrain tiles.





BeginPaintHeightmap identifies all of the heightmap pixels that are within `extraBorderPixels` of the bounds rectangle.
                  The search is performed across adjacent connected Terrain tiles.
                  The pixels are collected into a temporary render texture and stored in [PaintContext.sourceRenderTexture](TerrainTools.PaintContext-sourceRenderTexture.html).

                  After calling this function, you may modify the heightmap by writing the new values into [PaintContext.destinationRenderTexture](TerrainTools.PaintContext-destinationRenderTexture.html).
                  Then, you may complete the modification by calling [TerrainPaintUtility.EndPaintHeightmap](TerrainTools.TerrainPaintUtility.EndPaintHeightmap.html) to copy the modified data back to the Terrain tiles.
                  Alteratively, you may cancel the modification by calling [TerrainPaintUtility.ReleaseContextResources](TerrainTools.TerrainPaintUtility.ReleaseContextResources.html) to release the RenderTexture resources.

                  Additional resources: [TerrainPaintUtility.EndPaintHeightmap](TerrainTools.TerrainPaintUtility.EndPaintHeightmap.html) and [PaintContext](TerrainTools.PaintContext.html).


            
