This version of Unity is unsupported.



# [Light](Light.html).range




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




                [Switch to Manual](../Manual/class-Light.html)







                    public float range;






### Description



The maximum distance that light travels from a point of emission. This property does not apply to directional lights.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Pulse light's range between original range
    // and half of the original one    float duration  = 3.0f;
    float originalRange;    Light lightComponent;    void Start()
    {
        lightComponent = GetComponent<Light>();
        originalRange = lightComponent.range;
    }    void Update()
    {
        // Animate between 0 and duration.
        var amplitude = Mathf.PingPong(Time.time, duration);        // Map from 0..duration to 0.5..1 range.
        amplitude = amplitude / duration * 0.5f + 0.5f;        // Set light range.
        lightComponent.range = originalRange * amplitude;
    }
}
```





If the light is an area light, then it has an infinite number of points of emission on it. If the light is not an area light, then the light's position is the single point of emission.


            
