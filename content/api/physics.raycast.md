This version of Unity is unsupported.



# [Physics](Physics.html).Raycast




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

public static bool Raycast([Vector3](Vector3.html) origin,
[Vector3](Vector3.html) direction,
float maxDistance = Mathf.Infinity,
int layerMask = DefaultRaycastLayers,
[QueryTriggerInteraction](QueryTriggerInteraction.html) queryTriggerInteraction = QueryTriggerInteraction.UseGlobal);






### Parameters



| Parameter | Description |
| --- | --- |
| origin | The starting point of the ray in world coordinates. |
| direction | The direction of the ray. |
| maxDistance | The max distance the ray should check for collisions. |
| layerMask | A Layer mask that is used to selectively filter which colliders are considered when casting a ray. |
| queryTriggerInteraction | Specifies whether this query should hit Triggers. |





### Returns



**bool**
        Returns true if the ray intersects with a Collider, otherwise false.





### Description



Casts a ray, from point `origin`, in direction `direction`, of length `maxDistance`, against all colliders in the Scene.





To select which layers a ray should collide with, use a [LayerMask](LayerMask.html).

Specifying `queryTriggerInteraction` allows you to control whether or not Trigger colliders generate a hit, or whether to use the global [Physics.queriesHitTriggers](Physics-queriesHitTriggers.html) setting.

**Notes:** Raycasts will not detect Colliders for which the Raycast origin is inside the Collider. In all these examples [FixedUpdate](PlayerLoop.FixedUpdate.html) is used rather than [Update](PlayerLoop.Update.html). Refer to [Order of execution for event functions](../Manual/execution-order.html) to understand the difference between [Update](PlayerLoop.Update.html) and [FixedUpdate](PlayerLoop.FixedUpdate.html), and to see how they relate to physics queries.


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    LayerMask layerMask;    void Awake()
    {
        layerMask = LayerMask.GetMask("Wall", "Character");
    }

    // See Order of Execution for Event Functions for information on FixedUpdate() and Update() related to physics queries
    void FixedUpdate()
    {        RaycastHit hit;
        // Does the ray intersect any objects excluding the player layer
        if (Physics.Raycast(transform.position, transform.TransformDirection(Vector3.forward), out hit, Mathf.Infinity, layerMask))        {
            Debug.DrawRay(transform.position, transform.TransformDirection(Vector3.forward) * hit.distance, Color.yellow);
            Debug.Log("Did Hit");
        }
        else
        {
            Debug.DrawRay(transform.position, transform.TransformDirection(Vector3.forward) * 1000, Color.white);
            Debug.Log("Did not Hit");
        }    }
}
```





This example creates a simple Raycast, projecting forwards from the position of the object's current position, extending for 10 units.


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    // See Order of Execution for Event Functions for information on FixedUpdate() and Update() related to physics queries
    void FixedUpdate()
    {
        Vector3 fwd = transform.TransformDirection(Vector3.forward);        if (Physics.Raycast(transform.position, fwd, 10))
            print("There is something in front of the object!");
    }
}
```




---








## Declaration

public static bool Raycast([Vector3](Vector3.html) origin,
[Vector3](Vector3.html) direction,
out [RaycastHit](RaycastHit.html) hitInfo,
float maxDistance,
int layerMask,
[QueryTriggerInteraction](QueryTriggerInteraction.html) queryTriggerInteraction);






### Parameters



| Parameter | Description |
| --- | --- |
| origin | The starting point of the ray in world coordinates. |
| direction | The direction of the ray. |
| hitInfo | If true is returned, hitInfo will contain more information about where the closest collider was hit. (Additional resources: RaycastHit). |
| maxDistance | The max distance the ray should check for collisions. |
| layerMask | A Layer mask that is used to selectively filter which colliders are considered when casting a ray. |
| queryTriggerInteraction | Specifies whether this query should hit Triggers. |





### Returns



**bool**
        Returns true when the ray intersects any collider, otherwise false.





### Description



Casts a ray against all colliders in the Scene and returns detailed information on what was hit.





This example reports the distance between the current object and the reported Collider:


              


```
using UnityEngine;public class RaycastExample : MonoBehaviour
{
    // See Order of Execution for Event Functions for information on FixedUpdate() and Update() related to physics queries
    void FixedUpdate()
    {
        RaycastHit hit;        if (Physics.Raycast(transform.position, -Vector3.up, out hit))
            print("Found an object - distance: " + hit.distance);
    }
}
```





This example re-introduces the `maxDistance` parameter to limit how far ahead to cast the Ray:


              


```
using UnityEngine;public class RaycastExample : MonoBehaviour
{
    // See Order of Execution for Event Functions for information on FixedUpdate() and Update() related to physics queries
    void FixedUpdate()
    {
        RaycastHit hit;        if (Physics.Raycast(transform.position, -Vector3.up, out hit, 100.0f))
            print("Found an object - distance: " + hit.distance);
    }
}
```




---








## Declaration

public static bool Raycast([Ray](Ray.html) ray,
float maxDistance = Mathf.Infinity,
int layerMask = DefaultRaycastLayers,
[QueryTriggerInteraction](QueryTriggerInteraction.html) queryTriggerInteraction = QueryTriggerInteraction.UseGlobal);






### Parameters



| Parameter | Description |
| --- | --- |
| ray | The starting point and direction of the ray. |
| maxDistance | The max distance the ray should check for collisions. |
| layerMask | A Layer mask that is used to selectively filter which colliders are considered when casting a ray. |
| queryTriggerInteraction | Specifies whether this query should hit Triggers. |





### Returns



**bool**
        Returns true when the ray intersects any collider, otherwise false.





### Description



Same as above using `ray.origin` and `ray.direction` instead of `origin` and `direction`.


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    // See Order of Execution for Event Functions for information on FixedUpdate() and Update() related to physics queries
    void FixedUpdate()
    {
        Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
        if (Physics.Raycast(ray, 100))
            print("Hit something!");
    }
}
```




---








## Declaration

public static bool Raycast([Ray](Ray.html) ray,
out [RaycastHit](RaycastHit.html) hitInfo,
float maxDistance = Mathf.Infinity,
int layerMask = DefaultRaycastLayers,
[QueryTriggerInteraction](QueryTriggerInteraction.html) queryTriggerInteraction = QueryTriggerInteraction.UseGlobal);






### Parameters



| Parameter | Description |
| --- | --- |
| ray | The starting point and direction of the ray. |
| hitInfo | If true is returned, hitInfo will contain more information about where the closest collider was hit. (Additional resources: RaycastHit). |
| maxDistance | The max distance the ray should check for collisions. |
| layerMask | A Layer mask that is used to selectively filter which colliders are considered when casting a ray. |
| queryTriggerInteraction | Specifies whether this query should hit Triggers. |





### Returns



**bool**
        Returns true when the ray intersects any collider, otherwise false.





### Description



Same as above using `ray.origin` and `ray.direction` instead of `origin` and `direction`.





This example draws a line along the length of the Ray whenever a collision is detected:


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    // See Order of Execution for Event Functions for information on FixedUpdate() and Update() related to physics queries
    void FixedUpdate()
    {
        Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
        RaycastHit hit;        if (Physics.Raycast(ray, out hit, 100))
            Debug.DrawLine(ray.origin, hit.point);
    }
}
```


            
