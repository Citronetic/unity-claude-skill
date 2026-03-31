This version of Unity is unsupported.



# [EditorUserBuildSettings](EditorUserBuildSettings.html).SwitchActiveBuildTargetAsync




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

public static bool SwitchActiveBuildTargetAsync([BuildTargetGroup](BuildTargetGroup.html) targetGroup,
[BuildTarget](BuildTarget.html) target);






### Parameters



| Parameter | Description |
| --- | --- |
| targetGroup | Build target group. |
| target | Target build platform. |





### Returns



**bool**
        True if the build target was successfully switched, false otherwise (for example, if license checks fail, files are missing, or if the user has cancelled the operation via the UI).





### Description



Select a new build target to be active during the next Editor update.





Changes the active build target to the specified build target during the next Editor update.

All script files and assets affected by the current platform settings are recompiled or reimported on the next Editor update when you change the active build target. For information on how to immediately import assets, refer to [SwitchActiveBuildTarget](EditorUserBuildSettings.SwitchActiveBuildTarget.html).

If the given target is a standalone target, calling `SwitchActiveBuildTarget` also affects [EditorUserBuildSettings.selectedStandaloneTarget](EditorUserBuildSettings-selectedStandaloneTarget.html).

This method isn't available when running the Editor in [batch mode](../Manual/EditorCommandLineArguments.html). Changing the build target requires recompiling script code for the given target, which can't be done while script code is executing. This isn't a problem in the Editor, because the operation is deferred to the next Editor update. However, in batch mode the Editor stops after executing the designated script code, so deferring the operation isn't possible. To set the build target to use in batch mode, use the [buildtarget](../Manual/EditorCommandLineArguments.html) command-line argument.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Build;public class SwitchPlatformExample : IActiveBuildTargetChanged
{
    [MenuItem("Example/Switch Platform")]
    public static void PerformSwitch()
    {
        // Switch to Windows standalone build.
        EditorUserBuildSettings.SwitchActiveBuildTargetAsync(BuildTargetGroup.Standalone, BuildTarget.StandaloneWindows);
    }    public int callbackOrder { get { return 0; } }
    public void OnActiveBuildTargetChanged(BuildTarget previousTarget, BuildTarget newTarget)
    {
        Debug.Log("Active platform is now " + newTarget);
    }
}
```


            
