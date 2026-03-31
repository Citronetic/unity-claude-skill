This version of Unity is unsupported.



# [Vector3](Vector3.html).RotateTowards




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

public static [Vector3](Vector3.html) RotateTowards([Vector3](Vector3.html) current,
[Vector3](Vector3.html) target,
float maxRadiansDelta,
float maxMagnitudeDelta);






### Parameters



| Parameter | Description |
| --- | --- |
| current | The vector being managed. |
| target | The vector. |
| maxRadiansDelta | The maximum angle in radians allowed for this rotation. |
| maxMagnitudeDelta | The maximum allowed change in vector magnitude for this rotation. |





### Returns



**Vector3**
        The location that RotateTowards generates.





### Description



Rotates a vector `current` towards `target`.





This function is similar to [MoveTowards](Vector3.MoveTowards.html) except that the vector is treated as a direction rather
than a position. The `current` vector will be rotated round toward the `target` direction by an angle
of `maxRadiansDelta`, although it will land exactly on the target rather than overshoot. If the magnitudes
of `current` and `target` are different, then the magnitude of the result will be linearly interpolated during
the rotation. If a negative value is used for `maxRadiansDelta`, the vector will rotate away from  `target/`
until it is pointing in exactly the opposite direction, then stops.

Additional resources: [Quaternion.RotateTowards](Quaternion.RotateTowards.html).


              


```
using UnityEngine;// To use this script, attach it to the GameObject that you would like to rotate towards another game object.
// After attaching it, go to the inspector and drag the GameObject you would like to rotate towards into the target field.
// Move the target around in the scene view to see the GameObject continuously rotate towards it.
public class Example : MonoBehaviour
{
    // The target marker.
    public Transform target;    // Angular speed in radians per sec.
    public float speed = 1.0f;    void Update()
    {
        // Determine which direction to rotate towards
        Vector3 targetDirection = target.position - transform.position;        // The step size is equal to speed times frame time.
        float singleStep = speed * Time.deltaTime;        // Rotate the forward vector towards the target direction by one step
        Vector3 newDirection = Vector3.RotateTowards(transform.forward, targetDirection, singleStep, 0.0f);        // Draw a ray pointing at our target in
        Debug.DrawRay(transform.position, newDirection, Color.red);        // Calculate a rotation a step closer to the target and applies rotation to this object
        transform.rotation = Quaternion.LookRotation(newDirection);
    }
}
```


            
