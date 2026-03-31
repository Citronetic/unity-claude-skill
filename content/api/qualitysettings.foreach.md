This version of Unity is unsupported.



# [QualitySettings](QualitySettings.html).ForEach




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

public static void ForEach([Unity.Android.Gradle.Manifest.Action](Unity.Android.Gradle.Manifest.Action.html) callback);






## Declaration

public static void ForEach(Action<int,string> callback);






### Parameters



| Parameter | Description |
| --- | --- |
| callback | The callback to execute for each level. |





### Description



Executes the given [Action](Unity.Android.Gradle.Manifest.Action.html) for each Quality Level configured in [QualitySettings](QualitySettings.html).





This method iterates through the configured quality levels and invokes the callback for every one. When this method returns, the original quality level is restored.

The following example adds a helper menu item that sets the Vsync Count setting on every quality level to "Don't Sync".


              


```
using UnityEngine;
using UnityEditor;public class ForEachQualityLevelExample
{
    [MenuItem("Tools/Disable Vsync for All Quality Levels")]
    static void DisableVsync()
    {
        QualitySettings.ForEach(() =>
        {
            QualitySettings.vSyncCount = 0;
        });
    }
}
```


            
