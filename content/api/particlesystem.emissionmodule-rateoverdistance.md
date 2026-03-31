This version of Unity is unsupported.



# [ParticleSystem.EmissionModule](ParticleSystem.EmissionModule.html).rateOverDistance




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







                    public [ParticleSystem.MinMaxCurve](ParticleSystem.MinMaxCurve.html) rateOverDistance;






### Description



The rate at which the emitter spawns new particles over distance.





The emitter only spawns new particles when it moves. If the system's GameObject contains a Rigidbody or Rigidbody2D component, and the system's **Emitter Velocity** property is set to **Rigidbody**, Unity calculates the distance based on the velocity of the Rigidbody. Otherwise, Unity calculates the distance based on how far the GameObject's Transform component has moved since the last update.
Additional resources: [MinMaxCurve](ParticleSystem.MinMaxCurve.html), [ParticleSystem.EmissionModule.rateOverTime](ParticleSystem.EmissionModule-rateOverTime.html), [ParticleSystem.MainModule.emitterVelocityMode](ParticleSystem.MainModule-emitterVelocityMode.html).


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public float hSliderValue = 5.0f;    void Start()
    {
        ps = GetComponent<ParticleSystem>();        var main = ps.main;
        main.simulationSpace = ParticleSystemSimulationSpace.World;        var shape = ps.shape;
        shape.enabled = false;        var emission = ps.emission;
        emission.rateOverTime = 0.0f;        // add a sphere so we can see our transform position as it moves
        var sphere = GameObject.CreatePrimitive(PrimitiveType.Sphere);
        sphere.transform.parent = ps.transform;
    }    void Update()
    {
        var emission = ps.emission;
        emission.rateOverDistance = hSliderValue;        ps.transform.position = new Vector3(Mathf.Sin(Time.time) * 2.0f, 0.0f, 0.0f);
    }    void OnGUI()
    {
        hSliderValue = GUI.HorizontalSlider(new Rect(25, 45, 100, 30), hSliderValue, 1.0f, 20.0f);
    }
}
```


            
