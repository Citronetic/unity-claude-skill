This version of Unity is unsupported.



# [SettingsProvider](SettingsProvider.html).OnGUI




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

public void OnGUI(string searchContext);






### Parameters



| Parameter | Description |
| --- | --- |
| searchContext | Search context for the Settings window. Used to show or hide relevant properties. |





### Description



Use this function to draw the UI based on IMGUI. This assumes you haven't added any children to the rootElement passed to the OnActivate function.


              


```
using UnityEditor;
using UnityEngine;
using UnityEngine.UIElements;class SimpleIMGUISettingsProvider : SettingsProvider
{
    SerializedObject m_Settings;
    const string k_MyCustomSettingsPath = "Assets/Editor/MyCustomSettings.asset";
    public SimpleIMGUISettingsProvider(string path, SettingsScope scope = SettingsScope.User)
        : base(path, scope) {}    public override void OnActivate(string searchContext, VisualElement rootElement)
    {
        // Called when the user clicks on the MyCustom element in the Settings window.
        m_Settings = new SerializedObject(AssetDatabase.LoadAssetAtPath<UnityEngine.Object>(k_MyCustomSettingsPath));
    }    public override void OnDeactivate()
    {
        // User selected another setting or closed the Settings window.
        m_Settings = null;
    }    public override void OnGUI(string searchContext)
    {
        // Use IMGUI to display UI:
        EditorGUILayout.PropertyField(m_Settings.FindProperty("m_Number"), new GUIContent("My Number"));
        EditorGUILayout.PropertyField(m_Settings.FindProperty("m_SomeString"), new GUIContent("Some string"));
        m_Settings.ApplyModifiedPropertiesWithoutUndo();
    }
}
```


            
