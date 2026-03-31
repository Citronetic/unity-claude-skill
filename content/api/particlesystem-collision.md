This version of Unity is unsupported.



# [ParticleSystem](ParticleSystem.html).collision




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







                    public [ParticleSystem.CollisionModule](ParticleSystem.CollisionModule.html) collision;






### Description



Script interface for the CollisionModule of a Particle System.





This module allows particles to collide with a predefined list of planes, or with the 2D and 3D physics worlds.

Particle System modules do not need to be reassigned back to the system; they are interfaces and not independent objects.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour {
    void Start() {
        ParticleSystem ps = GetComponent<ParticleSystem>();
        var coll = ps.collision;
        coll.enabled = true;
        coll.bounce = 0.5f;
    }
}
```


            
