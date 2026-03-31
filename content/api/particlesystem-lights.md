This version of Unity is unsupported.



# [ParticleSystem](ParticleSystem.html).lights




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







                    public [ParticleSystem.LightsModule](ParticleSystem.LightsModule.html) lights;






### Description



Script interface for the LightsModule of a Particle System.





This module allows you to attach real-time Lights to a percentage of your particles.

The lights module is a simple and powerful module that allows particles to cast light onto their environment easily. Lights can inherit properties from the particles they are attached to, such as color and size. Point and Spot Lights are supported, including shadow casting and Light cookies.

Particle System modules do not need to be reassigned back to the system; they are interfaces and not independent objects.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour {    public Light lightPrefab;    void Start() {
        ParticleSystem ps = GetComponent<ParticleSystem>();
        var lights = ps.lights;
        lights.enabled = true;
        lights.ratio = 0.5f;
        lights.light = lightPrefab;
    }
}
```


            
