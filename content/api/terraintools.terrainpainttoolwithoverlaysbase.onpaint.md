This version of Unity is unsupported.



# [TerrainPaintToolWithOverlaysBase](TerrainTools.TerrainPaintToolWithOverlaysBase.html).OnPaint




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

public bool OnPaint([Terrain](Terrain.html) terrain,
[TerrainTools.IOnPaint](TerrainTools.IOnPaint.html) editContext);






### Parameters



| Parameter | Description |
| --- | --- |
| terrain | Active Terrain object. |
| editContext | Interface used to communicate between Editor and Paint tools. |





### Returns



**bool**
        Return true to temporarily hide tree, grass, and detail layers on the terrain.





### Description



Custom Terrain Tool paint callback.


            
