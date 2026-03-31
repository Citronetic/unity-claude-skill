This version of Unity is unsupported.



# [ParticleSystem.MainModule](ParticleSystem.MainModule.html).simulationSpace




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







                    public [ParticleSystemSimulationSpace](ParticleSystemSimulationSpace.html) simulationSpace;






### Description



This selects the space in which to simulate particles. It can be either world or local space.





Toggle between local and world space simulation using the following example:


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public bool useLocal = true;    void Start()
    {
        ps = GetComponent<ParticleSystem>();
        var main = ps.main;
        useLocal = main.simulationSpace == ParticleSystemSimulationSpace.Local;
    }    void Update()
    {
        var main = ps.main;
        main.simulationSpace = useLocal ? ParticleSystemSimulationSpace.Local : ParticleSystemSimulationSpace.World;
    }    void OnGUI()
    {
        useLocal = GUI.Toggle(new Rect(10, 60, 200, 30), useLocal, "Use Local Simulation Space");
    }
}
```





Simulate particles relative to an independent game object using the following example:


              


```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;public class ParticleSystemScript : MonoBehaviour
{
    private ParticleSystem ps;
    public Transform relativeTo;    void Start()
    {
        ps = GetComponent<ParticleSystem>();        var main = ps.main;
        main.simulationSpace = ParticleSystemSimulationSpace.Custom;
        main.customSimulationSpace = relativeTo;
    }    void Update()
    {
    }
}
```


            
