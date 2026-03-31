This version of Unity is unsupported.



# [Color](Color.html).linear




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












                    public [Color](Color.html) linear;






### Description



A color value in linear space converted from an sRGB value.





Colors are often expressed in sRGB [color space](../Manual/differences-linear-gamma-color-space.html). This property returns a color value in linear color space.
Unity applies an inverse sRGB gamma curve transformation to get the value.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        Color newColor = new Color(0.3f, 0.4f, 0.6f);
        print(newColor.linear);
    }
}
```


            
