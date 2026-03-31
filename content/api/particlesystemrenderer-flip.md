This version of Unity is unsupported.



# [ParticleSystemRenderer](ParticleSystemRenderer.html).flip




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












                    public [Vector3](Vector3.html) flip;






### Description



Flip a percentage of the particles, along each axis.





Set between 0 and 1, where higher values cause a higher proportion of the particles to flip, and 1 causes all particles to flip.


              


```
using UnityEngine;
using UnityEditor;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour {    private ParticleSystemRenderer psr;
    public Vector3 flip;    void Start() {        psr = GetComponent<ParticleSystemRenderer>();        psr.material = new Material(Shader.Find("Sprites/Default"));  // square material so we can see the pivot more easily
        psr.mesh = Resources.GetBuiltinResource<Mesh>("Capsule.fbx");
    }    void Update() {        psr.flip = flip;
    }    void OnGUI() {        GUI.Label(new Rect(25, 40, 100, 30), "X");
        GUI.Label(new Rect(25, 80, 100, 30), "Y");
        GUI.Label(new Rect(25, 120, 100, 30), "Z");        flip.x = GUI.HorizontalSlider(new Rect(65, 25, 100, 30), flip.x, 0.0f, 1.0f);
        flip.y = GUI.HorizontalSlider(new Rect(65, 65, 100, 30), flip.y, 0.0f, 1.0f);
        flip.z = GUI.HorizontalSlider(new Rect(65, 105, 100, 30), flip.z, 0.0f, 1.0f);
    }
}
```


            
