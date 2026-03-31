This version of Unity is unsupported.



# [TerrainCallbacks](TerrainCallbacks.html).HeightmapChangedCallback




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

public delegate void HeightmapChangedCallback([Terrain](Terrain.html) terrain,
[RectInt](RectInt.html) heightRegion,
bool synched);






### Parameters



| Parameter | Description |
| --- | --- |
| terrain | The Terrain object that references a changed TerrainData asset. |
| heightRegion | The heightmap region that changed, in samples. |
| synched | Indicates whether the changes were fully synchronized back to CPU memory. |





### Description



Use this delegate type with [heightmapChanged](TerrainCallbacks-heightmapChanged.html) to monitor all changes to the Terrain heightmap.


            
