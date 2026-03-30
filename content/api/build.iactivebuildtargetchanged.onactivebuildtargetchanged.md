This version of Unity is unsupported.



# [IActiveBuildTargetChanged](Build.IActiveBuildTargetChanged.html).OnActiveBuildTargetChanged




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

public void OnActiveBuildTargetChanged([BuildTarget](BuildTarget.html) previousTarget,
[BuildTarget](BuildTarget.html) newTarget);






### Parameters



| Parameter | Description |
| --- | --- |
| previousTarget | The build target before the change. |
| newTarget | The new active build target. |





### Description



This function is called automatically when the active build platform has changed.





Additional resources: [SwitchActiveBuildTarget](EditorUserBuildSettings.SwitchActiveBuildTarget.html).


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Build;public class ActiveBuildTargetListener : IActiveBuildTargetChanged
{
    public int callbackOrder { get { return 0; } }
    public void OnActiveBuildTargetChanged(BuildTarget previousTarget, BuildTarget newTarget)
    {
        Debug.Log("Switched build target to " + newTarget);
    }
}
```


            
