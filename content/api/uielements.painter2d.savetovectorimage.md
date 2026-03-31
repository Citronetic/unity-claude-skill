This version of Unity is unsupported.



# [Painter2D](UIElements.Painter2D.html).SaveToVectorImage




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

public bool SaveToVectorImage([UIElements.VectorImage](UIElements.VectorImage.html) vectorImage);






### Parameters



| Parameter | Description |
| --- | --- |
| vectorImage | The VectorImage object that will be initialized with this painter. This object should not be null. |





### Returns



**bool**
        True if the VectorImage initialization succeeded. False otherwise.





### Description



Saves the content of this [Painter2D](UIElements.Painter2D.html) to a [VectorImage](UIElements.VectorImage.html) object.





The size and content of the vector image will be determined from the bounding-box of the visible content of the painter object.
 Any offset of the visible content will not be saved in the vector image.


            
