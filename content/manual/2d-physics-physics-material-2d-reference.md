This version of Unity is unsupported.

Constant Force 2D reference

2D game development in URP

# Physics Material 2D reference

A ****Physics Material**A physics asset for adjusting the friction and bouncing effects of colliding objects. [More info](../class-PhysicsMaterial.html)
See in [Glossary](../Glossary.html#PhysicsMaterial) 2D** is used to adjust the friction and bounce that occur between 2D physics objects when they collide.

For more detailed information on game physics, see [3D Physics](../PhysicsSection.html).

## Use a Physics Material 2D

To create a Physics Material 2D, go to **Assets > Create > 2D > Physics Material 2D**.

| Property | Function |
| --- | --- |
| Friction | Set the coefficient of friction for this colliderAn invisible shape that is used to handle physical collisions for an object. A collider doesn’t need to be exactly the same shape as the object’s mesh - a rough approximation is often more efficient and indistinguishable in gameplay. More infoSee in Glossary. |
| Bounciness | Set the degree to which collisionsA collision occurs when the physics engine detects that the colliders of two GameObjects make contact or overlap, when at least one has a Rigidbody component and is in motion. More infoSee in Glossary rebound from the surface. A value of 0 indicates no bounce while a value of 1 indicates a perfect bounce with no loss of energy. |

To use your created **Physics Material 2D**Use this to adjust the friction and bounce that occurs between 2D physics objects when they collide [More info](../2d-physics/physics-material-2d-reference.html)
See in [Glossary](../Glossary.html#PhysicsMaterial2D), drag it onto an object with an attached 2D Collider component or drag it onto the collider in the **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](../UsingTheInspector.html)
See in [Glossary](../Glossary.html#Inspector) window.

**Note:** The equivalent asset in 3D physics is referred to as a **Physics Material**.

PhysicsMaterial2D

Constant Force 2D reference

2D game development in URP
