This version of Unity is unsupported.



# [ParticleSystem](ParticleSystem.html).inheritVelocity




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







                    public [ParticleSystem.InheritVelocityModule](ParticleSystem.InheritVelocityModule.html) inheritVelocity;






### Description



Script interface for the InheritVelocityModule of a Particle System.





This module applies velocities to particles based on the velocity of the object that spawned them. For most Particle Systems, this is the GameObject velocity, but for sub-emitters, the velocity comes from the parent particle that the sub-emitter particle originated from.

Particle System modules do not need to be reassigned back to the system; they are interfaces and not independent objects.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour {
    void Start() {
        ParticleSystem ps = GetComponent<ParticleSystem>();
        var iv = ps.inheritVelocity;
        iv.enabled = true;        AnimationCurve curve = new AnimationCurve();
        curve.AddKey(0.0f, 1.0f);
        curve.AddKey(1.0f, 0.0f);
        iv.curve = new ParticleSystem.MinMaxCurve(1.0f, curve);
    }
}
```


            
