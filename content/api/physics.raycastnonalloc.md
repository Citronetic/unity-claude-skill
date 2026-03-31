This version of Unity is unsupported.



# [Physics](Physics.html).RaycastNonAlloc




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

public static int RaycastNonAlloc([Ray](Ray.html) ray,
RaycastHit[] results,
float maxDistance = Mathf.Infinity,
int layerMask = DefaultRaycastLayers,
[QueryTriggerInteraction](QueryTriggerInteraction.html) queryTriggerInteraction = QueryTriggerInteraction.UseGlobal);






### Parameters



| Parameter | Description |
| --- | --- |
| ray | The starting point and direction of the ray. |
| results | The buffer to store the hits into. |
| maxDistance | The max distance the rayhit is allowed to be from the start of the ray. |
| layerMask | A Layer mask that is used to selectively filter which colliders are considered when casting a ray. |
| queryTriggerInteraction | Specifies whether this query should hit Triggers. |





### Returns



**int**
        The amount of hits stored into the `results` buffer.





### Description



Cast a ray through the Scene and store the hits into the buffer.





Like [Physics.RaycastAll](Physics.RaycastAll.html), but generates no garbage.

The raycast query ends when there are no more hits and/or the results buffer is full. The order of the results is undefined. When a full buffer is returned it is not guaranteed that the results are the closest hits and the length of the buffer is returned. If a null buffer is passed in, no results are returned and no errors or exceptions are thrown.




---








## Declaration

public static int RaycastNonAlloc([Vector3](Vector3.html) origin,
[Vector3](Vector3.html) direction,
RaycastHit[] results,
float maxDistance = Mathf.Infinity,
int layerMask = DefaultRaycastLayers,
[QueryTriggerInteraction](QueryTriggerInteraction.html) queryTriggerInteraction = QueryTriggerInteraction.UseGlobal);






### Parameters



| Parameter | Description |
| --- | --- |
| origin | The starting point and direction of the ray. |
| results | The buffer to store the hits into. |
| direction | The direction of the ray. |
| maxDistance | The max distance the rayhit is allowed to be from the start of the ray. |
| queryTriggerInteraction | Specifies whether this query should hit Triggers. |
| layerMask | A Layer mask that is used to selectively filter which colliders are considered when casting a ray. |





### Returns



**int**
        The amount of hits stored into the `results` buffer.





### Description



Cast a ray through the Scene and store the hits into the buffer.


              


```
using UnityEngine;public class RaycastFanNonAlloc : MonoBehaviour
{
    public int rayCount = 10;                       // Number of rays in the fan
    public float angle = 60f;                       // Total spread angle in degrees
    public float maxDistance = 20f;                 // Ray length

    // The size of the array determines how many raycasts will occur
    RaycastHit[] m_Results = new RaycastHit[5];     // Reused buffer to avoid GC allocations    // See Order of Execution for Event Functions for information on FixedUpdate() and Update() related to physics queries
    void FixedUpdate()
    {
        Vector3 origin = transform.position;
        Vector3 forward = transform.forward;
        float halfAngle = angle / 2f;        for (int i = 0; i < rayCount; i++)
        {
            // Interpolate angle across the spread range
            float lerp = (float)i / (rayCount - 1);
            float currentAngle = Mathf.Lerp(-halfAngle, halfAngle, lerp);            // Rotate direction around Y axis
            Quaternion rotation = Quaternion.AngleAxis(currentAngle, Vector3.up);
            Vector3 direction = rotation * forward;            // Note: The buffer is overwritten from index 0 up to the number of hits returned. Unused slots remain unchanged.
            int hits = Physics.RaycastNonAlloc(origin, direction, m_Results, maxDistance);            if (hits > 0)
            {
                for (int j = 0; j < hits; j++)
                {
                    Debug.Log($"Ray {i} hit {m_Results[j].collider.gameObject.name}");
                    Debug.DrawLine(origin, m_Results[j].point, Color.green);
                }
            }
            else
            {
                Debug.DrawRay(origin, direction * maxDistance, Color.red);
            }
        }
    }
}
```


            
