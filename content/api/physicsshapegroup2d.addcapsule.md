This version of Unity is unsupported.



# [PhysicsShapeGroup2D](PhysicsShapeGroup2D.html).AddCapsule




                  Leave feedback




                  Suggest a change












## Success!



Thank you for helping us improve the quality of Unity Documentation. Although we cannot accept all submissions, we do read each suggested change from our users and will make updates where applicable.

                      Close




## Submission failed



For some reason your suggested change could not be submitted. Please <a>try again</a> in a few minutes. And thank you for taking the time to help us improve the quality of Unity Documentation.

                      Close


                      Your name


                      Your email


                      Suggestion*

                      Submit suggestion


Cancel















## Declaration

public int AddCapsule([Vector2](Vector2.html) vertex0,
[Vector2](Vector2.html) vertex1,
float radius);






### Parameters



| Parameter | Description |
| --- | --- |
| vertex0 | The position of one end of a capsule shape. This point represents the center point of a logical circle at the end of a capsule. |
| vertex1 | The position of the opposite end of a capsule shape. This point represents the  center point of a logical circle at the opposite end of a capsule. |
| radius | The radius of the capsule defining a radius around the vertex0 and vertex1 and the area between them. |





### Returns



**int**
        Returns the shape index the shape was added to in the [PhysicsShapeGroup2D](PhysicsShapeGroup2D.html). This index is used as the main reference when retrieving a shape.





### Description



Adds a capsule shape ([PhysicsShapeType2D.Capsule](PhysicsShapeType2D.Capsule.html)) to the shape group.





A capsule shape is comprised of a single edge shape defined by two vertices (`vertex0` and `vertex1` ) and a `radius` that extends around the length of the edge and around the vertices.

**NOTE**: A capsule forms a closed shape and does have an interior therefore its interior is detectable by physics queries etc.


              


```
using UnityEngine;
using UnityEngine.Assertions;public class Example : MonoBehaviour
{
    void Start()
    {
        CreateShape();
        GetShapeFromCollider();
    }    // Create a custom shape.
    void CreateShape()
    {
        // Create a shape group.
        var shapeGroup = new PhysicsShapeGroup2D();        // Add a Capsule.
        var shapeIndex = shapeGroup.AddCapsule
            (
                vertex0: Vector2.down,
                vertex1: Vector2.up,
                radius: 0.5f
            );        // Fetch the actual shape created.
        var physicsShape = shapeGroup.GetShape(shapeIndex);        // Validate what we created.
        Assert.AreEqual(PhysicsShapeType2D.Capsule, physicsShape.shapeType);
        Assert.AreApproximatelyEqual(0.5f, physicsShape.radius);
        Assert.AreEqual(2, physicsShape.vertexCount);
    }    // Get a physics shape from a Collider.
    void GetShapeFromCollider()
    {
        // Fetch the collider.
        var collider = GetComponent<CapsuleCollider2D>();        // If the collider is not active and enabled then we'll get no shapes.
        // Let's just quit if not.
        if (!collider.isActiveAndEnabled)
            return;        // Configure the collider.
        collider.size = new Vector2(1f, 2f);        // Create a shape group.
        var shapeGroup = new PhysicsShapeGroup2D();        // Get the collider shapes.
        collider.GetShapes(shapeGroup);        // Fetch the actual shape.
        var physicsShape = shapeGroup.GetShape(0);        // Validate what we retrieved.
        Assert.AreEqual(PhysicsShapeType2D.Capsule, physicsShape.shapeType);
        Assert.AreApproximatelyEqual(0.5f, physicsShape.radius);
        Assert.AreEqual(2, physicsShape.vertexCount);
    }
}
```


            
