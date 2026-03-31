This version of Unity is unsupported.



# [RenderSettings](RenderSettings.html).ambientLight




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












                    public static [Color](Color.html) ambientLight;






### Description



Flat ambient lighting color.





Flat ambient lighting mode uses color. It has the same value as [ambientSkyColor](RenderSettings-ambientSkyColor.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void  Start()
    {
        // Make the ambient lighting red
        RenderSettings.ambientLight = Color.red;
    }
}
```





Additional resources: [ambientMode](RenderSettings-ambientMode.html), [The Lighting window](../Manual/lighting-window.html).


            
