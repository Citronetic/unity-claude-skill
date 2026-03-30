This version of Unity is unsupported.



# [Preset](Presets.Preset.html).GetAllDefaultTypes




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

public static PresetType[] GetAllDefaultTypes();






### Description



Returns all the [PresetType](Presets.PresetType.html) that have at least one [DefaultPreset](Presets.DefaultPreset.html) entry in the default Presets list.





Use this method to gather all existing [DefaultPreset](Presets.DefaultPreset.html) and all [Preset](Presets.Preset.html) used as default in a project.


              


```
using UnityEditor;
using UnityEditor.Presets;
using UnityEngine;public static class PresetExample
{
    [MenuItem("Presets Example/Log All Default Preset")]
    public static void LogDefaultPreset()
    {
        var defaultTypes = Preset.GetAllDefaultTypes();
        foreach (var defaultType in defaultTypes)
        {
            var defaults = Preset.GetDefaultPresetsForType(defaultType);
            foreach (var defaultPreset in defaults)
            {
                Debug.Log($"Default - Filter:{defaultPreset.filter}, Enabled:{defaultPreset.enabled}, Name:{defaultPreset.preset.name}", defaultPreset.preset);
            }
        }
    }
}
```


            
