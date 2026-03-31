This version of Unity is unsupported.



# [QualitySettings](QualitySettings.html).SetQualityLevel




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

public static void SetQualityLevel(int index,
bool applyExpensiveChanges = true);






### Parameters



| Parameter | Description |
| --- | --- |
| index | Quality index to set. |
| applyExpensiveChanges | Should expensive changes be applied (Anti-aliasing etc). |





### Description



Sets a new graphics quality level.





The list of quality levels can be found by going to **Edit** > **Project Settings** > **Quality**. You can add, remove or edit these.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void OnGUI()
    {
        string[] names = QualitySettings.names;
        GUILayout.BeginVertical();
        for (int i = 0; i < names.Length; i++)
        {
            if (GUILayout.Button(names[i]))
            {
                QualitySettings.SetQualityLevel(i, true);
            }
        }
        GUILayout.EndVertical();
    }
}
```





Note that changing the quality level can be an expensive operation if the new level
has different anti-aliasing setting. It's fine to change the level when applying in-game
quality options, but if you want to dynamically adjust quality level at runtime, pass
false to applyExpensiveChanges so that expensive changes are not always applied.

When building a player quality levels that are not used for that platform are stripped.
You should not expect a given quality setting to be at a given index. It's best to query
the available quality settings and use the returned index.

Additional resources: [GetQualityLevel](QualitySettings.GetQualityLevel.html).


            
