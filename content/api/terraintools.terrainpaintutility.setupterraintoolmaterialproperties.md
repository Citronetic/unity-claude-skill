This version of Unity is unsupported.



# [TerrainPaintUtility](TerrainTools.TerrainPaintUtility.html).SetupTerrainToolMaterialProperties




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

public static void SetupTerrainToolMaterialProperties([TerrainTools.PaintContext](TerrainTools.PaintContext.html) paintContext,
ref [TerrainTools.BrushTransform](TerrainTools.BrushTransform.html) brushXform,
[Material](Material.html) material);






### Parameters



| Parameter | Description |
| --- | --- |
| paintContext | PaintContext describing the area we are editing, and the terrain space. |
| brushXform | BrushTransform from terrain space to Brush UVs. |
| material | Material to populate with transform properties. |





### Description



Sets up all of the material properties used by functions in TerrainTool.cginc.





TerrainTool.cginc contains useful transforms for terrain tool shader; this function fills out the material properties necessary for those transforms to work properly.


            
