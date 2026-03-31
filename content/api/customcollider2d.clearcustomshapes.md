This version of Unity is unsupported.



# [CustomCollider2D](CustomCollider2D.html).ClearCustomShapes




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

public void ClearCustomShapes();






### Description



Deletes all the shapes and associated vertices for those shapes from the Collider.





Any existing contacts for this Collider will be recalculated during the next simulation step.


              


```
using UnityEngine;
using UnityEngine.Assertions;public class Example : MonoBehaviour
{
    void Start()
    {
        // Fetch the custom collider.
        var customCollider = GetComponent<CustomCollider2D>();        // Create a shape group.
        var shapeGroup = new PhysicsShapeGroup2D();        // Add 5 Circles to the shape group.
        shapeGroup.AddCircle(center: new Vector2(3f, 0f),  radius: 0.5f);
        shapeGroup.AddCircle(center: new Vector2(4f, 0f),  radius: 0.5f);
        shapeGroup.AddCircle(center: new Vector2(5f, 0f),  radius: 0.5f);
        shapeGroup.AddCircle(center: new Vector2(6f, 0f),  radius: 0.5f);
        shapeGroup.AddCircle(center: new Vector2(7f, 0f),  radius: 0.5f);        // Assign our shapes.
        customCollider.SetCustomShapes(shapeGroup);        // Validate the contents of the custom collider.
        Assert.AreEqual(5, customCollider.customShapeCount);        // Clear all the remaining shapes.
        customCollider.ClearCustomShapes();        // Validate the contents of the custom collider.
        Assert.AreEqual(0, customCollider.customShapeCount);
    }
}
```




---








## Declaration

public void ClearCustomShapes(int shapeIndex,
int shapeCount);






### Parameters



| Parameter | Description |
| --- | --- |
| shapeIndex | The index of the shape stored in the Collider. |
| shapeCount | The number of shapes to delete starting at the specified index. |





### Description



Deletes a specific number of shapes defined by `shapeCount` starting at `shapeIndex` along with all associated vertices those shapes use.





Any existing contacts for this Collider will be recalculated during the next simulation step.


              


```
using UnityEngine;
using UnityEngine.Assertions;public class Example : MonoBehaviour
{
    void Start()
    {
        // Fetch the custom collider.
        var customCollider = GetComponent<CustomCollider2D>();        // Create a shape group.
        var shapeGroup = new PhysicsShapeGroup2D();        // Add 5 Circles to the shape group.
        shapeGroup.AddCircle(center: new Vector2(3f, 0f),  radius: 0.5f);
        shapeGroup.AddCircle(center: new Vector2(4f, 0f),  radius: 0.5f);
        shapeGroup.AddCircle(center: new Vector2(5f, 0f),  radius: 0.5f);
        shapeGroup.AddCircle(center: new Vector2(6f, 0f),  radius: 0.5f);
        shapeGroup.AddCircle(center: new Vector2(7f, 0f),  radius: 0.5f);        // Assign our shapes.
        customCollider.SetCustomShapes(shapeGroup);        // Validate the contents of the custom collider.
        Assert.AreEqual(5, customCollider.customShapeCount);        // Clear the first 2 shapes.
        customCollider.ClearCustomShapes(shapeIndex: 0, shapeCount: 2);        // Validate the contents of the custom collider.
        Assert.AreEqual(3, customCollider.customShapeCount);        // Clear the remaining 3 shapes.
        customCollider.ClearCustomShapes(shapeIndex: 0, shapeCount: 3);        // Validate the contents of the custom collider.
        Assert.AreEqual(0, customCollider.customShapeCount);
    }
}
```


            
