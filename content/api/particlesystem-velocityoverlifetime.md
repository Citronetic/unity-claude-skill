This version of Unity is unsupported.



# [ParticleSystem](ParticleSystem.html).velocityOverLifetime




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







                    public [ParticleSystem.VelocityOverLifetimeModule](ParticleSystem.VelocityOverLifetimeModule.html) velocityOverLifetime;






### Description



Script interface for the VelocityOverLifetimeModule of a Particle System.





This module sets the velocity of particles during their lifetime.

Particle System modules do not need to be reassigned back to the system; they are interfaces and not independent objects.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour {
    void Start() {
        ParticleSystem ps = GetComponent<ParticleSystem>();
        var vel = ps.velocityOverLifetime;
        vel.enabled = true;
        vel.space = ParticleSystemSimulationSpace.Local;        AnimationCurve curve = new AnimationCurve();
        curve.AddKey(0.0f, 1.0f);
        curve.AddKey(1.0f, 0.0f);
        vel.x = new ParticleSystem.MinMaxCurve(10.0f, curve);
    }
}
```


            
