This version of Unity is unsupported.



# [PhysicsShapeGroup2D](PhysicsShapeGroup2D.html).Clear




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

public void Clear();






### Description



Clears all the vertices and shapes from the PhysicsShapeGroup.





This call clears the lists used to store both vertices and shapes but retains the current shape group capacity (effectively creating an empty shape group).


              


```
using UnityEngine;
using UnityEngine.Assertions;public class Example : MonoBehaviour
{
    void Start()
    {
        // Create a shape group.
        var shapeGroup = new PhysicsShapeGroup2D();        // Add a Circle to the shape group.
        shapeGroup.AddCircle
            (
                center: Vector2.zero,
                radius: 1f
            );        // Add a Box to the shape group.
        shapeGroup.AddBox
            (
                center: new Vector2(3f, 2f),
                size: new Vector2(1f, 1f)
            );        // Validate the contents.
        Assert.AreEqual(1 + 1, shapeGroup.shapeCount);
        Assert.AreEqual(1 + 4, shapeGroup.vertexCount);
        Assert.AreEqual(PhysicsShapeType2D.Circle, shapeGroup.GetShape(0).shapeType);
        Assert.AreEqual(PhysicsShapeType2D.Polygon, shapeGroup.GetShape(1).shapeType);        // Clear the shape group.
        shapeGroup.Clear();        // Validate the contents.
        Assert.AreEqual(0, shapeGroup.shapeCount);
        Assert.AreEqual(0, shapeGroup.vertexCount);
    }
}
```


            
