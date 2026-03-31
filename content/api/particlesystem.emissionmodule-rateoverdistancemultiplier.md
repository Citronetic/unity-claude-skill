This version of Unity is unsupported.



# [ParticleSystem.EmissionModule](ParticleSystem.EmissionModule.html).rateOverDistanceMultiplier




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







                    public float rateOverDistanceMultiplier;






### Description



Change the rate over distance multiplier.





This is more efficient than accessing the whole curve, if you only want to change the overall rate multiplier.


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
        emission.rateOverDistanceMultiplier = hSliderValue;        ps.transform.position = new Vector3(Mathf.Sin(Time.time) * 2.0f, 0.0f, 0.0f);
    }    void OnGUI()
    {
        hSliderValue = GUI.HorizontalSlider(new Rect(25, 45, 100, 30), hSliderValue, 1.0f, 20.0f);
    }
}
```


            
