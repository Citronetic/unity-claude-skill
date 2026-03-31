This version of Unity is unsupported.



# [ParticleSystem.ExternalForcesModule](ParticleSystem.ExternalForcesModule.html).SetInfluence




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

public void SetInfluence(int index,
[ParticleSystemForceField](ParticleSystemForceField.html) field);






### Parameters



| Parameter | Description |
| --- | --- |
| index | Index to assign the Force Field. |
| field | Force Field that to assign. |





### Description



Assigns the Force Field at the given index in the influencers list.





When [influenceFilter](ParticleSystem.ExternalForcesModule-influenceFilter.html) is set to [ParticleSystemGameObjectFilter.List](ParticleSystemGameObjectFilter.List.html) then only Force Fields in the influencers list affect the Particle System.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    public ParticleSystem system;
    public ParticleSystemForceField field1;
    public ParticleSystemForceField field2;    ParticleSystem.ExternalForcesModule m_ExternalForcesModule;    void Start()
    {
        if (system == null)
        {
            Debug.LogError("Please assign a Particle System to `system`.");
            enabled = false;
            return;
        }        if (field1 == null || field2 == null)
        {
            Debug.LogError("Please assign a ParticleSystemForceField to `field1` and `field2`.");
            enabled = false;
            return;
        }        m_ExternalForcesModule = system.externalForces;
        m_ExternalForcesModule.enabled = true;
        m_ExternalForcesModule.influenceFilter = ParticleSystemGameObjectFilter.List;
        m_ExternalForcesModule.AddInfluence(field1);
    }    void OnGUI()
    {
        Debug.Assert(m_ExternalForcesModule.influenceCount == 1);
        var currentForceField = m_ExternalForcesModule.GetInfluence(0);        GUILayout.BeginHorizontal();
        GUILayout.Label("Influence: " + currentForceField.name);        if (GUILayout.Button("Toggle"))
        {
            m_ExternalForcesModule.SetInfluence(0, currentForceField == field1 ? field2 : field1);
        }        GUILayout.EndHorizontal();
    }
}
```


            
