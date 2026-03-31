This version of Unity is unsupported.



# [Material](Material.html).color




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







                    public [Color](Color.html) color;






### Description



The main color property of the Material.





By default, Unity considers a color with the property name name `"_Color"` to be the main color. Use the `[MainColor]` [ShaderLab Properties attribute](../Manual/SL-Properties.html) to make Unity consider a color with a different property name to be the main color.

This is the same as calling [GetColor](Material.GetColor.html) or [SetColor](Material.SetColor.html) with the property name of the main color as a parameter.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Fade the color from red to green
    // back and forth over the defined duration    Color colorStart = Color.red;
    Color colorEnd = Color.green;
    float duration = 1.0f;
    Renderer rend;    void Start()
    {
        rend = GetComponent<Renderer> ();
    }    void Update()
    {
        float lerp = Mathf.PingPong(Time.time, duration) / duration;
        rend.material.color = Color.Lerp(colorStart, colorEnd, lerp);
    }
}
```


            
