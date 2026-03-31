This version of Unity is unsupported.



# [PaintDetailsToolUtility](TerrainTools.PaintDetailsToolUtility.html).ClampedDetailPatchesGUI




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

public static int ClampedDetailPatchesGUI([Terrain](Terrain.html) terrain,
out [Vector2](Vector2.html) detailMinMaxHeight,
out List<Vector4> clampedDetailPatchIconScreenPositions);






### Parameters



| Parameter | Description |
| --- | --- |
| terrain | The target terrain. |
| detailMinMaxHeight | The minimum and maximum height of the details within the terrain. |
| clampedDetailPatchIconScreenPositions | The list of screen detail pactch icons within the screen positions. |





### Returns



**int**

                    Returns the index of the terrain patch within the screen position, returns an invalid index of -1.





### Description



Gets data on the clamped detail patches for displaying their GUI within a terrain.





Use this method to calculate the necessary data to distinguish different clamped detail patches within a terrain.
                    This data is also used to visualize these clamped areas when scattering details across a terrain.

                    Additional resources: [PaintDetailsToolUtility.DrawClampedDetailPatchGUI](TerrainTools.PaintDetailsToolUtility.DrawClampedDetailPatchGUI.html)


            
