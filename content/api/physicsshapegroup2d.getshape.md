This version of Unity is unsupported.



# [PhysicsShapeGroup2D](PhysicsShapeGroup2D.html).GetShape




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

public [PhysicsShape2D](PhysicsShape2D.html) GetShape(int shapeIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| shapeIndex | The index of the shape stored the PhysicsShapeGroup2D. The shape index is zero-based with the shape group having a quantity of shapes specified by shapeCount. |





### Returns



**PhysicsShape2D**
        Returns the shape stored at the specified `shapeIndex`.





### Description



Gets the [PhysicsShape2D](PhysicsShape2D.html) stored at the specified `shapeIndex`.





**NOTE**: Because the [PhysicsShape2D](PhysicsShape2D.html) is a struct, this is a copy of the shape therefore changing the shape afterwards will not change the [PhysicsShapeGroup2D](PhysicsShapeGroup2D.html).


              


```
using UnityEngine;
using UnityEngine.Assertions;public class Example : MonoBehaviour
{
    void Start()
    {
        // Create a shape group.
        var shapeGroup = new PhysicsShapeGroup2D();        // Add a Circle to the shape group.
        var circleShapeIndex = shapeGroup.AddCircle
            (
                center: new Vector2(-2f, 3f),
                radius: 1f
            );        // Add a Capsule to the shape group.
        var capsuleShapeIndex = shapeGroup.AddCapsule
            (
                vertex0: Vector2.down,
                vertex1: Vector2.up,
                radius: 0.5f
            );        // Validate the contents.
        Assert.AreEqual(PhysicsShapeType2D.Circle, shapeGroup.GetShape(circleShapeIndex).shapeType);
        Assert.AreEqual(PhysicsShapeType2D.Capsule, shapeGroup.GetShape(capsuleShapeIndex).shapeType);
    }
}
```


            
