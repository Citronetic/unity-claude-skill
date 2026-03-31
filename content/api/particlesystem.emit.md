This version of Unity is unsupported.



# [ParticleSystem](ParticleSystem.html).Emit




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










## Declaration

public void Emit(int count);






### Parameters



| Parameter | Description |
| --- | --- |
| count | Number of particles to emit. |





### Description



Emit `count` particles immediately.




---








## Declaration

public void Emit([ParticleSystem.EmitParams](ParticleSystem.EmitParams.html) emitParams,
int count);






### Parameters



| Parameter | Description |
| --- | --- |
| emitParams | Overidden particle properties. |
| count | Number of particles to emit. |





### Description



Emit a number of particles from script.





Setting properties in the emitParams will override those properties in the emitted particles. Any properties not modified will inherit the behavior specified in the inspector.


              


```
using UnityEngine;// In this example, we have a Particle System emitting green particles; we then emit and override some properties every 2 seconds.
public class EmitExample : MonoBehaviour
{
    public ParticleSystem system;    void Start()
    {
        // A simple particle material with no texture.
        Material particleMaterial = new Material(Shader.Find("Particles/Standard Unlit"));        // Create a green Particle System.
        var go = new GameObject("Particle System");
        go.transform.Rotate(-90, 0, 0); // Rotate so the system emits upwards.
        system = go.AddComponent<ParticleSystem>();
        go.GetComponent<ParticleSystemRenderer>().material = particleMaterial;
        var mainModule = system.main;
        mainModule.startColor = Color.green;
        mainModule.startSize = 0.5f;        // Every 2 secs we will emit.
        InvokeRepeating("DoEmit", 2.0f, 2.0f);
    }    void DoEmit()
    {
        // Any parameters we assign in emitParams will override the current system's when we call Emit.
        // Here we will override the start color and size.
        var emitParams = new ParticleSystem.EmitParams();
        emitParams.startColor = Color.red;
        emitParams.startSize = 0.2f;
        system.Emit(emitParams, 10);
        system.Play(); // Continue normal emissions
    }
}
```


            
