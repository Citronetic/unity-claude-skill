This version of Unity is unsupported.



# [PhysicsScene](PhysicsScene.html).Raycast




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

public bool Raycast([Vector3](Vector3.html) origin,
[Vector3](Vector3.html) direction,
float maxDistance = Mathf.Infinity,
int layerMask = Physics.DefaultRaycastLayers,
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
        True if the ray intersects with a Collider, otherwise false.





### Description



Casts a ray, from point `origin`, in direction `direction`, of length `maxDistance`, against all colliders in the Scene.





You may optionally provide a [LayerMask](LayerMask.html), to filter out any Colliders you aren't interested in generating collisions with.
Specifying `queryTriggerInteraction` allows you to control whether or not Trigger colliders generate a hit, or whether to use the global [Physics.queriesHitTriggers](Physics-queriesHitTriggers.html) setting.

This example creates a simple Raycast, projecting forwards from the position of the object's current position, extending for 10 units.


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    void FixedUpdate()
    {
        // Get the current PhysicsScene
        PhysicsScene physicsScene = gameObject.scene.GetPhysicsScene();        // Define ray direction and origin
        Vector3 origin = transform.position;
        Vector3 direction = transform.TransformDirection(Vector3.forward);        // Optional: set max distance and layerMask if desired
        float maxDistance = 10f;        // Perform the raycast using the instance method
        if (physicsScene.Raycast(origin, direction, out RaycastHit hitInfo, maxDistance))
        {
            Debug.Log("There is something in front of the object in the current physics scene!" + hitInfo.point);
        }
    }
}
```




---








## Declaration

public bool Raycast([Vector3](Vector3.html) origin,
[Vector3](Vector3.html) direction,
out [RaycastHit](RaycastHit.html) hitInfo,
float maxDistance = Mathf.Infinity,
int layerMask = Physics.DefaultRaycastLayers,
[QueryTriggerInteraction](QueryTriggerInteraction.html) queryTriggerInteraction = QueryTriggerInteraction.UseGlobal);






### Parameters



| Parameter | Description |
| --- | --- |
| origin | The starting point of the ray in world coordinates. |
| direction | The direction of the ray. |
| hitInfo | If true is returned, hitInfo will contain more information about where the collider was hit. (Additional resources: RaycastHit). |
| maxDistance | The max distance the ray should check for collisions. |
| layerMask | A Layer mask that is used to selectively filter which colliders are considered when casting a ray. |
| queryTriggerInteraction | Specifies whether this query should hit Triggers. |





### Returns



**bool**
        True if the ray intersects with a Collider, otherwise false.





### Description



Casts a ray, from point `origin`, in direction `direction`, of length `maxDistance`, against all colliders in the Scene.





This method generates no garbage.


              


```
using UnityEngine;
public class RaycastExample : MonoBehaviour
{
    void FixedUpdate()
    {
        RaycastHit hit;        if (Physics.Raycast(transform.position, -Vector3.up, out hit))
            print("Found an object - distance: " + hit.distance);
    }
}
```




---








## Declaration

public int Raycast([Vector3](Vector3.html) origin,
[Vector3](Vector3.html) direction,
RaycastHit[] raycastHits,
float maxDistance = Mathf.Infinity,
int layerMask = Physics.DefaultRaycastLayers,
[QueryTriggerInteraction](QueryTriggerInteraction.html) queryTriggerInteraction = QueryTriggerInteraction.UseGlobal);






### Parameters



| Parameter | Description |
| --- | --- |
| origin | The starting point and direction of the ray. |
| direction | The direction of the ray. |
| raycastHits | The buffer to store the hits into. |
| maxDistance | The max distance the rayhit is allowed to be from the start of the ray. |
| layerMask | A Layer mask that is used to selectively filter which colliders are considered when casting a ray. |
| queryTriggerInteraction | The amount of hits stored into the results buffer. |





### Returns



**int**
        True if the ray intersects with a Collider, otherwise false.





### Description



Casts a ray, from point `origin`, in direction `direction`, of length `maxDistance`, against all colliders in the Scene.





This method generates no garbage.


            
