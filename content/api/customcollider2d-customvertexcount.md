This version of Unity is unsupported.



# [CustomCollider2D](CustomCollider2D.html).customVertexCount




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












                    public int customVertexCount;






### Description



The total number of [vertices](Vector2.html) used by the Collider. (Read Only)





All the Collider shapes with a total shape count of [customShapeCount](CustomCollider2D-customShapeCount.html) use all the vertices represented here.


              


```
using UnityEngine;
using UnityEngine.Assertions;public class Example : MonoBehaviour
{
    void Start()
    {
        // Fetch the custom collider.
        var customCollider = GetComponent<CustomCollider2D>();        // Create a shape group.
        var shapeGroup = new PhysicsShapeGroup2D();        // Add a Circle to the shape group.
        shapeGroup.AddCircle
            (
                center: new Vector2(-1f, 0f),
                radius: 0.5f
            );        // Add a box to the shape group.
        shapeGroup.AddBox
            (
                center: new Vector2(1f, 0f),
                size: new Vector2(1f, 1f)
            );        // Assign our shapes.
        customCollider.SetCustomShapes(shapeGroup);        // Validate the custom shape vertices.
        Assert.AreApproximatelyEqual(shapeGroup.vertexCount, customCollider.customVertexCount);
    }
}
```


            
