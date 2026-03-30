This version of Unity is unsupported.

Area Effector 2D reference

Point Effector 2D reference

# Buoyancy Effector 2D reference

The Buoyancy Effector 2D defines simple fluid behaviour such as floating and the drag and flow of fluid. You can also control a fluid surface, with the fluid behaviour taking place below.

## Properties

| Property | Function |
| --- | --- |
| Use ColliderAn invisible shape that is used to handle physical collisions for an object. A collider doesn’t need to be exactly the same shape as the object’s mesh - a rough approximation is often more efficient and indistinguishable in gameplay. More infoSee in Glossary Mask | Check this box to enable the ‘Collider Mask’ property. If this is not enabled, the Global CollisionA collision occurs when the physics engine detects that the colliders of two GameObjects make contact or overlap, when at least one has a Rigidbody component and is in motion. More infoSee in Glossary Matrix will be used as the default for all Collider 2Ds. |
| Collider Mask | The mask used to select specific Layers allowed to interact with the effector. Note that this option only displays if you have selected Use Collider Mask. |
| Surface Level | Defines the surface location of the buoyancy fluid. When a GameObjectThe fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. More infoSee in Glossary is above this line, no buoyancy forces are applied. When a GameObject is intersecting or completely below this line, buoyancy forces are applied. This is a location specified as a world-space offset along the world y-axis, but is also scaled by the GameObject’s Transform component. |
| Density | The density of the fluid. Colliders with a higher density sink, those with a lower density float, and those with the same density appear suspended in the fluid. |
| Linear Damping | The drag coefficient affecting positional movement of a GameObject. This only applies when inside the fluid. |
| Angular Damping | The drag coefficient affecting rotational movement of a GameObject. This only applies when inside the fluid. |
| Flow Angle | The world-space angle (in degrees) for the direction of fluid flow. Fluid flow applies buoyancy forces in the specified direction. |
| Flow Magnitude | The “power” of the fluid flow force. Combined with Fluid Angle, this specifies the level of buoyancy force applied to GameObjects inside the fluid. The magnitude can also be negative, in which case the buoyancy forces are applied at 180 degrees to the Flow Angle. |
| Flow Variation | Enter a value here to randomly vary the fluid forces. Specify a positive or negative variation to randomly add or subtract from the Fluid Magnitude. |

BuoyancyEffector2D

Area Effector 2D reference

Point Effector 2D reference
