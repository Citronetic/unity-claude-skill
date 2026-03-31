This version of Unity is unsupported.



# [PhysicsShape2D](PhysicsShape2D.html).vertexStartIndex




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












                    public int vertexStartIndex;






### Description



The start index for the geometry of this shape within the [PhysicsShapeGroup2D](PhysicsShapeGroup2D.html).





Multiple [PhysicsShape2D](PhysicsShape2D.html) in a [PhysicsShapeGroup2D](PhysicsShapeGroup2D.html) are represented as a single list of vertices. This index is the start of this shape within that list.

Additional resources: [GetShapeVertex](PhysicsShapeGroup2D.GetShapeVertex.html), [GetShapeVertices](PhysicsShapeGroup2D.GetShapeVertices.html).


              


```
using UnityEngine;
using UnityEngine.Assertions;public class Example : MonoBehaviour
{
    void Start()
    {
        // Create a shape group.
        var shapeGroup = new PhysicsShapeGroup2D();        // Add a Capsule to the shape group.
        var capsuleShapeIndex = shapeGroup.AddCapsule
            (
                vertex0: Vector2.down,
                vertex1: Vector2.up,
                radius: 0.5f
            );        // Add a Circle to the shape group.
        var circleShapeIndex = shapeGroup.AddCircle
            (
                center: new Vector2(-2f, 3f),
                radius: 1f
            );        // Fetch the shapes.
        var capsuleShape = shapeGroup.GetShape(capsuleShapeIndex);
        var circleShape = shapeGroup.GetShape(circleShapeIndex);        // Validate the shape vertex count.
        Assert.AreEqual(2, capsuleShape.vertexCount);
        Assert.AreEqual(1, circleShape.vertexCount);        // Validate the Capsule vertex start index.
        // NOTE: The Capsule is the first shape so its index is 0.
        //  It has 2 vertices at indices 0 and 1.
        Assert.AreEqual(0, capsuleShape.vertexStartIndex);        // Validate the Circle vertex start index.
        // NOTE: The Circle is the second shape so its index is 0.
        // It comes after the Capsule which has 2 vertices at indices 0 and 1 so
        // the Circle start index is 2.
        Assert.AreEqual(2, circleShape.vertexStartIndex);
    }
}
```


            
