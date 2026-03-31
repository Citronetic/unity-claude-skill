This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).OnParticleSystemStopped()




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




                [Switch to Manual](../Manual/class-MonoBehaviour.html)














### Description



OnParticleSystemStopped is called when all particles in the system have died, and no new particles will be born. New particles cease to be created either after Stop is called, or when the duration property of a non-looping system has been exceeded.





This can be used to notify a script of when a Particle System has finished.
In order to receive the callback, you must set the [ParticleSystem.MainModule.stopAction](ParticleSystem.MainModule-stopAction.html) property to Callback.


              


```
using UnityEngine;
using System.Collections;
using System.Collections.Generic;public class StoppedScript : MonoBehaviour
{
    void Start()
    {
        var main = GetComponent<ParticleSystem>().main;
        main.stopAction = ParticleSystemStopAction.Callback;
    }    void OnParticleSystemStopped()
    {
        Debug.Log("System has stopped!");
    }
}
```





In order to retrieve detailed information about all the collisions caused by the [ParticleSystem](ParticleSystem.html), you must use [ParticlePhysicsExtensions.GetTriggerParticles](ParticlePhysicsExtensions.GetTriggerParticles.html) to retrieve the array of [Particle](ParticleSystem.Particle.html).


            
