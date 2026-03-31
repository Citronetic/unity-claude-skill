This version of Unity is unsupported.



# [Rect](Rect.html).Contains




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

public bool Contains([Vector2](Vector2.html) point);






## Declaration

public bool Contains([Vector3](Vector3.html) point);






## Declaration

public bool Contains([Vector3](Vector3.html) point,
bool allowInverse);






### Parameters



| Parameter | Description |
| --- | --- |
| point | Point to test. |
| allowInverse | Does the test allow the Rect's width and height to be negative? |





### Returns



**bool**
        True if the point lies within the specified rectangle.





### Description



Returns true if the `x` and `y` components of `point` is a point inside this rectangle. If `allowInverse` is present and true, the width and height of the Rect are allowed to take negative values (ie, the min value is greater than the max), and the test will still work.


              


```
using UnityEngine;public class RectExample : MonoBehaviour
{
    void Update()
    {
        Rect rect = new Rect(0, 0, 150, 150);
        if (rect.Contains(Input.mousePosition))
            Debug.Log("Inside");
    }
}
```


            
