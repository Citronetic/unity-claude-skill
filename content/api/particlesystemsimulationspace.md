This version of Unity is unsupported.



# ParticleSystemSimulationSpace





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



Defines the coordinate space in which particles are simulated.





The simulation space determines how particles' positions are calculated relative to their environment.
This property controls whether particles are simulated in local space, world space, or relative to a custom transform. The space is defined by the `ParticleSystemSimulationSpace` enum.

For custom space simulation, use [ParticleSystem.MainModule.customSimulationSpace](ParticleSystem.MainModule-customSimulationSpace.html) to assign a specific Transform as the reference.


              


```
using UnityEngine;public class ParticleSimulationExample : MonoBehaviour
{
    [SerializeField] private ParticleSystem particleSystem;
    [SerializeField] private Transform customTransform;    void Start()
    {
        var mainModule = particleSystem.main;        // Set the simulation space to Custom and assign a transform.
        mainModule.simulationSpace = ParticleSystemSimulationSpace.Custom;
        mainModule.customSimulationSpace = customTransform;
    }
}
```





Additional resources: [MainModule](ParticleSystem.MainModule.html).





### Properties



| Property | Description |
| --- | --- |
| Local | Simulate particles in local space. |
| World | Simulate particles in world space. |
| Custom | Simulate particles relative to a custom transform component, defined by ParticleSystem.MainModule.customSimulationSpace. |


            
