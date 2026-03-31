This version of Unity is unsupported.



# ContactPoint2D





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



Details about a specific point of contact involved in a 2D physics collision.





A contact point describes a point of intersection between two [Collider2D](Collider2D.html).  [ContactPoint2D](ContactPoint2D.html) can only exist on [Collider2D](Collider2D.html) that are not set to be triggers as triggers do not define contact points.

Additional resources: [Collider2D.isTrigger](Collider2D-isTrigger.html), [Physics2D.GetContacts](Physics2D.GetContacts.html), [Rigidbody2D.GetContacts](Rigidbody2D.GetContacts.html), [Collider2D.GetContacts](Collider2D.GetContacts.html) and [Collision2D](Collision2D.html).





### Properties



| Property | Description |
| --- | --- |
| bounciness | The effective bounciness used for the ContactPoint2D. |
| collider | The incoming Collider2D involved in the collision with the otherCollider. |
| enabled | Indicates whether the collision response or reaction is enabled or disabled. |
| friction | The effective friction used for the ContactPoint2D. |
| normal | Surface normal at the contact point. |
| normalImpulse | Gets the impulse applied at the contact point along the ContactPoint2D.normal. |
| otherCollider | The other Collider2D involved in the collision with the collider. |
| otherRigidbody | The other Rigidbody2D involved in the collision with the rigidbody. |
| point | The point of contact between the two colliders in world space. |
| relativeVelocity | Gets the relative velocity of the two colliders at the contact point (Read Only). |
| rigidbody | The incoming Rigidbody2D involved in the collision with the otherRigidbody. |
| separation | Gets the distance between the colliders at the contact point. |
| tangentImpulse | Gets the impulse applied at the contact point which is perpendicular to the ContactPoint2D.normal. |


            
