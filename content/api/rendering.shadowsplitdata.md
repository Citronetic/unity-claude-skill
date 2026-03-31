This version of Unity is unsupported.



# ShadowSplitData





struct in
          UnityEngine.Rendering



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Describes the culling information for a given shadow split (e.g. directional cascade).





### Static Properties



| Property | Description |
| --- | --- |
| maximumCullingPlaneCount | The maximum number of culling planes. |





### Properties



| Property | Description |
| --- | --- |
| cullingMatrix | The model view projection matrix Unity uses to cull objects it renders into this shadow map. |
| cullingNearPlane | The near plane distance that Unity uses to cull objects. Unity transforms the objects with ShadowSplitData.cullingMatrix, and then culls the ones that are farther than the near plane distance. |
| cullingPlaneCount | The number of culling planes. |
| cullingSphere | The culling sphere.  The first three components of the vector describe the sphere center, and the last component specifies the radius. |
| shadowCascadeBlendCullingFactor | A multiplier applied to the radius of the culling sphere.Values must be in the range 0 to 1. With higher values, Unity culls more objects. Lower makes the cascades share more rendered objects. Using lower values allows blending between different cascades as they then share objects. |





### Public Methods



| Method | Description |
| --- | --- |
| GetCullingPlane | Gets a culling plane. |
| SetCullingPlane | Sets a culling plane. |


            
