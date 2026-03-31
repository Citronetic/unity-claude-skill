This version of Unity is unsupported.



# [PhysicsShape2D](PhysicsShape2D.html).radius




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












                    public float radius;






### Description



The radius of the shape.





All [PhysicsShapeType2D](PhysicsShapeType2D.html) use this radius with the exception of the [Polygon](PhysicsShapeType2D.Polygon.html) type. Refer to the individual shape types for details on how the radius is used for the respective shape.


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
            );        // Fetch the shapes.
        var circleShape = shapeGroup.GetShape(circleShapeIndex);
        var capsuleShape = shapeGroup.GetShape(capsuleShapeIndex);        // Validate the shape radius.
        Assert.AreApproximatelyEqual(1f, circleShape.radius);
        Assert.AreApproximatelyEqual(0.5f, capsuleShape.radius);
    }
}
```


            
