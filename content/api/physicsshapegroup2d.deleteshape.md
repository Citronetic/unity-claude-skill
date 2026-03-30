This version of Unity is unsupported.



# [PhysicsShapeGroup2D](PhysicsShapeGroup2D.html).DeleteShape




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

public void DeleteShape(int shapeIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| shapeIndex | The index of the shape stored the PhysicsShapeGroup2D. |





### Description



When destroying a shape at the specified `shapeIndex`, all other shapes that exist above the specified `shapeIndex` will have their shape indices updated appropriately.


              


```
using UnityEngine;
using UnityEngine.Assertions;public class Example : MonoBehaviour
{
    void Start()
    {
        // Create a shape group.
        var shapeGroup = new PhysicsShapeGroup2D();        // Add two Circles to the shape group.
        shapeGroup.AddCircle
            (
                center: Vector2.left,
                radius: 1f
            );
        var shapeIndex = shapeGroup.AddCircle
            (
                center: Vector2.right,
                radius: 1f
            );        // Add a Box to the shape group.
        shapeGroup.AddBox
            (
                center: new Vector2(3f, 2f),
                size: new Vector2(1f, 1f)
            );        // Validate the contents.
        Assert.AreEqual(1 + 1 + 1, shapeGroup.shapeCount);
        Assert.AreEqual(1 + 1 + 4, shapeGroup.vertexCount);
        Assert.AreEqual(PhysicsShapeType2D.Circle, shapeGroup.GetShape(0).shapeType);
        Assert.AreEqual(PhysicsShapeType2D.Circle, shapeGroup.GetShape(1).shapeType);
        Assert.AreEqual(PhysicsShapeType2D.Polygon, shapeGroup.GetShape(2).shapeType);        // Delete the second Circle shape.
        shapeGroup.DeleteShape(shapeIndex);        // Validate the contents.
        Assert.AreEqual(1 + 1, shapeGroup.shapeCount);
        Assert.AreEqual(1 + 4, shapeGroup.vertexCount);
        Assert.AreEqual(PhysicsShapeType2D.Circle, shapeGroup.GetShape(0).shapeType);
        Assert.AreEqual(PhysicsShapeType2D.Polygon, shapeGroup.GetShape(1).shapeType);
    }
}
```


            
