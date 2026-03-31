This version of Unity is unsupported.



# [Physics](Physics.html).CapsuleCast




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

public static bool CapsuleCast([Vector3](Vector3.html) point1,
[Vector3](Vector3.html) point2,
float radius,
[Vector3](Vector3.html) direction,
float maxDistance = Mathf.Infinity,
int layerMask = DefaultRaycastLayers,
[QueryTriggerInteraction](QueryTriggerInteraction.html) queryTriggerInteraction = QueryTriggerInteraction.UseGlobal);






### Parameters



| Parameter | Description |
| --- | --- |
| point1 | The center of the sphere at the start of the capsule. |
| point2 | The center of the sphere at the end of the capsule. |
| radius | The radius of the capsule. |
| direction | The direction into which to sweep the capsule. |
| maxDistance | The max length of the sweep. |
| layerMask | A Layer mask that is used to selectively filter which colliders are considered when casting a capsule. |
| queryTriggerInteraction | Specifies whether this query should hit Triggers. |





### Returns



**bool**
        True if the capsule sweep intersects any collider, otherwise false.





### Description



Casts a capsule against all colliders in the Scene and returns detailed information on what was hit.





The capsule is defined by the two spheres with `radius` around `point1` and `point2`, which form the two ends of the capsule.
Hits are returned for the first collider which would collide against this capsule if the capsule was moved along `direction`.
This is useful when a Raycast does not give enough precision, because you want to find out if an object of a specific size,
such as a character, will be able to move somewhere without colliding with anything on the way.

**Notes:** CapsuleCast will not detect colliders for which the capsule overlaps the collider. Passing a zero radius results in undefined output and doesn't always behave the same as [Physics.Raycast](Physics.Raycast.html).

Additional resources: [Physics.SphereCast](Physics.SphereCast.html), [Physics.CapsuleCastAll](Physics.CapsuleCastAll.html), [Physics.Raycast](Physics.Raycast.html), [Rigidbody.SweepTest](Rigidbody.SweepTest.html).


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Update()
    {
        RaycastHit hit;
        CharacterController charContr = GetComponent<CharacterController>();
        Vector3 p1 = transform.position + charContr.center + Vector3.up * -charContr.height * 0.5F;
        Vector3 p2 = p1 + Vector3.up * charContr.height;
        float distanceToObstacle = 0;        // Cast character controller shape 10 meters forward to see if it is about to hit anything.
        if (Physics.CapsuleCast(p1, p2, charContr.radius, transform.forward, out hit, 10))
            distanceToObstacle = hit.distance;
    }
}
```




---








## Declaration

public static bool CapsuleCast([Vector3](Vector3.html) point1,
[Vector3](Vector3.html) point2,
float radius,
[Vector3](Vector3.html) direction,
out [RaycastHit](RaycastHit.html) hitInfo,
float maxDistance = Mathf.Infinity,
int layerMask = DefaultRaycastLayers,
[QueryTriggerInteraction](QueryTriggerInteraction.html) queryTriggerInteraction = QueryTriggerInteraction.UseGlobal);






### Parameters



| Parameter | Description |
| --- | --- |
| point1 | The center of the sphere at the start of the capsule. |
| point2 | The center of the sphere at the end of the capsule. |
| radius | The radius of the capsule. |
| direction | The direction into which to sweep the capsule. |
| maxDistance | The max length of the sweep. |
| hitInfo | If true is returned, hitInfo will contain more information about where the collider was hit. (Additional resources: RaycastHit). |
| layerMask | A Layer mask that is used to selectively filter which colliders are considered when casting a capsule. |
| queryTriggerInteraction | Specifies whether this query should hit Triggers. |





### Returns



**bool**
        True if the capsule sweep intersects any collider, otherwise false.





### Description







Casts a capsule along a ray and reports the first collider hit. In addition to checking for collisions, this overload provides detailed information about the collider hit via the out RaycastHit hitInfo parameter.
                    The capsule is defined by two spheres of `radius` centered at `point1` and `point2`. These define the start and end of the capsule’s axis. The capsule is then swept in the `direction` for a maximum distance of maxDistance.
                    This is particularly useful when you want to simulate movement of an object with volume (such as a character or a vehicle), and need to determine where, what, and how it hit something.


              


```
using UnityEngine;public class CapsuleCastExample : MonoBehaviour
{
    public Transform pointStart;
    public Transform pointEnd;
    public float radius = 0.5f;
    public float maxDistance = 10f;    void Update()
    {
        RaycastHit hit;
        Vector3 direction = transform.forward;        if (Physics.CapsuleCast(pointStart.position, pointEnd.position, radius, direction, out hit, maxDistance))
        {
            Debug.Log("Hit: " + hit.collider.name + " at " + hit.point);
        }
    }
}
```


            
