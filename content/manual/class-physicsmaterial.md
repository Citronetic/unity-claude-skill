This version of Unity is unsupported.

Create and apply a custom Physics Material

Collider interactions

# Physics Material asset reference

[Switch to Scripting](../ScriptReference/PhysicsMaterial.html)

The ****Physics Material**** is a material asset that you can place on a **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject). The material defines properties on the **collider**An invisible shape that is used to handle physical collisions for an object. A collider doesn’t need to be exactly the same shape as the object’s mesh - a rough approximation is often more efficient and indistinguishable in gameplay. [More info](CollidersOverview.html)
See in [Glossary](Glossary.html#Collider)’s surface, such as friction and bounciness.

To create a Physics Material, go to **Assets** > **Create** > **Physics Material**, then drag the Physics Material from the Project window onto a collider in the scene.

If there is no Physics Material set, a collider uses the default surface settings. To adjust the project’s default settings, use the [Physics Settings](class-PhysicsManager.html).

| Property | Description |
| --- | --- |
| Dynamic Friction | Define how much friction the collider’s surface has against another collider when the colliders are moving or sliding against each other. This value is between 0 and 1. A value of 0 means no friction (like ice), while a value of 1 means very high friction (like rubber). By default, Dynamic Friction is set to 0.6. Unity uses the friction value of both touching colliders to calculate the friction between them, based on the Friction Combine property (below). |
| Static Friction | Define how much friction the collider’s surface has against another collider when the colliders are not moving. This value is between 0 and 1. A value of 0 means no friction (like ice), while a value of 1 means very high friction (like rubber). By default, Static Friction is set to 0.6. Unity uses the friction value of both touching colliders to calculate the friction between them, based on the Friction Combine property (below). |
| Bounciness | Define how bouncy the surface is, and how much other colliders can bounce off it. A value of 0 means the surface is not at all bouncy (like soft clay), and other colliders lose kinetic energy upon hitting it. A value of 1 means the surface is very bouncy (like rubber), and other colliders bounce without any loss of kinetic energy. By default, Bounciness is set to 0. Unity uses the bounciness value of both touching colliders to calculate the bounce between them, based on the Bounce Combine property. Note that the physics system’s bounce approximations might still add small amounts of energy to the simulation. |
| Friction Combine | Define how the physics system calculates friction between two colliders, based on each collider’s friction. This selection applies to both Dynamic Friction and Static Friction. By default, Friction Combine is set to Average. For details, refer to How collider surface values combine. |
| Bounce Combine | Define how the physics system calculates bounce between two colliders, based on each collider’s Bounciness value. By default, Bounce Combine is set to Average. For details, refer to How collider surface values combine. |

Create and apply a custom Physics Material

Collider interactions
