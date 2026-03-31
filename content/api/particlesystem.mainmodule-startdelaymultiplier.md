This version of Unity is unsupported.



# [ParticleSystem.MainModule](ParticleSystem.MainModule.html).startDelayMultiplier




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







                    public float startDelayMultiplier;






### Description



A multiplier for [ParticleSystem.MainModule.startDelay](ParticleSystem.MainModule-startDelay.html) in seconds.





Changing this property is more efficient than accessing the entire curve, if you only want to change the overall start delay multiplier.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    private bool restart;
    public float hSliderValue = 0.0F;    void Start()
    {
        ps = GetComponent<ParticleSystem>();
    }    void Update()
    {
        if (restart)
        {
            ps.Stop();
            ps.Clear();            var main = ps.main;
            main.startDelayMultiplier = hSliderValue;            ps.Play();            restart = false;
        }
    }    void OnGUI()
    {
        hSliderValue = GUI.HorizontalSlider(new Rect(25, 45, 100, 30), hSliderValue, 0.0F, 5.0F);
        restart = GUI.Button(new Rect(25, 75, 100, 30), "Restart");
    }
}
```


            
