This version of Unity is unsupported.



# [Light](Light.html).spotAngle




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







                    public float spotAngle;






### Description



The angle of the spot light's cone in degrees.





This is used primarily for [LightType.Spot](LightType.Spot.html) lights and has no effect for [LightType.Point](LightType.Point.html) lights
Additional resources: [Light component](../Manual/class-Light.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Change spot angle randomly between 'minAngle' and 'maxAngle'
    // each 'interval' seconds.    float interval = 0.3f;
    float minAngle = 10;
    float maxAngle = 90;
    float timeLeft;    Light lt;
    void Start()
    {
        lt = GetComponent<Light>();
        lt.type = LightType.Spot;        timeLeft = interval;
    }    void Update()
    {
        timeLeft -= Time.deltaTime;        if (timeLeft < 0.0)
        {
            // time to change!
            timeLeft = interval;
            lt.spotAngle = Random.Range(minAngle, maxAngle);
        }
    }
}
```


            
