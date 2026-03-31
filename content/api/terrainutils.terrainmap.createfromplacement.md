This version of Unity is unsupported.



# [TerrainMap](TerrainUtils.TerrainMap.html).CreateFromPlacement(Terrain,System.Predicate<Terrain>,bool)




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
| originTerrain | Defines the grid origin and size, as well as group id if no filter is specified. |
| gridOrigin | Origin of the grid. |
| gridSize | Size of the grid. Typically takes the terrain size.x and size.z. |
| filter | Filter to be applied when populating the map. If null, the filter will fall back to matching terrains in the same group as the origin. |
| fullValidation | Validate the Terrain map. Default is true. |





### Returns



**void**
        The resulting Terrain map. Can return null when no Terrain objects pass the filter.





### Description



Creates a [TerrainMap](TerrainUtils.TerrainMap.html) from the positions of all active Terrains.





Creates a [TerrainMap](TerrainUtils.TerrainMap.html) of all the loaded Terrain objects that pass the filter validation.


            
