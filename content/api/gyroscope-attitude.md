This version of Unity is unsupported.



# [Gyroscope](Gyroscope.html).attitude




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












                    public [Quaternion](Quaternion.html) attitude;






### Description



Returns the attitude (ie, orientation in space) of the device.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Rotate the object to match the device's orientation
    // in space.
    void Update()
    {
        transform.rotation = Input.gyro.attitude;
    }
}
```


            
