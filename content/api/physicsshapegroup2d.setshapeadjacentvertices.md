This version of Unity is unsupported.



# [PhysicsShapeGroup2D](PhysicsShapeGroup2D.html).SetShapeAdjacentVertices




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

public void SetShapeAdjacentVertices(int shapeIndex,
bool useAdjacentStart,
bool useAdjacentEnd,
[Vector2](Vector2.html) adjacentStart,
[Vector2](Vector2.html) adjacentEnd);






### Parameters



| Parameter | Description |
| --- | --- |
| shapeIndex | The index of the shape to be modified that is stored the PhysicsShapeGroup2D. |
| useAdjacentStart | Sets the PhysicsShape2D.useAdjacentStart property of the selected shape. |
| useAdjacentEnd | Sets the PhysicsShape2D.useAdjacentEnd property of the selected shape. |
| adjacentStart | Sets the PhysicsShape2D.adjacentStart property of the selected shape. |
| adjacentEnd | Sets the PhysicsShape2D.adjacentEnd property of the selected shape. |





### Description



Sets the adjacent vertices of a shape.





**NOTE**: Calling this on a [PhysicsShape2D](PhysicsShape2D.html) that does not have a [shapeType](PhysicsShape2D-shapeType.html) of [PhysicsShapeType2D.Edges](PhysicsShapeType2D.Edges.html) will result in an exception being thrown.


              


```
using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Assertions;public class Example : MonoBehaviour
{
    void Start()
    {
        // Create a shape group.
        var shapeGroup = new PhysicsShapeGroup2D();        // Add a list of Edges.
        var shapeIndex = shapeGroup.AddEdges
            (
                vertices: new List<Vector2>
                {
                    new Vector2(-4f, 0f),
                    new Vector2(-2f, -0.5f),
                    new Vector2(0f, 0f),
                    new Vector2(2f, -0.5f),
                    new Vector2(4f, 0f),
                },                edgeRadius: 0.5f,                useAdjacentStart: true,
                useAdjacentEnd: true,
                adjacentStart: new Vector2(-5f, -1f),
                adjacentEnd: new Vector2(6f, 2f)
            );        // Fetch the actual shape created.
        var physicsShape = shapeGroup.GetShape(shapeIndex);        // Validate what we created.
        Assert.AreEqual(PhysicsShapeType2D.Edges, physicsShape.shapeType);
        Assert.AreApproximatelyEqual(0.5f, physicsShape.radius);
        Assert.AreEqual(5, physicsShape.vertexCount);
        Assert.IsTrue(physicsShape.useAdjacentStart);
        Assert.IsTrue(physicsShape.useAdjacentEnd);
        Assert.AreEqual(new Vector2(-5f, -1f), physicsShape.adjacentStart);
        Assert.AreEqual(new Vector2(6f, 2f), physicsShape.adjacentEnd);        // Set the adjacent vertices.
        shapeGroup.SetShapeAdjacentVertices(
            shapeIndex,
            useAdjacentStart: true,
            useAdjacentEnd: true,
            adjacentStart: new Vector2(-10f, -5f),
            adjacentEnd: new Vector2(12f, 3f));        // Fetch the updated shape.
        physicsShape = shapeGroup.GetShape(shapeIndex);        // Validate what we updated.
        Assert.IsTrue(physicsShape.useAdjacentStart);
        Assert.IsTrue(physicsShape.useAdjacentEnd);
        Assert.AreEqual(new Vector2(-10f, -5f), physicsShape.adjacentStart);
        Assert.AreEqual(new Vector2(12f, 3f), physicsShape.adjacentEnd);
    }
}
```


            
