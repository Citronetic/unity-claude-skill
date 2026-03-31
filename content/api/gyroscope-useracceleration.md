This version of Unity is unsupported.



# [Gyroscope](Gyroscope.html).userAcceleration




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












                    public [Vector3](Vector3.html) userAcceleration;






### Description



Returns the acceleration that the user is giving to the device.





The significance of this value is that the effect of gravity (which is also detected by the accelerometer)
 has been removed to leave just the acceleration from the user's movements.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    Vector3 forceVec;
    Rigidbody rb;    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }    void FixedUpdate()
    {
        // Apply forces to an object to match the side-to-side acceleration
        // the user is giving to the device.
        rb.AddForce(Input.gyro.userAcceleration.x * forceVec);
    }
}
```


            
