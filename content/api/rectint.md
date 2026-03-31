This version of Unity is unsupported.



# RectInt





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



A 2D Rectangle defined by x, y, width, height with integers.





### Static Properties



| Property | Description |
| --- | --- |
| zero | Shorthand for writing new RectInt(0,0,0,0). |





### Properties



| Property | Description |
| --- | --- |
| allPositionsWithin | A RectInt.PositionCollection that contains all positions within the RectInt. |
| center | Center coordinate of the rectangle. |
| height | Height of the rectangle. |
| max | The upper right corner of the rectangle; which is the maximal position of the rectangle along the x- and y-axes, when it is aligned to both axes. |
| min | The lower left corner of the rectangle; which is the minimal position of the rectangle along the x- and y-axes, when it is aligned to both axes. |
| position | Returns the position (x, y) of the RectInt. |
| size | Returns the width and height of the RectInt. |
| width | Width of the rectangle. |
| x | Left coordinate of the rectangle. |
| xMax | Shows the maximum X value of the RectInt. |
| xMin | Shows the minimum X value of the RectInt. |
| y | Top coordinate of the rectangle. |
| yMax | Shows the maximum Y value of the RectInt. |
| yMin | Show the minimum Y value of the RectInt. |





### Constructors



| Constructor | Description |
| --- | --- |
| RectInt | Creates a new RectInt. |





### Public Methods



| Method | Description |
| --- | --- |
| ClampToBounds | Clamps the position and size of the RectInt to the given bounds. |
| Contains | Returns true if the given position is within the RectInt. |
| Equals | Returns true if the given RectInt is equal to this RectInt. |
| Overlaps | RectInts overlap if each RectInt Contains a shared point. |
| SetMinMax | Sets the bounds to the min and max value of the rect. |
| ToString | Returns the x, y, width and height of the RectInt. |





### Operators



| Operator | Description |
| --- | --- |
| operator == | Returns true if the rectangles are the same. |


            
