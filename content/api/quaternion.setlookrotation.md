This version of Unity is unsupported.



# [Quaternion](Quaternion.html).SetLookRotation




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




                [Switch to Manual](../Manual/class-Quaternion.html)










## Declaration

public void SetLookRotation([Vector3](Vector3.html) view,
[Vector3](Vector3.html) up = Vector3.up);






### Parameters



| Parameter | Description |
| --- | --- |
| view | The direction to look in. |
| up | The vector that defines in which direction up is. |





### Description



Creates a rotation with the specified `forward` and `upwards` directions.





Modifies the current quaternion to have the specified `forward` and `upwards` directions.

This method updates the existing quaternion in place, unlike [Quaternion.LookRotation](Quaternion.LookRotation.html) which returns a new quaternion.
If used to orient a [Transform](Transform.html), the Z axis is aligned with the `forward` direction vector
and the Y axis with the `upwards` direction vector, assuming these vectors are orthogonal.
Logs an error if the forward direction is zero.

Additional resources: [LookRotation](Quaternion.LookRotation.html).


              


```
using UnityEngine;// This example demonstrates the SetLookRotation method,
// and describes its key difference from the LookRotation method.
public class Quaternions : MonoBehaviour
{
    void Start()
    {
        Vector3 direction = Vector3.right;        // Method 1: LookRotation - a static method that created a new quaternion
        Quaternion newRotation = Quaternion.LookRotation(direction);
        Debug.Log($"LookRotation creates new: {newRotation}");        // Method 2: SetLookRotation - an instance method that modifies an existing quaternion
        Quaternion existingRotation = Quaternion.identity;
        Debug.Log($"Before SetLookRotation: {existingRotation}");
        // Modifies in place
        existingRotation.SetLookRotation(direction);
        Debug.Log($"After SetLookRotation:  {existingRotation}");        // Both produce the same result, but use different approaches:
        Debug.Log($"Results are equal: {newRotation.Equals(existingRotation)}");        // Usage patterns:
        // LookRotation: direct assignment
        transform.rotation = Quaternion.LookRotation(direction);        // SetLookRotation: modify then assign
        Quaternion rotation = transform.rotation;
        rotation.SetLookRotation(direction);
        transform.rotation = rotation;
    }
}
```


            
