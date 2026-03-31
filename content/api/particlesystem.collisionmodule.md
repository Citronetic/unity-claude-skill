This version of Unity is unsupported.



# CollisionModule





struct in
          UnityEngine



/



Implemented in:[UnityEngine.ParticleSystemModule](UnityEngine.ParticleSystemModule.html)


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




                [Switch to Manual](../Manual/class-ParticleSystem.html)














### Description



Script interface for the CollisionModule of a Particle System.





Additional resources: [ParticleSystem](ParticleSystem.html), [ParticleSystem.collision](ParticleSystem-collision.html).





### Properties



| Property | Description |
| --- | --- |
| bounce | How much force is applied to each particle after a collision. |
| bounceMultiplier | A multiplier for ParticleSystem.CollisionModule.bounce. |
| colliderForce | How much force is applied to a Collider when hit by particles from this Particle System. |
| collidesWith | Control which Layers this Particle System collides with. |
| dampen | How much speed does each particle lose after a collision. |
| dampenMultiplier | Change the dampen multiplier. |
| enabled | Specifies whether the CollisionModule is enabled or disabled. |
| enableDynamicColliders | Allow particles to collide with dynamic colliders when using world collision mode. |
| lifetimeLoss | How much a collision reduces a particle's lifetime. |
| lifetimeLossMultiplier | Change the lifetime loss multiplier. |
| maxCollisionShapes | The maximum number of collision shapes Unity considers for particle collisions. It ignores excess shapes. Terrains take priority. |
| maxKillSpeed | Kill particles whose speed goes above this threshold, after a collision. |
| minKillSpeed | Kill particles whose speed falls below this threshold, after a collision. |
| mode | Choose between 2D and 3D world collisions. |
| multiplyColliderForceByCollisionAngle | Specifies whether the physics system considers the collision angle when it applies forces from particles to Colliders. |
| multiplyColliderForceByParticleSize | Specifies whether the physics system considers particle sizes when it applies forces to Colliders. |
| multiplyColliderForceByParticleSpeed | Specifies whether the physics system considers particle speeds when it applies forces to Colliders. |
| planeCount | Shows the number of planes currently set as Colliders. |
| quality | Specifies the accuracy of particle collisions against colliders in the Scene. |
| radiusScale | A multiplier that Unity applies to the size of each particle before collisions are processed. |
| sendCollisionMessages | Send collision callback messages. |
| type | The type of particle collision to perform. |
| voxelSize | Size of voxels in the collision cache. |





### Public Methods



| Method | Description |
| --- | --- |
| AddPlane | Adds a collision plane to use with this Particle System. |
| GetPlane | Get a collision plane associated with this Particle System. |
| RemovePlane | Removes a collision plane associated with this Particle System. |
| SetPlane | Set a collision plane to use with this Particle System. |


            
