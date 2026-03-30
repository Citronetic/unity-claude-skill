This version of Unity is unsupported.



# [Compass](Compass.html).rawVector




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












                    public [Vector3](Vector3.html) rawVector;






### Description



The raw geomagnetic data measured in microteslas. (Read Only)





The compass is actually a magnetometer that measures the magnetic
 field in the device's XYZ coordinates - in the absence of a stronger
 magnet, it will measure the Earth's field from which the compass heading
 can be found. This property can be used if you want to make non-standard
 use of the compass (eg, find the heading from the X or Z axis of the device).

**Note:** This property is currently not supported on the web platform.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void OnGUI()
    {
        GUILayout.Label("Magnetometer reading: " + Input.compass.rawVector.ToString());
    }
}
```


            
