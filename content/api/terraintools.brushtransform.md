This version of Unity is unsupported.



# BrushTransform





struct in
          UnityEngine.TerrainTools



/



Implemented in:[UnityEngine.TerrainModule](UnityEngine.TerrainModule.html)


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



















### Description



Represents a linear 2D transformation between brush UV space and a target XY space (typically this is a Terrain-local object space.)





The BrushTransform represents a rectangular brush, with scale, rotation, and skew.
The brush is assumed to lie in the [0,1] range in brush UV space.

The transform and its inverse are represented as follows:

`xy = u * BrushTransform.brushU + v * BrushTransform.brushV + BrushTransform.brushOrigin`

`uv = x * BrushTransform.targetX + y * BrushTransform.targetY + BrushTransform.targetOrigin`





### Properties



| Property | Description |
| --- | --- |
| brushOrigin | (Read Only) Brush UV origin, in XY space. |
| brushU | (Read Only) Brush U vector, in XY space. |
| brushV | (Read Only) Brush V vector, in XY space. |
| targetOrigin | (Read Only) Target XY origin, in Brush UV space. |
| targetX | (Read Only) Target X vector, in Brush UV space. |
| targetY | (Read Only) Target Y vector, in Brush UV space. |





### Constructors



| Constructor | Description |
| --- | --- |
| BrushTransform | Creates a BrushTransform. |





### Public Methods



| Method | Description |
| --- | --- |
| FromBrushUV | Applies the transform to convert a Brush UV coordinate to the target XY space. |
| GetBrushXYBounds | Get the axis-aligned bounding rectangle of the brush, in target XY space. |
| ToBrushUV | Applies the transform to convert a target XY coordinate to Brush UV space. |





### Static Methods



| Method | Description |
| --- | --- |
| FromRect | Creates an axis-aligned BrushTransform from a rectangle. |


            
