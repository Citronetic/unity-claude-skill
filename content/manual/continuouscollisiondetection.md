This version of Unity is unsupported.

Discrete collision detection

Sweep-based CCD

# Continuous collision detection (CCD)

Continuous **collision**A collision occurs when the physics engine detects that the colliders of two GameObjects make contact or overlap, when at least one has a Rigidbody component and is in motion. [More info](CollidersOverview.html)
See in [Glossary](Glossary.html#Collision) detection (CCD) modes use predictive algorithms to calculate collisions that happen between physics timesteps. They are more accurate, but usually require more computational resources than discrete **collision detection**An automatic process performed by Unity which determines whether a moving GameObject with a Rigidbody and collider component has come into contact with any other colliders. [More info](CollidersOverview.html)
See in [Glossary](Glossary.html#CollisionDetection).

CCD is supported for Box, Sphere and Capsule **colliders**An invisible shape that is used to handle physical collisions for an object. A collider doesn’t need to be exactly the same shape as the object’s mesh - a rough approximation is often more efficient and indistinguishable in gameplay. [More info](CollidersOverview.html)
See in [Glossary](Glossary.html#Collider). It is intended as a safety net to catch collisions in cases where colliders would otherwise pass through each other. However, it does not always deliver physically accurate collision results, so you might still consider decreasing the physics timestep frequency to make the simulation more precise.

In Unity, there are two CCD algorithms, represented by three **Collision Detection** mode options.

| Topic | Description |
| --- | --- |
| Speculative CCD | Learn about speculative collision detection. Continuous Speculative uses speculative collision detection. |
| Sweep-based CCD | Learn about sweep-based collision detection. Both Continuous and Continuous Dynamic modes use sweep-based collision detection. |

Discrete collision detection

Sweep-based CCD
