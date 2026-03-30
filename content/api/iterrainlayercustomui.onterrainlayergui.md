This version of Unity is unsupported.



# [ITerrainLayerCustomUI](ITerrainLayerCustomUI.html).OnTerrainLayerGUI




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

public bool OnTerrainLayerGUI([TerrainLayer](TerrainLayer.html) terrainLayer,
[Terrain](Terrain.html) terrain);






### Parameters



| Parameter | Description |
| --- | --- |
| terrainLayer | The TerrainLayer object. |
| terrain | The Terrain object on which the TerrainLayer object, specified by the terrainLayer parameter, is selected. |





### Returns



**bool**
        Return false to have Unity draw the default TerrainLayer inspector. Otherwise draw the custom GUI and return true.





### Description



Draws the custom GUI for the terrain layer.


            
