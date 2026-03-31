This version of Unity is unsupported.



# [ParticleSystem](ParticleSystem.html).trails




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







                    public [ParticleSystem.TrailModule](ParticleSystem.TrailModule.html) trails;






### Description



Script interface for the TrailsModule of a Particle System.





This module adds trails to your particles. Trails can either be left in the wake of particles as they move, or can connect each particle in the system together.

Particle System modules do not need to be reassigned back to the system; they are interfaces and not independent objects.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour {    void Start() {
        ParticleSystem ps = GetComponent<ParticleSystem>();
        var trails = ps.trails;
        trails.enabled = true;
        trails.ratio = 0.5f;
    }
}
```


            
