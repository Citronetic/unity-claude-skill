This version of Unity is unsupported.



# [Quaternion](Quaternion.html).operator *




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







                    public static [Quaternion](Quaternion.html) operator *([Quaternion](Quaternion.html) lhs,
[Quaternion](Quaternion.html) rhs);






### Parameters



| Parameter | Description |
| --- | --- |
| lhs | Left-hand side quaternion. |
| rhs | Right-hand side quaternion. |





### Description



Combines rotations `lhs` and `rhs`.





Rotating by the product `lhs` * `rhs` is the same as applying the two rotations in sequence: `lhs` first and then `rhs`, relative to the reference frame resulting from `lhs` rotation. Note that this means rotations are not commutative, so `lhs` * `rhs` does not give the same rotation as `rhs` * `lhs`.


              


```
using UnityEngine;public class QuaternionProduct : MonoBehaviour
{
    void Start()
    {
        // Two simple rotations
        Quaternion rotX = Quaternion.AngleAxis(90, Vector3.right);
        Quaternion rotY = Quaternion.AngleAxis(90, Vector3.up);

        // Order matters: lhs * rhs does not equal rhs * lhs
        Quaternion result1 = rotX * rotY;  // applies Y rotation first, then X
        Quaternion result2 = rotY * rotX;  // applies X rotation first, then Y

        Debug.Log($"X * Y = {result1.eulerAngles}");
        Debug.Log($"Y * X = {result2.eulerAngles}");

        // Apply one result to see the difference
        transform.rotation = result1;
    }
}
```




---





                    public static [Vector3](Vector3.html) operator *([Quaternion](Quaternion.html) rotation,
[Vector3](Vector3.html) point);






### Parameters



| Parameter | Description |
| --- | --- |
| rotation | Quaternion reprensenting rotation to apply. |
| point | Vector3 to rotate. |





### Description



Transform the Vector3 `point` using `rotation` quaternion.


              


```
using UnityEngine;
using System.Collections;public class Example2 : MonoBehaviour
{
    private void Start()
    {
        //Creates an array of three points forming a triangle
        Vector3[] points = new Vector3[]
        {
            new Vector3(-1, -1, 0),
            new Vector3(1, -1, 0),
            new Vector3(0, 1, 0)
        };        //Creates a Quaternion rotation of 5 degrees around the Z axis
        Quaternion rotation = Quaternion.AngleAxis(5, Vector3.forward);        //Loop through the array of Vector3s and apply the rotation
        for (int n = 0; n < points.Length; n++)
        {
            Vector3 rotatedPoint = rotation * points[n];
            //Output the new rotation values
            Debug.Log("Point " + n + " rotated: " + rotatedPoint);
        }
    }
}
```


            
