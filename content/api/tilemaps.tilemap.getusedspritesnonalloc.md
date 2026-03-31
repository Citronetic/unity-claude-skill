This version of Unity is unsupported.



# [Tilemap](Tilemaps.Tilemap.html).GetUsedSpritesNonAlloc




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

public int GetUsedSpritesNonAlloc(Sprite[] usedSprites);






### Parameters



| Parameter | Description |
| --- | --- |
| usedSprites | The array to be filled. |





### Returns



**int**
        The number of Sprites filled.





### Description



Fills the given array with the total number of different [Sprite](Sprite.html)s used in the [Tilemap](Tilemaps.Tilemap.html) and returns the number of Sprites filled.





If the size of the given array is less than the total number of Sprites used in the Tilemap, this will try to fill the array as much as possible.


            
