This version of Unity is unsupported.



# [ParticleSystem.ExternalForcesModule](ParticleSystem.ExternalForcesModule.html).enabled




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



Specifies whether the ExternalForcesModule is enabled or disabled.





Additional resources: [ParticleSystem.externalForces](ParticleSystem-externalForces.html).


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public bool moduleEnabled = true;
    public float hSliderValue = 10.0f;    void Start()
    {
        ps = GetComponent<ParticleSystem>();        GameObject wind = new GameObject("Wind", typeof(WindZone));
        wind.transform.parent = ps.transform;
        wind.transform.localPosition = new Vector3(-4.0f, 0.0f, 0.0f);
        wind.GetComponent<WindZone>().mode = WindZoneMode.Spherical;
    }    void Update()
    {
        var externalForces = ps.externalForces;
        externalForces.enabled = moduleEnabled;
        externalForces.multiplier = hSliderValue;
    }    void OnGUI()
    {
        moduleEnabled = GUI.Toggle(new Rect(25, 45, 100, 30), moduleEnabled, "Enabled");
        hSliderValue = GUI.HorizontalSlider(new Rect(25, 85, 100, 30), hSliderValue, 0.0f, 100.0f);
    }
}
```


            
