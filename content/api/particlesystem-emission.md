This version of Unity is unsupported.



# [ParticleSystem](ParticleSystem.html).emission




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







                    public [ParticleSystem.EmissionModule](ParticleSystem.EmissionModule.html) emission;






### Description



Script interface for the EmissionModule of a Particle System.





This module provides control over how many particles are emitted.

Particle System modules do not need to be reassigned back to the system; they are interfaces and not independent objects.


              


```
// Create a Particle System
// At 2 and 4 secs the number of particles are changed to 100, then 200
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        ParticleSystem ps = GetComponent<ParticleSystem>();
        var em = ps.emission;
        em.enabled = true;        em.rateOverTime = 20.0f;        em.SetBursts(
            new ParticleSystem.Burst[]{
                new ParticleSystem.Burst(2.0f, 100),
                new ParticleSystem.Burst(4.0f, 100)
            });
    }
}
```


            
