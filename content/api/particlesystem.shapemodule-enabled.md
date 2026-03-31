This version of Unity is unsupported.



# [ParticleSystem.ShapeModule](ParticleSystem.ShapeModule.html).enabled




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







                    public bool enabled;






### Description



Specifies whether the ShapeModule is enabled or disabled.





Additional resources: [ParticleSystem.shape](ParticleSystem-shape.html).


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public bool moduleEnabled = true;    void Start()
    {
        ps = GetComponent<ParticleSystem>();
    }    void Update()
    {
        var shape = ps.shape;
        shape.enabled = moduleEnabled;
    }    void OnGUI()
    {
        moduleEnabled = GUI.Toggle(new Rect(25, 25, 200, 30), moduleEnabled, "Enabled");
    }
}
```


            
