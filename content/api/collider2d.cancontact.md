This version of Unity is unsupported.



# [Collider2D](Collider2D.html).CanContact




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

public bool CanContact([Collider2D](Collider2D.html) collider);






### Parameters



| Parameter | Description |
| --- | --- |
| collider | The other Collider that is to be checked to see if it can contact the current Collider. |





### Returns



**bool**
        Returns `true` if both Colliders can contact each other otherwise `false` indicating that they cannot contact each other.





### Description



This method determines if both Colliders can ever come into contact.





Determining if Colliders can come into contact involves multiple checks including:



          - Each [Collider2D](Collider2D.html) must be active and enabled. See [Behaviour.isActiveAndEnabled](Behaviour-isActiveAndEnabled.html).

          - Each [Collider2D](Collider2D.html) must be on a [GameObject](GameObject.html) that is in the same [PhysicsScene2D](PhysicsScene2D.html). By default, this is true but see [PhysicsSceneExtensions2D.GetPhysicsScene2D](PhysicsSceneExtensions2D.GetPhysicsScene2D.html) and [LocalPhysicsMode.Physics2D](SceneManagement.LocalPhysicsMode.Physics2D.html).

          - Each [Collider2D](Collider2D.html) that is attached to a Rigidbody2D must have a compatible [Rigidbody2D.bodyType](Rigidbody2D-bodyType.html). For instance [RigidbodyType2D.Static](RigidbodyType2D.Static.html) cannot contact another [RigidbodyType2D.Static](RigidbodyType2D.Static.html). Without a [Rigidbody2D](Rigidbody2D.html), the [Collider2D](Collider2D.html) is implicitly Static. Kinematic vs Kinematic/Static will only contact if [Rigidbody2D.useFullKinematicContacts](Rigidbody2D-useFullKinematicContacts.html) is enabled.

          - The [Collider2D](Collider2D.html) will not contact if they are specified using [Physics2D.IgnoreCollision](Physics2D.IgnoreCollision.html).

          - The [Collider2D](Collider2D.html) will not contact if they are part of an [Effector2D](Effector2D.html) that is using [Effector2D.useColliderMask](Effector2D-useColliderMask.html).

          - The [Collider2D](Collider2D.html) will not contact if their layer collision (in the Layer Collision Matrix) is set to not contact unless overriden using the [Rigidbody2D](Rigidbody2D.html) and [Collider2D](Collider2D.html) layer overrides.





Additional resources: [Collider2D.contactMask](Collider2D-contactMask.html), [Collider2D.includeLayers](Collider2D-includeLayers.html), [Collider2D.excludeLayers](Collider2D-excludeLayers.html), [Rigidbody2D.includeLayers](Rigidbody2D-includeLayers.html) and [Rigidbody2D.excludeLayers](Rigidbody2D-excludeLayers.html).


            
