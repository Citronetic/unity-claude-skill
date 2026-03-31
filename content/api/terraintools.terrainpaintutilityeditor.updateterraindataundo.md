This version of Unity is unsupported.



# [TerrainPaintUtilityEditor](TerrainTools.TerrainPaintUtilityEditor.html).UpdateTerrainDataUndo




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

public static void UpdateTerrainDataUndo([TerrainData](TerrainData.html) terrainData,
string undoName);






### Parameters



| Parameter | Description |
| --- | --- |
| terrainData | Terrain data object. |
| undoName | The name of the undo operation. |





### Description



Updates the undo stack with a terrain operation.





This method adds a new terrain operation to the undo stack, so the operation can be undone and revert the terrain's data to its previous state.


            
