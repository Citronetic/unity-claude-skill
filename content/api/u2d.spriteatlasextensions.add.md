This version of Unity is unsupported.



# [SpriteAtlasExtensions](U2D.SpriteAtlasExtensions.html).Add




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

public static void Add([U2D.SpriteAtlas](U2D.SpriteAtlas.html) spriteAtlas,
Object[] objects);






### Parameters



| Parameter | Description |
| --- | --- |
| objects | Array of Object to be packed into the atlas. |





### Description



Add an array of Assets to the packable objects list.





At this moment, only [Sprite](Sprite.html), [Texture2D](Texture2D.html) and the Folder are allowed to be packable objects.

 - "Sprite" will be packed directly.

 - Each "sprite" in the "Texture2D" will be packed.

 - Folder will be traversed. Each "Texture2D" child will be packed. Sub folder will be traversed.


            
