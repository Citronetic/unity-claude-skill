This version of Unity is unsupported.



# [PaintContext](TerrainTools.PaintContext.html).sourceRenderTexture




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












                    public [RenderTexture](RenderTexture.html) sourceRenderTexture;






### Description



(Read Only) Render target that stores the original data from the Terrain tiles.





This RenderTexture contains all of the data collected from all Terrain tiles that intersect the PaintContext.
                  The RenderTexture is created by [PaintContext.CreateRenderTargets](TerrainTools.PaintContext.CreateRenderTargets.html), and populated by one of the Gather functions ([PaintContext.GatherHeightmap](TerrainTools.PaintContext.GatherHeightmap.html), [PaintContext.GatherAlphamap](TerrainTools.PaintContext.GatherAlphamap.html) or [PaintContext.GatherNormals](TerrainTools.PaintContext.GatherNormals.html)).

                  Additional resources: [PaintContext](TerrainTools.PaintContext.html), [PaintContext.destinationRenderTexture](TerrainTools.PaintContext-destinationRenderTexture.html).


            
