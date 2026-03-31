This version of Unity is unsupported.



# [ParticleSystem.MainModule](ParticleSystem.MainModule.html).customSimulationSpace




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




                [Switch to Manual](../Manual/class-ParticleSystem.html)







                    public [Transform](Transform.html) customSimulationSpace;






### Description



Simulate particles relative to a custom transform component.





Additional resources: [ParticleSystemSimulationSpace.Custom](ParticleSystemSimulationSpace.Custom.html).


              


```
using System.Collections;
using UnityEngine;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public Transform relativeTo;    void Start()
    {
        ps = GetComponent<ParticleSystem>();        var main = ps.main;
        main.simulationSpace = ParticleSystemSimulationSpace.Custom;
        main.customSimulationSpace = relativeTo;
    }
}
```


            
