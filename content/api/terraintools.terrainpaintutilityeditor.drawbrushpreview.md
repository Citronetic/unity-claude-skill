This version of Unity is unsupported.



# [TerrainPaintUtilityEditor](TerrainTools.TerrainPaintUtilityEditor.html).DrawBrushPreview(PaintContext,BrushPreview,Texture,BrushTransform,Material,int)




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



















### Parameters



| Parameter | Description |
| --- | --- |
| heightmapPC | PaintContext describing the heightmap from which to build the preview mesh. |
| previewTexture | Specifies Whether to build the mesh using the source or destination render texture in heightmapPC. |
| brushTexture | The brush texture to preview. |
| brushXform | Describes the position and orientation of the brush. |
| proceduralMaterial | Material used to render the preview. |
| materialPassIndex | Material pass to render. |





### Description



Draws a Terrain brush preview mesh from a heightmap PaintContext using the provided procedural material.





The heightmapPC is used to build the mesh. To ensure that the preview is rendered on the mesh, the heightmapPC must contain an area around the brush.
                  To facilitate proper transformation of brush UV space, this method sets up the brush transforms in the material.
                  Important: The material provided must support procedural mesh generation in the vertex shader using the shader functions provided in TerrainPreview.cginc.  A default implementation of the material is provided by GetDefaultBrushPreviewMaterial().

                  Additional resources: [TerrainPaintUtilityEditor.GetDefaultBrushPreviewMaterial](TerrainTools.TerrainPaintUtilityEditor.GetDefaultBrushPreviewMaterial.html) and [PaintContext](TerrainTools.PaintContext.html).


            
