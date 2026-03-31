This version of Unity is unsupported.



# [TerrainPaintUtility](TerrainTools.TerrainPaintUtility.html).BuildTransformPaintContextUVToPaintContextUV




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

public static void BuildTransformPaintContextUVToPaintContextUV([TerrainTools.PaintContext](TerrainTools.PaintContext.html) src,
[TerrainTools.PaintContext](TerrainTools.PaintContext.html) dst,
out [Vector4](Vector4.html) scaleOffset);






### Parameters



| Parameter | Description |
| --- | --- |
| src | Source PaintContext. |
| dst | Destination PaintContext. |
| scaleOffset | ScaleOffset transform. |





### Description



Builds a Scale & Offset transform to convert between one PaintContext's UV space and another PaintContext's UV space.





This method provides functionality that you can use when you must perform tasks such as rendering to one PaintContext when reading a texture from another PaintContext.
                  You can apply the returned transform to convert the UVs from one PaintContext to another.

                  The returned scaleOffset vector is in the same format as used by the TEX_TRANSFORM macro:

                  `dstUV.uv = srcUV.uv * scaleOffset.xy + scaleOffset.zw`


            
