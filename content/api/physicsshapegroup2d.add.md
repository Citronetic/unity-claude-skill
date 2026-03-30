This version of Unity is unsupported.



# [PhysicsShapeGroup2D](PhysicsShapeGroup2D.html).Add




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

public void Add([PhysicsShapeGroup2D](PhysicsShapeGroup2D.html) physicsShapeGroup);






### Parameters



| Parameter | Description |
| --- | --- |
| physicsShapeGroup | The PhysicsShapeGroup2D to add to this shape group. (Read Only) |





### Description



Adds a copy of all the [PhysicsShape2D](PhysicsShape2D.html) and their geometry from the specified `physicsShapeGroup` into this shape group. The specified `physicsShapeGroup` is not modified.


              


```
using UnityEngine;
using UnityEngine.Assertions;public class Example : MonoBehaviour
{
    private const int ShapeCount = 10;    void Start()
    {
        // Create a shape group and add a Circle to it.
        var shapeGroup1 = new PhysicsShapeGroup2D();
        shapeGroup1.AddCircle
            (
                center: Vector2.zero,
                radius: 1f
            );        // Validate the contents.
        Assert.AreEqual(1, shapeGroup1.shapeCount);
        Assert.AreEqual(1, shapeGroup1.vertexCount);
        Assert.AreEqual(PhysicsShapeType2D.Circle, shapeGroup1.GetShape(0).shapeType);        // Create another shape group and add a Box to it.
        var shapeGroup2 = new PhysicsShapeGroup2D();
        shapeGroup2.AddBox
            (
                center: new Vector2(3f, 2f),
                size: new Vector2(1f, 1f)
            );        // Validate the contents.
        Assert.AreEqual(1, shapeGroup2.shapeCount);
        Assert.AreEqual(4, shapeGroup2.vertexCount);
        Assert.AreEqual(PhysicsShapeType2D.Polygon, shapeGroup2.GetShape(0).shapeType);        // Add the second shape group to the first shape group.
        shapeGroup1.Add(shapeGroup2);        // Validate the contents.
        Assert.AreEqual(1 + 1, shapeGroup1.shapeCount);
        Assert.AreEqual(1 + 4, shapeGroup1.vertexCount);
        Assert.AreEqual(PhysicsShapeType2D.Circle, shapeGroup1.GetShape(0).shapeType);
        Assert.AreEqual(PhysicsShapeType2D.Polygon, shapeGroup1.GetShape(1).shapeType);
    }
}
```


            
