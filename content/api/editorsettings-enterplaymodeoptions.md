This version of Unity is unsupported.



# [EditorSettings](EditorSettings.html).enterPlayModeOptions




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












                    public static [EnterPlayModeOptions](EnterPlayModeOptions.html) enterPlayModeOptions;






### Description



Determines the state of the Enter Play Mode Options in the Unity Editor.





To learn more about the flags for the Enter Play Mode Options, refer to [EnterPlayModeOptions](EnterPlayModeOptions.html).


              


```
using UnityEngine;
using UnityEditor;// Adds a menu item to toggle a faster Play mode that disables
// both domain and scene reloads in the Editor.
static class FastEnterPlayModeExample
{
    // Adds a menu item to the Editor.
    [MenuItem("Tools/Toggle Fast Play mode")]
    public static void ToggleFastPlayMode()
    {
        // Check if Enter Play mode options are currently enabled.
        bool enabled = EditorSettings.enterPlayModeOptionsEnabled;        // Check if both DisableDomainReload and DisableSceneReload are set.
        bool fastPlayMode = enabled &&
            (EditorSettings.enterPlayModeOptions & EnterPlayModeOptions.DisableDomainReload) != 0 &&
            (EditorSettings.enterPlayModeOptions & EnterPlayModeOptions.DisableSceneReload) != 0;        if (!fastPlayMode)
        {
            // Enable Enter Play mode options.
            EditorSettings.enterPlayModeOptionsEnabled = true;            // Set both DisableDomainReload and DisableSceneReload flags.
            EditorSettings.enterPlayModeOptions =
                EnterPlayModeOptions.DisableDomainReload | EnterPlayModeOptions.DisableSceneReload;            // Print status to the Console.
            Debug.Log("Enabled Fast Play mode. Disabled both domain and scene Reloads.");
        }
        else
        {
            // Disable Enter Play mode options (restores default behavior)
            EditorSettings.enterPlayModeOptionsEnabled = false;
            EditorSettings.enterPlayModeOptions = EnterPlayModeOptions.None;            // Print status to the Console
            Debug.Log("Disabled Fast Play mode. Enabled domain and scene Reloads.");
        }
    }
}
```


            
