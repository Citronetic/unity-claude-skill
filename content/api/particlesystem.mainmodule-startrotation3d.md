This version of Unity is unsupported.



# [ParticleSystem.MainModule](ParticleSystem.MainModule.html).startRotation3D




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







                    public bool startRotation3D;






### Description



A flag to enable 3D particle rotation.





Additional resources: [MinMaxCurve](ParticleSystem.MinMaxCurve.html).


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public float hSliderValueX = 0.0F;
    public float hSliderValueY = 0.0F;
    public float hSliderValueZ = 0.0F;    void Start()
    {
        ps = GetComponent<ParticleSystem>();        var main = ps.main;
        main.startRotation3D = true;        var psr = GetComponent<ParticleSystemRenderer>();
        psr.material = new Material(Shader.Find("Sprites/Default"));    // this material renders a square billboard, so we can see the rotation
    }    void Update()
    {
        var main = ps.main;
        main.startRotationXMultiplier = hSliderValueX;
        main.startRotationYMultiplier = hSliderValueY;
        main.startRotationZMultiplier = hSliderValueZ;
    }    void OnGUI()
    {
        hSliderValueX = GUI.HorizontalSlider(new Rect(25, 45, 100, 30), hSliderValueX, 0.0F, 360.0F * Mathf.Deg2Rad);
        hSliderValueY = GUI.HorizontalSlider(new Rect(25, 75, 100, 30), hSliderValueY, 0.0F, 360.0F * Mathf.Deg2Rad);
        hSliderValueZ = GUI.HorizontalSlider(new Rect(25, 105, 100, 30), hSliderValueZ, 0.0F, 360.0F * Mathf.Deg2Rad);
    }
}
```


            
