This version of Unity is unsupported.



# [ParticleSystem.EmitParams](ParticleSystem.EmitParams.html).angularVelocity3D




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







                    public [Vector3](Vector3.html) angularVelocity3D;






### Description



Override the 3D angular velocity of particles this system emits.





Additional resources: [ParticleSystem.Particle.angularVelocity3D](ParticleSystem.Particle-angularVelocity3D.html).


              


```
using UnityEngine;// In this example we have a Particle System emitting aligned particles; we then emit and override the rotation speed every 2 seconds.
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem system;    void Start()
    {
        // A simple particle material with no texture.
        Material particleMaterial = new Material(Shader.Find("Particles/Standard Unlit"));        // Create a Particle System.
        var go = new GameObject("Particle System");
        go.transform.Rotate(-90, 0, 0); // Rotate so the system emits upwards.
        system = go.AddComponent<ParticleSystem>();
        go.GetComponent<ParticleSystemRenderer>().material = particleMaterial;
        var mainModule = system.main;
        mainModule.startRotation3D = true;        // Every 2 seconds we will emit.
        InvokeRepeating("DoEmit", 2.0f, 2.0f);
    }    void DoEmit()
    {
        // Any parameters we assign in emitParams will override the current system's when we call Emit.
        // Here we will override the rotation speed. All other parameters will use the behavior defined in the Inspector.
        var emitParams = new ParticleSystem.EmitParams();
        emitParams.angularVelocity3D = new Vector3(180.0f, 80.0f, 95.0f);
        system.Emit(emitParams, 10);
    }
}
```


            
