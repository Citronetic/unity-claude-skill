This version of Unity is unsupported.



# [ParticleSystem.MainModule](ParticleSystem.MainModule.html).useUnscaledTime




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







                    public bool useUnscaledTime;






### Description



When true, use the unscaled delta time to simulate the Particle System. Otherwise, use the scaled delta time.





This is useful for playing effects whilst the game is paused and [[Time.timeScale] is set to zero.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public float hSliderValue = 1.0f;
    public bool useUnscaledTime = false;    void Start()
    {
        ps = GetComponent<ParticleSystem>();
    }    void Update()
    {
        var main = ps.main;
        main.useUnscaledTime = useUnscaledTime;        Time.timeScale = hSliderValue;
    }    void OnGUI()
    {
        GUI.Label(new Rect(25, 40, 100, 30), "Time Scale");
        hSliderValue = GUI.HorizontalSlider(new Rect(105, 45, 100, 30), hSliderValue, 0.0F, 10.0F);
        useUnscaledTime = GUI.Toggle(new Rect(25, 75, 100, 30), useUnscaledTime, "Use Unscaled Time");
    }
}
```


            
