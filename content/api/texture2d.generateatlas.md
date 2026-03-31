This version of Unity is unsupported.



# [Texture2D](Texture2D.html).GenerateAtlas




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

public static bool GenerateAtlas(Vector2[] sizes,
int padding,
int atlasSize,
List<Rect> results);






### Parameters



| Parameter | Description |
| --- | --- |
| sizes | An array of rectangle dimensions. |
| padding | Amount of padding to insert between adjacent rectangles in the atlas. |
| atlasSize | The size of the atlas. |
| results | If the function succeeds, Unity populates this with the packed rectangles. |





### Returns



**bool**
        Returns `true` if the function succeeds. Otherwise, returns `false`.





### Description



Packs a set of rectangles into a square atlas, with optional padding between rectangles.





Additional resources: [PackTextures](Texture2D.PackTextures.html).


            
