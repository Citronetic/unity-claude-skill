This version of Unity is unsupported.



# [ParticleSystem.NoiseModule](ParticleSystem.NoiseModule.html).separateAxes




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







                    public bool separateAxes;






### Description



Control the noise separately for each axis.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public float hSliderValueStrengthX = 1.0f;
    public float hSliderValueStrengthY = 1.0f;
    public float hSliderValueStrengthZ = 1.0f;    void Start()
    {
        ps = GetComponent<ParticleSystem>();        var noise = ps.noise;
        noise.enabled = true;
        noise.separateAxes = true;        // Set color by speed, to demonstrate the effects of the Noise Module
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
        noise.strengthXMultiplier = hSliderValueStrengthX;
        noise.strengthYMultiplier = hSliderValueStrengthY;
        noise.strengthZMultiplier = hSliderValueStrengthZ;
    }    void OnGUI()
    {
        GUI.Label(new Rect(25, 40, 100, 30), "Strength X");
        GUI.Label(new Rect(25, 80, 100, 30), "Strength Y");
        GUI.Label(new Rect(25, 120, 100, 30), "Strength Z");        hSliderValueStrengthX = GUI.HorizontalSlider(new Rect(135, 45, 100, 30), hSliderValueStrengthX, 0.0f, 5.0f);
        hSliderValueStrengthY = GUI.HorizontalSlider(new Rect(135, 85, 100, 30), hSliderValueStrengthY, 0.0f, 5.0f);
        hSliderValueStrengthZ = GUI.HorizontalSlider(new Rect(135, 125, 100, 30), hSliderValueStrengthZ, 0.0f, 5.0f);
    }
}
```


            
