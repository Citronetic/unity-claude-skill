This version of Unity is unsupported.



# [TerrainPaintUtility](TerrainTools.TerrainPaintUtility.html).GetTerrainAlphaMapChecked




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

public static [Texture2D](Texture2D.html) GetTerrainAlphaMapChecked([Terrain](Terrain.html) terrain,
int mapIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| terrain | Terrain tile. |
| mapIndex | Index to retrieve. |





### Returns



**Texture2D**
        Alphamap texture at mapIndex.





### Description



Returns the alphamap texture at mapIndex.





This function will throw an exception if the map index is out of range.


            
