This version of Unity is unsupported.



# ModifiableContactPair





struct in
          UnityEngine



/



Implemented in:[UnityEngine.PhysicsModule](UnityEngine.PhysicsModule.html)


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



A light-weight proxy that allows to access the contact buffers directly.





### Properties



| Property | Description |
| --- | --- |
| bodyAngularVelocity | Angular velocity of the first body in the contact pair. |
| bodyInstanceID | Instance ID of the first body in this contact pair. |
| bodyVelocity | Linear velocity of the first body in the contact pair. |
| colliderInstanceID | Instance ID of the first Collider in this contact pair. |
| contactCount | The amount of the contact points generated for this contact pair. |
| massProperties | Mass-related properties of this contact pair, such as the mass ratio. |
| otherBodyAngularVelocity | Angular velocity of the second body in the contact pair. |
| otherBodyInstanceID | Instance ID of the second body in this contact pair. |
| otherBodyVelocity | Linear velocity of the second body in the contact pair. |
| otherColliderInstanceID | Instance ID of the second collider in this contact pair. |
| otherPosition | World-space position of the second collider in this contact pair as seen by the solver. |
| otherRotation | World-space rotation of the second collider in this contact pair as seen by the solver. |
| position | World-space position of the first collider in this contact pair as seen by the solver. |
| rotation | World-space rotation of the first collider in this contact pair as seen by the solver. |





### Public Methods



| Method | Description |
| --- | --- |
| GetBounciness | Get the restitution value for the specified contact point in this contact pair. |
| GetDynamicFriction | Get the value of the dynamic friction for a specified contact point in this contact pair. |
| GetFaceIndex | Get the index of a face a particular contact point belongs to in this contact pair. Use this with Mesh.triangles. |
| GetMaxImpulse | Get the maximum impulse that the solver can apply at a particular contact point in this contact pair. |
| GetNormal | Get the normal at a particular contact point in this contact pair. |
| GetPoint | Get the location of a particular contact point in this contact pair. |
| GetSeparation | Get the separation value at a particular contact point in this contact pair. |
| GetStaticFriction | Get the static friction coefficient at a particular point of the contact pair. |
| GetTargetVelocity | Get the target velocity the solver should aim reaching at a particular contact point in this contact pair. |
| IgnoreContact | Ignore the specified contact point in this contact pair. |
| SetBounciness | Set the restitution value for the specified contact point in this contact pair. |
| SetDynamicFriction | Set the value of the dynamic friction for a specified contact point in this contact pair. |
| SetMaxImpulse | Set the maximum impulse that the solver can apply at a particular contact point in this contact pair. |
| SetNormal | Set the normal at a particular contact point in this contact pair. |
| SetPoint | Set the location of a particular contact point in this contact pair. |
| SetSeparation | Set the separation value at a particular contact point in this contact pair. |
| SetStaticFriction | Set the static friction coefficient at a particular point of the contact pair. |
| SetTargetVelocity | Set the target velocity the solver should aim reaching at a particular contact point in this contact pair. |


            
