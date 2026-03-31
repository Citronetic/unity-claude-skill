This version of Unity is unsupported.



# [TerrainExtensions](TerrainExtensions.html).UpdateGIMaterials




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

public static void UpdateGIMaterials([Terrain](Terrain.html) terrain);






## Declaration

public static void UpdateGIMaterials([Terrain](Terrain.html) terrain,
int x,
int y,
int width,
int height);






### Description



Schedules an update of the albedo and emissive Textures of a system that contains the Terrain.





The second overload specifies a region of the Terrain that needs to be updated. This makes sure that only the systems that overlap with the specified rectangle get updated, which could help improve performance. The coordinates are specified the same way as in [TerrainData.SetAlphamaps](TerrainData.SetAlphamaps.html).


            
