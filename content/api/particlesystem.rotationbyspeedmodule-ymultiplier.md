This version of Unity is unsupported.



# [ParticleSystem.RotationBySpeedModule](ParticleSystem.RotationBySpeedModule.html).yMultiplier




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







                    public float yMultiplier;






### Description



Speed multiplier along the y-axis.





Changing this property is more efficient than accessing the entire curve, if you only want to change the overall speed multiplier.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public float hSliderValue = 1.0f;    void Start()
    {
        ps = GetComponent<ParticleSystem>();        var rotationBySpeed = ps.rotationBySpeed;
        rotationBySpeed.enabled = true;
        rotationBySpeed.separateAxes = true;        rotationBySpeed.xMultiplier = 0.0f;
        rotationBySpeed.yMultiplier = 1.0f;
        rotationBySpeed.zMultiplier = 0.0f;
        rotationBySpeed.range = new Vector2(1.0f, 5.0f);        var psr = GetComponent<ParticleSystemRenderer>();
        psr.material = new Material(Shader.Find("Sprites/Default"));    // this material renders a square billboard, so we can see the rotation
    }    void Update()
    {
        var main = ps.main;
        main.startSpeed = hSliderValue;
    }    void OnGUI()
    {
        hSliderValue = GUI.HorizontalSlider(new Rect(25, 45, 100, 30), hSliderValue, 1.0f, 5.0f);
    }
}
```


            
