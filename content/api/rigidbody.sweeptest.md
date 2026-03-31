This version of Unity is unsupported.



# [Rigidbody](Rigidbody.html).SweepTest




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




                [Switch to Manual](../Manual/class-Rigidbody.html)










## Declaration

public bool SweepTest([Vector3](Vector3.html) direction,
out [RaycastHit](RaycastHit.html) hitInfo,
float maxDistance = Mathf.Infinity,
[QueryTriggerInteraction](QueryTriggerInteraction.html) queryTriggerInteraction = QueryTriggerInteraction.UseGlobal);






### Parameters



| Parameter | Description |
| --- | --- |
| direction | The direction into which to sweep the rigidbody. |
| hitInfo | If true is returned, hitInfo will contain more information about where the collider was hit (Additional resources: RaycastHit). |
| maxDistance | The length of the sweep. |
| queryTriggerInteraction | Specifies whether this query should hit Triggers. |





### Returns



**bool**
        True when the rigidbody sweep intersects any collider, otherwise false.





### Description



Tests if a rigidbody would collide with anything, if it was moved through the Scene.





Tests if a rigidbody would collide with anything, if it was moved through the Scene.
This is similar to doing a [Physics.Raycast](Physics.Raycast.html) for all points contained in any of a Rigidbody's colliders and returning the closest of all hits (if any) reported. This is useful for AI code, say if you need to know that an object would fit through a gap without colliding with anything.

Note that this function only works when a primitive collider type (sphere, cube or capsule) or a convex mesh is attached to the rigidbody object - concave mesh colliders will not work, although they can be detected in the Scene by the sweep.

Additional resources: [Physics.SphereCast](Physics.SphereCast.html), [Physics.CapsuleCast](Physics.CapsuleCast.html), [Rigidbody.SweepTestAll](Rigidbody.SweepTestAll.html).


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public float collisionCheckDistance;
    public bool aboutToCollide;
    public float distanceToCollision;
    public Rigidbody rb;    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }    void Update()
    {
        RaycastHit hit;
        if (rb.SweepTest(transform.forward, out hit, collisionCheckDistance))
        {
            aboutToCollide = true;
            distanceToCollision = hit.distance;
        }
    }
}
```


            
