This version of Unity is unsupported.



# Rect





struct in
          UnityEngine



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



















### Description



A 2D Rectangle defined by X and Y position, width and height.





Unity uses a number of 2D coordinate spaces, most of which define X as increasing to the right, and Y increasing upwards.
 The one exception is in the GUI and GUILayout classes, where Y increases downwards.

The following examples are illustrated in GUI space, where (0,0) represents the top-left corner and Y increases downwards.

Rectangles can be specified in two different ways. The first is with an [x](Rect-x.html) and [y](Rect-y.html) position and a [width](Rect-width.html) and [height](Rect-height.html):

[Image: image]

The previous image illustrates a rectangle formed by defining `x` and `y` and then extending `x` by `width` and `y` by `height` to form the rectangle's edges.

The other way is with the X and Y coordinates of each of its edges. These are called [xMin](Rect-xMin.html), [xMax](Rect-xMax.html), [yMin](Rect-yMin.html) and [yMax](Rect-yMax.html):

[Image: image]

The previous image illustrates a rectangle formed by defining `xMin`, `xMax`, `yMin` and `yMax` as the extreme points of the rectangle's edges.

Note that although `x` and `y` have the same values as `xMin` and `yMin`, they behave differently when you set them. Setting `x` or `y` changes the position of the rectangle, but preserves its size:

[Image: image]

In the previous image a rectangle remains the same size but shifts right when its `x` property increases.

Setting any of `xMin`, `xMax`, `yMin` and `yMax` will resize the rectangle, but preserve the position of the opposite edge:

[Image: image]

In the previous image, the value of `xMin` increases while `xMax` remains unchanged, which resizes the rectangle by reducing its width.

Additional resources: [GUI Scripting Guide](../Manual/gui-Basics.html), [Camera.rect](Camera-rect.html), [Camera.pixelRect](Camera-pixelRect.html).





### Static Properties



| Property | Description |
| --- | --- |
| zero | Shorthand for writing new Rect(0,0,0,0). |





### Properties



| Property | Description |
| --- | --- |
| center | The position of the center of the rectangle. |
| height | The height of the rectangle, measured from the Y position. |
| max | The position of the maximum corner of the rectangle. |
| min | The position of the minimum corner of the rectangle. |
| position | The X and Y position of the rectangle. |
| size | The width and height of the rectangle. |
| width | The width of the rectangle, measured from the X position. |
| x | The X coordinate of the rectangle. |
| xMax | The maximum X coordinate of the rectangle. |
| xMin | The minimum X coordinate of the rectangle. |
| y | The Y coordinate of the rectangle. |
| yMax | The maximum Y coordinate of the rectangle. |
| yMin | The minimum Y coordinate of the rectangle. |





### Constructors



| Constructor | Description |
| --- | --- |
| Rect | Creates a new rectangle. |





### Public Methods



| Method | Description |
| --- | --- |
| Contains | Returns true if the x and y components of point is a point inside this rectangle. If allowInverse is present and true, the width and height of the Rect are allowed to take negative values (ie, the min value is greater than the max), and the test will still work. |
| Overlaps | Returns true if the other rectangle overlaps this one. If allowInverse is present and true, the widths and heights of the Rects are allowed to take negative values (ie, the min value is greater than the max), and the test will still work. |
| Set | Set components of an existing Rect. |
| ToString | Returns a formatted string for this Rect. |





### Static Methods



| Method | Description |
| --- | --- |
| MinMaxRect | Creates a rectangle from min/max coordinate values. |
| NormalizedToPoint | Returns a point inside a rectangle, given normalized coordinates. |
| PointToNormalized | Returns the normalized coordinates corresponding to the point. |





### Operators



| Operator | Description |
| --- | --- |
| operator == | Returns true if the rectangles are the same. |


            
