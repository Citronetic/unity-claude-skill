This version of Unity is unsupported.



# [ParticleSystem](ParticleSystem.html).main




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







                    public [ParticleSystem.MainModule](ParticleSystem.MainModule.html) main;






### Description



Access the main Particle System settings.





This module provides access to the general settings that are displayed above all of the other module settings in the Particle System's Inspector window.

Particle System modules do not need to be reassigned back to the system; they are interfaces and not independent objects.


              


```
// Create a Particle System
// Set a 5 second start delay for the system, and a 2 second lifetime for each particle
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        ParticleSystem ps = GetComponent<ParticleSystem>();
        var main = ps.main;        main.startDelay = 5.0f;
        main.startLifetime = 2.0f;
    }
}
```


            
