This version of Unity is unsupported.



# [RaycastHit2D](RaycastHit2D.html).distance




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












                    public float distance;






### Description



The distance the physics query traversed before it detected a [Collider2D](Collider2D.html).





When the [RaycastHit2D](RaycastHit2D.html) result is returned from a physics query, the `distance` refers to the distance from the physics query start position to the position the physics query shape intersected as indicated by [RaycastHit2D.centroid](RaycastHit2D-centroid.html). For simple linecast or raycast queries, [RaycastHit2D.point](RaycastHit2D-point.html) is used to calculate the distance.

Additional resources: [RaycastHit2D.fraction](RaycastHit2D-fraction.html).


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    public Vector2 direction;    void Update()
    {
        // Cast a ray in the specified direction.
        RaycastHit2D hit = Physics2D.Raycast(transform.position, direction);        // If we hit something that was less than 6 world units away then write a message.
        if (hit && hit.distance < 6f)
            Debug.Log("Hit something within range!");
    }
}
```


            
