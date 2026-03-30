This version of Unity is unsupported.

Speculative CCD

Introduction to joints

# Joints

A **Joint**A physics component allowing a dynamic connection between Rigidbody components, usually allowing some degree of movement such as a hinge. [More info](Joints.html)
See in [Glossary](Glossary.html#joint) connects a **Rigidbody**A component that allows a GameObject to be affected by simulated gravity and other forces. [More info](class-Rigidbody.html)
See in [Glossary](Glossary.html#Rigidbody) to another Rigidbody, or to a fixed point in space. Joints can apply forces that move rigid bodies, and joint limits can restrict that movement.

You can configure Joints via the [`Joint`](../ScriptReference/Joint.html) class, or the appropriate Joint component.

| Topic | Description |
| --- | --- |
| Introduction to joints | Overview of the concepts and behaviours of physics joints in Unity. |
| Character Joint component reference | Reference for the Character JointAn extended ball-socket joint which allows a joint to be limited on each axis. Mainly used for Ragdoll effects. More infoSee in Glossary component. |
| Fixed Joint component reference | Reference for the Fixed JointA joint type that is completely constrained, allowing two objects to be held together. Implemented as a spring so some motion may still occur. More infoSee in Glossary component. |
| Hinge Joint component reference | Reference for the Hinge JointA joint that groups together two Rigidbody components, constraining them to move like they are connected by a hinge. It is perfect for doors, but can also be used to model chains, pendulums and so on. More infoSee in Glossary component. |
| Spring Joint component reference | Reference for the Spring JointA joint type that connects two Rigidbody components together but allows the distance between them to change as though they were connected by a spring. More infoSee in Glossary component. |
| Create a configurable joint | Create a configurable custom joint that has fine controls for constricting motion and specifying driving forces. |

Speculative CCD

Introduction to joints
