This version of Unity is unsupported.

Custom Collider 2D component reference

Edit the collider's geometry

# Use a Custom Collider 2D

When assigning `PhysicsShape2D` to the Custom **Collider**An invisible shape that is used to handle physical collisions for an object. A collider doesn’t need to be exactly the same shape as the object’s mesh - a rough approximation is often more efficient and indistinguishable in gameplay. [More info](../../../CollidersOverview.html)
See in [Glossary](../../../Glossary.html#Collider) 2D, you can do so either during Edit mode or Play mode. When modifying the Custom Collider 2D in Edit mode, Unity saves all assigned `PhysicsShape2D` and associated vertices in the Unity **Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../../../CreatingScenes.html)
See in [Glossary](../../../Glossary.html#Scene), and the `CustomCollider2D` retains its configuration when the Scene is loaded. This makes it possible to use Edit mode authoring **scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](../../../creating-scripts.html)
See in [Glossary](../../../Glossary.html#Scripts) to create custom geometry.

When modifying the Custom Collider 2D during Play mode, the Collider will not retain any changes made to assigned `PhysicsShape2D` and their associated vertices, and all changes will be lost when exiting Play mode.

Custom Collider 2D component reference

Edit the collider's geometry
