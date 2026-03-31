This version of Unity is unsupported.



# [ParticleSystem.MainModule](ParticleSystem.MainModule.html).ringBufferMode




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







                    public [ParticleSystemRingBufferMode](ParticleSystemRingBufferMode.html) ringBufferMode;






### Description



Configure the Particle System to not kill its particles when their lifetimes are exceeded.





Rather than using the particle lifetimes to kill particles, the system replaces particles with new ones when there are more particles than specified in Max Particles.
Additional resources: [ParticleSystem.MainModule.ringBufferLoopRange](ParticleSystem.MainModule-ringBufferLoopRange.html).


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;    void Start()
    {
        ps = GetComponent<ParticleSystem>();
    }    void Update()
    {
        var main = ps.main;
        main.ringBufferMode = ParticleSystemRingBufferMode.PauseUntilReplaced;
    }
}
```


            
