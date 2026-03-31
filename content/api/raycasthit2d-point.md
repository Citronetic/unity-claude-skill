This version of Unity is unsupported.



# [RaycastHit2D](RaycastHit2D.html).point




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












                    public [Vector2](Vector2.html) point;






### Description



The world space position where the physics query shape intersected with the detected [Collider2D](Collider2D.html) surface.





Additional resources: [RaycastHit2D.normal](RaycastHit2D-normal.html) and [RaycastHit2D.fraction](RaycastHit2D-fraction.html).


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    public Vector2 direction;    void Update()
    {
        // Cast a ray in the direction specified in the inspector.
        RaycastHit2D hit = Physics2D.Raycast(transform.position, direction);        // If something was hit, draw a line from the start position to the point we intersected.
        if (hit)
            Debug.DrawLine(transform.position, hit.point, Color.yellow);
    }
}
```


            
