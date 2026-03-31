This version of Unity is unsupported.



# [Vector3](Vector3.html).MoveTowards




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

public static [Vector3](Vector3.html) MoveTowards([Vector3](Vector3.html) current,
[Vector3](Vector3.html) target,
float maxDistanceDelta);






### Parameters



| Parameter | Description |
| --- | --- |
| current | The position to move from. |
| target | The position to move towards. |
| maxDistanceDelta | Distance to move current per call. |





### Returns



**Vector3**
        The new position.





### Description



Moves vector incrementally towards a target point.





This method moves a vector from `current` to `target` points, moving no farther each call than the distance specified by `maxDistanceDelta`.

By updating an object's position each frame using the position calculated by this function, you can move it towards the target smoothly.

Control the speed of movement with the `maxDistanceDelta` parameter. To make sure that object speed is independent of frame rate, multiply the `maxDistanceDelta` value by [Time.deltaTime](Time-deltaTime.html) (or [Time.fixedDeltaTime](Time-fixedDeltaTime.html) in a `FixedUpdate` loop).

If the `current` position is already closer to the `target` than `maxDistanceDelta`, the value returned is equal to `target`. This method doesn't overshoot `target`.

You can set `maxDistanceDelta` to a negative value to move away from `target`.


              


```
// To run this example, create a cube GameObject positioned at the origin of the scene.
// Attach this script to the cube.
//
// This example creates a cylinder GameObject that becomes the target position for the
// cube. When the cube reaches the cylinder, the cylinder is re-positioned to the
// initial location of the cube. The cube then changes direction and moves towards the
// cylinder again.using UnityEngine;public class MoveTowardsExample : MonoBehaviour
{
    // Adjust the speed for the application.
    public float speed = 1.0f;    // The target (cylinder) position.
    private Transform target;    void Awake()
    {
        // Position the cube at the origin.
        transform.position = new Vector3(0.0f, 0.0f, 0.0f);        // Create and position the cylinder. Reduce the diameter.
        GameObject cylinder = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
        cylinder.transform.localScale = new Vector3(0.15f, 1.0f, 0.15f);        // Set target value to cylinder position.
        target = cylinder.transform;
        target.transform.position = new Vector3(0.8f, 0.0f, 0.8f);        // Position the camera.
        Camera.main.transform.position = new Vector3(0.85f, 1.0f, -3.0f);
        Camera.main.transform.localEulerAngles = new Vector3(15.0f, -20.0f, -0.5f);        // Create and position the floor.
        GameObject floor = GameObject.CreatePrimitive(PrimitiveType.Plane);
        floor.transform.position = new Vector3(0.0f, -1.0f, 0.0f);
    }    void Update()
    {
        // Move our position a step closer to the target.
        float step =  speed * Time.deltaTime; // calculate distance to move
        transform.position = Vector3.MoveTowards(transform.position, target.position, step);        // Check if the position of the cube and sphere are approximately equal.
        if (Vector3.Distance(transform.position, target.position) < 0.001f)
        {
            // Reset the target position to the original object position.
            target.position *= -1.0f;
        }
    }
}
```


            
