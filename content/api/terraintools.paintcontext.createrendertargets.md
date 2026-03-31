This version of Unity is unsupported.



# [PaintContext](TerrainTools.PaintContext.html).CreateRenderTargets




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

public void CreateRenderTargets([RenderTextureFormat](RenderTextureFormat.html) colorFormat);






### Parameters



| Parameter | Description |
| --- | --- |
| colorFormat | Render Texture format. |





### Description



Creates the `sourceRenderTexture` and `destinationRenderTexture`.





The render textures are created at a resolution matching the current [PaintContext.pixelRect](TerrainTools.PaintContext-pixelRect.html), using the specified [RenderTextureFormat](RenderTextureFormat.html).

                  This function is called internally by [TerrainPaintUtility.BeginPaintHeightmap](TerrainTools.TerrainPaintUtility.BeginPaintHeightmap.html), [TerrainPaintUtility.BeginPaintTexture](TerrainTools.TerrainPaintUtility.BeginPaintTexture.html) and [TerrainPaintUtility.CollectNormals](TerrainTools.TerrainPaintUtility.CollectNormals.html).

                  Additional resources: [PaintContext.destinationRenderTexture](TerrainTools.PaintContext-destinationRenderTexture.html), [PaintContext.sourceRenderTexture](TerrainTools.PaintContext-sourceRenderTexture.html)


            
