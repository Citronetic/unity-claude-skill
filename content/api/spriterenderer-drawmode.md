This version of Unity is unsupported.



# [SpriteRenderer](SpriteRenderer.html).drawMode




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












                    public [SpriteDrawMode](SpriteDrawMode.html) drawMode;






### Description



The current draw mode of the Sprite Renderer.





When the drawMode is set to [SpriteDrawMode.Sliced](SpriteDrawMode.Sliced.html) or [SpriteDrawMode.Tiled](SpriteDrawMode.Tiled.html), the SpriteRenderer
        will render the sprite as a 9-slice image.

        [Image: image]
        A 9-Slice image is where an image is divided into 9 portion.

        The A, C, G and I section sizes will not be affected by the dimension of set by [SpriteRenderer.size](SpriteRenderer-size.html).

        The B and H section will be repeated horizontally.

        The D and F section will be repeated vertically.

        The E section will be stretched or repeated both horizontally or vertically.

        When set to [SpriteDrawMode.Sliced](SpriteDrawMode.Sliced.html), the B, D, E, F, H section will be stretched to fit the dimension
        [Image: image]

        When set to [SpriteDrawMode.Tiled](SpriteDrawMode.Tiled.html), the B, D, E, F, H section will be repeated to fit the dimension
        [Image: image]


            
