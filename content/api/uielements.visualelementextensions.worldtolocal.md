This version of Unity is unsupported.



# [VisualElementExtensions](UIElements.VisualElementExtensions.html).WorldToLocal




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

public static [Vector2](Vector2.html) WorldToLocal([UIElements.VisualElement](UIElements.VisualElement.html) ele,
[Vector2](Vector2.html) p);






### Parameters



| Parameter | Description |
| --- | --- |
| ele | The element to use as a reference for the local space. |
| p | The point to transform, in world space. |





### Returns



**Vector2**
        A point in the local space of the element.





### Description



Transforms a point from the world space to the local space of the element.





This element needs to be attached to a panel and must have a valid [VisualElement.layout](UIElements.VisualElement-layout.html).
 Otherwise, this method might return invalid results.


 If the element's transform contains 3-D information, use
 ele.worldTransform.inverse.MultiplyPoint3x4(p) to obtain a proper 3-D transformation.




---








## Declaration

public static [Rect](Rect.html) WorldToLocal([UIElements.VisualElement](UIElements.VisualElement.html) ele,
[Rect](Rect.html) r);






### Parameters



| Parameter | Description |
| --- | --- |
| ele | The element to use as a reference for the local space. |
| r | The rectangle to transform, in world space. |





### Returns



**Rect**
        A rectangle in the local space of the element.





### Description



Transforms a rectangle from the world space to the local space of the element.





This element needs to be attached to a panel and must receive a valid [VisualElement.layout](UIElements.VisualElement-layout.html).
 Otherwise, this method may return invalid results.


            
