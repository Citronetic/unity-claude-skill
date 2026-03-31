This version of Unity is unsupported.



# [ParticleSystem.NoiseModule](ParticleSystem.NoiseModule.html).rotationAmount




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







                    public [ParticleSystem.MinMaxCurve](ParticleSystem.MinMaxCurve.html) rotationAmount;






### Description



How much the noise affects the particle rotation, in degrees per second.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public float hSliderValuePositionAmount = 0.0f;
    public float hSliderValueRotationAmount = 90.0f;
    public float hSliderValueSizeAmount = 0.0f;    void Start()
    {
        ps = GetComponent<ParticleSystem>();        var noise = ps.noise;
        noise.enabled = true;        var psr = GetComponent<ParticleSystemRenderer>();
        psr.material = new Material(Shader.Find("Sprites/Default"));    // this material renders a square billboard, so we can see the rotation
    }    void Update()
    {
        var noise = ps.noise;
        noise.enabled = enabled;
        noise.positionAmount = hSliderValuePositionAmount;
        noise.rotationAmount = hSliderValueRotationAmount;
        noise.sizeAmount = hSliderValueSizeAmount;
    }    void OnGUI()
    {
        GUI.Label(new Rect(25, 80, 100, 30), "Position Amount");
        GUI.Label(new Rect(25, 120, 100, 30), "Rotation Amount");
        GUI.Label(new Rect(25, 160, 100, 30), "Size Amount");        hSliderValuePositionAmount = GUI.HorizontalSlider(new Rect(135, 85, 100, 30), hSliderValuePositionAmount, 0.0f, 5.0f);
        hSliderValueRotationAmount = GUI.HorizontalSlider(new Rect(135, 125, 100, 30), hSliderValueRotationAmount, 0.0f, 180.0f);
        hSliderValueSizeAmount = GUI.HorizontalSlider(new Rect(135, 165, 100, 30), hSliderValueSizeAmount, 0.0f, 1.0f);
    }
}
```


            
