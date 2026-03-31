This version of Unity is unsupported.



# [CustomCollider2D](CustomCollider2D.html).customShapeCount




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












                    public int customShapeCount;






### Description



The total number of custom [PhysicsShape2D](PhysicsShape2D.html) assigned to the Collider. (Read Only)





All the shapes represented here contain a total vertex count of [customVertexCount](CustomCollider2D-customVertexCount.html).

**NOTE**: This property should not be confused with [Collider2D.shapeCount](Collider2D-shapeCount.html) which is a count of active shapes on the [Collider2D](Collider2D.html). The [CustomCollider2D](CustomCollider2D.html) has this property too.  If a [Collider2D](Collider2D.html) is disabled, inactive or in [error](Collider2D-errorState.html) then the [Collider2D.shapeCount](Collider2D-shapeCount.html) will be zero whereas the [customShapeCount](CustomCollider2D-customShapeCount.html) will always be a count of assigned custom [PhysicsShape2D](PhysicsShape2D.html).


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
        customCollider.SetCustomShapes(shapeGroup);        // Validate the custom shape count.
        Assert.AreApproximatelyEqual(shapeGroup.shapeCount, customCollider.customShapeCount);
    }
}
```


            
