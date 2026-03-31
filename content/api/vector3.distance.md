This version of Unity is unsupported.



# [Vector3](Vector3.html).Distance




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

public static float Distance([Vector3](Vector3.html) a,
[Vector3](Vector3.html) b);






### Parameters



| Parameter | Description |
| --- | --- |
| a | The first three-dimensional point as a Vector3. |
| b | The second three-dimensional point as a Vector3. |





### Returns



**float**
        The scalar distance between points `a` and `b`.





### Description



Calculates the distance between two three-dimensional points.





This method calculates the shortest distance between the two input points. Both points should be defined in the same coordinate space. `Vector3.Distance(a,b)` returns the same result as `(a-b).magnitude`. The resulting value is always >= 0.


              


```
using UnityEngine;public class Vector3DistanceExample : MonoBehaviour
{
    // the first point is this transform's position
    public Transform other;    void Start()
    {
        if (other)
        {
            // the second point is the position of the MonoBehaviour's transform
            float dist = Vector3.Distance(other.position, transform.position);
            print("Distance to other: " + dist);
        }
    }
}
```


            
