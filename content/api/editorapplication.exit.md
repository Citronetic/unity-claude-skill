This version of Unity is unsupported.



# [EditorApplication](EditorApplication.html).Exit




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

public static void Exit(int returnValue);






### Description



Exit the Unity editor application.





Calling this function will exit right away, without asking to save changes, so you may lose data!
This function is mostly useful for exiting out of a commandline process with a specific error.

Additional resources: [Unity command line arguments](../Manual/CommandLineArguments.html).


              


```
// Simple script that lets you create a new
// Scene, create a cube and an empty game object in the Scene
// Save the Scene and close the editorusing UnityEditor;
using UnityEditor.SceneManagement;public class ExampleClass
{
    [MenuItem("Examples/Chain Actions and close")]
    static void EditorPlaying()
    {
        var newScene = EditorSceneManager.NewScene(NewSceneSetup.EmptyScene, NewSceneMode.Single);        EditorApplication.ExecuteMenuItem("GameObject/3D Object/Cube");
        EditorApplication.ExecuteMenuItem("GameObject/Create Empty");        EditorSceneManager.SaveScene(newScene, "Assets/MyNewScene.unity");
        EditorApplication.Exit(0);
    }
}
```


            
