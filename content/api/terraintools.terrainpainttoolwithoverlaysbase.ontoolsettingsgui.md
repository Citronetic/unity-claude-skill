This version of Unity is unsupported.



# [TerrainPaintToolWithOverlaysBase](TerrainTools.TerrainPaintToolWithOverlaysBase.html).OnToolSettingsGUI




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

public void OnToolSettingsGUI([Terrain](Terrain.html) terrain,
[TerrainTools.IOnInspectorGUI](TerrainTools.IOnInspectorGUI.html) editContext);






### Parameters



| Parameter | Description |
| --- | --- |
| terrain | Active Terrain object. |
| editContext | Interface used to communicate between Editor and Paint tools. |





### Description



Contains the IMGUI code for custom settings beyond the common settings.





If TerrainPaintToolWithOverlaysBase.HasToolSettings returns true, then there is custom code in this function. If not, then there is no custom code in this function.


            
