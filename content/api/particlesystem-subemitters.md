This version of Unity is unsupported.



# [ParticleSystem](ParticleSystem.html).subEmitters




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







                    public [ParticleSystem.SubEmittersModule](ParticleSystem.SubEmittersModule.html) subEmitters;






### Description



Script interface for the SubEmittersModule of a Particle System.





The triggering of the child particle emission is linked to events such as the birth, death and collision of particles in the parent system.

Particle System modules do not need to be reassigned back to the system; they are interfaces and not independent objects.


              


```
using UnityEngine;
using System.Collections;// A simple example showing access.
public class ExampleClass : MonoBehaviour {    public ParticleSystem mySubEmitter;    void Start() {
        ParticleSystem ps = GetComponent<ParticleSystem>();
        var sub = ps.subEmitters;
        sub.enabled = true;
        sub.AddSubEmitter(mySubEmitter, ParticleSystemSubEmitterType.Death, ParticleSystemSubEmitterProperties.InheritNothing);
    }
}
```


              


```
using UnityEngine;// An example showing how to create 2 Particle Systems; one as a sub-emitter.
public class SubEmitterDeathExample : MonoBehaviour
{
    void Start ()
    {
        // A simple particle material with no texture.
        Material particleMaterial = new Material(Shader.Find("Particles/Standard Unlit"));        // Create a green Particle System.
        var rootSystemGO = new GameObject("Particle System");
        rootSystemGO.transform.Rotate(-90, 0, 0); // Rotate so the system emits upwards.
        var rootParticleSystem = rootSystemGO.AddComponent<ParticleSystem>();
        rootSystemGO.GetComponent<ParticleSystemRenderer>().material = particleMaterial;
        var mainModule = rootParticleSystem.main;
        mainModule.startColor = Color.green;
        mainModule.startSize = 0.5f;        // Create our sub-emitter and set up bursts.
        var subSystemGO = new GameObject("Particle System");
        var subParticleSystem = subSystemGO.AddComponent<ParticleSystem>();
        subSystemGO.GetComponent<ParticleSystemRenderer>().material = particleMaterial;
        var subMainModule = subParticleSystem.main;
        subMainModule.startColor = Color.red;
        subMainModule.startSize = 0.25f;
        var emissionModule = subParticleSystem.emission;
        emissionModule.SetBursts(new ParticleSystem.Burst[] { new ParticleSystem.Burst(0.0f, 10) }); // We will emit 10 particles upon death.        // Set up the sub-emitter.
        subSystemGO.transform.SetParent(rootSystemGO.transform);
        var subEmittersModule = rootParticleSystem.subEmitters;
        subEmittersModule.enabled = true;
        subEmittersModule.AddSubEmitter(subParticleSystem, ParticleSystemSubEmitterType.Death, ParticleSystemSubEmitterProperties.InheritNothing);
    }
}
```


            
