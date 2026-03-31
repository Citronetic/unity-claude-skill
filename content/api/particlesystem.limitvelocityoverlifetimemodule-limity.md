This version of Unity is unsupported.



# [ParticleSystem.LimitVelocityOverLifetimeModule](ParticleSystem.LimitVelocityOverLifetimeModule.html).limitY




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







                    public [ParticleSystem.MinMaxCurve](ParticleSystem.MinMaxCurve.html) limitY;






### Description



Maximum velocity curve for the y-axis.





Additional resources: [MinMaxCurve](ParticleSystem.MinMaxCurve.html).


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public float hSliderValueSpeedX = 0.0f;
    public float hSliderValueSpeedY = 0.0f;
    public float hSliderValueSpeedZ = 0.0f;
    public float hSliderValueDampen = 0.1f;    void Start()
    {
        ps = GetComponent<ParticleSystem>();        var limitVelocityOverLifetime = ps.limitVelocityOverLifetime;
        limitVelocityOverLifetime.enabled = true;
        limitVelocityOverLifetime.separateAxes = true;
    }    void Update()
    {
        var limitVelocityOverLifetime = ps.limitVelocityOverLifetime;
        limitVelocityOverLifetime.limitX = hSliderValueSpeedX;
        limitVelocityOverLifetime.limitY = hSliderValueSpeedY;
        limitVelocityOverLifetime.limitZ = hSliderValueSpeedZ;
        limitVelocityOverLifetime.dampen = hSliderValueDampen;
    }    void OnGUI()
    {
        GUI.Label(new Rect(25, 40, 100, 30), "Speed Limit X");
        GUI.Label(new Rect(25, 80, 100, 30), "Speed Limit Y");
        GUI.Label(new Rect(25, 120, 100, 30), "Speed Limit Z");
        GUI.Label(new Rect(25, 160, 100, 30), "Dampen");        hSliderValueSpeedX = GUI.HorizontalSlider(new Rect(135, 45, 100, 30), hSliderValueSpeedX, 0.0f, 2.0f);
        hSliderValueSpeedY = GUI.HorizontalSlider(new Rect(135, 85, 100, 30), hSliderValueSpeedY, 0.0f, 2.0f);
        hSliderValueSpeedZ = GUI.HorizontalSlider(new Rect(135, 125, 100, 30), hSliderValueSpeedZ, 0.0f, 2.0f);
        hSliderValueDampen = GUI.HorizontalSlider(new Rect(135, 165, 100, 30), hSliderValueDampen, 0.0f, 1.0f);
    }
}
```


            
