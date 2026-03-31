This version of Unity is unsupported.



# [TerrainLayerUtility](TerrainLayerUtility.html).ShowTerrainLayerGUI




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

public static void ShowTerrainLayerGUI([Terrain](Terrain.html) terrain,
[TerrainLayer](TerrainLayer.html) terrainLayer,
ref [Editor](Editor.html) terrainLayerEditor,
[ITerrainLayerCustomUI](ITerrainLayerCustomUI.html) customGUI);






### Parameters



| Parameter | Description |
| --- | --- |
| terrain | The Terrain from which the Terrain Layer originates. |
| terrainLayer | The Terrain Layer object to show the Inspector for. |
| terrainLayerEditor | Reference to a variable of type Editor in which Unity caches the Terrain Layer Inspector object. |
| customGUI | The custom Terrain Layer GUI object. |





### Description



This helper function shows the Terrain Layer Inspector GUI nested inside the current Inspector GUI.





Additional resources: [ITerrainLayerCustomUI](ITerrainLayerCustomUI.html), [Editor.DrawFoldoutInspector](Editor.DrawFoldoutInspector.html).


            
