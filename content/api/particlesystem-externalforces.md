This version of Unity is unsupported.



# [ParticleSystem](ParticleSystem.html).externalForces




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







                    public [ParticleSystem.ExternalForcesModule](ParticleSystem.ExternalForcesModule.html) externalForces;






### Description



Script interface for the ExternalForcesModule of a Particle System.





This module enables [ParticleSystemForceField](ParticleSystemForceField.html) and [WindZone](WindZone.html) components to affect the Particle System.

Particle System modules do not need to be reassigned back to the system; they are interfaces and not independent objects.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour {
    void Start() {
        ParticleSystem ps = GetComponent<ParticleSystem>();
        var ex = ps.externalForces;
        ex.enabled = true;
        ex.multiplier = 0.1f;
    }
}
```


            
