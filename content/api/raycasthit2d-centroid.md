This version of Unity is unsupported.



# [RaycastHit2D](RaycastHit2D.html).centroid




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












                    public [Vector2](Vector2.html) centroid;






### Description



The world space centroid (center) of the physics query shape when it intersects.





When the [RaycastHit2D](RaycastHit2D.html) result is returned from a linecast or raycast query, the `centroid` is identical to the returned [point](RaycastHit2D-point.html) property because a line or ray uses a very small point with no area, so its position is the same as the position it intersects a [Collider2D](Collider2D.html).

However, when using other physics queries that cast shapes that do have an area such as circles, capsules or boxes, the `centroid` is the center of the respective shape used when it is in contact with the returned [point](RaycastHit2D-point.html).  For example, a circle will always have its `centroid` be its radius away from the returned [point](RaycastHit2D-point.html).

The `centroid` helps identify the position the shape would be at for it to come into contact at the returned [RaycastHit2D.point](RaycastHit2D-point.html).

Additional resources: [RaycastHit2D.point](RaycastHit2D-point.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // A stationary planet
    public Transform planet;    // A satellite moving around the planet
    public Transform satellite;    void Update()
    {
        // Cast a circle with a radius of 10 in from the satellite position to the planet position.
        RaycastHit2D hit = Physics2D.CircleCast(satellite.position, 10.0f, planet.position);        // If something was hit, draw a line from the planet to the position the satellite would be if it were to hit the planet.
        if (hit)
            Debug.DrawLine(planet.position, hit.centroid, Color.yellow);
    }
}
```





Additional resources: [RaycastHit2D.point](RaycastHit2D-point.html).


            
