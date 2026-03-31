This version of Unity is unsupported.



# [Rigidbody](Rigidbody.html).GetPointVelocity




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




                [Switch to Manual](../Manual/class-Rigidbody.html)










## Declaration

public [Vector3](Vector3.html) GetPointVelocity([Vector3](Vector3.html) worldPoint);






### Description



The velocity of the rigidbody at the point `worldPoint` in global space.





GetPointVelocity will take the angularVelocity of the rigidbody into account when calculating the velocity.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public Rigidbody rb;    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }    // Get the velocity of a wheel, specified by its position in local space.
    Vector3 CalcWheelVelocity(Vector3 localWheelPos)
    {
        return rb.GetPointVelocity(transform.TransformPoint(localWheelPos));
    }
}
```


            
