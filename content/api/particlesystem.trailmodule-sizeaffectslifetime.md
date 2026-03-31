This version of Unity is unsupported.



# [ParticleSystem.TrailModule](ParticleSystem.TrailModule.html).sizeAffectsLifetime




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







                    public bool sizeAffectsLifetime;






### Description



Set whether the particle size acts as a multiplier on top of the trail lifetime.





Useful for making larger particles have longer trails.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public bool sizeAffectsLifetime = true;    void Start()
    {
        ps = GetComponent<ParticleSystem>();        var main = ps.main;
        main.startColor = new ParticleSystem.MinMaxGradient(Color.red, Color.yellow);
        main.startSize = new ParticleSystem.MinMaxCurve(0.01f, 1.0f);
        main.startLifetime = 1.5f;        var trails = ps.trails;
        trails.enabled = true;        var psr = GetComponent<ParticleSystemRenderer>();
        psr.trailMaterial = new Material(Shader.Find("Sprites/Default"));
    }    void Update()
    {
        var trails = ps.trails;
        trails.sizeAffectsLifetime = sizeAffectsLifetime;
    }    void OnGUI()
    {
        sizeAffectsLifetime = GUI.Toggle(new Rect(25, 25, 200, 30), sizeAffectsLifetime, "Size affects lifetime");
    }
}
```


            
