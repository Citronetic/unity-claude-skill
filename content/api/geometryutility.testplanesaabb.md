This version of Unity is unsupported.



# [GeometryUtility](GeometryUtility.html).TestPlanesAABB




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

public static bool TestPlanesAABB(Plane[] planes,
[Bounds](Bounds.html) bounds);






### Description



Returns true if bounds are inside the plane array.





Will return true if the bounding box is inside the planes or intersects any of the planes.

The TestPlanesAABB function uses the Plane array to test whether a bounding box is in the frustum or not.

You can use this function with CalculateFrustrumPlanes to test whether a camera's view contains an object
regardless of whether it is rendered or not.

The test is conservative and can give false positive results. A bounding box can intersect the planes outside of the frustum because the planes are infinite and extend beyond the frustum volume. A typical false positive result is produced by a big bounding box near the frustum edge or corner.

Additional resources: [GeometryUtility.CalculateFrustumPlanes](GeometryUtility.CalculateFrustumPlanes.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Detects manually if obj is being seen by the main camera    GameObject obj;
    Collider objCollider;    Camera cam;
    Plane[] planes;    void Start()
    {
        cam = Camera.main;
        planes = GeometryUtility.CalculateFrustumPlanes(cam);
        objCollider =  GetComponent<Collider>();
    }    void Update()
    {
        if (GeometryUtility.TestPlanesAABB(planes, objCollider.bounds))
        {
            Debug.Log(obj.name + " has been detected!");
        }
        else
        {
            Debug.Log("Nothing has been detected");
        }
    }
}
```


            
