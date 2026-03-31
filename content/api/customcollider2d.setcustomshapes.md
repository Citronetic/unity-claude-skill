This version of Unity is unsupported.



# [CustomCollider2D](CustomCollider2D.html).SetCustomShapes




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

public void SetCustomShapes([PhysicsShapeGroup2D](PhysicsShapeGroup2D.html) physicsShapeGroup);






### Parameters



| Parameter | Description |
| --- | --- |
| physicsShapeGroup | The PhysicsShapeGroup2D to use as the source of shapes and vertices. |





### Description



Sets all the shapes and vertices in the Collider to those represented by the specified [PhysicsShapeGroup2D](PhysicsShapeGroup2D.html).





All existing shapes and vertices are replaced by the shapes and vertices contained in the specified [PhysicsShapeGroup2D](PhysicsShapeGroup2D.html).

Where possible, the Collider will reduce the amount of work required to assign the specifed shapes and vertices. The Collider checks each [PhysicsShape2D](PhysicsShape2D.html) being assigned at each shape index and if the Collider already contains the same physics shape then no work is done. If the physics shape has the same [shape type](PhysicsShape2D-shapeType.html) and [vertex count](PhysicsShape2D-vertexCount.html) then the existing physics engine shape will only have its [radius](PhysicsShape2D-radius.html) and [vertices](PhysicsShape2D-vertexStartIndex.html) updated. If the physics shape has a different [shape type](PhysicsShape2D-shapeType.html) or [vertex count](PhysicsShape2D-vertexCount.html) then the physics engine shape will be recreated.

Any existing contacts for this Collider will be recalculated during the next simulation step.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        // Fetch the custom collider.
        var customCollider = GetComponent<CustomCollider2D>();        // Create a shape group.
        var shapeGroup = new PhysicsShapeGroup2D();        // Add a Circle to the shape group.
        shapeGroup.AddCircle
            (
                center: new Vector2(-1f, 0f),
                radius: 0.5f
            );        // Add a box to the shape group.
        shapeGroup.AddBox
            (
                center: new Vector2(1f, 0f),
                size: new Vector2(1f, 1f)
            );        // Assign the shapes and vertices.
        customCollider.SetCustomShapes(shapeGroup);
    }
}
```




---








## Declaration

public void SetCustomShapes(NativeArray<PhysicsShape2D> shapes,
NativeArray<Vector2> vertices);






### Parameters



| Parameter | Description |
| --- | --- |
| shapes | The array containing all the shapes used to assign to the Collider. |
| vertices | The array containing all the vertices used to assign to the Collider. |





### Description



Sets all the shapes and vertices in the Collider to those represented by the specified arrays.





All existing shapes and vertices are replaced by the shapes and vertices contained in the specified arrays.

Where possible, the Collider will reduce the amount of work required to assign the specified shapes and vertices. The Collider checks each [PhysicsShape2D](PhysicsShape2D.html) being assigned at each shape index and if the Collider already contains the same physics shape then no work is done. If the physics shape has the same [shape type](PhysicsShape2D-shapeType.html) and [vertex count](PhysicsShape2D-vertexCount.html) then the existing physics engine shape will only have its [radius](PhysicsShape2D-radius.html) and [vertices](PhysicsShape2D-vertexStartIndex.html) updated. If the physics shape has a different [shape type](PhysicsShape2D-shapeType.html) or [vertex count](PhysicsShape2D-vertexCount.html) then the physics engine shape will be recreated.

Any existing contacts for this Collider will be recalculated during the next simulation step.


              


```
using Unity.Collections;
using UnityEngine;
using UnityEngine.Assertions;public class Example : MonoBehaviour
{
    void Start()
    {
        // Create a native shapes array and populate it with a Circle and Capsule.
        var shapes = new NativeArray<PhysicsShape2D>(2, Allocator.Temp)
        {
            [0] = new PhysicsShape2D() { shapeType = PhysicsShapeType2D.Circle, radius = 1f, vertexStartIndex = 0, vertexCount = 1 },
            [1] = new PhysicsShape2D() { shapeType = PhysicsShapeType2D.Capsule, radius = 0.5f, vertexStartIndex = 1, vertexCount = 2 }
        };        // Create a native vertices array and populate it with the vertices for the shapes.
        var vertices = new NativeArray<Vector2>(3, Allocator.Temp)
        {
            [0] = new Vector2(2f, 3f),
            [1] = Vector2.down,
            [2] = Vector2.up
        };        // Fetch the custom collider.
        var customCollider = GetComponent<CustomCollider2D>();        // Set custom collider to the shapes and vertices.
        customCollider.SetCustomShapes(shapes, vertices);        // Dispose of the native arrays.
        vertices.Dispose();
        shapes.Dispose();        // Validate the collider.
        Assert.AreEqual(2, customCollider.customShapeCount);
        Assert.AreEqual(3, customCollider.customVertexCount);        // Get all the custom shapes.
        var shapeGroup = new PhysicsShapeGroup2D();
        customCollider.GetCustomShapes(shapeGroup);        // Validate the first shape and vertex.
        var shape0 = shapeGroup.GetShape(0);
        Assert.AreEqual(PhysicsShapeType2D.Circle, shape0.shapeType);
        Assert.AreApproximatelyEqual(1f, shape0.radius);
        Assert.AreEqual(0, shape0.vertexStartIndex);
        Assert.AreEqual(1, shape0.vertexCount);
        Assert.AreEqual(new Vector2(2f, 3f), shapeGroup.GetShapeVertex(shapeIndex: 0, vertexIndex: 0));        // Validate the second shape and vertices.
        var shape1 = shapeGroup.GetShape(1);
        Assert.AreEqual(PhysicsShapeType2D.Capsule, shape1.shapeType);
        Assert.AreApproximatelyEqual(0.5f, shape1.radius);
        Assert.AreEqual(1, shape1.vertexStartIndex);
        Assert.AreEqual(2, shape1.vertexCount);
        Assert.AreEqual(Vector2.down, shapeGroup.GetShapeVertex(shapeIndex: 1, vertexIndex: 0));
        Assert.AreEqual(Vector2.up, shapeGroup.GetShapeVertex(shapeIndex: 1, vertexIndex: 1));
    }
}
```


            
