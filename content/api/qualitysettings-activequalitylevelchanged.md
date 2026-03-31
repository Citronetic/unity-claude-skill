This version of Unity is unsupported.



# [QualitySettings](QualitySettings.html).activeQualityLevelChanged




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














### Parameters



| Parameter | Description |
| --- | --- |
| value | If the current Quality level is being changed this callback will be raised. |





### Description



Delegate that you can use to invoke custom code when Unity changes the current Quality Level.





Parameters are the previous Quality Level and the new Quality Level.


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        QualitySettings.activeQualityLevelChanged += QualitySettings_activeQualityLevelChanged;
    }    private void QualitySettings_activeQualityLevelChanged(int previousQuality, int currentQuality)
    {
        // Put the code that you want to execute everytime the Quality used is changed
        Debug.Log($"Quality Level has been changed from {QualitySettings.names[previousQuality]} to {QualitySettings.names[currentQuality]}");
    }    void OnDestroy()
    {
        QualitySettings.activeQualityLevelChanged -= QualitySettings_activeQualityLevelChanged;
    }
}
```


            
