This version of Unity is unsupported.



# Rect Constructor




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

public Rect(float x,
float y,
float width,
float height);






### Parameters



| Parameter | Description |
| --- | --- |
| x | The X value the rect is measured from. |
| y | The Y value the rect is measured from. |
| width | The width of the rectangle. |
| height | The height of the rectangle. |





### Description



Creates a new rectangle.


              


```
using UnityEngine;public class RectExample : MonoBehaviour
{
    void Start()
    {
        Rect rect = new Rect(0, 0, 10, 10);        // prints: (x:0, y:0, width:10, height:10)
        Debug.Log(rect);
    }
}
```





Note: Rect represents an abstract rectangle, and can be used in a variety of situations. As such, Rects don't have an explicit top, bottom, left or right. For example, Y values in Camera space are measured from the bottom of the screen, but Y values in Editor GUI space are measured from the top of the window, therefore whether the Y value of a Rect is its "top" or "bottom" will vary depending on where you use the Rect value. You can refer to the corners by using [Rect.min](Rect-min.html) and [Rect.max](Rect-max.html).




---








## Declaration

public Rect([Vector2](Vector2.html) position,
[Vector2](Vector2.html) size);






### Parameters



| Parameter | Description |
| --- | --- |
| position | The position of the minimum corner of the rect. |
| size | The width and height of the rect. |





### Description



Creates a rectangle given a size and position.





This form of the constructor is convenient when you are already working with Vector2 values.


            
