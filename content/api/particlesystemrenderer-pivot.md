This version of Unity is unsupported.



# [ParticleSystemRenderer](ParticleSystemRenderer.html).pivot




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












                    public [Vector3](Vector3.html) pivot;






### Description



Modify the pivot point used for rotating particles.





The units are expressed as a multiplier of the particle sizes, relative to their diameters. For example, a value of 0.5 adjusts the pivot by the particle radius, allowing particles to rotate around their edges.


              


```
using UnityEngine;
using UnityEditor;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour {    private ParticleSystem ps;
    private ParticleSystemRenderer psr;
    public Vector3 pivot;    void Start() {        ps = GetComponent<ParticleSystem>();
        psr = GetComponent<ParticleSystemRenderer>();        psr.material = new Material(Shader.Find("Sprites/Default"));  // square material so we can see the pivot more easily        var rotation = ps.rotationOverLifetime;
        rotation.enabled = true;
        rotation.zMultiplier = 180.0f;  // spin so we can see the pivot more easily
    }    void Update() {        psr.pivot = pivot;
    }    void OnGUI() {        GUI.Label(new Rect(25, 40, 100, 30), "X");
        GUI.Label(new Rect(25, 80, 100, 30), "Y");
        GUI.Label(new Rect(25, 120, 100, 30), "Z");        pivot.x = GUI.HorizontalSlider(new Rect(65, 25, 100, 30), pivot.x, -2.0f, 2.0f);
        pivot.y = GUI.HorizontalSlider(new Rect(65, 65, 100, 30), pivot.y, -2.0f, 2.0f);
        pivot.z = GUI.HorizontalSlider(new Rect(65, 105, 100, 30), pivot.z, -2.0f, 2.0f);
    }
}
```


            
