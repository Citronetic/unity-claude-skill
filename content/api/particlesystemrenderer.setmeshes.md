This version of Unity is unsupported.



# [ParticleSystemRenderer](ParticleSystemRenderer.html).SetMeshes




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















## Declaration

public void SetMeshes(Mesh[] meshes);






## Declaration

public void SetMeshes(Mesh[] meshes,
int size);






### Parameters



| Parameter | Description |
| --- | --- |
| meshes | The array of Meshes to use. |
| size | The number of elements from the Mesh array to apply. |





### Description



Sets the Meshes that the [ParticleSystemRenderer](ParticleSystemRenderer.html) uses to display particles when the [ParticleSystemRenderer.renderMode](ParticleSystemRenderer-renderMode.html) is set to [ParticleSystemRenderMode.Mesh](ParticleSystemRenderMode.Mesh.html).





Additional resources: [ParticleSystemRenderer.renderMode](ParticleSystemRenderer-renderMode.html).


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    private ParticleSystemRenderer psr;    void Start() {        ps = GetComponent<ParticleSystem>();
        psr = GetComponent<ParticleSystemRenderer>();        psr.renderMode = ParticleSystemRenderMode.Mesh;
        psr.SetMeshes(new Mesh[]{ Resources.GetBuiltinResource<Mesh>("Capsule.fbx"), Resources.GetBuiltinResource<Mesh>("Cube.fbx"), Resources.GetBuiltinResource<Mesh>("Sphere.fbx") });
    }    void OnGUI() {
        GUI.Label(new Rect(25, 40, 200, 30), "Mesh Count: " + psr.meshCount.ToString());
    }
}
```


            
