This version of Unity is unsupported.



# [Physics](Physics.html).BoxCast




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

public static bool BoxCast([Vector3](Vector3.html) center,
[Vector3](Vector3.html) halfExtents,
[Vector3](Vector3.html) direction,
[Quaternion](Quaternion.html) orientation = Quaternion.identity,
float maxDistance = Mathf.Infinity,
int layerMask = DefaultRaycastLayers,
[QueryTriggerInteraction](QueryTriggerInteraction.html) queryTriggerInteraction = QueryTriggerInteraction.UseGlobal);






### Parameters



| Parameter | Description |
| --- | --- |
| center | Center of the box. |
| halfExtents | Half the size of the box in each dimension. |
| direction | The direction in which to cast the box. |
| orientation | Rotation of the box. |
| maxDistance | The max length of the cast. |
| layerMask | A Layer mask that is used to selectively filter which colliders are considered when casting a box. |
| queryTriggerInteraction | Specifies whether this query should hit Triggers. |





### Returns



**bool**
        True, if any intersections were found.





### Description



Casts the box along a ray and returns detailed information on what was hit.




---








## Declaration

public static bool BoxCast([Vector3](Vector3.html) center,
[Vector3](Vector3.html) halfExtents,
[Vector3](Vector3.html) direction,
out [RaycastHit](RaycastHit.html) hitInfo,
[Quaternion](Quaternion.html) orientation = Quaternion.identity,
float maxDistance = Mathf.Infinity,
int layerMask = DefaultRaycastLayers,
[QueryTriggerInteraction](QueryTriggerInteraction.html) queryTriggerInteraction = QueryTriggerInteraction.UseGlobal);






### Parameters



| Parameter | Description |
| --- | --- |
| center | Center of the box. |
| halfExtents | Half the size of the box in each dimension. |
| direction | The direction in which to cast the box. |
| hitInfo | If true is returned, hitInfo will contain more information about where the collider was hit. (Additional resources: RaycastHit). |
| orientation | Rotation of the box. |
| maxDistance | The max length of the cast. |
| layerMask | A Layer mask that is used to selectively filter which colliders are considered when casting a box. |
| queryTriggerInteraction | Specifies whether this query should hit Triggers. |





### Returns



**bool**
        True, if any intersections were found.





### Description



Casts the box along a ray and returns detailed information on what was hit.


              


```
//Attach this script to a GameObject. Make sure it has a Collider component by clicking the Add Component button. Then click Physics>Box Collider to attach a Box Collider component.
//This script creates a BoxCast in front of the GameObject and outputs a message if another Collider is hit with the Collider’s name.
//It also draws where the ray and BoxCast extends to. Just press the Gizmos button to see it in Play Mode.
//Make sure to have another GameObject with a Collider component for the BoxCast to collide with.using UnityEngine;public class Example : MonoBehaviour
{
    float m_MaxDistance;
    float m_Speed;
    bool m_HitDetect;    Collider m_Collider;
    RaycastHit m_Hit;    void Start()
    {
        //Choose the distance the Box can reach to
        m_MaxDistance = 300.0f;
        m_Speed = 20.0f;
        m_Collider = GetComponent<Collider>();
    }    void Update()
    {
        //Simple movement in x and z axes
        float xAxis = Input.GetAxis("Horizontal") * m_Speed;
        float zAxis = Input.GetAxis("Vertical") * m_Speed;
        transform.Translate(new Vector3(xAxis, 0, zAxis));
    }    void FixedUpdate()
    {
        //Test to see if there is a hit using a BoxCast
        //Calculate using the center of the GameObject's Collider(could also just use the GameObject's position), half the GameObject's size, the direction, the GameObject's rotation, and the maximum distance as variables.
        //Also fetch the hit data
        m_HitDetect = Physics.BoxCast(m_Collider.bounds.center, transform.localScale*0.5f, transform.forward, out m_Hit, transform.rotation, m_MaxDistance);
        if (m_HitDetect)
        {
            //Output the name of the Collider your Box hit
            Debug.Log("Hit : " + m_Hit.collider.name);
        }
    }    //Draw the BoxCast as a gizmo to show where it currently is testing. Click the Gizmos button to see this
    void OnDrawGizmos()
    {
        Gizmos.color = Color.red;        //Check if there has been a hit yet
        if (m_HitDetect)
        {
            //Draw a Ray forward from GameObject toward the hit
            Gizmos.DrawRay(transform.position, transform.forward * m_Hit.distance);
            //Draw a cube that extends to where the hit exists
            Gizmos.DrawWireCube(transform.position + transform.forward * m_Hit.distance, transform.localScale);
        }
        //If there hasn't been a hit yet, draw the ray at the maximum distance
        else
        {
            //Draw a Ray forward from GameObject toward the maximum distance
            Gizmos.DrawRay(transform.position, transform.forward * m_MaxDistance);
            //Draw a cube at the maximum distance
            Gizmos.DrawWireCube(transform.position + transform.forward * m_MaxDistance, transform.localScale);
        }
    }
}
```


            
