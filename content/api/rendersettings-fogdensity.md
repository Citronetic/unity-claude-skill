This version of Unity is unsupported.



# [RenderSettings](RenderSettings.html).fogDensity




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












                    public static float fogDensity;






### Description



The density of the exponential fog.





Fog density is used by [FogMode.Exponential](FogMode.Exponential.html) and [FogMode.ExponentialSquared](FogMode.ExponentialSquared.html)
modes.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Example()
    {
        // Set the fog density
        RenderSettings.fogDensity = 0.1f;        // And enable fog
        RenderSettings.fog = true;
    }
}
```





Additional resources: [RenderSettings.fogMode](RenderSettings-fogMode.html).


            
