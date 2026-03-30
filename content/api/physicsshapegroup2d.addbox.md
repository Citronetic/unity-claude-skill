This version of Unity is unsupported.



# [PhysicsShapeGroup2D](PhysicsShapeGroup2D.html).AddBox




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

public int AddBox([Vector2](Vector2.html) center,
[Vector2](Vector2.html) size,
float angle = 0f,
float edgeRadius = 0f);






### Parameters



| Parameter | Description |
| --- | --- |
| center | The center point of the box shape. This is analogous to Collider2D.offset. |
| size | The size of the box. This is identical to BoxCollider2D.size. |
| angle | The angle in degrees the box should be rotated around the center. |
| edgeRadius | The radius extending around the edges of the box. This is identical to BoxCollider2D.edgeRadius. |





### Returns



**int**
        Returns the shape index the shape was added to in the [PhysicsShapeGroup2D](PhysicsShapeGroup2D.html). This index is used as the main reference when retrieving a shape.





### Description



Adds a box shape ([PhysicsShapeType2D.Polygon](PhysicsShapeType2D.Polygon.html)) to the shape group.





A box shape is a form of convex polygon with four vertices and an `edgeRadius` that extends around the four edges. The ability to add a box shape is a convenience only and does not represent an actual primitive shape.

**NOTE**: A box forms a closed shape and does have an interior therefore its interior is detectable by physics queries etc.


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
        var shapeGroup = new PhysicsShapeGroup2D();        // Add a Box (polygon with four vertices).
        // NOTE: Both the angle and edgeRadius arguments are optional.
        var shapeIndex = shapeGroup.AddBox
            (
                center: new Vector2(3f, 2f),
                size: new Vector2(1f, 1f),
                angle: 0f,
                edgeRadius: 0f
            );        // Fetch the actual shape created.
        var physicsShape = shapeGroup.GetShape(shapeIndex);        // Validate what we created.
        Assert.AreEqual(PhysicsShapeType2D.Polygon, physicsShape.shapeType);
        Assert.AreEqual(4, physicsShape.vertexCount);
        Assert.AreApproximatelyEqual(0f, physicsShape.radius);
    }    // Get a physics shape from a Collider.
    void GetShapeFromCollider()
    {
        // Fetch the collider.
        var collider = GetComponent<BoxCollider2D>();        // If the collider is not active and enabled then we'll get no shapes.
        // Let's just quit if not.
        if (!collider.isActiveAndEnabled)
            return;        // Configure the collider.
        collider.offset = new Vector2(3f, 2f);
        collider.size = new Vector2(1f, 1f);        // Create a shape group.
        var shapeGroup = new PhysicsShapeGroup2D();        // Get the collider shapes.
        collider.GetShapes(shapeGroup);        // Fetch the actual shape.
        var physicsShape = shapeGroup.GetShape(0);        // Validate what we retrieved.
        Assert.AreEqual(PhysicsShapeType2D.Polygon, physicsShape.shapeType);
        Assert.AreEqual(4, physicsShape.vertexCount);
    }
}
```


            
