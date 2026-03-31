This version of Unity is unsupported.



# [ParticleSystem](ParticleSystem.html).forceOverLifetime




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







                    public [ParticleSystem.ForceOverLifetimeModule](ParticleSystem.ForceOverLifetimeModule.html) forceOverLifetime;






### Description



Script interface for the ForceOverLifetimeModule of a Particle System.





Apply forces to particles using this module. Forces are applied to the particle velocities on each frame.

Particle System modules do not need to be reassigned back to the system; they are interfaces and not independent objects.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour {
    void Start() {
        ParticleSystem ps = GetComponent<ParticleSystem>();
        var fo = ps.forceOverLifetime;
        fo.enabled = true;        AnimationCurve curve = new AnimationCurve();
        curve.AddKey(0.0f, 0.1f);
        curve.AddKey(0.75f, 1.0f);
        fo.x = new ParticleSystem.MinMaxCurve(1.5f, curve);
    }
}
```


            
