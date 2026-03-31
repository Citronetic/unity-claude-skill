This version of Unity is unsupported.



# [EditorSceneManager](SceneManagement.EditorSceneManager.html).sceneManagerSetupRestored




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



















### Description



This can be useful to get notified when the SceneManager's scenes are replaced with a set of new scenes from calls to [RestoreSceneManagerSetup](SceneManagement.EditorSceneManager.RestoreSceneManagerSetup.html).

Use the `scenes` argument to check what scenes has just been opened.

Additional resources: [SceneManagerSetupRestoredCallback](SceneManagement.EditorSceneManager.SceneManagerSetupRestoredCallback.html).


              


```
using UnityEditor;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEditor.SceneManagement;[InitializeOnLoad]
class CheckRestoredScenes
{
    static CheckRestoredScenes()
    {
        EditorSceneManager.sceneManagerSetupRestored += OnSceneManagerSetupRestored;
    }    static void OnSceneManagerSetupRestored(Scene[] scenes)
    {
        Debug.Log("OnSceneManagerSetupRestored: restored " + scenes.Length);
    }
}
```


            
