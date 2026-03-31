This version of Unity is unsupported.



# [SettingsProvider](SettingsProvider.html).label




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












                    public string label;






### Description



Gets or sets the display name of the SettingsProvider as it appears in the Settings window. If not set, the Settings window uses last token of [SettingsProvider.settingsPath](SettingsProvider-settingsPath.html) instead.


              


```
using UnityEditor;
using UnityEngine;
using UnityEngine.UIElements;class SettingsProviderExamples
{
    void CreateVariousSettingsProviders()
    {
        // New Project setting that appears in its own root section (MyOwnSection) and not grouped under all the core settings.
        var p = new SettingsProvider("MyOwnSection/MySettings", SettingsScope.Project);
        // here p.label == "MySettings"        // First parameter is a unique id used to place the Settings in the tree view.
        // If a label is specified, this becomes the display name of the SettingsProvider.
        var p2 = new SettingsProvider("MyOwnSection/MySettingsOfDoom", SettingsScope.Project)
        {
            label = "A more proper Settings Name"
        };        // Second parameter is the Scope of the SettingsProvider. It determines whether this SettingsProvider appears in the
        // Settings window (used for Project settings specified with SettingsScope.Project)
        // or if it appears in the Preferences window (when specified with SettingsScope.User)
        var p3 = new SettingsProvider("Preferences/Multi touch", SettingsScope.User);
    }
}
```


            
