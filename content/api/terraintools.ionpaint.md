This version of Unity is unsupported.



# IOnPaint





interface in
          UnityEditor.TerrainTools


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



















### Description



Interface that provides parameters and utility functions for the OnPaint event of the terrain paint tools.





Additional resources: [TerrainPaintTool<T0>.OnPaint](TerrainTools.TerrainPaintTool_1.OnPaint.html).





### Properties



| Property | Description |
| --- | --- |
| brushSize | Read only. Current brush size in Terrain units (equivalent size to world units). |
| brushStrength | Read only. Current brush strength. |
| brushTexture | Read only. Current selected brush texture. |
| hitValidTerrain | Read only. True if the mouse is over a valid Terrain object; otherwise false. |
| raycastHit | Read only. The raycast result for the current mouse position.  This is valid when hitValidTerrain is true. |
| uv | Read only. The normalized position (between 0 and 1) on the active Terrain. |





### Public Methods



| Method | Description |
| --- | --- |
| Repaint | Instructs the Editor to repaint the tool UI, the Scene view, or both. |


            
