This version of Unity is unsupported.



# [ParticleSystem.LightsModule](ParticleSystem.LightsModule.html).useParticleColor




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







                    public bool useParticleColor;






### Description



Toggle whether the particle lights multiply their color by the particle color.





Remember to also set your light color to white, if you want the lights to have the exact same color as the particles.


              


```
using UnityEngine;
using System.Collections;// For best results, use Deferred Rendering (see Camera settings)
[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public Light lightPrefab;     // Provide a light Prefab in the inspector
    public float hSliderValueR = 1.0f;
    public float hSliderValueG = 1.0f;
    public float hSliderValueB = 1.0f;
    public float hSliderValueA = 1.0f;
    public bool useParticleColor = true;    void Start()
    {
        ps = GetComponent<ParticleSystem>();
        ps.transform.localRotation = Quaternion.Euler(0.0f, 0.0f, 45.0f);        var shape = ps.shape;
        shape.shapeType = ParticleSystemShapeType.Circle;        var lights = ps.lights;
        lights.enabled = true;
        lights.light = lightPrefab;
        lights.ratio = 1.0f;
        lights.maxLights = 1000;        // plane to receive lights
        var plane = GameObject.CreatePrimitive(PrimitiveType.Plane);
        plane.transform.parent = ps.transform;
        plane.transform.localPosition = new Vector3(0.0f, 0.0f, 3.0f);
        plane.transform.localScale = new Vector3(20.0f, 20.0f, 20.0f);
        plane.transform.localRotation = Quaternion.Euler(-90.0f, 0.0f, 0.0f);        var material = new Material(Shader.Find("Standard"));
        material.color = new Color(0.1f, 0.1f, 0.1f, 1.0f);
        plane.GetComponent<MeshRenderer>().material = material;
    }    void Update()
    {
        var lights = ps.lights;
        lights.useParticleColor = useParticleColor;        var main = ps.main;
        main.startColor = new Color(hSliderValueR, hSliderValueG, hSliderValueB, hSliderValueA);
    }    void OnGUI()
    {
        GUI.Label(new Rect(25, 40, 100, 30), "Red");
        GUI.Label(new Rect(25, 70, 100, 30), "Green");
        GUI.Label(new Rect(25, 100, 100, 30), "Blue");
        GUI.Label(new Rect(25, 130, 100, 30), "Alpha");        hSliderValueR = GUI.HorizontalSlider(new Rect(95, 45, 100, 30), hSliderValueR, 0.0f, 1.0f);
        hSliderValueG = GUI.HorizontalSlider(new Rect(95, 75, 100, 30), hSliderValueG, 0.0f, 1.0f);
        hSliderValueB = GUI.HorizontalSlider(new Rect(95, 105, 100, 30), hSliderValueB, 0.0f, 1.0f);
        hSliderValueA = GUI.HorizontalSlider(new Rect(95, 135, 100, 30), hSliderValueA, 0.0f, 1.0f);        useParticleColor = GUI.Toggle(new Rect(25, 175, 200, 30), useParticleColor, "Use Particle Color for Light Color");
    }
}
```


            
