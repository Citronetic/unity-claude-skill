This version of Unity is unsupported.



# [Compass](Compass.html).trueHeading




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












                    public float trueHeading;






### Description



The heading in degrees relative to the geographic North Pole. (Read Only)





The value in this property is always measured relative to the top
of the screen in its current orientation.
Note, that if you want this property to contain a valid value, you
must also enable location updates by calling
`Input.location.Start()`. (Read Only)

**Note:** On the web platform this property will return the magnetic heading.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Update()
    {
        // Orient an object to point northward.
        transform.rotation = Quaternion.Euler(0, -Input.compass.trueHeading, 0);
    }
}
```


            
