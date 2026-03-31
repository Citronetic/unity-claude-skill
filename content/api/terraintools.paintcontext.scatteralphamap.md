This version of Unity is unsupported.



# [PaintContext](TerrainTools.PaintContext.html).ScatterAlphamap




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

public void ScatterAlphamap(string editorUndoName);






### Parameters



| Parameter | Description |
| --- | --- |
| editorUndoName | Unique name used for the undo stack. |





### Description



Applies an edited alphamap PaintContext by copying modifications back to the source Terrain tiles.





Once the edits to a PaintContext are complete, the modified data in `destinationRenderTexture` must be applied to the textures stored in each Terrain.
                    ScatterAlphamap will perform this copy, and re-normalize the other alphamap channels to maintain a sum of 1.
                    This function will also create a delayed action to rebuild the basemap LOD texture.

                    This function is called internally by [TerrainPaintUtility.EndPaintTexture](TerrainTools.TerrainPaintUtility.EndPaintTexture.html).

                    Additional resources: [PaintContext.GatherAlphamap](TerrainTools.PaintContext.GatherAlphamap.html) and [PaintContext.ApplyDelayedActions](TerrainTools.PaintContext.ApplyDelayedActions.html).


            
