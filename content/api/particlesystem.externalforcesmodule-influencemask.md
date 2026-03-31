This version of Unity is unsupported.



# [ParticleSystem.ExternalForcesModule](ParticleSystem.ExternalForcesModule.html).influenceMask




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







                    public [LayerMask](LayerMask.html) influenceMask;






### Description



Particle System Force Field Components with a matching Layer affect this Particle System.





Additional resources: [LayerMask](LayerMask.html).


              


```
using UnityEngine;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public bool layerToggle;
    private readonly int layer0 = 0;
    private readonly int layer1 = 1;    void Start()
    {
        ps = GetComponent<ParticleSystem>();        var main = ps.main;
        main.startColor = Color.red;        var shape = ps.shape;
        shape.enabled = false;        var externalForces = ps.externalForces;
        externalForces.enabled = true;        var forceField1 = new GameObject("Force Field 1", typeof(ParticleSystemForceField)).GetComponent<ParticleSystemForceField>();
        forceField1.transform.parent = ps.transform;
        forceField1.transform.localPosition = new Vector3(-3.0f, 0.0f, 3.0f);
        forceField1.transform.localRotation = Quaternion.Euler(0.0f, 0.0f, 180.0f);
        forceField1.transform.localScale = new Vector3(5.0f, 5.0f, 5.0f);
        forceField1.gameObject.layer = layer0;        forceField1.gravity = 0.04f;
        forceField1.rotationSpeed = 2.0f;
        forceField1.rotationAttraction = 0.02f;        var forceField2 = new GameObject("Force Field 2", typeof(ParticleSystemForceField)).GetComponent<ParticleSystemForceField>();
        forceField2.transform.parent = ps.transform;
        forceField2.transform.localPosition = new Vector3(3.0f, 0.0f, 3.0f);
        forceField2.transform.localRotation = Quaternion.identity;
        forceField2.transform.localScale = new Vector3(5.0f, 5.0f, 5.0f);
        forceField2.gameObject.layer = layer1;        forceField2.gravity = 0.04f;
        forceField2.rotationSpeed = 2.0f;
        forceField2.rotationAttraction = 0.02f;
    }    void Update()
    {
        var externalForces = ps.externalForces;
        externalForces.influenceMask = layerToggle ? (1 << layer0) : (1 << layer1);
    }    void OnGUI()
    {
        layerToggle = GUI.Toggle(new Rect(25, 40, 100, 30), layerToggle, "Toggle Layer");
    }
}
```


            
