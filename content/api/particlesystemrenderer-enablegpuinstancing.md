This version of Unity is unsupported.



# [ParticleSystemRenderer](ParticleSystemRenderer.html).enableGPUInstancing




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












                    public bool enableGPUInstancing;






### Description



Enables GPU Instancing on platforms that support it.





To use GPU Instancing to render a Particle System, the particle must use a Shader that contains a Procedural Instancing pass (that is, it contains the `#pragma instancing_options procedural` directive).


              


```
using UnityEngine;
using System.Collections;
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    private ParticleSystemRenderer psr;
    private bool enableGPUInstancing = true;    void Start()
    {
        ps = GetComponent<ParticleSystem>();
        psr = GetComponent<ParticleSystemRenderer>();        psr.renderMode = ParticleSystemRenderMode.Mesh;
        psr.SetMeshes(new Mesh[] { Resources.GetBuiltinResource<Mesh>("Capsule.fbx"), Resources.GetBuiltinResource<Mesh>("Cube.fbx"), Resources.GetBuiltinResource<Mesh>("Sphere.fbx") });        psr.sharedMaterial = new Material(Shader.Find("Particles/Standard Surface"));
    }    void Update()
    {
        psr.enableGPUInstancing = enableGPUInstancing;
    }    void OnGUI()
    {
        enableGPUInstancing = GUI.Toggle(new Rect(25, 45, 200, 30), enableGPUInstancing, "Enabled");
    }
}
```


            
