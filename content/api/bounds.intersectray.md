This version of Unity is unsupported.



# [Bounds](Bounds.html).IntersectRay




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

public bool IntersectRay([Ray](Ray.html) ray);






### Description



Does `ray` intersect this bounding box?


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Function to detect if a ray (representing a beam weapon, say)
    // makes contact with the collider's bounds.    Collider myCollider;    void Start()
    {
        // Store a reference to the collider once at startup.
        myCollider = GetComponent<Collider>();
    }    bool DetectHit(Ray ray)
    {
        return myCollider.bounds.IntersectRay(ray);
    }
}
```




---








## Declaration

public bool IntersectRay([Ray](Ray.html) ray,
out float distance);






### Description



Does `ray` intersect this bounding box?





When the function returns true, the distance to the ray's origin will be returned in the `distance` parameter.


            
