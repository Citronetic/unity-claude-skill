This version of Unity is unsupported.



# [PaintContext](TerrainTools.PaintContext.html).ScatterHeightmap




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

public void ScatterHeightmap(string editorUndoName);






### Parameters



| Parameter | Description |
| --- | --- |
| editorUndoName | Unique name used for the undo stack. |





### Description



Applies an edited heightmap PaintContext by copying modifications back to the source Terrain tiles.





Once the edits to a PaintContext are complete, the modified data in `destinationRenderTexture` must be applied to the textures stored in each Terrain.
                  ScatterHeightmap will perform this copy, and mark the modified areas for normal map update next frame.
                  This function will also create a delayed action to rebuild collision, physics, pixel error metrics, visibility bounding boxes, and grass, tree, and detail positions.

                  This function is called internally by [TerrainPaintUtility.EndPaintHeightmap](TerrainTools.TerrainPaintUtility.EndPaintHeightmap.html).

                  Additional resources: [PaintContext.GatherHeightmap](TerrainTools.PaintContext.GatherHeightmap.html) and [PaintContext.ApplyDelayedActions](TerrainTools.PaintContext.ApplyDelayedActions.html).


            
