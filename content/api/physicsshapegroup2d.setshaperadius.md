This version of Unity is unsupported.



# [PhysicsShapeGroup2D](PhysicsShapeGroup2D.html).SetShapeRadius




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

public void SetShapeRadius(int shapeIndex,
float radius);






### Parameters



| Parameter | Description |
| --- | --- |
| shapeIndex | The index of the shape stored in the PhysicsShapeGroup2D. The shape index is zero-based with the shape group having a quantity of shapes specified by shapeCount. |
| radius | The value to set the shape radius to. |





### Description



Sets the radius of a shape.


              


```
using UnityEngine;
using UnityEngine.Assertions;public class Example : MonoBehaviour
{
    void Start()
    {
        // Create a shape group.
        var shapeGroup = new PhysicsShapeGroup2D();        // Add a Circle to the shape group.
        var shapeIndex = shapeGroup.AddCircle
            (
                center: Vector2.zero,
                radius: 0.5f
            );        // Fetch the Circle shape and validate the radius.
        var physicsShape = shapeGroup.GetShape(shapeIndex);
        Assert.AreApproximatelyEqual(0.5f, physicsShape.radius);        // Update the Circle radius.
        shapeGroup.SetShapeRadius(shapeIndex, 2f);        // Fetch the Circle shape and validate the radius.
        physicsShape = shapeGroup.GetShape(shapeIndex);
        Assert.AreApproximatelyEqual(2f, physicsShape.radius);
    }
}
```


            
