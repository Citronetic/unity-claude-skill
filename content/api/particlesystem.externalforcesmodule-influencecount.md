This version of Unity is unsupported.



# [ParticleSystem.ExternalForcesModule](ParticleSystem.ExternalForcesModule.html).influenceCount




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







                    public int influenceCount;






### Description



The number of Force Fields explicitly provided to the influencers list.





When [influenceFilter](ParticleSystem.ExternalForcesModule-influenceFilter.html) is set to [ParticleSystemGameObjectFilter.List](ParticleSystemGameObjectFilter.List.html) then only Force Fields in the influencers list affect the Particle System.

Additional resources: [ParticleSystemForceField](ParticleSystemForceField.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    ParticleSystem.ExternalForcesModule externalForcesModule;    void Start()
    {
        // Create a default particle system
        var particleSystemGameObject = new GameObject("Particle System");
        var system = particleSystemGameObject.AddComponent<ParticleSystem>();        // Create a force field to influence the particle system
        var forceFieldGameObject = new GameObject("Force Field");
        var forceField = forceFieldGameObject.AddComponent<ParticleSystemForceField>();
        forceField.endRange = 5;
        forceFieldGameObject.transform.position = new Vector3(0, 0, 10);        // Add the force to the particle systems external forces influencers.
        externalForcesModule = system.externalForces;
        externalForcesModule.enabled = true;
        externalForcesModule.influenceFilter = ParticleSystemGameObjectFilter.List;
        externalForcesModule.AddInfluence(forceField);
    }    void OnGUI()
    {
        GUILayout.Label("Particle System Influencers:");
        for (int i = 0; i < externalForcesModule.influenceCount; ++i)
        {
            var influence = externalForcesModule.GetInfluence(i);
            GUILayout.Label(i + ": " + influence.name);
        }
    }
}
```


            
