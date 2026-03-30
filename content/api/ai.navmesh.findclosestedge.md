This version of Unity is unsupported.



# [NavMesh](AI.NavMesh.html).FindClosestEdge




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

public static bool FindClosestEdge([Vector3](Vector3.html) sourcePosition,
out [AI.NavMeshHit](AI.NavMeshHit.html) hit,
int areaMask);






### Parameters



| Parameter | Description |
| --- | --- |
| sourcePosition | The origin of the distance query. |
| hit | Holds the properties of the resulting location. |
| areaMask | A bitfield mask specifying which NavMesh areas can be passed when finding the nearest edge. |





### Returns



**bool**
        True if the nearest edge is found.





### Description



Locate the closest NavMesh edge from a point on the NavMesh.





The returned [NavMeshHit](AI.NavMeshHit.html) object contains the position
and details of the nearest point on the nearest edge of the
navmesh. This can be used to query how much extra space there is around the agent.


              


```
// MeasureSpace
using UnityEngine;
using UnityEngine.AI;public class MeasureSpace : MonoBehaviour
{
    void DrawCircle(Vector3 center, float radius, Color color)
    {
        Vector3 prevPos = center + new Vector3(radius, 0, 0);
        for (int i = 0; i < 30; i++)
        {
            float angle = (float)(i + 1) / 30.0f * Mathf.PI * 2.0f;
            Vector3 newPos = center + new Vector3(Mathf.Cos(angle) * radius, 0, Mathf.Sin(angle) * radius);
            Debug.DrawLine(prevPos, newPos, color);
            prevPos = newPos;
        }
    }    void Update()
    {
        NavMeshHit hit;
        if (NavMesh.FindClosestEdge(transform.position, out hit, NavMesh.AllAreas))
        {
            DrawCircle(transform.position, hit.distance, Color.red);
            Debug.DrawRay(hit.position, Vector3.up, Color.red);
        }
    }
}
```




---








## Declaration

public static bool FindClosestEdge([Vector3](Vector3.html) sourcePosition,
out [AI.NavMeshHit](AI.NavMeshHit.html) hit,
[AI.NavMeshQueryFilter](AI.NavMeshQueryFilter.html) filter);






### Parameters



| Parameter | Description |
| --- | --- |
| sourcePosition | The origin of the distance query. |
| hit | Holds the properties of the resulting location. |
| filter | A filter specifying which NavMesh areas can be passed when finding the nearest edge. |





### Returns



**bool**
        True if the nearest edge is found.





### Description



Locate the closest NavMesh edge from a point on the NavMesh, subject to the constraints of the filter argument.





The returned NavMeshHit object contains the position and details of the nearest point on the nearest edge of the NavMesh. This can be used to query how much extra space there is around the agent.


            
