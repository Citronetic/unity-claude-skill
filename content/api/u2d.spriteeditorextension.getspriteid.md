This version of Unity is unsupported.



# [SpriteEditorExtension](U2D.SpriteEditorExtension.html).GetSpriteID




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

public static GUID GetSpriteID([Sprite](Sprite.html) sprite);






### Parameters



| Parameter | Description |
| --- | --- |
| sprite | The Sprite to query. |





### Returns



**GUID**
        GUID stored in the Sprite.





### Description



Gets the Sprite's GUID.





During Sprite Asset generation, you can identify which SpriteRect was used to generate the Sprite. This is done by matching the GUID return from this method and SpriteRect.spriteID.


            
