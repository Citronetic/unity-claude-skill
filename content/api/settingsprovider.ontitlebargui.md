This version of Unity is unsupported.



# [SettingsProvider](SettingsProvider.html).OnTitleBarGUI




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

public void OnTitleBarGUI();






### Description



Use this function to override drawing the title for the SettingsProvider using IMGUI. This allows you to add custom UI (such as a toolbar button) next to the title. [AssetSettingsProvider](AssetSettingsProvider.html) uses this mecanism to display the "add to preset" and the "help" buttons.


              


```
using UnityEditor;
using UnityEngine;
using UnityEngine.UIElements;
using EditorStyles = UnityEditor.EditorStyles;class SimpleIMGUISettingsProvider : SettingsProvider
{
    SerializedObject m_Settings;
    const string k_MyCustomSettingsPath = "Assets/Editor/MyCustomSettings.asset";
    public SimpleIMGUISettingsProvider(string path, SettingsScope scope = SettingsScope.User)
        : base(path, scope) {}    public override void OnGUI(string searchContext)
    {
        // Use IMGUI to display UI:
        EditorGUILayout.PropertyField(m_Settings.FindProperty("m_Number"), new GUIContent("My Number"));
        EditorGUILayout.PropertyField(m_Settings.FindProperty("m_SomeString"), new GUIContent("Some string"));
        m_Settings.ApplyModifiedPropertiesWithoutUndo();
    }    public override void OnTitleBarGUI()
    {
        // This button appears right after the Title of the currently selected SettingsProvider:
        if (GUILayout.Button("Help!", EditorStyles.miniButton))
        {
            Debug.Log("You are on your own.");
        }
    }
}
```


            
