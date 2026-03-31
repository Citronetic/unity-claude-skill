This version of Unity is unsupported.



# [Material](Material.html).Lerp




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




                [Switch to Manual](../Manual/class-Material.html)










## Declaration

public void Lerp([Material](Material.html) start,
[Material](Material.html) end,
float t);






### Description



Interpolate properties between two materials.





Makes all color and float values of a material be interpolated from `start` to `end`,
based on `t`.

When `t` is 0, all values are taken from `start`.

When `t` is 1, all values are taken from `end`.

Most often you want the materials that are interpolated between to be the same
(use the same shaders and textures) except for colors and floats. Then you use
`Lerp` to blend between them.

Additional resources: [Materials](../Manual/Materials.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Blends between two materials    Material material1;
    Material material2;
    float duration = 2.0f;
    Renderer rend;    void Start()
    {
        rend = GetComponent<Renderer> ();        // At start, use the first material
        rend.material = material1;
    }    void Update()
    {
        // ping-pong between the materials over the duration
        float lerp = Mathf.PingPong(Time.time, duration) / duration;
        rend.material.Lerp(material1, material2, lerp);
    }
}
```


            
