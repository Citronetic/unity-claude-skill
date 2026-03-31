This version of Unity is unsupported.



# [Input](Input.html).acceleration




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












                    public static [Vector3](Vector3.html) acceleration;






### Description



Last measured linear acceleration of a device in three-dimensional space. (Read Only)





**Note**: This API is part of the legacy Input Manager. The recommended best practice is that you don't use this API in new projects. For new projects, use the Input System package. To learn more about input, refer to [Input](../Manual/Input.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Move object using accelerometer
    float speed = 10.0f;    void Update()
    {
        Vector3 dir = Vector3.zero;        // we assume that device is held parallel to the ground
        // and Home button is in the right hand        // remap device acceleration axis to game coordinates:
        //  1) XY plane of the device is mapped onto XZ plane
        //  2) rotated 90 degrees around Y axis
        dir.x = -Input.acceleration.y;
        dir.z = Input.acceleration.x;        // clamp acceleration vector to unit sphere
        if (dir.sqrMagnitude > 1)
            dir.Normalize();        // Make it move 10 meters per second instead of 10 meters per frame...
        dir *= Time.deltaTime;        // Move object
        transform.Translate(dir * speed);
    }
}
```


            
