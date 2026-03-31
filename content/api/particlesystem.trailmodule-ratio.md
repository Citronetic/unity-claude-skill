This version of Unity is unsupported.



# [ParticleSystem.TrailModule](ParticleSystem.TrailModule.html).ratio




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







                    public float ratio;






### Description



Choose what proportion of particles receive a trail.





Use a value between 0 and 1, where 0 doesn't add trails to any particles, and 1 adds trails to every particle.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public float hSliderValueRatio = 1.0f;    void Start()
    {
        ps = GetComponent<ParticleSystem>();        var main = ps.main;
        main.startColor = new ParticleSystem.MinMaxGradient(Color.red, Color.yellow);
        main.startSize = 0.1f;        var trails = ps.trails;
        trails.enabled = true;        var psr = GetComponent<ParticleSystemRenderer>();
        psr.trailMaterial = new Material(Shader.Find("Sprites/Default"));
    }    void Update()
    {
        var trails = ps.trails;
        trails.ratio = hSliderValueRatio;
    }    void OnGUI()
    {
        GUI.Label(new Rect(25, 40, 100, 30), "Ratio");        hSliderValueRatio = GUI.HorizontalSlider(new Rect(55, 45, 100, 30), hSliderValueRatio, 0.0f, 1.0f);
    }
}
```


            
