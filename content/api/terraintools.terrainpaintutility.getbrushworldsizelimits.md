This version of Unity is unsupported.



# [TerrainPaintUtility](TerrainTools.TerrainPaintUtility.html).GetBrushWorldSizeLimits




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

public static void GetBrushWorldSizeLimits(out float minBrushWorldSize,
out float maxBrushWorldSize,
float terrainTileWorldSize,
int terrainTileTextureResolutionPixels,
int minBrushResolutionPixels,
int maxBrushResolutionPixels);






### Parameters



| Parameter | Description |
| --- | --- |
| minBrushWorldSize | Returns the minimum Brush size, in world space units. |
| maxBrushWorldSize | Returns the maximum Brush size, in world space units. |
| terrainTileWorldSize | The size of a Terrain tile, in world space units. |
| terrainTileTextureResolutionPixels | The resolution of the Terrain tile texture the Brush edits, in pixels. |
| minBrushResolutionPixels | The minimum Brush resolution, in pixels.  Default is 1 pixel. |
| maxBrushResolutionPixels | The maximum Brush resolution, in pixels.  Default is 8192 pixels. |





### Description



Calculates the minimum and maximum Brush size limits, in world space.





Converts the minimum and maximum Brush pixel resolutions into the equivalent world space sizes.


            
