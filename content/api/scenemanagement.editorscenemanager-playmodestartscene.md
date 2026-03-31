This version of Unity is unsupported.



# [EditorSceneManager](SceneManagement.EditorSceneManager.html).playModeStartScene




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












                    public static [SceneAsset](SceneAsset.html) playModeStartScene;






### Description



Loads this SceneAsset when you start Play Mode.





If this property is set to a SceneAsset, Unity will load this SceneAsset instead of the Scenes currently open in the Editor when you start Play Mode.


              


```
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;public class TestWindow : EditorWindow
{
    void OnGUI()
    {
        // Use the Object Picker to select the start SceneAsset
        EditorSceneManager.playModeStartScene = (SceneAsset)EditorGUILayout.ObjectField(new GUIContent("Start Scene"), EditorSceneManager.playModeStartScene, typeof(SceneAsset), false);        // Or set the start Scene from code
        var scenePath = "Assets/Scene3.unity";
        if (GUILayout.Button("Set start Scene: " + scenePath))
            SetPlayModeStartScene(scenePath);
    }    void SetPlayModeStartScene(string scenePath)
    {
        SceneAsset myWantedStartScene = AssetDatabase.LoadAssetAtPath<SceneAsset>(scenePath);
        if (myWantedStartScene != null)
            EditorSceneManager.playModeStartScene = myWantedStartScene;
        else
            Debug.Log("Could not find Scene " + scenePath);
    }    [MenuItem("Test/Open")]
    static void Open()
    {
        GetWindow<TestWindow>();
    }
}
```


            
