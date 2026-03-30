This version of Unity is unsupported.



# [PhysicsShapeGroup2D](PhysicsShapeGroup2D.html).vertexCount




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












                    public int vertexCount;






### Description



The total number of vertices in the shape group used to represent all [PhysicsShape2D](PhysicsShape2D.html) within it. (Read Only)


              


```
using UnityEngine;
using UnityEngine.Assertions;public class Example : MonoBehaviour
{
    private const int ShapeCount = 10;    void Start()
    {
        // Create a shape group.
        // NOTE: We can hint to the shape group the capacity for shapes so that it's quicker when adding them.
        var shapeGroup = new PhysicsShapeGroup2D(shapeCapacity: ShapeCount);        // Add Boxes to the shape group.
        for (var n = 0; n < ShapeCount; ++n)
        {
            shapeGroup.AddBox
                (
                    center: new Vector2(n, 0f),
                    size: new Vector2(0.25f, 0.25f)
                );
        }        // Validate that we created the specified number of shapes.
        Assert.AreEqual(ShapeCount, shapeGroup.shapeCount);        // Validate that we created the correct number of vertices.
        // NOTE: Each Box has 4 vertices so we multiply this constant by the number of shapes.
        Assert.AreEqual(ShapeCount * 4, shapeGroup.vertexCount);        // Validate each shape.
        for (var n = 0; n < ShapeCount; ++n)
        {
            // Fetch the actual shape created.
            var physicsShape = shapeGroup.GetShape(n);            // Validate the shape.
            Assert.AreEqual(PhysicsShapeType2D.Polygon, physicsShape.shapeType);
            Assert.AreEqual(4, physicsShape.vertexCount);
        }
    }
}
```


            
