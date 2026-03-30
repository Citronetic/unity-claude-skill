This version of Unity is unsupported.

Dynamic Body Type

Dynamic Body Type

# Dynamic Body Type fundamentals

The **Dynamic** **Body Type**Defines a fixed behavior for a 2D Rigidbody. Can be Dynamic (the body moves under simulation and is affected by forces like gravity), Kinematic (the body moves under simulation, but isn’t affected by forces like gravity) or Static (the body doesn’t move under simulation). [More info](../../../../2d-physics/rigidbody/introduction-to-rigidbody-2d.html)
See in [Glossary](../../../../Glossary.html#BodyType) is the default Body Type for a **Rigidbody**A component that allows a GameObject to be affected by simulated gravity and other forces. [More info](../../../../class-Rigidbody.html)
See in [Glossary](../../../../Glossary.html#Rigidbody) 2D, because it is the most common Body Type for things that need to move and is designed to move under simulation. All Rigidbody 2D properties are available with this Body Type, such as finite mass and drag, and is affected by gravity and forces. A Dynamic body will collide with every other Body Type, and is the most interactive of Body Types. It’s also the most performance-expensive Body Type, because of its dynamic nature and interactivity with everything around it.

Dynamic Body Type

Dynamic Body Type
