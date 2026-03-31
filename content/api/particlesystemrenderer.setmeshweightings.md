This version of Unity is unsupported.



# [ParticleSystemRenderer](ParticleSystemRenderer.html).SetMeshWeightings




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

public void SetMeshWeightings(float[] weightings,
int size);






## Declaration

public void SetMeshWeightings(float[] weightings);






### Parameters



| Parameter | Description |
| --- | --- |
| weightings | The array of weights to use. |
| size | The number of elements from the weighting array to apply. |





### Description



Sets the weights that the [ParticleSystemRenderer](ParticleSystemRenderer.html) uses to assign Meshes to particles.





The [ParticleSystemRenderer](ParticleSystemRenderer.html) only uses these weights if you set [ParticleSystemRenderer.renderMode](ParticleSystemRenderer-renderMode.html) to [ParticleSystemRenderMode.Mesh](ParticleSystemRenderMode.Mesh.html) and set [ParticleSystemRenderer.meshDistribution](ParticleSystemRenderer-meshDistribution.html) to [ParticleSystemMeshDistribution.NonUniformRandom](ParticleSystemMeshDistribution.NonUniformRandom.html).





The weightings are relative to each other but can be any positive value. For example, if you set the weights to 6 and 3, the ParticleSystemRenderer randomly selects the first Mesh approximately twice as often as the second Mesh. It can be most intuitive to use percentages for the weightings and ensure that the sum of the weightings adds up to 100, but this is not a requirement.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    private ParticleSystemRenderer psr;    void Start() {        ps = GetComponent<ParticleSystem>();
        psr = GetComponent<ParticleSystemRenderer>();        psr.renderMode = ParticleSystemRenderMode.Mesh;
        psr.meshDistribution = ParticleSystemMeshDistribution.NonUniformRandom;
        psr.SetMeshes(new Mesh[]{ Resources.GetBuiltinResource<Mesh>("Capsule.fbx"), Resources.GetBuiltinResource<Mesh>("Cube.fbx"), Resources.GetBuiltinResource<Mesh>("Sphere.fbx") });
        psr.SetMeshWeightings(new float[]{ 0.1f, 0.1f, 0.8f });
    }    void OnGUI() {
        GUI.Label(new Rect(25, 40, 200, 30), "Mesh Count: " + psr.meshCount.ToString());
    }
}
```


            
