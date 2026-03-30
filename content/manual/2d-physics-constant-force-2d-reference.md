This version of Unity is unsupported.

Use the Physics 2D Profiler Legacy mode

Physics Material 2D reference

# Constant Force 2D reference

****Constant Force**A simple component for adding a constant force or torque to game objects with a Rigidbody. [More info](../class-ConstantForce.html)
See in [Glossary](../Glossary.html#ConstantForce) 2D** is a quick utility for adding constant forces to a ****Rigidbody**A component that allows a GameObject to be affected by simulated gravity and other forces. [More info](../class-Rigidbody.html)
See in [Glossary](../Glossary.html#Rigidbody) 2D**. This works well for one-shot objects like rockets, if you want them to accelerate over time rather than starting with a large velocity.

Constant Force 2D applies both linear and torque (angular) forces continuously to the Rigidbody 2D, each time the **physics engine**A system that simulates aspects of physical systems so that objects can accelerate correctly and be affected by collisions, gravity and other forces. [More info](../PhysicsSection.html)
See in [Glossary](../Glossary.html#PhysicsEngine) updates at runtime.

## Properties

| Property | Function |
| --- | --- |
| Force | The linear force applied to the Rigidbody 2D at each physics update. |
| Relative Force | The linear force, relative to the Rigidbody 2D coordinate system, applied each physics update. |
| Torque | The torque applied to the Rigidbody 2D at each physics update. |

ConstantForce2D

Use the Physics 2D Profiler Legacy mode

Physics Material 2D reference
