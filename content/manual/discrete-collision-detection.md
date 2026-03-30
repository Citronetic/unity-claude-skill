This version of Unity is unsupported.

Layer-based collision detection

Continuous collision detection (CCD)

# Discrete collision detection

The **Discrete** **collision**A collision occurs when the physics engine detects that the colliders of two GameObjects make contact or overlap, when at least one has a Rigidbody component and is in motion. [More info](CollidersOverview.html)
See in [Glossary](Glossary.html#Collision) detection mode uses a discrete **collision detection**An automatic process performed by Unity which determines whether a moving GameObject with a Rigidbody and collider component has come into contact with any other colliders. [More info](CollidersOverview.html)
See in [Glossary](Glossary.html#CollisionDetection) algorithm, which checks for collisions on each physics timestep.

**Discrete** is the default collision detection mode, and by far the least computationally demanding. However, it can miss collisions that occur between physics steps, so it’s usually not suitable for fast-moving collisions.

If your collisions happen too quickly for discrete collision to pick them up, you can try one or both of the following solutions:

- Increase the frequency of physics timesteps. This can solve missed collisions for fast-moving objects, but comes with a high performance impact due to the extra calculations required.

- Use one of the [continuous collision detection (CCD)](ContinuousCollisionDetection.html) modes. These can predict collisions that might occur between physics timesteps, but they also have a higher performance impact.

Experiment with both and profile the results to find the right solution for your project.

Layer-based collision detection

Continuous collision detection (CCD)
