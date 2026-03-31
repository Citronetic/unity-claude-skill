This version of Unity is unsupported.



# Collision2D





class in
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



Collision details returned by 2D physics callback functions.





The collisions details are returned by [MonoBehaviour.OnCollisionEnter2D](MonoBehaviour.OnCollisionEnter2D.html), [MonoBehaviour.OnCollisionStay2D](MonoBehaviour.OnCollisionStay2D.html) and [MonoBehaviour.OnCollisionExit2D](MonoBehaviour.OnCollisionExit2D.html) callbacks. It details which [Collider2D](Collider2D.html) and [Rigidbody2D](Rigidbody2D.html) pairs are involved in the collision as well as contact points where the [Collider2D](Collider2D.html) meet. **Note:** During the `OnCollisionExit2D` event, there are no contacts to be retrieved.





### Properties



| Property | Description |
| --- | --- |
| collider | The incoming Collider2D involved in the collision with the otherCollider. |
| contactCount | Gets the number of contacts for this collision. |
| contacts | The specific points of contact with the incoming Collider2D. You should avoid using this as it produces memory garbage. Use GetContact or GetContacts instead. |
| enabled | Indicates whether the collision response or reaction is enabled or disabled. |
| gameObject | The incoming GameObject involved in the collision. |
| otherCollider | The other Collider2D involved in the collision with the collider. |
| otherRigidbody | The other Rigidbody2D involved in the collision with the rigidbody. |
| relativeVelocity | The relative linear velocity of the two colliding objects (Read Only). |
| rigidbody | The incoming Rigidbody2D involved in the collision with the otherRigidbody. |
| transform | The Transform of the incoming object involved in the collision. |





### Public Methods



| Method | Description |
| --- | --- |
| GetContact | Gets the contact point at the specified index. |
| GetContacts | Retrieves all contact points for contacts between collider and otherCollider. |


            
