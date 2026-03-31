This version of Unity is unsupported.



# [ParticleSystem](ParticleSystem.html).TriggerSubEmitter




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

public void TriggerSubEmitter(int subEmitterIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| subEmitterIndex | Index of the sub emitter to trigger. |





### Description



Triggers the specified sub emitter on all particles of the Particle System.


              


```
using UnityEngine;// Add a manual sub-emitter
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    private float m_Timer = 0.0f;
    public float m_Interval = 2.0f;    void Start()
    {
        // A simple particle material with no texture.
        Material particleMaterial = new Material(Shader.Find("Particles/Standard Unlit"));        // Create a green Particle System.
        var rootSystemGO = new GameObject("Particle System");
        rootSystemGO.transform.Rotate(-90, 0, 0); // Rotate so the system emits upwards.
        ps = rootSystemGO.AddComponent<ParticleSystem>();
        rootSystemGO.GetComponent<ParticleSystemRenderer>().material = particleMaterial;
        var mainModule = ps.main;
        mainModule.startColor = Color.green;
        mainModule.startSize = 0.5f;        // Create our sub-emitter and setup bursts.
        var subSystemGO = new GameObject("Particle System");
        var subParticleSystem = subSystemGO.AddComponent<ParticleSystem>();
        subSystemGO.GetComponent<ParticleSystemRenderer>().material = particleMaterial;
        var subMainModule = subParticleSystem.main;
        subMainModule.startColor = Color.red;
        subMainModule.startSize = 0.25f;
        var emissionModule = subParticleSystem.emission;
        emissionModule.SetBursts(new ParticleSystem.Burst[] { new ParticleSystem.Burst(0.0f, 4) }); // We will emit 10 particles when triggered.        // Set up the sub-emitter.
        subSystemGO.transform.SetParent(rootSystemGO.transform);
        var subEmittersModule = ps.subEmitters;
        subEmittersModule.enabled = true;
        subEmittersModule.AddSubEmitter(subParticleSystem, ParticleSystemSubEmitterType.Manual, ParticleSystemSubEmitterProperties.InheritNothing);
    }    private void Update()
    {
        m_Timer += Time.deltaTime;
        while (m_Timer >= m_Interval)
        {
            ps.TriggerSubEmitter(0);
            m_Timer -= m_Interval;
        }
    }
}
```




---








## Declaration

public void TriggerSubEmitter(int subEmitterIndex,
ref [ParticleSystem.Particle](ParticleSystem.Particle.html) particle);






## Declaration

public void TriggerSubEmitter(int subEmitterIndex,
List<Particle> particles);






### Parameters



| Parameter | Description |
| --- | --- |
| subEmitterIndex | Index of the sub emitter to trigger. |
| particle | Triggers the sub emtter on a single particle. |
| particles | Triggers the sub emtter on a list of particles. |





### Description



Triggers the specified sub emitter on the specified particle(s) of the Particle System.


            
