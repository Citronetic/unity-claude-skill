This version of Unity is unsupported.



# [Physics](Physics.html).SphereCast




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

public static bool SphereCast([Vector3](Vector3.html) origin,
float radius,
[Vector3](Vector3.html) direction,
out [RaycastHit](RaycastHit.html) hitInfo,
float maxDistance = Mathf.Infinity,
int layerMask = DefaultRaycastLayers,
[QueryTriggerInteraction](QueryTriggerInteraction.html) queryTriggerInteraction = QueryTriggerInteraction.UseGlobal);






### Parameters



| Parameter | Description |
| --- | --- |
| origin | The center of the sphere at the start of the sweep. |
| radius | The radius of the sphere. |
| direction | The direction into which to sweep the sphere. |
| hitInfo | If true is returned, hitInfo will contain more information about where the collider was hit. (Additional resources: RaycastHit). |
| maxDistance | The max length of the cast. |
| layerMask | A Layer mask that is used to selectively filter which colliders are considered when casting a sphere. |
| queryTriggerInteraction | Specifies whether this query should hit Triggers. |





### Returns



**bool**
        True when the sphere sweep intersects any collider, otherwise false.





### Description



Casts a sphere along a ray and returns detailed information on what was hit.





This is useful when a Raycast does not give enough precision, because you want to find out if an object of a specific size,
such as a character, will be able to move somewhere without colliding with anything on the way.
Think of the sphere cast like a thick raycast.  In this case the ray is specified by a start vector and a
direction.

**Notes:** SphereCast will not detect colliders for which the sphere overlaps the collider. Passing a zero radius results in undefined output and doesn't always behave the same as [Physics.Raycast](Physics.Raycast.html).

**Notes:** hit.normal from a [Physics.SphereCast](Physics.SphereCast.html) does not always represent the surface normal. It is often the direction from the contact point to the center of the sphere. This can be misleading if you're using it for sliding, bouncing, or aligning objects. Consider using a [Physics.Raycast](Physics.Raycast.html) if you need the true surface normal.

Additional resources: [Physics.SphereCastAll](Physics.SphereCastAll.html), [Physics.CapsuleCast](Physics.CapsuleCast.html), [Physics.Raycast](Physics.Raycast.html), [Rigidbody.SweepTest](Rigidbody.SweepTest.html).


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    CharacterController charCtrl;    void Start()
    {
        charCtrl = GetComponent<CharacterController>();
    }    void Update()
    {
        RaycastHit hit;        Vector3 p1 = transform.position + charCtrl.center;
        float distanceToObstacle = 0;        // Cast a sphere wrapping character controller 10 meters forward
        // to see if it is about to hit anything.
        if (Physics.SphereCast(p1, charCtrl.height / 2, transform.forward, out hit, 10))
        {
            distanceToObstacle = hit.distance;
        }
    }
}
```




---








## Declaration

public static bool SphereCast([Ray](Ray.html) ray,
float radius,
float maxDistance = Mathf.Infinity,
int layerMask = DefaultRaycastLayers,
[QueryTriggerInteraction](QueryTriggerInteraction.html) queryTriggerInteraction = QueryTriggerInteraction.UseGlobal);






### Parameters



| Parameter | Description |
| --- | --- |
| ray | The starting point and direction of the ray into which the sphere sweep is cast. |
| radius | The radius of the sphere. |
| maxDistance | The max length of the cast. |
| layerMask | A Layer mask that is used to selectively filter which colliders are considered when casting a sphere. |
| queryTriggerInteraction | Specifies whether this query should hit Triggers. |





### Returns



**bool**
        True when the sphere sweep intersects any collider, otherwise false.





### Description



Casts a sphere along a ray and returns detailed information on what was hit.





This is useful when a Raycast does not give enough precision, because you want to find out if an object of a specific size,
such as a character, will be able to move somewhere without colliding with anything on the way.
Think of the sphere cast like a thick raycast.

Additional resources: [Physics.SphereCastAll](Physics.SphereCastAll.html), [Physics.CapsuleCast](Physics.CapsuleCast.html), [Physics.Raycast](Physics.Raycast.html), [Rigidbody.SweepTest](Rigidbody.SweepTest.html).




---








## Declaration

public static bool SphereCast([Ray](Ray.html) ray,
float radius,
out [RaycastHit](RaycastHit.html) hitInfo,
float maxDistance = Mathf.Infinity,
int layerMask = DefaultRaycastLayers,
[QueryTriggerInteraction](QueryTriggerInteraction.html) queryTriggerInteraction = QueryTriggerInteraction.UseGlobal);






### Parameters



| Parameter | Description |
| --- | --- |
| ray | The starting point and direction of the ray into which the sphere sweep is cast. |
| radius | The radius of the sphere. |
| hitInfo | If true is returned, hitInfo will contain more information about where the collider was hit. (Additional resources: RaycastHit). |
| maxDistance | The max length of the cast. |
| layerMask | A Layer mask that is used to selectively filter which colliders are considered when casting a sphere. |
| queryTriggerInteraction | Specifies whether this query should hit Triggers. |





### Description




            
