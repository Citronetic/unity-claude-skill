This version of Unity is unsupported.



# [Compass](Compass.html).magneticHeading




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












                    public float magneticHeading;






### Description



The heading in degrees relative to the magnetic North Pole. (Read Only)





The value in this property is always measured relative to the top
of the screen in its current orientation.
 The heading of magnetic
 north is not exactly the same as true geographical north - to get
 the exact heading, use the [trueHeading](Compass-trueHeading.html) property.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Update()
    {
        // Orient an object to point to magnetic north.
        transform.rotation = Quaternion.Euler(0, -Input.compass.magneticHeading, 0);
    }
}
```


            
