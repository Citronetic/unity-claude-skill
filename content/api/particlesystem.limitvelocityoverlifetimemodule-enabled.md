This version of Unity is unsupported.



# [ParticleSystem.LimitVelocityOverLifetimeModule](ParticleSystem.LimitVelocityOverLifetimeModule.html).enabled




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







                    public bool enabled;






### Description



Specifies whether the LimitForceOverLifetimeModule is enabled or disabled.





Additional resources: ParticleSystem.limitForceOverLifetime.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public bool moduleEnabled = true;
    public float hSliderValueSpeed = 0.0f;
    public float hSliderValueDampen = 0.1f;    void Start()
    {
        ps = GetComponent<ParticleSystem>();
    }    void Update()
    {
        var limitVelocityOverLifetime = ps.limitVelocityOverLifetime;
        limitVelocityOverLifetime.enabled = moduleEnabled;
        limitVelocityOverLifetime.limitMultiplier = hSliderValueSpeed;
        limitVelocityOverLifetime.dampen = hSliderValueDampen;
    }    void OnGUI()
    {
        moduleEnabled = GUI.Toggle(new Rect(25, 45, 200, 30), moduleEnabled, "Enabled");        GUI.Label(new Rect(25, 80, 100, 30), "Speed Limit");
        GUI.Label(new Rect(25, 120, 100, 30), "Dampen");        hSliderValueSpeed = GUI.HorizontalSlider(new Rect(95, 85, 100, 30), hSliderValueSpeed, 0.0f, 2.0f);
        hSliderValueDampen = GUI.HorizontalSlider(new Rect(95, 125, 100, 30), hSliderValueDampen, 0.0f, 1.0f);
    }
}
```


            
