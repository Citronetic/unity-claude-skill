This version of Unity is unsupported.



# [PhysicsShapeGroup2D](PhysicsShapeGroup2D.html).SetShapeVertex




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

public void SetShapeVertex(int shapeIndex,
int vertexIndex,
[Vector2](Vector2.html) vertex);






### Parameters



| Parameter | Description |
| --- | --- |
| shapeIndex | The index of the shape stored in the PhysicsShapeGroup2D. The shape index is zero-based with the shape group having a quantity of shapes specified by shapeCount. |
| vertexIndex | The index of the shape vertex stored in the PhysicsShapeGroup2D. The vertex index is zero-based with the shape having a quantity of vertex specified by PhysicsShape2D.vertexCount. |
| vertex | The value to set the shape vertex to. |





### Description



Sets a single vertex of a shape.





**NOTE**: When accessing multiple vertices, it is more efficient to do one of the following:



          - Get all the shape vertices using [GetShapeVertices](PhysicsShapeGroup2D.GetShapeVertices.html)

          - Get all the shape group vertices using [GetShapeData](PhysicsShapeGroup2D.GetShapeData.html)

          - Create the [PhysicsShapeGroup2D](PhysicsShapeGroup2D.html) with explicit shapes and vertices lists using the shape group [Constructor](PhysicsShapeGroup2D-ctor.html)





Additional resources: [GetShapeVertex](PhysicsShapeGroup2D.GetShapeVertex.html).


              


```
using UnityEngine;
using UnityEngine.Assertions;public class Example : MonoBehaviour
{
    void Start()
    {
        // Create a shape group.
        var shapeGroup = new PhysicsShapeGroup2D();        // Add a Capsule to the shape group.
        var shapeIndex = shapeGroup.AddCapsule
            (
                vertex0: Vector2.down,
                vertex1: Vector2.up,
                radius: 0.5f
            );        // Fetch the shape vertices from the shape group.
        var vertex0 = shapeGroup.GetShapeVertex(shapeIndex, vertexIndex: 0);
        var vertex1 = shapeGroup.GetShapeVertex(shapeIndex, vertexIndex: 1);        // Validate the Capsule vertices.
        Assert.AreEqual(Vector2.down, vertex0);
        Assert.AreEqual(Vector2.up, vertex1);        // Set the shape vertices in the shape group.
        shapeGroup.SetShapeVertex(shapeIndex, vertexIndex: 0, vertex: Vector2.left);
        shapeGroup.SetShapeVertex(shapeIndex, vertexIndex: 1, vertex: Vector2.right);        // Fetch the shape vertices from the shape group.
        vertex0 = shapeGroup.GetShapeVertex(shapeIndex, vertexIndex: 0);
        vertex1 = shapeGroup.GetShapeVertex(shapeIndex, vertexIndex: 1);        // Validate the Capsule vertices.
        Assert.AreEqual(Vector2.left, vertex0);
        Assert.AreEqual(Vector2.right, vertex1);
    }
}
```


            
