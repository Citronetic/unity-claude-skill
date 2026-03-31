This version of Unity is unsupported.



# [TerrainPaintUtility](TerrainTools.TerrainPaintUtility.html).EndPaintHeightmap




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

public static void EndPaintHeightmap([TerrainTools.PaintContext](TerrainTools.PaintContext.html) ctx,
string editorUndoName);






### Parameters



| Parameter | Description |
| --- | --- |
| ctx | The heightmap paint context to complete. |
| editorUndoName | Unique name used for the undo stack. |





### Description



Helper function to complete a heightmap modification.





Once the modified data is written to [PaintContext.destinationRenderTexture](TerrainTools.PaintContext-destinationRenderTexture.html), call this function to copy the modifications back to the original Terrain tiles.
                  This function also signals Unity to update the dirty regions in each of the affected heightmaps, to update collision and physics.
                  This function will also release all allocated resources in the PaintContext.

                  See [TerrainPaintUtility.BeginPaintHeightmap](TerrainTools.TerrainPaintUtility.BeginPaintHeightmap.html), [PaintContext](TerrainTools.PaintContext.html), and [PaintContext.ScatterHeightmap](TerrainTools.PaintContext.ScatterHeightmap.html).


            
