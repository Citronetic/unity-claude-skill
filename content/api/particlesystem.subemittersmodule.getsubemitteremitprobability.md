This version of Unity is unsupported.



# [ParticleSystem.SubEmittersModule](ParticleSystem.SubEmittersModule.html).GetSubEmitterEmitProbability




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

public float GetSubEmitterEmitProbability(int index);






### Parameters



| Parameter | Description |
| --- | --- |
| index | The index of the sub-emitter. |





### Returns



**float**
        The emission probability for the sub-emitter





### Description



Gets the probability that the sub-emitter emits particles.





The return value ranges from 0 to 1, where 0 is never and 1 is always.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        // A simple particle material with no texture.
        var particleMaterial = new Material(Shader.Find("Particles/Standard Surface"));        // Emit 1 particle per second.
        var particleSystemGameObject = new GameObject("Particle System");
        var particleSystemMain = particleSystemGameObject.AddComponent<ParticleSystem>();
        var emitMain = particleSystemMain.emission;
        emitMain.rateOverTime = 1;
        particleSystemGameObject.GetComponent<ParticleSystemRenderer>().material = particleMaterial;        // Create a sub-emitter that has a 10% chance of emitting a red particle when "Particle System" emits.
        var subEmitterGo = new GameObject("Sub Emitter");
        subEmitterGo.transform.SetParent(particleSystemGameObject.transform);
        var subEmitter = subEmitterGo.AddComponent<ParticleSystem>();
        var emitSub = subEmitter.emission;
        emitSub.rateOverTime = 0;
        emitSub.burstCount = 1;
        emitSub.SetBurst(0, new ParticleSystem.Burst(0, 1));
        var mainModule = subEmitter.main;
        mainModule.startColor = Color.red;
        subEmitterGo.GetComponent<ParticleSystemRenderer>().material = particleMaterial;        // Add the sub-emitter, and set the probability.
        var subEmittersModule = particleSystemMain.subEmitters;
        subEmittersModule.enabled = true;
        subEmittersModule.AddSubEmitter(subEmitter, ParticleSystemSubEmitterType.Birth, new ParticleSystemSubEmitterProperties(), 0.1f);
    }
}
```


            
