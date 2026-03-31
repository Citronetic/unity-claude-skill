This version of Unity is unsupported.



# [ParticleSystem.Particle](ParticleSystem.Particle.html).startLifetime




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







                    public float startLifetime;






### Description



The starting lifetime of the particle.





This is the total lifetime of this particle in seconds. The Particle System sets this value when it first spawns the particle.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        ParticleSystem.Particle particle = new ParticleSystem.Particle();        // Calculate how long the particle has been alive.
        float timeAlive = particle.startLifetime - particle.lifetime;
    }
}
```


            
