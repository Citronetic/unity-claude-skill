This version of Unity is unsupported.



# [TerrainPaintUtility](TerrainTools.TerrainPaintUtility.html).CalculateBrushTransform




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

public static [TerrainTools.BrushTransform](TerrainTools.BrushTransform.html) CalculateBrushTransform([Terrain](Terrain.html) terrain,
[Vector2](Vector2.html) brushCenterTerrainUV,
float brushSize,
float brushRotationDegrees);






### Parameters



| Parameter | Description |
| --- | --- |
| terrain | Reference terrain, defines terrain UV and object space. |
| brushCenterTerrainUV | Center point of the brush, in terrain UV space (0-1 across the terrain tile). |
| brushSize | Size of the brush, in terrain space. |
| brushRotationDegrees | Brush rotation in degrees (clockwise). |





### Returns



**BrushTransform**
        Transform from terrain space to Brush UVs.





### Description



Creates a BrushTransform from the input parameters.


            
