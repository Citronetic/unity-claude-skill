This version of Unity is unsupported.



# [SpriteAtlas](U2D.SpriteAtlas.html).GetSprites




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

public int GetSprites(Sprite[] sprites);






### Parameters



| Parameter | Description |
| --- | --- |
| sprites | Array of Sprite that will be filled. |





### Returns



**int**
        The size of the returned array.





### Description



Clone all the [Sprite](Sprite.html) in this atlas and fill them into the supplied array.





The array will not be resized if it doesn't contain enough elements to be filled. Please use [SpriteAtlas.spriteCount](U2D.SpriteAtlas-spriteCount.html) to determine the size for the array.

Due to the nature of the packing algorithm, Sprites in this list are sorted by their area size, in descending order.




---








## Declaration

public int GetSprites(Sprite[] sprites,
string name);






### Parameters



| Parameter | Description |
| --- | --- |
| sprites | Array of Sprite that will be filled. |
| name | The name of the Sprite. |





### Description



Clone all the [Sprite](Sprite.html) matching the name in this atlas and fill them into the supplied array.


            
