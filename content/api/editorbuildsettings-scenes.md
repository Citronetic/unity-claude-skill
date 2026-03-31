This version of Unity is unsupported.



# [EditorBuildSettings](EditorBuildSettings.html).scenes




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












                    public static EditorBuildSettingsScene[] scenes;






### Description



The list of scenes in the active platform profile or build profile to be included in the build.





When the active profile is a platform profile, this property reflects the global scenes. When the active profile is a build profile, if the build profile overrides the global scenes, it reflects the scenes specified in the build profile; otherwise, it reflects the global scenes.

Note: When calling [BuildPipeline.BuildPlayer](BuildPipeline.BuildPlayer.html) directly, [BuildPlayerOptions.scenes](BuildPlayerOptions-scenes.html) can be used instead of this property.

Additional resources: [Introduction to build profiles](../Manual/build-profiles.html), [EditorBuildSettings.globalScenes](EditorBuildSettings-globalScenes.html), [BuildProfile.overrideGlobalScenes](Build.Profile.BuildProfile-overrideGlobalScenes.html), [BuildProfile.scenes](Build.Profile.BuildProfile-scenes.html).


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;public class ExampleWindow : EditorWindow
{
    List<SceneAsset> m_SceneAssets = new List<SceneAsset>();    // Add menu item named "Example Window" to the Window menu
    [MenuItem("Window/Example Window")]
    public static void ShowWindow()
    {
        //Show existing window instance. If one doesn't exist, make one.
        EditorWindow.GetWindow(typeof(ExampleWindow));
    }    void OnGUI()
    {
        GUILayout.Label("Scenes to include in build:", EditorStyles.boldLabel);
        for (int i = 0; i < m_SceneAssets.Count; ++i)
        {
            m_SceneAssets[i] = (SceneAsset)EditorGUILayout.ObjectField(m_SceneAssets[i], typeof(SceneAsset), false);
        }
        if (GUILayout.Button("Add"))
        {
            m_SceneAssets.Add(null);
        }        GUILayout.Space(8);        if (GUILayout.Button("Apply To Build Settings"))
        {
            SetEditorBuildSettingsScenes();
        }
    }    public void SetEditorBuildSettingsScenes()
    {
        // Find valid Scene paths and make a list of EditorBuildSettingsScene
        List<EditorBuildSettingsScene> editorBuildSettingsScenes = new List<EditorBuildSettingsScene>();
        foreach (var sceneAsset in m_SceneAssets)
        {
            string scenePath = AssetDatabase.GetAssetPath(sceneAsset);
            if (!string.IsNullOrEmpty(scenePath))
                editorBuildSettingsScenes.Add(new EditorBuildSettingsScene(scenePath, true));
        }        // Set the active platform or build profile scene list
        EditorBuildSettings.scenes = editorBuildSettingsScenes.ToArray();
    }
}
```


            
