This version of Unity is unsupported.



# [TerrainPaintTool<T0>](TerrainTools.TerrainPaintTool_1.html).OnRenderBrushPreview




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
| editContext | Interface for communication between Editor and Paint tools. |





### Description



Use this method to implement custom tool preview and UI behavior that will only render while the mouse is within the [SceneView](SceneView.html) bounds or while you're actively using this tool.





Unity calls this method when the mouse is within the [SceneView](SceneView.html) viewport bounds, and the EditorGUIUtility.hotControl is set to 0 or to the [Terrain](Terrain.html) control ID provided by the [IOnSceneGUI](TerrainTools.IOnSceneGUI.html) context instance. This is usually when no other tools are active, or when you're actively using this tool.

                  Additional resources: [Editor.OnSceneGUI](Editor.OnSceneGUI.html), [SceneView](SceneView.html), TerrainPaintTool_1.OnSceneGUI, EditorGUIUtility.hotControl, [GUIUtility.hotControl](GUIUtility-hotControl.html).


            
