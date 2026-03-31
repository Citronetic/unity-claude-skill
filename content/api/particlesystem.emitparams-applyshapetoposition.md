This version of Unity is unsupported.



# [ParticleSystem.EmitParams](ParticleSystem.EmitParams.html).applyShapeToPosition




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







                    public bool applyShapeToPosition;






### Description



When overriding the position of particles, setting this flag to true allows you to retain the influence of the shape module.





With this flag set to false, the position specified is the exact position where particles spawn from, and the shape module is ignored.
If true, the Particle System moves the shape module to the position specified in the EmitParams, then spawns new particles using the shape.
Additional resources: [ParticleSystem.EmitParams.position](ParticleSystem.EmitParams-position.html).


              


```
using UnityEngine;// In this example we have a Particle System emitting aligned particles; we then emit and override the position every 2 seconds.
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem system;    void Start()
    {
        // A simple particle material with no texture.
        Material particleMaterial = new Material(Shader.Find("Particles/Standard Unlit"));        // Create a Particle System.
        var go = new GameObject("Particle System");
        go.transform.Rotate(-90, 0, 0); // Rotate so the system emits upwards.
        system = go.AddComponent<ParticleSystem>();
        go.GetComponent<ParticleSystemRenderer>().material = particleMaterial;        // Every 2 seconds we will emit.
        InvokeRepeating("DoEmit", 2.0f, 2.0f);
    }    void DoEmit()
    {
        // Any parameters we assign in emitParams will override the current system's when we call Emit.
        // Here we will override the position. All other parameters will use the behavior defined in the Inspector.
        var emitParams = new ParticleSystem.EmitParams();
        emitParams.position = new Vector3(-5.0f, 0.0f, 0.0f);
        emitParams.applyShapeToPosition = true;
        system.Emit(emitParams, 10);
    }
}
```


            
