This version of Unity is unsupported.



# [CustomCollider2D](CustomCollider2D.html).GetCustomShapes




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

public int GetCustomShapes([PhysicsShapeGroup2D](PhysicsShapeGroup2D.html) physicsShapeGroup);






### Parameters



| Parameter | Description |
| --- | --- |
| physicsShapeGroup | The physics shape group that will receive all the physics shapes and vertices from the Collider. |





### Returns



**int**
        Returns the total number of [physics shapes](PhysicsShape2D.html) placed in the specified `physicsShapeGroup`.





### Description



Gets all the physics shapes and vertices in the Collider and places them in the specified [PhysicsShapeGroup2D](PhysicsShapeGroup2D.html).


              


```
using UnityEngine;
using UnityEngine.Assertions;public class Example : MonoBehaviour
{
    void Start()
    {
        // Fetch the custom collider.
        var customCollider = GetComponent<CustomCollider2D>();        // Create an input shape group.
        var inputShapeGroup = new PhysicsShapeGroup2D();        // Add 5 Circles to the shape group.
        inputShapeGroup.AddCircle(center: Vector2.zero,  radius: 0.5f);
        inputShapeGroup.AddCircle(center: Vector2.zero,  radius: 0.6f);
        inputShapeGroup.AddCircle(center: Vector2.zero,  radius: 0.7f);
        inputShapeGroup.AddCircle(center: Vector2.zero,  radius: 0.8f);
        inputShapeGroup.AddCircle(center: Vector2.zero,  radius: 0.9f);        // Assign our shapes.
        customCollider.SetCustomShapes(inputShapeGroup);        // Validate the contents of the custom collider.
        Assert.AreEqual(5, customCollider.customShapeCount);        // Create an output shape group.
        var outputShapeGroup = new PhysicsShapeGroup2D();        // Get all the custom shapes.
        var shapeCount = customCollider.GetCustomShapes(outputShapeGroup);        // Validate the results.
        Assert.AreEqual(5, shapeCount);
        Assert.AreEqual(5, outputShapeGroup.shapeCount);
        Assert.AreApproximatelyEqual(0.5f, outputShapeGroup.GetShape(shapeIndex: 0).radius);
        Assert.AreApproximatelyEqual(0.6f, outputShapeGroup.GetShape(shapeIndex: 1).radius);
        Assert.AreApproximatelyEqual(0.7f, outputShapeGroup.GetShape(shapeIndex: 2).radius);
        Assert.AreApproximatelyEqual(0.8f, outputShapeGroup.GetShape(shapeIndex: 3).radius);
        Assert.AreApproximatelyEqual(0.9f, outputShapeGroup.GetShape(shapeIndex: 4).radius);
    }
}
```




---








## Declaration

public int GetCustomShapes([PhysicsShapeGroup2D](PhysicsShapeGroup2D.html) physicsShapeGroup,
int shapeIndex,
int shapeCount = 1);






### Parameters



| Parameter | Description |
| --- | --- |
| physicsShapeGroup | The physics shape group that will receive the physics shapes and vertices from the Collider. |
| shapeIndex | The shape index within the Collider to start retrieving shapes from. |
| shapeCount | The total number of shapes starting at the shapeIndex to retrieve. |





### Returns



**int**
        The total number of [physics shapes](PhysicsShape2D.html) placed in the specified `physicsShapeGroup`.





### Description



Gets a specified number of physics shapes defined by`shapeCount` starting at `shapeIndex` along with all associated vertices those shapes use and places them in the specified [PhysicsShapeGroup2D](PhysicsShapeGroup2D.html).


              


```
using UnityEngine;
using UnityEngine.Assertions;public class Example : MonoBehaviour
{
    void Start()
    {
        // Fetch the custom collider.
        var customCollider = GetComponent<CustomCollider2D>();        // Create an input shape group.
        var inputShapeGroup = new PhysicsShapeGroup2D();        // Add 5 Circles to the shape group.
        inputShapeGroup.AddCircle(center: Vector2.zero,  radius: 0.5f);
        inputShapeGroup.AddCircle(center: Vector2.zero,  radius: 0.6f);
        inputShapeGroup.AddCircle(center: Vector2.zero,  radius: 0.7f);
        inputShapeGroup.AddCircle(center: Vector2.zero,  radius: 0.8f);
        inputShapeGroup.AddCircle(center: Vector2.zero,  radius: 0.9f);        // Assign our shapes.
        customCollider.SetCustomShapes(inputShapeGroup);        // Validate the contents of the custom collider.
        Assert.AreEqual(5, customCollider.customShapeCount);        // Create an output shape group.
        var outputShapeGroup = new PhysicsShapeGroup2D();        // Get the last 3 custom shapes.
        var shapeCount = customCollider.GetCustomShapes(outputShapeGroup, shapeIndex: 2, shapeCount: 3);        // Validate the results.
        Assert.AreEqual(3, shapeCount);
        Assert.AreEqual(3, outputShapeGroup.shapeCount);
        Assert.AreApproximatelyEqual(0.7f, outputShapeGroup.GetShape(shapeIndex: 0).radius);
        Assert.AreApproximatelyEqual(0.8f, outputShapeGroup.GetShape(shapeIndex: 1).radius);
        Assert.AreApproximatelyEqual(0.9f, outputShapeGroup.GetShape(shapeIndex: 2).radius);
    }
}
```




---








## Declaration

public int GetCustomShapes(NativeArray<PhysicsShape2D> shapes,
NativeArray<Vector2> vertices);






### Parameters



| Parameter | Description |
| --- | --- |
| shapes | The array that will be populated with a copy of all the shapes in the PhysicsShapeGroup2D. |
| vertices | The array that will be populated with a copy of all the vertices in the PhysicsShapeGroup2D. |





### Returns



**int**
        Returns the total number of [physics shapes](PhysicsShape2D.html) placed in the specified arrays.





### Description



Gets all the physics shapes and vertices in the Collider and places them in the specified arrays.


              


```
using Unity.Collections;
using UnityEngine;
using UnityEngine.Assertions;public class Example : MonoBehaviour
{
    void Start()
    {
        // Fetch the custom collider.
        var customCollider = GetComponent<CustomCollider2D>();        // Create an input shape group.
        var inputShapeGroup = new PhysicsShapeGroup2D();        // Add 5 Circles to the shape group.
        inputShapeGroup.AddCircle(center: new Vector2(3f, 8f), radius: 0.5f);
        inputShapeGroup.AddCircle(center: new Vector2(6f, 3f), radius: 0.6f);
        inputShapeGroup.AddCircle(center: new Vector2(2f, 5f), radius: 0.7f);
        inputShapeGroup.AddCircle(center: new Vector2(9f, 2f), radius: 0.8f);
        inputShapeGroup.AddCircle(center: new Vector2(1f, 7f), radius: 0.9f);        // Assign our shapes.
        customCollider.SetCustomShapes(inputShapeGroup);        // Validate the contents of the custom collider.
        Assert.AreEqual(5, customCollider.customShapeCount);        // Get all the custom shapes.
        var shapes = new NativeArray<PhysicsShape2D>(customCollider.customShapeCount, Allocator.Temp);
        var vertices = new NativeArray<Vector2>(customCollider.customVertexCount, Allocator.Temp);
        var shapeCount = customCollider.GetCustomShapes(shapes, vertices);        // Validate the shapes.
        Assert.AreEqual(5, shapeCount);
        Assert.AreApproximatelyEqual(0.5f, shapes[0].radius);
        Assert.AreApproximatelyEqual(0.6f, shapes[1].radius);
        Assert.AreApproximatelyEqual(0.7f, shapes[2].radius);
        Assert.AreApproximatelyEqual(0.8f, shapes[3].radius);
        Assert.AreApproximatelyEqual(0.9f, shapes[4].radius);        // Validate the vertices.
        Assert.AreEqual(new Vector2(3f, 8f), vertices[0]);
        Assert.AreEqual(new Vector2(6f, 3f), vertices[1]);
        Assert.AreEqual(new Vector2(2f, 5f), vertices[2]);
        Assert.AreEqual(new Vector2(9f, 2f), vertices[3]);
        Assert.AreEqual(new Vector2(1f, 7f), vertices[4]);        // Dispose of the native arrays.
        vertices.Dispose();
        shapes.Dispose();
    }
}
```


            
