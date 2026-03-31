This version of Unity is unsupported.



# [WindZone](WindZone.html).windMain




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







                    public float windMain;






### Description



The primary wind force.





It produces a softly changing wind Pressure.


              


```
// Creates a wind zone with the effect of a helicopter passing by
// Just place this into an empty game object and move it over a tree
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    void Start()
    {
        var wind = gameObject.AddComponent<WindZone>();
        wind.mode = WindZoneMode.Spherical;
        wind.radius = 10.0f;
        wind.windMain = 3.0f;
        wind.windTurbulence = 0.5f;
        wind.windPulseMagnitude = 2.0f;
        wind.windPulseFrequency = 0.01f;
    }
}
```


            
