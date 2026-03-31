This version of Unity is unsupported.



# [ParticleSystem.VelocityOverLifetimeModule](ParticleSystem.VelocityOverLifetimeModule.html).speedModifier




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







                    public [ParticleSystem.MinMaxCurve](ParticleSystem.MinMaxCurve.html) speedModifier;






### Description



Curve to control particle speed based on lifetime, without affecting the direction of the particles.





Additional resources: [MinMaxCurve](ParticleSystem.MinMaxCurve.html).


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public float hSliderValueSpeed = 1.0f;    void Start()
    {
        ps = GetComponent<ParticleSystem>();        var velocityOverLifetime = ps.velocityOverLifetime;
        velocityOverLifetime.enabled = true;
        velocityOverLifetime.space = ParticleSystemSimulationSpace.World;        AnimationCurve curve = new AnimationCurve();
        curve.AddKey(0.0f, 0.0f);
        curve.AddKey(1.0f, 1.0f);        ParticleSystem.MinMaxCurve minMaxCurve = new ParticleSystem.MinMaxCurve(1.0f, curve);        velocityOverLifetime.speedModifier = minMaxCurve;
    }    void Update()
    {
        var velocityOverLifetime = ps.velocityOverLifetime;
        velocityOverLifetime.speedModifierMultiplier = hSliderValueSpeed;
    }    void OnGUI()
    {
        GUI.Label(new Rect(25, 40, 100, 30), "Speed");        hSliderValueSpeed = GUI.HorizontalSlider(new Rect(55, 45, 100, 30), hSliderValueSpeed, -50.0f, 50.0f);
    }
}
```


            
