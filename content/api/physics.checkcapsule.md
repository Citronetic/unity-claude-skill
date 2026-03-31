This version of Unity is unsupported.



# [Physics](Physics.html).CheckCapsule




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

public static bool CheckCapsule([Vector3](Vector3.html) start,
[Vector3](Vector3.html) end,
float radius,
int layerMask = DefaultRaycastLayers,
[QueryTriggerInteraction](QueryTriggerInteraction.html) queryTriggerInteraction = QueryTriggerInteraction.UseGlobal);






### Parameters



| Parameter | Description |
| --- | --- |
| start | The center of the sphere at the start of the capsule. |
| end | The center of the sphere at the end of the capsule. |
| radius | The radius of the capsule. |
| layerMask | A Layer mask that is used to selectively filter which colliders are considered when casting a capsule. |
| queryTriggerInteraction | Specifies whether this query should hit Triggers. |





### Description



Checks if any colliders overlap a capsule-shaped volume in world space.





The capsule is defined by the two spheres with `radius` around `point1` and `point2`, which form the two ends of the capsule.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Given the start and end waypoints of a corridor, check if there is enough
    // room for an object of a certain width to pass through.
    bool CorridorIsWideEnough(Vector3 startPt, Vector3 endPt, float width)
    {
        return Physics.CheckCapsule(startPt, endPt, width);
    }
}
```


            
