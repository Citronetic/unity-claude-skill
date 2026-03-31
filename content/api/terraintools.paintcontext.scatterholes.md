This version of Unity is unsupported.



# [PaintContext](TerrainTools.PaintContext.html).ScatterHoles




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

public void ScatterHoles(string editorUndoName);






### Parameters



| Parameter | Description |
| --- | --- |
| editorUndoName | Unique name used for the undo stack. |





### Description



Applies an edited Terrain holes PaintContext by copying modifications back to the source Terrain tiles.





Once the edits to a PaintContext are complete, the modified data in `destinationRenderTexture` must be applied to the textures stored in each Terrain.
                  ScatterHoles performs this copy.
                  This function will also create a delayed action to rebuild collision, physics, grass, trees and details.

                  This function is called internally by [TerrainPaintUtility.EndPaintHoles](TerrainTools.TerrainPaintUtility.EndPaintHoles.html).

                  Additional resources: [PaintContext.GatherHoles](TerrainTools.PaintContext.GatherHoles.html) and [PaintContext.ApplyDelayedActions](TerrainTools.PaintContext.ApplyDelayedActions.html).


            
