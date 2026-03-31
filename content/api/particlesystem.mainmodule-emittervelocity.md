This version of Unity is unsupported.



# [ParticleSystem.MainModule](ParticleSystem.MainModule.html).emitterVelocity




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







                    public [Vector3](Vector3.html) emitterVelocity;






### Description



The current Particle System velocity.





If you set this property to a particular value, the [emitterVelocityMode](ParticleSystem.MainModule-emitterVelocityMode.html) automatically switches to [ParticleSystemEmitterVelocityMode.Custom](ParticleSystemEmitterVelocityMode.Custom.html).


              


```
using UnityEngine;[RequireComponent(typeof(ParticleSystem))]
public class Example : MonoBehaviour
{
    ParticleSystem.MainModule mainModule;    void Start()
    {
        var particleSystem = GetComponent<ParticleSystem>();
        mainModule = particleSystem.main;
    }    void OnGUI()
    {
        GUILayout.Label("Velocity: " + mainModule.emitterVelocity);
    }
}
```


            
