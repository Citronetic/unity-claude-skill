This version of Unity is unsupported.



# [Light](Light.html).color




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







                    public [Color](Color.html) color;






### Description



Specifies the color emitted by the light.





To modify the light intensity you change the light's color luminance.
Lights always add illumination, so a light with a black color is the same as no light at all.

For more information, refer to [Light component](../Manual/class-Light.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    Light lt;    void Start()
    {
        lt = GetComponent<Light>();
    }    // Darken the light completely over a period of 2 seconds.
    void Update()
    {
        lt.color -= (Color.white / 2.0f) * Time.deltaTime;
    }
}
```





Another example:


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Interpolate light color between two colors back and forth
    float duration = 1.0f;
    Color color0 = Color.red;
    Color color1 = Color.blue;    Light lt;    void Start()
    {
        lt = GetComponent<Light>();
    }    void Update()
    {
        // set light color
        float t = Mathf.PingPong(Time.time, duration) / duration;
        lt.color = Color.Lerp(color0, color1, t);
    }
}
```


            
