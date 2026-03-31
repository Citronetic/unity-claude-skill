This version of Unity is unsupported.



# [SettingsProvider](SettingsProvider.html).OnInspectorUpdate




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

public void OnInspectorUpdate();






### Description



OnInspectorUpdate is called at 10 frames per second to give the inspector a chance to update. See [EditorWindow.OnInspectorUpdate](EditorWindow.OnInspectorUpdate.html) for more details.


              


```
using UnityEditor;
public static class PresetManagerHelper
{
    [SettingsProvider]
    static SettingsProvider CreatePresetManagerProvider()
    {
        var provider = AssetSettingsProvider.CreateProviderFromAssetPath(
            "Project/Preset Manager", "ProjectSettings/PresetManager.asset");
        provider.inspectorUpdateHandler += () =>
        {
            // When PresetManager is updated from the inspector, check to see if we need to update the Preset Settings View.
            if (provider.settingsEditor != null &&
                provider.settingsEditor.serializedObject.UpdateIfRequiredOrScript())
            {
                provider.Repaint();
            }
        };
        return provider;
    }
}
```


            
