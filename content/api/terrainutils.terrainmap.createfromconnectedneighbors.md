This version of Unity is unsupported.



# [TerrainMap](TerrainUtils.TerrainMap.html).CreateFromConnectedNeighbors(Terrain,System.Predicate<Terrain>,bool)




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



















### Parameters



| Parameter | Description |
| --- | --- |
| originTerrain | Terrain that is given tile coordinate (0,0). |
| filter | Filter to apply when populating the map. If null, no filter is applied. |
| fullValidation | Validate the Terrain map. Default is true. |





### Returns



**void**
        The resulting Terrain map. Can return null when no Terrain objects pass the filter.





### Description



Creates a [TerrainMap](TerrainUtils.TerrainMap.html) from the neighbors connected to the origin Terrain.





Creates a [TerrainMap](TerrainUtils.TerrainMap.html) of all the Terrain neighbors connected to the origin Terrain that pass the filter validation.


            
