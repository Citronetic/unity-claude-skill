This version of Unity is unsupported.



# [QualitySettings](QualitySettings.html).pixelLightCount




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




                [Switch to Manual](../Manual/class-QualitySettings.html)







                    public static int pixelLightCount;






### Description



The maximum number of pixel lights that should affect any object.





If there are more lights illuminating an object, the dimmest ones will be rendered
as vertex lights.

Use this from scripting if you want to have finer control than offered by quality settings
levels.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        // Use at most one pixel light for every object
        QualitySettings.pixelLightCount = 1;
    }
}
```





Additional resources: [Quality Settings](../Manual/class-QualitySettings.html).


            
