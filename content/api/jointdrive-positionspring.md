This version of Unity is unsupported.



# [JointDrive](JointDrive.html).positionSpring




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












                    public float positionSpring;






### Description



Strength of a rubber-band pull toward the defined direction. Only used if `mode` includes Position.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Create a JointDrive, configure it, and assign it to the zDrive of a ConfigurableJoint.
    void Start()
    {
        ConfigurableJoint joint = gameObject.AddComponent<ConfigurableJoint>();
        joint.targetPosition = new Vector3(0, 0, -10);        JointDrive drive = new JointDrive
        {
            positionSpring = 50,         // Add a spring force to pull toward the target position
            positionDamper = 10,         // Dampen oscillations
            maximumForce = Mathf.Infinity // Allow unlimited force
        };        joint.zDrive = drive; // Assign the configured drive to the zDrive of the joint
    }
}
```


            
