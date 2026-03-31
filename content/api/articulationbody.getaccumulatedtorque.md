This version of Unity is unsupported.



# [ArticulationBody](ArticulationBody.html).GetAccumulatedTorque




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

public [Vector3](Vector3.html) GetAccumulatedTorque(float step = Time.fixedDeltaTime);






### Parameters



| Parameter | Description |
| --- | --- |
| step | The timestep of the next physics simulation. |





### Returns



**Vector3**
        Accumulated torque expressed in [ForceMode.Force](ForceMode.Force.html).





### Description



Returns the torque that the [ArticulationBody](ArticulationBody.html) has accumulated before the simulation step.





The accumulated torque is reset during each physics simulation step.


              


```
using UnityEngine;public class AddTorqueScript : MonoBehaviour
{
    private ArticulationBody articulationBody;    void Start()
    {
        articulationBody = GetComponent<ArticulationBody>();
        articulationBody.useGravity = false;
    }    private void FixedUpdate()
    {
        articulationBody.AddTorque(Vector3.right * 10f, ForceMode.Impulse);
        var accumulatedTorque = articulationBody.GetAccumulatedTorque();
        articulationBody.AddTorque(accumulatedTorque * -1f, ForceMode.Force);
    }
}
```





In this example, the angular velocity of the ArticulationBody is 0.


            
