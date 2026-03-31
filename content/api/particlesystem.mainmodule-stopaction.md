This version of Unity is unsupported.



# [ParticleSystem.MainModule](ParticleSystem.MainModule.html).stopAction




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







                    public [ParticleSystemStopAction](ParticleSystemStopAction.html) stopAction;






### Description



Select whether to Disable or Destroy the GameObject, or to call the [MonoBehaviour.OnParticleSystemStopped](MonoBehaviour.OnParticleSystemStopped.html) script Callback, when the Particle System stops and all particles have died.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;    void Start()
    {
        ps = GetComponent<ParticleSystem>();
        ps.Stop();        var main = ps.main;
        main.loop = false;
        main.duration = 1.0f;
        main.stopAction = ParticleSystemStopAction.Destroy;        ps.Play();
    }
}
```


            
