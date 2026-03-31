This version of Unity is unsupported.



# SimulationMode





enumeration


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



















### Description



A selection of modes that control when Unity executes the physics simulation.





Additional resources: [Physics.simulationMode](Physics-simulationMode.html).


              


```
// SimulationMode.FixedUpdate is the default setting in Unity.
// Attach this script to a gameObject and enter runtime mode.using UnityEngine;public class ManualPhysicsSimulation : MonoBehaviour
{
    void Start()
    {
        Debug.Log("Current Physics.simulationMode: " + Physics.simulationMode);
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| FixedUpdate | Use this enumeration to instruct Unity to execute the physics simulation immediately after the MonoBehaviour.FixedUpdate. |
| Update | Use this enumeration to instruct Unity to execute the physics simulation immediately after MonoBehaviour.Update. |
| Script | Use this enumeration to instruct Unity to execute the physics simulation manually when you call Physics.Simulate. |


            
