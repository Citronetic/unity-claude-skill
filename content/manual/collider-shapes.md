This version of Unity is unsupported.

Introduction to collider types

Introduction to collider shapes

# Collider shapes

Colliders are available in different shape configurations. A **collider**An invisible shape that is used to handle physical collisions for an object. A collider doesn’t need to be exactly the same shape as the object’s mesh - a rough approximation is often more efficient and indistinguishable in gameplay. [More info](CollidersOverview.html)
See in [Glossary](Glossary.html#Collider)’s shape defines how accurately the collider matches the **Mesh**The main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. [More info](mesh.html)
See in [Glossary](Glossary.html#Mesh) shape, and how computationally efficient the collider is.

| Topic | Description |
| --- | --- |
| Introduction to collider shapes | Overview of the different collider shapes in Unity. |
| Primitive collider shapes | Primitive collider shapes are built-in, pre-calculated collider shapes in Unity (Box, Sphere and Capsule colliders). |
| Mesh collidersA free-form collider component which accepts a mesh reference to define its collision surface shape. More infoSee in Glossary | Mesh colliders create collisionA collision occurs when the physics engine detects that the colliders of two GameObjects make contact or overlap, when at least one has a Rigidbody component and is in motion. More infoSee in Glossary geometry that matches the shape of their associated Mesh, for extremely accurate collisions. |
| Wheel collidersA special collider for grounded vehicles. It has built-in collision detection, wheel physics, and a slip-based tire friction model. It can be used for objects other than wheels, but it is specifically designed for vehicles with wheels. More infoSee in Glossary | Wheel colliders use raycasting to form wheel-shaped collision geometry with suspension and tyre-based friction. |
| Terrain collidersA terrain-shaped collider component that handles collisions for collision surface with the same shape as the Terrain object it is attached to. More infoSee in Glossary | TerrainThe landscape in your scene. A Terrain GameObject adds a large flat plane to your scene and you can use the Terrain’s Inspector window to create a detailed landscape. More infoSee in Glossary colliders create collision geometry that matches the shape of their associated Terrain, for extremely accurate collisions. |
| Compound colliders | Compound colliders are a combination of multiple other colliders, which together have a single center of massRepresents the average position of all mass in a Rigidbody for the purposes of physics calculations. By default it is computed from all colliders belonging to the Rigidbody, but can be modified via script. More infoSee in Glossary. |

Introduction to collider types

Introduction to collider shapes
