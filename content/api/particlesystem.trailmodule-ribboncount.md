This version of Unity is unsupported.



# [ParticleSystem.TrailModule](ParticleSystem.TrailModule.html).ribbonCount




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







                    public int ribbonCount;






### Description



Select how many lines to create through the Particle System.





For example, if using 1 ribbon, this draws a single line, starting at the youngest particle and travelling through each subsequent particle based on their ages, until finally reaching the oldest. If using a value larger than 1, this draws multiple lines, connecting each Nth oldest particle. For example, if using 3 ribbons, this conntects every 3rd particle (1,4,7, and 2,5,8 and 3,6,9).


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public float hSliderValueRibbonCount = 1.0f;    void Start()
    {
        ps = GetComponent<ParticleSystem>();        var main = ps.main;
        main.startColor = new ParticleSystem.MinMaxGradient(Color.red, Color.yellow);
        main.startSize = 0.1f;
        main.startLifetime = 2.5f;        var trails = ps.trails;
        trails.enabled = true;
        trails.mode = ParticleSystemTrailMode.Ribbon;        var psr = GetComponent<ParticleSystemRenderer>();
        psr.trailMaterial = new Material(Shader.Find("Sprites/Default"));
    }    void Update()
    {
        var trails = ps.trails;
        trails.ribbonCount = (int)hSliderValueRibbonCount;
    }    void OnGUI()
    {
        GUI.Label(new Rect(25, 40, 100, 30), "Ribbon Count");        hSliderValueRibbonCount = GUI.HorizontalSlider(new Rect(125, 45, 100, 30), hSliderValueRibbonCount, 1.0f, 4.0f);
    }
}
```


            
