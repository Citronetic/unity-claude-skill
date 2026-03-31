This version of Unity is unsupported.



# Bounds Constructor




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

public Bounds([Vector3](Vector3.html) center,
[Vector3](Vector3.html) size);






### Parameters



| Parameter | Description |
| --- | --- |
| center | The location of the origin of the Bounds. |
| size | The dimensions of the Bounds. |





### Description



Creates a new Bounds.





Create a new Bounds with the given center and total size. Bound extents
        will be half the given size.


              


```
// Create bounding box centered at the origin
using UnityEngine;
using System.Collections;public class Example : MonoBehaviour
{
    Bounds b;    void Start()
    {
        b = new Bounds(new Vector3(0, 0, 0), new Vector3(1, 2, 1));
    }
}
```





When no parameters are given to the constructor, the bounds created
        has a center of (0,0,0) and an extent of (0,0,0).


            
