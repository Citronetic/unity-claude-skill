This version of Unity is unsupported.

Physics Material asset reference

Use collisions to trigger other events

# Collider interactions

When two **colliders**An invisible shape that is used to handle physical collisions for an object. A collider doesn’t need to be exactly the same shape as the object’s mesh - a rough approximation is often more efficient and indistinguishable in gameplay. [More info](CollidersOverview.html)
See in [Glossary](Glossary.html#Collider) make contact, you can call functions to trigger other events in your project via scripting.

The two essential function types for **collision**A collision occurs when the physics engine detects that the colliders of two GameObjects make contact or overlap, when at least one has a Rigidbody component and is in motion. [More info](CollidersOverview.html)
See in [Glossary](Glossary.html#Collision) interaction are `OnCollision` and `OnTrigger`.

| Topic | Description |
| --- | --- |
| Use collisions to trigger other events | Overview of collision events and triggers, and the scripting API you need to use. |
| Interaction between collider types | How the different collider types interact with each other to call OnCollision and OnTrigger events. |
| OnCollision events | How colliders can call events when they physically collide. |
| OnTrigger events | How colliders can call events when one enters the space of another in a non-physical collision. |
| Create and configure a trigger collider | Create a trigger collider and configure its associated GameObjectThe fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. More infoSee in Glossary to correctly call events on trigger interactions. |
| Example scripts for collider events | Example scriptsA piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. More infoSee in Glossary for OnCollision and OnTrigger events. These example scripts demonstrate some potential uses for scripted collision interactions and events. |

Physics Material asset reference

Use collisions to trigger other events
