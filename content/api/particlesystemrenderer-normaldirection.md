This version of Unity is unsupported.



# [ParticleSystemRenderer](ParticleSystemRenderer.html).normalDirection




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












                    public float normalDirection;






### Description



Specifies how to calculate lighting for the billboard.





A value of 0 means Unity calculates lighting as though the billboard was a sphere. This results in the billboard looking more like a sphere. A value of 1 means Unity calculates lighting for the billboard as a flat quad.


              


```
using UnityEngine;
using UnityEditor;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour {    private ParticleSystem ps;
    private ParticleSystemRenderer psr;
    public float normalDirection = 1.0f;    void Start() {        ps = GetComponent<ParticleSystem>();
        psr = GetComponent<ParticleSystemRenderer>();        psr.material = new Material(Shader.Find("Sprites/Default"));
    }    void Update() {        psr.normalDirection = normalDirection;
    }    void OnGUI() {        normalDirection = GUI.HorizontalSlider(new Rect(25, 25, 100, 30), normalDirection, 0.0f, 1.0f);
    }
}
```


            
