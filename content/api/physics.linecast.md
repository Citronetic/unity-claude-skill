This version of Unity is unsupported.



# [Physics](Physics.html).Linecast




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

public static bool Linecast([Vector3](Vector3.html) start,
[Vector3](Vector3.html) end,
int layerMask = DefaultRaycastLayers,
[QueryTriggerInteraction](QueryTriggerInteraction.html) queryTriggerInteraction = QueryTriggerInteraction.UseGlobal);






### Parameters



| Parameter | Description |
| --- | --- |
| start | Start point. |
| end | End point. |
| layerMask | A Layer mask that is used to selectively filter which colliders are considered when casting a ray. |
| queryTriggerInteraction | Specifies whether this query should hit Triggers. |





### Description



Returns true if there is any collider intersecting the line between `start` and `end`.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public Transform target;
    void Update()
    {
        if (Physics.Linecast(transform.position, target.position))
        {
            Debug.Log("blocked");
        }
    }
}
```




---








## Declaration

public static bool Linecast([Vector3](Vector3.html) start,
[Vector3](Vector3.html) end,
out [RaycastHit](RaycastHit.html) hitInfo,
int layerMask = DefaultRaycastLayers,
[QueryTriggerInteraction](QueryTriggerInteraction.html) queryTriggerInteraction = QueryTriggerInteraction.UseGlobal);






### Parameters



| Parameter | Description |
| --- | --- |
| start | Start point. |
| end | End point. |
| layerMask | A Layer mask that is used to selectively filter which colliders are considered when casting a ray. |
| queryTriggerInteraction | Specifies whether this query should hit Triggers. |
| hitInfo | If true is returned, hitInfo will contain more information about where the collider was hit. (Additional resources: RaycastHit). |





### Description



Returns true if there is any collider intersecting the line between `start` and `end`.





If true is returned, `hitInfo` will contain more information about where the collider was hit. (Additional resources: [RaycastHit](RaycastHit.html)).
[Layer mask](../Manual/Layers.html) is used to selectively ignore colliders when casting a ray.


            
