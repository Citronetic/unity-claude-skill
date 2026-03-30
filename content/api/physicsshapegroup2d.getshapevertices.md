This version of Unity is unsupported.



# [PhysicsShapeGroup2D](PhysicsShapeGroup2D.html).GetShapeVertices




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

public void GetShapeVertices(int shapeIndex,
List<Vector2> vertices);






### Parameters



| Parameter | Description |
| --- | --- |
| shapeIndex | The index of the shape stored in the PhysicsShapeGroup2D. The shape index is zero-based with the shape group having a quantity of shapes specified by shapeCount. |
| vertices | A list that will be populated with a copy of all the shape vertices in the PhysicsShapeGroup2D. |





### Description



Gets a copy of the shape vertices in the [PhysicsShapeGroup2D](PhysicsShapeGroup2D.html).





**NOTE**: Because this is a copy, changing the specified shape  `vertices` list afterwards will not change the [PhysicsShapeGroup2D](PhysicsShapeGroup2D.html).


              


```
using System.Collections.Generic;
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
            );
        // Fetch the shape vertices from the shape group.
        var vertices = new List<Vector2>();
        shapeGroup.GetShapeVertices(shapeIndex, vertices);        // validate the Capsule vertices (2).
        Assert.AreEqual(Vector2.down, vertices[0]);
        Assert.AreEqual(Vector2.up, vertices[1]);
    }
}
```


            
