This version of Unity is unsupported.



# [ParticleSystem.InheritVelocityModule](ParticleSystem.InheritVelocityModule.html).curve




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







                    public [ParticleSystem.MinMaxCurve](ParticleSystem.MinMaxCurve.html) curve;






### Description



Curve to define how much of the emitter velocity the system applies during the lifetime of a particle.





Additional resources: [MinMaxCurve](ParticleSystem.MinMaxCurve.html).


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public bool isEnabled = true;
    public float hSliderValue = 5.0f;
    public ParticleSystemInheritVelocityMode inheritMode;    void Start()
    {
        ps = GetComponent<ParticleSystem>();        var main = ps.main;
        main.simulationSpace = ParticleSystemSimulationSpace.World; // rate over distance only works for world space simulations        // add a sphere so we can see our transform position as it moves
        var sphere = GameObject.CreatePrimitive(PrimitiveType.Sphere);
        sphere.transform.parent = ps.transform;
    }    void Update()
    {
        var inheritVelocity = ps.inheritVelocity;
        inheritVelocity.enabled = isEnabled;
        inheritVelocity.curve = hSliderValue;
        inheritVelocity.mode = inheritMode;        ps.transform.position = new Vector3(Mathf.Sin(Time.time * 2.0f) * 2.0f, 0.0f, 0.0f);
    }    void OnGUI()
    {
        isEnabled = GUI.Toggle(new Rect(25, 45, 100, 30), isEnabled, "Enabled");
        hSliderValue = GUI.HorizontalSlider(new Rect(25, 85, 100, 30), hSliderValue, 0.0f, 10.0f);
        inheritMode = (ParticleSystemInheritVelocityMode)GUI.SelectionGrid(new Rect(25, 125, 300, 30), (int)inheritMode, new GUIContent[] { new GUIContent("Initial"), new GUIContent("Current") }, 2);
    }
}
```


            
