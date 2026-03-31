This version of Unity is unsupported.



# [TerrainPaintToolWithOverlaysBase](TerrainTools.TerrainPaintToolWithOverlaysBase.html).OnRenderBrushPreview




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

public void OnRenderBrushPreview([Terrain](Terrain.html) terrain,
[TerrainTools.IOnSceneGUI](TerrainTools.IOnSceneGUI.html) editContext);






### Parameters



| Parameter | Description |
| --- | --- |
| terrain | Active Terrain object. |
| editContext | Interface used to communicate between Editor and Paint tools. |





### Description



Use this method to implement custom tool preview and UI behavior that only renders while the mouse is within the SceneView bounds or while you're actively using this tool.


            
