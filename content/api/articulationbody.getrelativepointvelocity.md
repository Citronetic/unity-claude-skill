This version of Unity is unsupported.



# [ArticulationBody](ArticulationBody.html).GetRelativePointVelocity




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




                [Switch to Manual](../Manual/class-ArticulationBody.html)










## Declaration

public [Vector3](Vector3.html) GetRelativePointVelocity([Vector3](Vector3.html) relativePoint);






### Description



The velocity relative to the articulation body at the point `relativePoint`.





Gets the velocity relative to the articulation body at the specified `relativePoint`.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public ArticulationBody ab;    void Start()
    {
        ab = GetComponent<ArticulationBody>();
    }    // Get the velocity of a wheel, specified by its position in local space.
    // This method assumes that the wheel is a child of the ArticulationBody, or that the wheel translates relative to the ArticulationBody.
    Vector3 CalcWheelVelocity(Vector3 localWheelPos)
    {
        return ab.GetRelativePointVelocity(localWheelPos);
    }
}
```


            
