This version of Unity is unsupported.



# NavMeshBuildDebugFlags





enumeration


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



Bitmask used for operating with debug data from the NavMesh build process.





Used in two situations:



          - within [NavMeshBuildSettings.debug](AI.NavMeshBuildSettings-debug.html) to specify which debug data to retain after the build process has completed, preserving the world position and orientation;

          - as a parameter of [NavMeshEditorHelpers.DrawBuildDebug](AI.NavMeshEditorHelpers.DrawBuildDebug.html) to control which of the available debug data types to display for a specified NavMesh.





Additional resources: [NavMeshBuildSettings](AI.NavMeshBuildSettings.html).





### Properties



| Property | Description |
| --- | --- |
| None | No debug data from the NavMesh build process is taken into consideration. |
| InputGeometry | The triangles of all the geometry that is used as a base for computing the new NavMesh. |
| Voxels | The voxels produced by rasterizing the source geometry into walkable and unwalkable areas. |
| Regions | The segmentation of the traversable surfaces into smaller areas necessary for producing simple polygons. |
| RawContours | The contours that follow precisely the edges of each surface region. |
| SimplifiedContours | Contours bounding each of the surface regions, described through fewer vertices and straighter edges compared to RawContours. |
| PolygonMeshes | Meshes of convex polygons constructed within the unified contours of adjacent regions. |
| PolygonMeshesDetail | The triangulated meshes with height details that better approximate the source geometry. |
| All | All debug data from the NavMesh build process is taken into consideration. |


            
