This version of Unity is unsupported.



# [RenderSettings](RenderSettings.html).fogColor




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












                    public static [Color](Color.html) fogColor;






### Description



The color of the fog.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Example()
    {
        // Set the fog color to be blue
        RenderSettings.fogColor = Color.blue;        // And enable fog
        RenderSettings.fog = true;
    }
}
```


            
