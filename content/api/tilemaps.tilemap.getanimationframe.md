This version of Unity is unsupported.



# [Tilemap](Tilemaps.Tilemap.html).GetAnimationFrame




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

public int GetAnimationFrame([Vector3Int](Vector3Int.html) position);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Grid cell position. |





### Returns



**int**
        Returns the current animation frame. Returns -1 when there is no animation for the Tile at the given position.





### Description



Retrieves the current animation frame for a Tile at the given position.





This method returns the current animation frame for a Tile at the given position. If there is no animation for the Tile at the given position, then this returns -1.


            
