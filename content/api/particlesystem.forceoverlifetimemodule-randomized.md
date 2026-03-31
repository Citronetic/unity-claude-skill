This version of Unity is unsupported.



# [ParticleSystem.ForceOverLifetimeModule](ParticleSystem.ForceOverLifetimeModule.html).randomized




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







                    public bool randomized;






### Description



When randomly selecting values between two curves or constants, this flag causes the system to choose a new random force on each frame.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public bool randomized;
    public float hSliderValue = 30.0f;    void Start()
    {
        ps = GetComponent<ParticleSystem>();        var forceOverLifetime = ps.forceOverLifetime;
        forceOverLifetime.enabled = true;
    }    void Update()
    {
        var forceOverLifetime = ps.forceOverLifetime;
        forceOverLifetime.randomized = randomized;
        forceOverLifetime.x = new ParticleSystem.MinMaxCurve(-hSliderValue, hSliderValue);
        forceOverLifetime.y = new ParticleSystem.MinMaxCurve(-hSliderValue, hSliderValue);
        forceOverLifetime.z = new ParticleSystem.MinMaxCurve(-hSliderValue, hSliderValue);
    }    void OnGUI()
    {
        randomized = GUI.Toggle(new Rect(25, 45, 100, 30), randomized, "Randomized Per Frame");
        hSliderValue = GUI.HorizontalSlider(new Rect(25, 85, 100, 30), hSliderValue, 0.0f, 50.0f);
    }
}
```


            
