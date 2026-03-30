This version of Unity is unsupported.

Create a compound collider

Collider surface friction

# Collider surfaces

In real-world physics, objects that can collide have different surface textures and properties that affect how they collide with each other, and how they interact with each other.

To control how objects collide with each other in the physics simulation, you can adjust the friction and bounciness of your **colliders**An invisible shape that is used to handle physical collisions for an object. A collider doesn’t need to be exactly the same shape as the object’s mesh - a rough approximation is often more efficient and indistinguishable in gameplay. [More info](CollidersOverview.html)
See in [Glossary](Glossary.html#Collider). In Unity, you use the [Physics Material](class-PhysicsMaterial.html)A physics asset for adjusting the friction and bouncing effects of colliding objects. [More info](class-PhysicsMaterial.html)
See in [Glossary](Glossary.html#PhysicsMaterial) asset to control these parameters. The Physics Material asset is represented in the API by the [`PhysicsMaterial`](../ScriptReference/PhysicsMaterial.html) class.

For more detailed information on how PhysX applies friction and bounce, see the Nvidia PhysX documentation [Rigid Body Dynamics: Friction and Restitution](https://docs.nvidia.com/gameworks/content/gameworkslibrary/physx/guide/Manual/RigidBodyDynamics.html#friction-and-restitution).

| Topic | Description |
| --- | --- |
| Collider surface friction | How Unity handles friction on collider surfaces, and how to configure friction properties. |
| Collider surface bounciness | How Unity handles bounciness on collider surfaces, and how to configure bounce properties. |
| How collider surface values combine | How Unity combines the values of surface properties in a collider pair; for example, how it calculates the friction between two colliders that have different friction values. |
| Create and apply a Physics Material | Create and configure a Physics Material to define a collider’s surface properties, and apply it to a collider. |
| Physics Material component reference | Reference page for the Physics Material asset. |

Create a compound collider

Collider surface friction
