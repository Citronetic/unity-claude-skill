This version of Unity is unsupported.



# [WheelHit](WheelHit.html).forwardSlip




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












                    public float forwardSlip;






### Description



Tire slip in the rolling direction. Acceleration slip is negative, braking slip is positive.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Prints "braking slip!" when tire slips badly.
    void FixedUpdate()
    {
        WheelHit hit = new WheelHit();
        WheelCollider wheel = GetComponent<WheelCollider>();
        if (wheel.GetGroundHit(out hit))
        {
            if (hit.forwardSlip > 0.5)
                print("braking slip!");
        }
    }
}
```


            
