This version of Unity is unsupported.



# [ParticleSystem.TrailModule](ParticleSystem.TrailModule.html).lifetime




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







                    public [ParticleSystem.MinMaxCurve](ParticleSystem.MinMaxCurve.html) lifetime;






### Description



The curve describing the trail lifetime, throughout the lifetime of the particle.





This value is relative to the particle lifetime.
Additional resources: [MinMaxCurve](ParticleSystem.MinMaxCurve.html).


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public float hSliderValueLifetime = 1.0f;    void Start()
    {
        ps = GetComponent<ParticleSystem>();        var main = ps.main;
        main.startColor = new ParticleSystem.MinMaxGradient(Color.red, Color.yellow);
        main.startSize = 0.1f;
        main.startLifetime = 1.5f;        var trails = ps.trails;
        trails.enabled = true;        var psr = GetComponent<ParticleSystemRenderer>();
        psr.trailMaterial = new Material(Shader.Find("Sprites/Default"));
    }    void Update()
    {
        var trails = ps.trails;
        trails.lifetime = hSliderValueLifetime;
    }    void OnGUI()
    {
        GUI.Label(new Rect(25, 40, 100, 30), "Lifetime");        hSliderValueLifetime = GUI.HorizontalSlider(new Rect(95, 45, 100, 30), hSliderValueLifetime, 0.0f, 1.0f);
    }
}
```


            
