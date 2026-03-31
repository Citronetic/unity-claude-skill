This version of Unity is unsupported.



# [RaycastHit2D](RaycastHit2D.html).normal




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












                    public [Vector2](Vector2.html) normal;






### Description



The surface normal of the detected [Collider2D](Collider2D.html).





When the physics query detects an intersection of a [Collider2D](Collider2D.html) at a specific [RaycastHit2D.point](RaycastHit2D-point.html) the `normal` is the surface normal of the [Collider2D](Collider2D.html) at that position.  A surface normal is a vector perpendicular to the collider surface edge in a direction pointing away from the collider.

Additional resources: [RaycastHit2D.point](RaycastHit2D-point.html).


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    public Vector2 direction;    void Update()
    {
        // Cast a ray in the direction specified in the inspector.
        RaycastHit2D hit = Physics2D.Raycast(transform.position, direction);        // If something was hit, draw a line from the hit position in the direction of the surface normal.
        if (hit)
            Debug.DrawLine(hit.point, hit.point + hit.normal, Color.yellow);
    }
}
```





**Note:** If a hit starts occuring inside a collider, the collision normal is the opposite direction of the line/ray query.


            
