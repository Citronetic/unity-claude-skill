This version of Unity is unsupported.



# [ParticleSystem.MainModule](ParticleSystem.MainModule.html).startLifetime




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







                    public [ParticleSystem.MinMaxCurve](ParticleSystem.MinMaxCurve.html) startLifetime;






### Description



The total lifetime in seconds that each new particle has.





This value is set on the particle when the Particle System creates it. Assign a value of float.PositiveInfinity to particles to prevent the Particle System from destroying them. This gives the particles an infinite lifespan.
Additional resources: [MinMaxCurve](ParticleSystem.MinMaxCurve.html).


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public float hSliderValue = 1.0F;    void Start()
    {
        ps = GetComponent<ParticleSystem>();
    }    void Update()
    {
        var main = ps.main;
        main.startLifetime = hSliderValue;
    }    void OnGUI()
    {
        hSliderValue = GUI.HorizontalSlider(new Rect(25, 45, 100, 30), hSliderValue, 0.0F, 5.0F);
    }
}
```


            
