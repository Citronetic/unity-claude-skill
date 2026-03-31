This version of Unity is unsupported.



# ColliderDistance2D





struct in
          UnityEngine



/



Implemented in:[UnityEngine.Physics2DModule](UnityEngine.Physics2DModule.html)


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



















### Description



Represents the separation or overlap of two [Collider2D](Collider2D.html).





The [ColliderDistance2D](ColliderDistance2D.html) primarily defines a point on the exterior of each [Collider2D](Collider2D.html) along with the [distance](ColliderDistance2D-distance.html) between those two points.  The [distance](ColliderDistance2D-distance.html) between them can be positive indicating that the [Collider2D](Collider2D.html) are separated (not overlapped), zero indicating that they are touching (but not overlapped) or negative indicating that they are overlapped.

A [normal](ColliderDistance2D-normal.html) is provided that is a normalized vector that points from [pointB](ColliderDistance2D-pointB.html) to [pointA](ColliderDistance2D-pointA.html).  This vector, when scaled with the [distance](ColliderDistance2D-distance.html), provide a vector that can be used to move the [Collider2D](Collider2D.html) so that they are no longer overlapped (if the [distance](ColliderDistance2D-distance.html) is negative) or so they are touching (if the [distance](ColliderDistance2D-distance.html) is positive).

A common use-case for this is solving overlaps between two [Collider2D](Collider2D.html), particularly when attached to a [Rigidbody2D](Rigidbody2D.html) set to be [RigidbodyType2D.Kinematic](RigidbodyType2D.Kinematic.html).

Additional resources: [Physics2D.Distance](Physics2D.Distance.html), [Collider2D.Distance](Collider2D.Distance.html) and [Rigidbody2D.Distance](Rigidbody2D.Distance.html).





### Properties



| Property | Description |
| --- | --- |
| distance | Gets the distance between two colliders. |
| isOverlapped | Gets whether the distance represents an overlap or not. |
| isValid | Gets whether the distance is valid or not. |
| normal | A normalized vector that points from pointB to pointA. |
| pointA | A point on a Collider2D that is a specific distance away from pointB. |
| pointB | A point on a Collider2D that is a specific distance away from pointA. |


            
