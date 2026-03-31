This version of Unity is unsupported.



# [ParticleSystem.MainModule](ParticleSystem.MainModule.html).prewarm




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







                    public bool prewarm;






### Description



If [ParticleSystem.MainModule.loop](ParticleSystem.MainModule-loop.html) is true, when you enable this property, the Particle System looks like it has already simulated for one loop when first becoming visible.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public bool usePrewarm;    void Start()
    {
        ps = GetComponent<ParticleSystem>();        var main = ps.main;
        main.loop = true;   // prewarm only works on looping systems        Restart();
    }    void OnGUI()
    {
        bool newPrewarm = GUI.Toggle(new Rect(10, 60, 200, 30), usePrewarm, "Use Prewarm");        if (newPrewarm != usePrewarm)
        {
            usePrewarm = newPrewarm;
            Restart();
        }
    }    void Restart()
    {
        ps.Stop();
        ps.Clear();        var main = ps.main;
        main.prewarm = usePrewarm;        ps.Play();
    }
}
```


            
