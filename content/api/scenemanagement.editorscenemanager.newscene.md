This version of Unity is unsupported.



# [EditorSceneManager](SceneManagement.EditorSceneManager.html).NewScene




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

public static [SceneManagement.Scene](SceneManagement.Scene.html) NewScene([SceneManagement.NewSceneSetup](SceneManagement.NewSceneSetup.html) setup,
[SceneManagement.NewSceneMode](SceneManagement.NewSceneMode.html) mode = NewSceneMode.Single);






### Parameters



| Parameter | Description |
| --- | --- |
| setup | Whether the new Scene should use the default set of GameObjects. |
| mode | Whether to keep existing Scenes open. |





### Returns



**Scene**
        A reference to the new Scene.





### Description



Create a new Scene.





The setup parameter allows you to select whether or not the default set of GameObjects should be added to the new Scene. See [NewSceneSetup](SceneManagement.NewSceneSetup.html) for more information about the options.

The mode parameter allows you to select how to open the new Scene, and whether to keep existing Scenes in the Hierarchy. See [NewSceneMode](SceneManagement.NewSceneMode.html) for more information about the options.


              


```
using UnityEditor;
using UnityEditor.SceneManagement;public class ExampleClass
{
    public void Example()
    {
        var newScene = EditorSceneManager.NewScene(NewSceneSetup.EmptyScene, NewSceneMode.Additive);
    }
}
```


            
