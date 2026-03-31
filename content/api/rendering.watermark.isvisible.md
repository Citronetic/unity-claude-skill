This version of Unity is unsupported.



# [Watermark](Rendering.Watermark.html).IsVisible




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















## Declaration

public static bool IsVisible();






### Returns



**bool**
        True, if the watermark is visible.





### Description



Returns `true` if the watermark is visible on-screen. Whether the watermark is visible depends on your build settings and Unity plan.





The following code sample checks if the watermark is visible.


              


```
using System.Collections;
using UnityEngine;
using UnityEngine.Rendering;public class WatermarkExample : MonoBehaviour
{
    void Start()
    {
        if(Watermark.IsVisible())
        {
            Debug.Log("Watermark is visible in current setup");
        }
    }
}
```


            
