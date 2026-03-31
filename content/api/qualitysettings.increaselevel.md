This version of Unity is unsupported.



# [QualitySettings](QualitySettings.html).IncreaseLevel




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










## Declaration

public static void IncreaseLevel(bool applyExpensiveChanges = false);






### Parameters



| Parameter | Description |
| --- | --- |
| applyExpensiveChanges | Should expensive changes be applied (Anti-aliasing etc). |





### Description



Increase the current quality level.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        QualitySettings.IncreaseLevel(false);
    }
}
```





[IncreaseLevel](QualitySettings.IncreaseLevel.html) and [DecreaseLevel](QualitySettings.DecreaseLevel.html) functions only apply anti-aliasing if applyExpensiveChanges is true.

Additional resources: [DecreaseLevel](QualitySettings.DecreaseLevel.html), [Quality Settings](../Manual/class-QualitySettings.html).


            
