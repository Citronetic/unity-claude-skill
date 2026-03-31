This version of Unity is unsupported.



# [SparseTexture](SparseTexture.html).UnloadTile




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

public void UnloadTile(int tileX,
int tileY,
int miplevel);






### Parameters



| Parameter | Description |
| --- | --- |
| tileX | Tile X coordinate. |
| tileY | Tile Y coordinate. |
| miplevel | Mipmap level of the texture. |





### Description



Unload sparse texture tile.





This function removes a tile at (tileX,tileY) coordinates from memory. If a tile is not present, then this function does nothing.

Additional resources: [UpdateTile](SparseTexture.UpdateTile.html).


            
