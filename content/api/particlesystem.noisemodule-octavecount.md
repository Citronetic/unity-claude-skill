This version of Unity is unsupported.



# [ParticleSystem.NoiseModule](ParticleSystem.NoiseModule.html).octaveCount




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







                    public int octaveCount;






### Description



Layers of noise that combine to produce final noise.





Please note that adding octaves substantially decreases performance.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public float hSliderValueOctaves = 1.0f;
    public float hSliderValueOctaveMultiplier = 0.5f;
    public float hSliderValueOctaveScale = 2.0f;    void Start()
    {
        ps = GetComponent<ParticleSystem>();        var noise = ps.noise;
        noise.enabled = true;        // Set color by speed, to demonstrate the effects of the Noise Module
        var colorBySpeed = ps.colorBySpeed;
        colorBySpeed.enabled = true;        Gradient gradient = new Gradient();
        gradient.SetKeys(
            new GradientColorKey[] { new GradientColorKey(Color.green, 0.0f), new GradientColorKey(Color.red, 1.0f) },
            new GradientAlphaKey[] { new GradientAlphaKey(1.0f, 0.0f), new GradientAlphaKey(1.0f, 1.0f) }
        );        colorBySpeed.color = new ParticleSystem.MinMaxGradient(gradient);
        colorBySpeed.range = new Vector2(3.0f, 7.0f);
    }    void Update()
    {
        var noise = ps.noise;
        noise.octaveCount = (int)hSliderValueOctaves;
        noise.octaveMultiplier = hSliderValueOctaveMultiplier;
        noise.octaveScale = hSliderValueOctaveScale;
    }    void OnGUI()
    {
        GUI.Label(new Rect(25, 40, 100, 30), "Octave Count");
        GUI.Label(new Rect(25, 80, 100, 30), "Octave Multiplier");
        GUI.Label(new Rect(25, 120, 100, 30), "Octave Scale");        hSliderValueOctaves = GUI.HorizontalSlider(new Rect(135, 45, 100, 30), hSliderValueOctaves, 1.0f, 4.0f);
        hSliderValueOctaveMultiplier = GUI.HorizontalSlider(new Rect(135, 85, 100, 30), hSliderValueOctaveMultiplier, 0.0f, 1.0f);
        hSliderValueOctaveScale = GUI.HorizontalSlider(new Rect(135, 125, 100, 30), hSliderValueOctaveScale, 1.0f, 4.0f);
    }
}
```


            
