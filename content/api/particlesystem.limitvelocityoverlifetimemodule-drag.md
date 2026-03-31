This version of Unity is unsupported.



# [ParticleSystem.LimitVelocityOverLifetimeModule](ParticleSystem.LimitVelocityOverLifetimeModule.html).drag




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







                    public [ParticleSystem.MinMaxCurve](ParticleSystem.MinMaxCurve.html) drag;






### Description



Controls the amount of drag that this modules applies to the particle velocities.





Additional resources: [ParticleSystem.LimitVelocityOverLifetimeModule.multiplyDragByParticleSize](ParticleSystem.LimitVelocityOverLifetimeModule-multiplyDragByParticleSize.html), [ParticleSystem.LimitVelocityOverLifetimeModule.multiplyDragByParticleVelocity](ParticleSystem.LimitVelocityOverLifetimeModule-multiplyDragByParticleVelocity.html).


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public float hSliderValueDrag = 1.0f;
    public bool hToggleUseSize = false;
    public bool hToggleUseVelocity = false;    void Start()
    {
        ps = GetComponent<ParticleSystem>();        var limitVelocityOverLifetime = ps.limitVelocityOverLifetime;
        limitVelocityOverLifetime.enabled = true;        var main = ps.main;
        main.startSize = new ParticleSystem.MinMaxCurve(0.1f, 1.5f);
        main.startSpeed = new ParticleSystem.MinMaxCurve(0.5f, 5.0f);
    }    void Update()
    {
        var limitVelocityOverLifetime = ps.limitVelocityOverLifetime;
        limitVelocityOverLifetime.drag = hSliderValueDrag;
        limitVelocityOverLifetime.multiplyDragByParticleSize = hToggleUseSize;
        limitVelocityOverLifetime.multiplyDragByParticleVelocity = hToggleUseVelocity;
    }    void OnGUI()
    {
        GUI.Label(new Rect(25, 40, 100, 30), "Drag");        hSliderValueDrag = GUI.HorizontalSlider(new Rect(135, 45, 100, 30), hSliderValueDrag, 0.0f, 3.0f);
        hToggleUseSize = GUI.Toggle(new Rect(25, 85, 200, 30), hToggleUseSize, "Multiply by Size");
        hToggleUseVelocity = GUI.Toggle(new Rect(25, 125, 200, 30), hToggleUseVelocity, "Multiply by Velocity");
    }
}
```


            
