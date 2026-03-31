This version of Unity is unsupported.



# [WindZone](WindZone.html).windTurbulence




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




                [Switch to Manual](../Manual/class-WindZone.html)







                    public float windTurbulence;






### Description



The turbulence wind force.





Produces a rapidly changing wind pressure.


              


```
// Creates a wind zone to produce a softly changing general wind
// Just place this into an empty game object
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    void Start()
    {
        var wind = gameObject.AddComponent<WindZone>();
        wind.mode = WindZoneMode.Directional;
        wind.windMain = 0.70f;
        wind.windTurbulence = 0.1f;
        wind.windPulseMagnitude = 2.0f;
        wind.windPulseFrequency = 0.25f;
    }
}
```


            
