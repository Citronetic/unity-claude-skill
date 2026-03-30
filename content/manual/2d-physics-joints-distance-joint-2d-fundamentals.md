This version of Unity is unsupported.

Distance Joint 2D

Distance Joint 2D component reference

# Distance Joint 2D fundamentals

The main application of the Distance **Joint**A physics component allowing a dynamic connection between Rigidbody components, usually allowing some degree of movement such as a hinge. [More info](../../Joints.html)
See in [Glossary](../../Glossary.html#joint) 2D component is to keep distance between two points. These two points can be two **Rigidbody**A component that allows a GameObject to be affected by simulated gravity and other forces. [More info](../../class-Rigidbody.html)
See in [Glossary](../../Glossary.html#Rigidbody) 2D components or a Rigidbody 2D component and a fixed position in the world.

**Note**: To connect a **Rigidbody 2D** component to a fixed position in the world, set the **Connected Rigidbody** field to **None**.

This Joint 2D does not apply torque or rotation. It does apply a linear force to both connected items, using a very stiff simulated ‘spring’ to maintain the distance. You cannot configure the properties of this ‘spring’.

This Joint 2D has a selectable constraint:

- **Constraint A**: Maintains a fixed distance between two anchor points on two bodies (when **Max Distance Only** is unchecked).

- **Constraint B**: Maintains maximum distance only between two anchor points on two bodies (when **Max Distance Only** is checked).

You can use this Joint 2D to construct physical objects that need to behave as if they are connected with a rigid connection that can rotate.

- Using **Constraint A** (**Max Distance Only** unchecked), you can create a fixed length connection, such as two wheels on a bicycle.

- Using **Constraint B** (**Max Distance Only** checked), you can create a constrained but unfixed length connection, which allows flexible movement such as a yo-yo moving towards and away from a fixed point.

## Additional resources

- [Joints 2D](./2d-joints-landing.html)

- [Distance Joint 2D component reference](distance-joint-2d-reference.html)

Distance Joint 2D

Distance Joint 2D component reference
