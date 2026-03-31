This version of Unity is unsupported.



# [PlayerSettings.Android](PlayerSettings.Android.html).applicationEntry




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




                [Switch to Manual](../Manual/class-PlayerSettings.html)







                    public static [AndroidApplicationEntry](AndroidApplicationEntry.html) applicationEntry;






### Description



Application entry classes to include.

**Note:** You can specify multiple application entries for development purposes, this will cause two application icons to appear on Android device. You should always specify a **single entry** when publishing your app to a store.





Additional resources: [AndroidApplicationEntry](AndroidApplicationEntry.html).


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Build;
using UnityEditor.Build.Reporting;class MyCustomBuildProcessor : IPreprocessBuildWithReport
{
    public int callbackOrder => 0;    public void OnPreprocessBuild(BuildReport report)
    {
        PlayerSettings.Android.applicationEntry = AndroidApplicationEntry.Activity | AndroidApplicationEntry.GameActivity;
    }
}
```


            
