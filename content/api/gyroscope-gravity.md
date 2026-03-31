This version of Unity is unsupported.



# [Gyroscope](Gyroscope.html).gravity




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












                    public [Vector3](Vector3.html) gravity;






### Description



Returns the gravity acceleration vector expressed in the device's reference frame.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    float movementScale;    void Update()
    {
        // A "spirit level" - the dot product of the gravity and the Y axis (ie, Vector3.up)
        // is a measure of how far the device is from level on that axis (it will be zero
        // if the device is perfectly level). This value can be used to position an object
        // to act as the "bubble".
        Vector3 pos = transform.position;
        pos.y = Vector3.Dot(Input.gyro.gravity, Vector3.up) * movementScale;
        transform.position = pos;
    }
}
```


            
